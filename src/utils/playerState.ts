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

  if (state.selfProof >= 2) summary.push('你这次比较急着解释自己，所以有几句话会显得像在辩解。');
  if (state.pressure >= 2) summary.push('你有点急着要答案，容易让对方觉得连休息一下都不安全。');
  if (state.boundaryRespect >= 2) summary.push('你有几次真的停住了，没有继续追着发消息。');
  if (state.empathy >= 3) summary.push('你不是只在讲道理，也有在听她到底难受在哪里。');
  if (state.oldPatternDetected >= 2) summary.push('你有几次又回到了熟悉的处理方式：先解释、再补救、最后希望快点翻篇。');
  if (state.trust >= 3) summary.push('她没有马上变好，但至少没有把话彻底说死。');
  if (state.damage >= 3) summary.push('这一路聊下来还是有点伤，能走到最后也不代表真的修好了。');

  return summary.length ? summary : ['这次没有特别明显的翻车点，但也还没到能让人完全放心的程度。'];
};
