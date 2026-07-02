import { getPersonality } from '../data/personalities';
import type { ChallengeOption, ChallengeResult, PersonalityType, PlayerState } from '../types';
import { getStateSummary } from './playerState';

export const buildDeathResult = ({
  type,
  title,
  option,
  level,
  correctCount,
  totalCount,
  state
}: {
  type: PersonalityType;
  title: string;
  option: ChallengeOption;
  level: number;
  correctCount: number;
  totalCount: number;
  state?: PlayerState;
}): ChallengeResult => ({
  type,
  title,
  isCleared: false,
  level,
  deathTitle: option.deathTitle ?? '旧模式复发',
  deathReport: option.deathReport ?? '你以为自己在解决问题，其实只是重复了一遍熟悉的关系模式。',
  deathRate: option.deathRate ?? '??%',
  correctCount,
  totalCount,
  stateSummary: state ? getStateSummary(state) : undefined,
  flags: state?.flags
});

const buildInfjEnding = (state: PlayerState): Pick<ChallengeResult, 'isCleared' | 'endingTitle' | 'endingReport' | 'grade'> => {
  const hasHiddenCore = state.flags.includes('broke_old_loop') && state.flags.includes('old_wound_acknowledged');
  const highSafety = state.empathy >= 6 && state.boundaryRespect >= 3 && state.trust >= 5 && state.damage <= 3;
  const observablePlan = state.flags.includes('observable_plan');

  if (hasHiddenCore && highSafety) {
    return {
      isCleared: true,
      grade: 'SS：隐藏通关',
      endingTitle: 'TA 说：这次我感觉你真的听见了',
      endingReport: '你没有急着让 TA 回来，也没有把旧伤叫成旧账。系统判定：旧循环第一次被真正中断。注意，这不是复合成功，这是门没有继续关上。'
    };
  }

  if ((state.trust >= 4 && state.boundaryRespect >= 2 && state.damage <= 4) || observablePlan) {
    return {
      isCleared: true,
      grade: 'S：观察期通关',
      endingTitle: '获得观察期',
      endingReport: 'TA 没有立刻回来，但也没有继续后退。系统判定：你获得的不是原谅，是一段可被观察的时间。后续能不能活，取决于你会不会把这次的清醒变成稳定动作。'
    };
  }

  if (state.damage >= 5 || state.oldPatternDetected >= 4 || state.selfProof >= 5) {
    return {
      isCleared: false,
      grade: 'C：残血存活',
      endingTitle: '你活到了最后，但系统并不看好',
      endingReport: '你没有在某一关当场死亡，但旧模式太明显：解释、逃避、补救、再解释。TA 没有把门摔上，只是把手放在门把上。'
    };
  }

  return {
    isCleared: true,
    grade: 'A：普通通关',
    endingTitle: '门没有继续关上',
    endingReport: '你完成了 INFJ 副本，但这不是爽文结局。系统判定：TA 愿意继续看一看，但不会因为一场漂亮对话就立刻恢复信任。'
  };
};

export const buildClearResult = ({
  type,
  totalCount,
  state
}: {
  type: PersonalityType;
  totalCount: number;
  state?: PlayerState;
}): ChallengeResult => {
  const meta = getPersonality(type);
  const ending = type === 'INFJ' && state ? buildInfjEnding(state) : {
    isCleared: true,
    grade: 'S：旧模式暂未复发',
    endingTitle: '通关成功',
    endingReport: '你没有让旧模式彻底复发。系统判定：暂时存活。'
  };

  return {
    type,
    title: meta?.title ?? `${type} 挑战`,
    isCleared: ending.isCleared,
    level: totalCount,
    correctCount: totalCount,
    totalCount,
    endingTitle: ending.endingTitle,
    endingReport: ending.endingReport,
    grade: ending.grade,
    stateSummary: state ? getStateSummary(state) : undefined,
    flags: state?.flags
  };
};

export const getShareText = (result: ChallengeResult) => {
  if (result.isCleared) {
    return `【赛博发疯战报】我成功拿下了「${result.title}」，结局：${result.endingTitle ?? '通关成功'} ✨！系统评级：${result.grade ?? 'S'}。这波操作我只能说：还有谁？！你也来测测情商余额够活几关吧 👾`;
  }

  if (result.endingTitle) {
    return `【赛博发疯战报】我在「${result.title}」苟到了最后，但结局是：${result.endingTitle} 💔。系统锐评：${result.endingReport} —— 终究是错付了，快来试试你能不能比我活得体面 🎭`;
  }

  return `【赛博发疯战报】我在「${result.title}」惨死在第 ${result.level} 关 💀！
死因确诊：${result.deathTitle} 💥
系统锐评：${result.deathReport}
你也来试试会被 Boss 喷得多惨吧 🤡`;
};
