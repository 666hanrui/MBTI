import { getPersonality } from '../data/personalities';
import type { ChallengeOption, ChallengeResult, PersonalityType } from '../types';

export const buildDeathResult = ({
  type,
  title,
  option,
  level,
  correctCount,
  totalCount
}: {
  type: PersonalityType;
  title: string;
  option: ChallengeOption;
  level: number;
  correctCount: number;
  totalCount: number;
}): ChallengeResult => ({
  type,
  title,
  isCleared: false,
  level,
  deathTitle: option.deathTitle ?? '旧模式复发',
  deathReport: option.deathReport ?? '你以为自己在解决问题，其实只是重复了一遍熟悉的关系模式。',
  deathRate: option.deathRate ?? '??%',
  correctCount,
  totalCount
});

export const buildClearResult = ({
  type,
  totalCount
}: {
  type: PersonalityType;
  totalCount: number;
}): ChallengeResult => {
  const meta = getPersonality(type);

  return {
    type,
    title: meta?.title ?? `${type} 挑战`,
    isCleared: true,
    level: totalCount,
    correctCount: totalCount,
    totalCount
  };
};

export const getShareText = (result: ChallengeResult) => {
  if (result.isCleared) {
    return `我通关了「${result.title}」，系统判定：旧模式暂未复发。你也来试试你会死在哪一关。`;
  }

  return `我挑战了「${result.title}」，死在第 ${result.level} 关：${result.deathTitle}。系统说：${result.deathReport}`;
};
