import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

import { scoreApeskAnswers } from "../src/apeskScoring.mjs";

const logic = JSON.parse(readFileSync("data/apeskLogic.json", "utf8"));

function answersWithOnes(ones) {
  const answers = {};
  for (const number of ones) {
    answers[number] = 1;
  }
  return answers;
}

describe("scoreApeskAnswers", () => {
  it("matches the APESK all-zero public report", () => {
    const result = scoreApeskAnswers(logic, {});

    assert.equal(result.type, "ESTP");
    assert.equal(result.fullType, "ESTP-O-C");
    assert.equal(result.axes.EI.leftPercent, 70);
    assert.equal(result.axes.EI.rightPercent, 30);
    assert.equal(result.axes.SN.leftPercent, 41.67);
    assert.equal(result.axes.SN.rightPercent, 58.33);
    assert.equal(result.axes.TF.leftPercent, 56.52);
    assert.equal(result.axes.TF.rightPercent, 43.48);
    assert.equal(result.axes.JP.leftPercent, 41.67);
    assert.equal(result.axes.JP.rightPercent, 58.33);
    assert.equal(result.axes.AO.active, "O");
    assert.equal(result.axes.HC.active, "C");
  });

  it("matches the APESK all-one public report", () => {
    const result = scoreApeskAnswers(
      logic,
      answersWithOnes(Array.from({ length: 104 }, (_, index) => index + 1)),
    );

    assert.equal(result.type, "INFJ");
    assert.equal(result.fullType, "INFJ-A-H");
    assert.equal(result.axes.EI.leftPercent, 30);
    assert.equal(result.axes.EI.rightPercent, 70);
    assert.equal(result.axes.SN.leftPercent, 58.33);
    assert.equal(result.axes.SN.rightPercent, 41.67);
    assert.equal(result.axes.TF.leftPercent, 43.48);
    assert.equal(result.axes.TF.rightPercent, 56.52);
    assert.equal(result.axes.JP.leftPercent, 58.33);
    assert.equal(result.axes.JP.rightPercent, 41.67);
    assert.equal(result.axes.AO.active, "A");
    assert.equal(result.axes.HC.active, "H");
  });

  it("matches observed APESK tie behavior for EI, SN, and JP", () => {
    assert.equal(scoreApeskAnswers(logic, answersWithOnes([9, 23, 25, 28])).type, "ISTP");
    assert.equal(scoreApeskAnswers(logic, answersWithOnes([6, 11])).type, "ENTP");
    assert.equal(scoreApeskAnswers(logic, answersWithOnes([2, 14])).type, "ESTP");
  });

  it("uses exhaustive lookup tables for APESK A/O and C/H extensions", () => {
    assert.equal(scoreApeskAnswers(logic, answersWithOnes([82, 94, 95])).fullType, "ESTP-O-C");
    assert.equal(scoreApeskAnswers(logic, answersWithOnes([83, 96, 97, 98])).fullType, "ESTP-A-C");
    assert.equal(scoreApeskAnswers(logic, answersWithOnes([99, 100, 101, 102, 103])).fullType, "ESTP-O-H");
  });

  it("ignores the sex question for personality scoring", () => {
    assert.deepEqual(
      scoreApeskAnswers(logic, {}).axes,
      scoreApeskAnswers(logic, { 104: 1 }).axes,
    );
  });
});
