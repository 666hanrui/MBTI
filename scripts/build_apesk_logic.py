#!/usr/bin/env python3
"""Build a compact local APESK scoring logic file from probe outputs."""

from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PROBE = ROOT / "analysis" / "apesk_scoring_probe.json"
SPECIAL = ROOT / "analysis" / "apesk_special_axes_probe.json"
OUTPUT = ROOT / "data" / "apeskLogic.json"

DIMENSION_MAP = {
    "精力来源": {
        "key": "EI",
        "leftCode": "E",
        "rightCode": "I",
        "tieCode": "I",
    },
    "信息处理": {
        "key": "SN",
        "leftCode": "N",
        "rightCode": "S",
        "tieCode": "N",
    },
    "理性感性": {
        "key": "TF",
        "leftCode": "T",
        "rightCode": "F",
        "tieCode": "T",
    },
    "生活方式": {
        "key": "JP",
        "leftCode": "J",
        "rightCode": "P",
        "tieCode": "P",
    },
}


def main() -> int:
    probe = json.loads(PROBE.read_text(encoding="utf-8"))
    special = json.loads(SPECIAL.read_text(encoding="utf-8"))

    dimensions = {}
    for cn_name, meta in DIMENSION_MAP.items():
        base_dimension = probe["baseline"]["dimensions"][cn_name]
        dimensions[meta["key"]] = {
            "name": cn_name,
            "leftLabel": base_dimension["left_label"],
            "rightLabel": base_dimension["right_label"],
            "leftCode": meta["leftCode"],
            "rightCode": meta["rightCode"],
            "tieCode": meta["tieCode"],
        }

    questions = []
    for item in probe["question_effects"]:
        question = {
            "number": item["number"],
            "statement": item["statement"],
            "option1": item["left_label"],
            "option0": item["right_label"],
        }
        if item["changes"]:
            change = item["changes"][0]
            if change["dimension"] in DIMENSION_MAP:
                meta = DIMENSION_MAP[change["dimension"]]
                question["axis"] = meta["key"]
                question["answer1Code"] = (
                    meta["leftCode"]
                    if change["answer_1_moves_toward"] == change["left_label"]
                    else meta["rightCode"]
                )
            elif change["dimension"] == "行为方式":
                question["axis"] = "AO"
            elif change["dimension"] == "待人接物":
                question["axis"] = "HC"
        else:
            question["axis"] = "ignored"
        questions.append(question)

    ao_lookup = {
        item["bits"]: {
            "A": item["AO"]["A_percent"],
            "O": item["AO"]["O_percent"],
            "active": item["AO"]["active"],
        }
        for item in special["AO_cases"]
    }
    hc_lookup = {
        item["bits"]: {
            "C": item["HC"]["C_percent"],
            "H": item["HC"]["H_percent"],
            "active": item["HC"]["active"],
        }
        for item in special["HC_cases"]
    }

    logic = {
        "source": {
            "testPage": "https://www.apesk.com/p/main0519.asp",
            "submitEndpoint": "https://www.apesk.com/p/computer104forpc.asp",
            "method": "reverse engineered from public APESK report pages",
            "baselineRid": probe["baseline"]["rid"],
            "allOneRid": probe["all_one"]["rid"],
        },
        "dimensions": dimensions,
        "questions": questions,
        "specialAxes": {
            "AO": {
                "questions": special["AO_questions"],
                "lookup": ao_lookup,
            },
            "HC": {
                "questions": special["HC_questions"],
                "lookup": hc_lookup,
            },
        },
    }

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(logic, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {OUTPUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
