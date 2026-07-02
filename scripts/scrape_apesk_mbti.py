#!/usr/bin/env python3
"""Scrape publicly reachable APESK MBTI pages into raw and structured files."""

from __future__ import annotations

import csv
import html
import json
import re
import sys
from dataclasses import dataclass, field
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from typing import Iterable
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "scraped"

DATI_URL = "https://www.apesk.com/mbti/dati.asp"
CHOICE_URL = "https://www.apesk.com/ai/choice2.html"
MAIN_URL = "https://www.apesk.com/p/main0519.asp"

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
)


def normalize_text(text: str) -> str:
    text = html.unescape(text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def fetch(url: str, encoding: str | None = None) -> tuple[str, bytes]:
    req = Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urlopen(req, timeout=30) as resp:
            raw = resp.read()
            content_type = resp.headers.get("Content-Type", "")
    except (HTTPError, URLError) as exc:
        raise RuntimeError(f"failed to fetch {url}: {exc}") from exc

    detected = encoding
    if detected is None:
        match = re.search(r"charset=([^;\s]+)", content_type, re.I)
        detected = match.group(1) if match else "utf-8"

    text = raw.decode(detected, errors="replace")
    return text, raw


class TextExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self._skip_depth = 0
        self.parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag in {"script", "style"}:
            self._skip_depth += 1
        if self._skip_depth == 0 and tag in {"p", "h1", "h2", "h3", "h4", "li", "br", "div"}:
            self.parts.append("\n")

    def handle_endtag(self, tag: str) -> None:
        if tag in {"script", "style"} and self._skip_depth:
            self._skip_depth -= 1
        if self._skip_depth == 0 and tag in {"p", "h1", "h2", "h3", "h4", "li", "div"}:
            self.parts.append("\n")

    def handle_data(self, data: str) -> None:
        if self._skip_depth:
            return
        value = normalize_text(data)
        if value:
            self.parts.append(value)

    def text(self) -> str:
        text = "\n".join(part for part in self.parts if part.strip())
        text = re.sub(r"\n{3,}", "\n\n", text)
        return text.strip()


class DatiParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.title = ""
        self._in_title = False
        self._title_parts: list[str] = []
        self.options_by_id: dict[str, dict[str, object]] = {}
        self._label_for: str | None = None
        self._label_depth = 0
        self._label_parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr = {key.lower(): value or "" for key, value in attrs}
        if tag == "title":
            self._in_title = True
            self._title_parts = []
        if tag == "input" and attr.get("name") == "tishu":
            input_id = attr.get("id")
            if input_id:
                self.options_by_id[input_id] = {
                    "id": input_id,
                    "value": attr.get("value", ""),
                    "checked": "checked" in attr,
                    "label": "",
                }
        if tag == "label" and attr.get("for") in self.options_by_id:
            self._label_for = attr.get("for")
            self._label_depth = 1
            self._label_parts = []
        elif self._label_for:
            self._label_depth += 1

    def handle_endtag(self, tag: str) -> None:
        if tag == "title" and self._in_title:
            self._in_title = False
            self.title = normalize_text("".join(self._title_parts))
        if self._label_for:
            self._label_depth -= 1
            if self._label_depth == 0:
                self.options_by_id[self._label_for]["label"] = normalize_text(
                    "".join(self._label_parts)
                )
                self._label_for = None
                self._label_parts = []

    def handle_data(self, data: str) -> None:
        if self._in_title:
            self._title_parts.append(data)
        if self._label_for:
            self._label_parts.append(data)

    def options(self) -> list[dict[str, object]]:
        return list(self.options_by_id.values())


@dataclass
class Question:
    number: int
    set_name: str
    statement: str = ""
    left_label: str = ""
    right_label: str = ""
    classes: list[str] = field(default_factory=list)

    def as_dict(self) -> dict[str, object]:
        return {
            "number": self.number,
            "set": self.set_name,
            "statement": self.statement,
            "left_label": self.left_label,
            "right_label": self.right_label,
            "answer_mapping": {
                "1": self.left_label,
                "0": self.right_label,
                "scale": [
                    "strong_left",
                    "medium_left",
                    "slight_left",
                    "slight_right",
                    "medium_right",
                    "strong_right",
                ],
            },
            "classes": self.classes,
        }


class QuestionParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.questions: list[Question] = []
        self.current: Question | None = None
        self.wrapper_depth = 0
        self.capture_kind: str | None = None
        self.capture_depth = 0
        self.capture_parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag != "div":
            return

        attr = {key.lower(): value or "" for key, value in attrs}
        classes = attr.get("class", "").split()
        class_set = set(classes)

        if "question-wrapper" in class_set:
            number = self._question_number(classes)
            if number is None:
                return
            set_name = next((item for item in classes if re.fullmatch(r"set\d+", item)), "")
            self.current = Question(number=number, set_name=set_name, classes=classes)
            self.wrapper_depth = 1
            return

        if self.current is None:
            return

        self.wrapper_depth += 1
        onclick = attr.get("onclick", "")
        if "statement" in class_set:
            self._start_capture("statement")
        elif {"caption", "left"}.issubset(class_set) and self._caption_for(onclick, 1):
            self._start_capture("left")
        elif {"caption", "right"}.issubset(class_set) and self._caption_for(onclick, 0):
            self._start_capture("right")

    def handle_endtag(self, tag: str) -> None:
        if tag != "div" or self.current is None:
            return

        if self.capture_kind and self.wrapper_depth == self.capture_depth:
            value = normalize_text("".join(self.capture_parts))
            if self.capture_kind == "statement":
                self.current.statement = value
            elif self.capture_kind == "left":
                self.current.left_label = value
            elif self.capture_kind == "right":
                self.current.right_label = value
            self.capture_kind = None
            self.capture_parts = []

        self.wrapper_depth -= 1
        if self.wrapper_depth == 0:
            self.questions.append(self.current)
            self.current = None

    def handle_data(self, data: str) -> None:
        if self.capture_kind:
            self.capture_parts.append(data)

    def _start_capture(self, kind: str) -> None:
        self.capture_kind = kind
        self.capture_depth = self.wrapper_depth
        self.capture_parts = []

    def _caption_for(self, onclick: str, answer: int) -> bool:
        if self.current is None:
            return False
        pattern = rf"setAnswer\(\s*{self.current.number}\s*,\s*{answer}\s*\)"
        return re.search(pattern, onclick) is not None

    @staticmethod
    def _question_number(classes: Iterable[str]) -> int | None:
        for cls in classes:
            match = re.fullmatch(r"setA(\d+)", cls)
            if match:
                return int(match.group(1))
        return None


def write_text(path: Path, text: str) -> None:
    path.write_text(text, encoding="utf-8")


def write_json(path: Path, data: object) -> None:
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def write_csv(path: Path, questions: list[Question]) -> None:
    with path.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(
            fh, fieldnames=["number", "set", "statement", "left_label", "right_label"]
        )
        writer.writeheader()
        for question in questions:
            writer.writerow(
                {
                    "number": question.number,
                    "set": question.set_name,
                    "statement": question.statement,
                    "left_label": question.left_label,
                    "right_label": question.right_label,
                }
            )


def markdown_for_dati(title: str, options: list[dict[str, object]], text: str) -> str:
    lines = [
        "# APESK MBTI 入口页内容",
        "",
        f"- Source: {DATI_URL}",
        f"- Scraped at: {datetime.now(timezone.utc).isoformat()}",
        "",
        f"## Title",
        "",
        title,
        "",
        "## Test Version Options",
        "",
    ]
    for option in options:
        marker = " checked" if option.get("checked") else ""
        lines.append(f"- `{option.get('value')}`{marker}: {option.get('label')}")
    lines.extend(["", "## Page Text", "", text])
    return "\n".join(lines).rstrip() + "\n"


def markdown_for_questions(questions: list[Question]) -> str:
    lines = [
        "# APESK 经典测试题目",
        "",
        f"- Source: {MAIN_URL}",
        f"- Scraped at: {datetime.now(timezone.utc).isoformat()}",
        f"- Question count: {len(questions)}",
        "",
        "| # | Set | Statement | Left / answer=1 | Right / answer=0 |",
        "|---:|---|---|---|---|",
    ]
    for question in questions:
        cells = [
            str(question.number),
            question.set_name,
            question.statement,
            question.left_label,
            question.right_label,
        ]
        escaped = [cell.replace("|", "\\|") for cell in cells]
        lines.append(f"| {' | '.join(escaped)} |")
    return "\n".join(lines).rstrip() + "\n"


def main() -> int:
    OUT.mkdir(parents=True, exist_ok=True)

    dati_html, _ = fetch(DATI_URL, encoding="gb2312")
    choice_html, _ = fetch(CHOICE_URL, encoding="utf-8")
    main_html, _ = fetch(MAIN_URL, encoding="utf-8")

    write_text(OUT / "apesk_mbti_dati.html", dati_html)
    write_text(OUT / "apesk_ai_choice2.html", choice_html)
    write_text(OUT / "apesk_p_main0519.html", main_html)

    dati_parser = DatiParser()
    dati_parser.feed(dati_html)

    text_extractor = TextExtractor()
    text_extractor.feed(dati_html)

    options = dati_parser.options()
    write_json(
        OUT / "apesk_mbti_dati_options.json",
        {
            "source": DATI_URL,
            "scraped_at": datetime.now(timezone.utc).isoformat(),
            "title": dati_parser.title,
            "options": options,
        },
    )
    write_text(
        OUT / "apesk_mbti_dati_text.md",
        markdown_for_dati(dati_parser.title, options, text_extractor.text()),
    )

    question_parser = QuestionParser()
    question_parser.feed(main_html)
    questions = sorted(question_parser.questions, key=lambda item: item.number)
    missing = [
        question.number
        for question in questions
        if not (question.statement and question.left_label and question.right_label)
    ]
    if missing:
        raise RuntimeError(f"parsed questions have missing fields: {missing[:10]}")

    write_json(
        OUT / "apesk_main0519_questions.json",
        {
            "source": MAIN_URL,
            "scraped_at": datetime.now(timezone.utc).isoformat(),
            "question_count": len(questions),
            "questions": [question.as_dict() for question in questions],
        },
    )
    write_csv(OUT / "apesk_main0519_questions.csv", questions)
    write_text(OUT / "apesk_main0519_questions.md", markdown_for_questions(questions))

    print(f"Wrote raw pages and parsed data to {OUT}")
    print(f"Entrance options: {len(options)}")
    print(f"Questions: {len(questions)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
