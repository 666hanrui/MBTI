#!/usr/bin/env python3
"""Probe APESK's public result endpoint to infer question scoring effects.

The APESK front end exposes 104 binary answers as a1..a104, but the scoring
itself happens server-side. This script submits controlled answer vectors to
the public form endpoint, parses the public report page, and records how each
single answer flip changes the six reported dimensions.
"""

from __future__ import annotations

import argparse
import json
import re
import time
from dataclasses import dataclass
from datetime import datetime, timezone
from http.cookiejar import CookieJar
from pathlib import Path
from typing import Any
from urllib.parse import urlencode
from urllib.error import URLError
from urllib.request import HTTPCookieProcessor, Request, build_opener


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_QUESTIONS = ROOT / "scraped" / "apesk_main0519_questions.json"
DEFAULT_OUTPUT = ROOT / "analysis" / "apesk_scoring_probe.json"
DEFAULT_MARKDOWN = ROOT / "analysis" / "apesk_scoring_map.md"

MAIN_URL = "https://www.apesk.com/p/main0519.asp"
SUBMIT_URL = "https://www.apesk.com/p/computer104forpc.asp"
REPORT_URL = "https://www.apesk.com/p/result_for_gzh.asp?rid={rid}"

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
)


@dataclass
class Report:
    rid: str
    type_name: str
    dimensions: dict[str, dict[str, Any]]


def request_text(opener, url: str, data: bytes | None = None, referer: str | None = None) -> str:
    headers = {"User-Agent": USER_AGENT}
    if referer:
        headers["Referer"] = referer
    if data is not None:
        headers["Content-Type"] = "application/x-www-form-urlencoded"
    req = Request(url, data=data, headers=headers)
    last_error: Exception | None = None
    for attempt in range(3):
        try:
            with opener.open(req, timeout=45) as resp:
                raw = resp.read()
                content_type = resp.headers.get("Content-Type", "")
            break
        except (TimeoutError, URLError, OSError) as exc:
            last_error = exc
            if attempt == 2:
                raise
            time.sleep(1.5 * (attempt + 1))
    else:
        raise RuntimeError(f"Failed request to {url}: {last_error}")
    charset_match = re.search(r"charset=([^;\s]+)", content_type, re.I)
    encoding = charset_match.group(1) if charset_match else "utf-8"
    return raw.decode(encoding, errors="replace")


def get_token(opener) -> str:
    html = request_text(opener, MAIN_URL)
    match = re.search(r'<input name="_token" value="([^"]+)"', html)
    if not match:
        raise RuntimeError("Could not find _token in main test page")
    return match.group(1)


def submit_answers(opener, token: str, answers: dict[int, int], feishi: int) -> str:
    payload: dict[str, str] = {"_token": token, "mq": "", "feishi": str(feishi)}
    for index in range(1, 105):
        payload[f"a{index}"] = str(answers.get(index, 0))
    result_html = request_text(
        opener,
        SUBMIT_URL,
        data=urlencode(payload).encode("utf-8"),
        referer=MAIN_URL,
    )
    rid_match = re.search(r"result_for_gzh\.asp\?rid=(\d+)", result_html)
    if not rid_match:
        raise RuntimeError("Submit response did not include a report rid")
    return rid_match.group(1)


def parse_report(rid: str, html: str) -> Report:
    type_match = re.search(r'<div class="basic-type"[^>]*>\s*([^<]+?)\s*</div>', html)
    if not type_match:
        raise RuntimeError(f"Could not parse type from report {rid}")

    dimensions: dict[str, dict[str, Any]] = {}
    trait_blocks = html.split('<div class="trait">')[1:7]
    for block in trait_blocks:
        caption_match = re.search(r'<div class="caption">([^<]+)</div>', block)
        labels = re.findall(r'<span>([^<]+)</span>', block)[:2]
        left_match = re.search(
            r'<div[^>]*class="[^"]*\bleft\b([^"]*)"[^>]*>\s*<div class="count">\s*([0-9.]+)%</div>',
            block,
            re.S,
        )
        right_match = re.search(
            r'<div[^>]*class="[^"]*\bright\b([^"]*)"[^>]*>\s*<div class="count">\s*([0-9.]+)%</div>',
            block,
            re.S,
        )
        if not (caption_match and len(labels) == 2 and left_match and right_match):
            continue
        caption = caption_match.group(1).strip()
        dimensions[caption] = {
            "left_label": labels[0].strip(),
            "right_label": labels[1].strip(),
            "left_percent": float(left_match.group(2)),
            "right_percent": float(right_match.group(2)),
            "active": "left" if "active" in left_match.group(1) else "right",
        }

    if len(dimensions) != 6:
        raise RuntimeError(f"Expected 6 dimensions in report {rid}, found {len(dimensions)}")

    return Report(rid=rid, type_name=type_match.group(1).strip(), dimensions=dimensions)


def fetch_report(opener, rid: str) -> Report:
    html = request_text(opener, REPORT_URL.format(rid=rid), referer=SUBMIT_URL)
    return parse_report(rid, html)


def load_questions(path: Path) -> list[dict[str, Any]]:
    data = json.loads(path.read_text(encoding="utf-8"))
    return data["questions"]


