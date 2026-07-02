import type { ChallengeOption, NumericPlayerState, PlayerState } from '../types';

export const initialPlayerState: PlayerState = {
  empathy: 0,
  pressure: 0,
  selfProof: 0,
  control: 0,
  avoidance: 0,
  logic: 0,
  playfulness: 0,
  trust: 0,
  damage: 0,
  emotionalSafety: 0,
  oldPatternDetected: 0,
  boundaryRespect: 0,
  flags: []
};

export const applyOptionToState = (state: PlayerState, option: ChallengeOption): PlayerState => {
  const effects = option.effects ?? {};
  const nextState = { ...state };

  (Object.keys(effects) as Array<keyof NumericPlayerState>).forEach((key) => {
    nextState[key] += effects[key] ?? 0;
  });

  if (option.addFlags?.length) {
    nextState.flags = Array.from(new Set([...nextState.flags, ...option.addFlags]));
  }

  return nextState;
};

export const hasAllFlags = (state: PlayerState, flags: string[] = []) =>
  flags.every((flag) => state.flags.includes(flag));

export const getStateSummary = (state: PlayerState) => {
  const summary: string[] = [];

  if (state.selfProof >= 2) summary.push('证明欲偏高：你很容易把修复变成自证清白。');
  if (state.pressure >= 2) summary.push('压迫感偏高：你容易把 TA 的沉默当成必须立刻交卷。');
  if (state.boundaryRespect >= 2) summary.push('边界尊重较好：你能给空间，而不是用空间惩罚对方。');
  if (state.empathy >= 3) summary.push('共情值较高：你开始先接住感受，再处理问题。');
  if (state.oldPatternDetected >= 2) summary.push('旧模式被识别：系统已经多次捕捉到熟悉循环。');
  if (state.trust >= 3) summary.push('信任修复中：TA 没有立刻回来，但门没有继续关死。');
  if (state.damage >= 3) summary.push('关系损伤偏高：你活着通关，也可能只是残血。');

  return summary.length ? summary : ['系统暂未识别出明显旧模式，但这也可能只是你暂时装得不错。'];
};
