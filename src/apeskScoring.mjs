const TYPE_ORDER = ["EI", "SN", "TF", "JP"];

function answerValue(answers, number) {
  return Number(answers[number] ?? answers[String(number)] ?? 0) === 1 ? 1 : 0;
}

function roundPercent(value) {
  return Number(value.toFixed(2));
}

function oppositeCode(dimension, code) {
  return code === dimension.leftCode ? dimension.rightCode : dimension.leftCode;
}

function scoreBinaryAxis(logic, axis, answers) {
  const dimension = logic.dimensions[axis];
  const axisQuestions = logic.questions.filter((question) => question.axis === axis);
  let leftCount = 0;
  let rightCount = 0;

  for (const question of axisQuestions) {
    const code =
      answerValue(answers, question.number) === 1
        ? question.answer1Code
        : oppositeCode(dimension, question.answer1Code);
    if (code === dimension.leftCode) {
      leftCount += 1;
    } else {
      rightCount += 1;
    }
  }

  let activeCode;
  if (leftCount === rightCount) {
    activeCode = dimension.tieCode;
  } else {
    activeCode = leftCount > rightCount ? dimension.leftCode : dimension.rightCode;
  }

  return {
    leftLabel: dimension.leftLabel,
    rightLabel: dimension.rightLabel,
    leftCode: dimension.leftCode,
    rightCode: dimension.rightCode,
    leftCount,
    rightCount,
    total: axisQuestions.length,
    leftPercent: roundPercent((leftCount / axisQuestions.length) * 100),
    rightPercent: roundPercent((rightCount / axisQuestions.length) * 100),
    active: activeCode,
  };
}

function lookupSpecialAxis(logic, axis, answers) {
  const axisInfo = logic.specialAxes[axis];
  const bits = axisInfo.questions.map((number) => answerValue(answers, number)).join("");
  const result = axisInfo.lookup[bits];
  if (!result) {
    throw new Error(`Missing ${axis} lookup for bits ${bits}`);
  }

  if (axis === "AO") {
    return {
      bits,
      leftLabel: "果断型A",
      rightLabel: "纠结型O",
      leftPercent: result.A,
      rightPercent: result.O,
      active: result.active,
    };
  }

  return {
    bits,
    leftLabel: "高冷C",
    rightLabel: "温暖H",
    leftPercent: result.C,
    rightPercent: result.H,
    active: result.active,
  };
}

export function scoreApeskAnswers(logic, answers = {}) {
  const axes = {};
  for (const axis of TYPE_ORDER) {
    axes[axis] = scoreBinaryAxis(logic, axis, answers);
  }
  axes.AO = lookupSpecialAxis(logic, "AO", answers);
  axes.HC = lookupSpecialAxis(logic, "HC", answers);

  const type = TYPE_ORDER.map((axis) => axes[axis].active).join("");
  const fullType = `${type}-${axes.AO.active}-${axes.HC.active}`;

  return {
    type,
    fullType,
    axes,
  };
}