def changed_dimensions(base: Report, probe: Report) -> list[dict[str, Any]]:
    changes = []
    for dimension, base_info in base.dimensions.items():
        probe_info = probe.dimensions[dimension]
        delta_left = round(probe_info["left_percent"] - base_info["left_percent"], 4)
        delta_right = round(probe_info["right_percent"] - base_info["right_percent"], 4)
        if abs(delta_left) < 0.005 and abs(delta_right) < 0.005:
            continue
        changes.append(
            {
                "dimension": dimension,
                "left_label": base_info["left_label"],
                "right_label": base_info["right_label"],
                "answer_1_moves_toward": (
                    base_info["left_label"] if delta_left > 0 else base_info["right_label"]
                ),
                "delta_left_percent": delta_left,
                "delta_right_percent": delta_right,
                "probe_active": probe_info["active"],
            }
        )
    return changes


def render_markdown(data: dict[str, Any]) -> str:
    lines = [
        "# APESK 公开结果页评分探测",
        "",
        f"- Source test page: {MAIN_URL}",
        f"- Source submit endpoint: {SUBMIT_URL}",
        f"- Probed at: {data['probed_at']}",
        f"- Baseline all-zero type: {data['baseline']['type_name']} (rid {data['baseline']['rid']})",
        f"- All-one type: {data['all_one']['type_name']} (rid {data['all_one']['rid']})",
        "",
        "## 结论边界",
        "",
        "- 公开前端只暴露题目、左右选项和 `a1..a104` 的 0/1 提交。",
        "- 官方评分代码在服务端，不能从静态 JS 直接下载。",
        "- 下面是通过公开报告页 one-flip 探测反推出的题目影响轴和方向。",
        "- 这能还原前置测评的可运行逻辑，但仍应标注为“反推近似”，不要冒充 APESK 官方算法。",
        "",
        "## 题目映射",
        "",
        "| # | 题干 | 0 选项 | 1 选项 | answer=1 影响 | Δleft | Δright | rid |",
        "|---:|---|---|---|---|---:|---:|---:|",
    ]

    for item in data["question_effects"]:
        changes = item["changes"]
        if changes:
            effect = "; ".join(
                f"{change['dimension']} -> {change['answer_1_moves_toward']}"
                for change in changes
            )
            delta_left = "; ".join(str(change["delta_left_percent"]) for change in changes)
            delta_right = "; ".join(str(change["delta_right_percent"]) for change in changes)
        else:
            effect = "未检测到变化"
            delta_left = "0"
            delta_right = "0"

        def cell(value: str) -> str:
            return str(value).replace("|", "\\|").replace("\n", " ")

        lines.append(
            "| "
            + " | ".join(
                [
                    str(item["number"]),
                    cell(item["statement"]),
                    cell(item["right_label"]),
                    cell(item["left_label"]),
                    cell(effect),
                    cell(delta_left),
                    cell(delta_right),
                    str(item["rid"]),
                ]
            )
            + " |"
        )

    return "\n".join(lines) + "\n"


def run_probe(args: argparse.Namespace) -> dict[str, Any]:
    questions = load_questions(args.questions)
    cookie_jar = CookieJar()
    opener = build_opener(HTTPCookieProcessor(cookie_jar))
    token = get_token(opener)

    baseline_rid = submit_answers(opener, token, {}, args.feishi)
    baseline = fetch_report(opener, baseline_rid)
    time.sleep(args.delay)

    all_one_answers = {index: 1 for index in range(1, 105)}
    all_one_rid = submit_answers(opener, token, all_one_answers, args.feishi)
    all_one = fetch_report(opener, all_one_rid)
    time.sleep(args.delay)

    effects = []
    for question in questions:
        index = int(question["number"])
        rid = submit_answers(opener, token, {index: 1}, args.feishi)
        report = fetch_report(opener, rid)
        effects.append(
            {
                "number": index,
                "statement": question["statement"],
                "left_label": question["left_label"],
                "right_label": question["right_label"],
                "rid": rid,
                "type_name": report.type_name,
                "changes": changed_dimensions(baseline, report),
            }
        )
        print(f"probed a{index}: rid={rid} changes={len(effects[-1]['changes'])}", flush=True)
        time.sleep(args.delay)

    return {
        "probed_at": datetime.now(timezone.utc).isoformat(),
        "method": "all-zero baseline plus one answer flipped to 1",
        "baseline": {
            "rid": baseline.rid,
            "type_name": baseline.type_name,
            "dimensions": baseline.dimensions,
        },
        "all_one": {
            "rid": all_one.rid,
            "type_name": all_one.type_name,
            "dimensions": all_one.dimensions,
        },
        "question_effects": effects,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--questions", type=Path, default=DEFAULT_QUESTIONS)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--markdown", type=Path, default=DEFAULT_MARKDOWN)
    parser.add_argument("--delay", type=float, default=0.35)
    parser.add_argument("--feishi", type=int, default=120)
    args = parser.parse_args()

    data = run_probe(args)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    args.markdown.write_text(render_markdown(data), encoding="utf-8")
    print(f"wrote {args.output}")
    print(f"wrote {args.markdown}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
