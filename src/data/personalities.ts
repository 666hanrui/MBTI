import type { PersonalityMeta } from '../types';

export const personalities: PersonalityMeta[] = [
  {
    type: 'INFJ',
    title: '挽回 INFJ 挑战',
    bossName: '终极门锁',
    subtitle: 'TA 不是突然离开，是早就在心里告别过很多次。',
    description: '高敏感、高共情、长期忍耐。你面对的不是一句话的误会，而是一整套旧模式的清算。',
    difficulty: 'SS',
    passRate: '0.4%',
    averageDeathLevel: 2,
    tags: ['深层审判', '旧模式识别', '情绪接住'],
    accent: '#a78bfa',
    gradient: 'from-violet-500/30 via-fuchsia-500/20 to-slate-950'
  },
  {
    type: 'INTJ',
    title: '破解 INTJ 防火墙',
    bossName: '冷静审判者',
    subtitle: 'TA 不是冷，是已经把你从系统里移除了。',
    description: '情绪攻击无效，卖惨权限不足。你需要提交的是可信行动方案，不是临时悔过书。',
    difficulty: 'SS',
    passRate: '0.6%',
    averageDeathLevel: 1,
    tags: ['逻辑闭环', '风险评估', '权限驳回'],
    accent: '#60a5fa',
    gradient: 'from-sky-500/30 via-indigo-500/20 to-slate-950'
  },
  {
    type: 'INFP',
    title: '修复 INFP 旧梦',
    bossName: '破碎理想家',
    subtitle: 'TA 不是不原谅，是原来的滤镜已经碎了。',
    description: '你要修复的不是一场争吵，而是 TA 曾经相信过的那个故事。',
    difficulty: 'S',
    passRate: '1.1%',
    averageDeathLevel: 3,
    tags: ['理想滤镜', '旧梦坍塌', '温柔破防'],
    accent: '#f9a8d4',
    gradient: 'from-pink-500/30 via-rose-500/20 to-slate-950'
  },
  {
    type: 'ENTP',
    title: '别被 ENTP 反杀',
    bossName: '辩论恶魔',
    subtitle: '你以为你在沟通，其实 TA 已经把你拖进辩论场。',
    description: '每一句话都会变成证据。你越想赢，越容易输掉整个副本。',
    difficulty: 'S',
    passRate: '1.9%',
    averageDeathLevel: 3,
    tags: ['逻辑反杀', '玩笑试探', '辩论陷阱'],
    accent: '#fb923c',
    gradient: 'from-orange-500/30 via-amber-500/20 to-slate-950'
  }
];

export const getPersonality = (type: string) =>
  personalities.find((item) => item.type === type);
