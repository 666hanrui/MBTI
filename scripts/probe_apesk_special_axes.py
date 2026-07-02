#!/usr/bin/env python3
"""Exhaustively probe APESK's two extension axes: A/O and C/H."""

from __future__ import annotations

import itertools
import json
import sys
import time
from datetime import datetime, timezone
from http.cookiejar import CookieJar
from pathlib import Path
from urllib.request import HTTPCookieProcessor, build_opener

sys.path.insert(0, str(Path(__file__).resolve().parent))
import probe_apesk_scoring as base_probe


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "analysis" / "apesk_special_axes_probe.json"
MARKDOWN = ROOT / "analysis" / "apesk_special_axes_map.md"

AO_QUESTIONS = [82, 83, 94, 95, 96, 97, 98]
HC_QUESTIONS = [99, 100, 101, 102, 103]


def bit_answers(questions: list[int], bits: tuple[int, ...]) -> dict[int, int]:
    return {question: bit for question, bit in zip(questions, bits)}


def run_case(opener, token: str, name: str, answers: dict[int, int]) -> dict:
    rid = base_probe.submit_answers(opener, token, answers, 120)
    report = base_probe.fetch_report(opener, rid)
    ao = report.dimensions["行为方式"]
    hc = report.dimensions["待人接物"]
    result = {
        "name": name,
        "rid": rid,
        "type_name": report.type_name,
        "answers": answers,
        "AO": {
            "A_percent": ao["left_percent"],
            "O_percent": ao["right_percent"],
            "active": "A" if ao["active"] == "left" else "O",
        },
        "HC": {
            "C_percent": hc["left_percent"],
            "H_percent": hc["right_percent"],
            "active": "C" if hc["active"] == "left" else "H",
        },
    }
    print(name, rid, result["type_name"], result["AO"], result["HC"], flush=True)
    return result


def render_markdown(data: dict) -> str:
    lines = [
        "# APESK 扩展轴穷举探测",
        "",
        f"- Probed at: {data['probed_at']}",
        "- A/O questions: " + ", ".join(f"a{n}" for n in AO_QUESTIONS),
        "- C/H questions: " + ", ".join(f"a{n}" for n in HC_QUESTIONS),
        "",
        "## A/O 查表",
        "",
        "| bits a82,a83,a94,a95,a96,a97,a98 | A | O | active | type | rid |",
        "|---|---:|---:|---|---|---:|",
    ]
    for item in data["AO_cases"]:
        lines.append(
            f"| {item['bits']} | {item['AO']['A_percent']} | {item['AO']['O_percent']} | "
            f"{item['AO']['active']} | {item['type_name']} | {item['rid']} |"
        )
    lines.extend(
        [
            "",
            "## C/H 查表",
            "",
            "| bits a99,a100,a101,a102,a103 | C | H | active | type | rid |",
            "|---|---:|---:|---|---|---:|",
        ]
    )
    for item in data["HC_cases"]:
        lines.append(
            f"| {item['bits']} | {item['HC']['C_percent']} | {item['HC']['H_percent']} | "
            f"{item['HC']['active']} | {item['type_name']} | {item['rid']} |"
        )
    return "\n".join(lines) + "\n"


def main() -> int:
    opener = build_opener(HTTPCookieProcessor(CookieJar()))
    token = base_probe.get_token(opener)

    ao_cases = []
    for bits in itertools.product([0, 1], repeat=len(AO_QUESTIONS)):
        answers = bit_answers(AO_QUESTIONS, bits)
        item = run_case(opener, token, "AO:" + "".join(map(str, bits)), answers)
        item["bits"] = "".join(map(str, bits))
        ao_cases.append(item)
        time.sleep(0.25)

    hc_cases = []
    for bits in itertools.product([0, 1], repeat=len(HC_QUESTIONS)):
        answers = bit_answers(HC_QUESTIONS, bits)
        item = run_case(opener, token, "HC:" + "".join(map(str, bits)), answers)
        item["bits"] = "".join(map(str, bits))
        hc_cases.append(item)
        time.sleep(0.25)

    data = {
        "probed_at": datetime.now(timezone.utc).isoformat(),
        "AO_questions": AO_QUESTIONS,
        "HC_questions": HC_QUESTIONS,
        "AO_cases": ao_cases,
        "HC_cases": hc_cases,
    }
    OUTPUT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    MARKDOWN.write_text(render_markdown(data), encoding="utf-8")
    print(f"wrote {OUTPUT}", flush=True)
    print(f"wrote {MARKDOWN}", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
