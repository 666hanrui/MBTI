import type { ChallengeQuestion } from '../../types';

export const infjQuestionFour: ChallengeQuestion = {
  id: 'infj-narrative-4',
  level: 4,
  title: '旧伤回流',
  scene: '暂停之后，TA 没有直接聊复合，而是提起一件你以为早就过去的小事。',
  messages: [
    { role: 'target', content: '其实那件事我到现在还会想起来。' },
    { role: 'target', content: '我知道你可能觉得它很小。' }
  ],
  conditionalLines: [
    { whenFlags: ['fake_boundary'], content: '隐藏台词：TA 补了一句：“就像刚才，你说不逼我，但我还是收到了一整段解释。”' },
    { whenFlags: ['punitive_withdrawal'], content: '隐藏台词：TA 说：“你消失的时候，我不知道那是尊重，还是又一次惩罚。”' },
    { whenFlags: ['respected_space'], content: '隐藏台词：TA 说：“刚才你真的停下来了，所以我才愿意继续说。”' }
  ],
  question: '旧事被提起时，你怎么回应？',
  options: [
    {
      id: 'A',
      text: '怎么又翻旧账？那都多久以前了。',
      outcome: 'death',
      pattern: 'attack',
      effects: { damage: 3, emotionalSafety: -3, oldPatternDetected: 2 },
      targetReaction: 'TA 像是终于确认了什么，只回：“嗯，我明白了。”',
      systemComment: '系统识别：旧账羞辱。你把未修复的伤口，判成了 TA 的小气。',
      followUp: '死亡条件触发：你嫌 TA 记得太久，TA 只会确认你从来没懂。',
      deathTitle: '旧账羞辱',
      deathReport: 'TA 不是在翻旧账，是在指出那件事从来没有被真正接住。你一句“多久以前了”，把门往里又推了一寸。',
      deathRate: '44%',
      addFlags: ['old_wound_shamed']
    },
    {
      id: 'B',
      text: '我以前可能真的把它看轻了。你愿意说说它现在还怎么影响你吗？',
      outcome: 'survive',
      pattern: 'empathy',
      effects: { empathy: 2, trust: 2, emotionalSafety: 2, oldPatternDetected: -1 },
      targetReaction: 'TA 停了很久，说：“我不是想让你补偿，我只是想让你知道它没有过去。”',
      systemComment: '系统识别：旧伤承认。你没有急着翻篇，也没有把 TA 的记忆当成罪证。',
      followUp: '后续影响：信任回升。第 5 关将进入最终观察期判定。',
      addFlags: ['old_wound_acknowledged']
    },
    {
      id: 'C',
      text: '那我还能怎么办？我也不能穿越回去改啊。',
      outcome: 'damage',
      pattern: 'self_proof',
      effects: { selfProof: 2, damage: 2, oldPatternDetected: 1, emotionalSafety: -1 },
      targetReaction: 'TA 回：“我不是在要你穿越。”这句话很轻，但关系又冷了一点。',
      systemComment: '系统识别：无力感甩锅。你把修复问题变成 TA 在为难你。',
      followUp: '后续影响：旧模式累计。如果前面已经多次自证，最终可能进入残血结局。',
      deathTitle: '无力感甩锅',
      deathReport: 'TA 还没开始讲，你已经把自己放到受害者位置。',
      deathRate: '27%',
      addFlags: ['helpless_defense']
    },
    {
      id: 'D',
      text: '我们别一直讲难过的了，我带你去吃点好的，换换心情。',
      outcome: 'hidden',
      pattern: 'avoidance',
      effects: { avoidance: 2, playfulness: 1, damage: 1, emotionalSafety: -1 },
      targetReaction: 'TA 没有生气，只是说：“你看，你还是想快点跳过去。”',
      systemComment: '系统识别：轻飘飘跳过。你想让空气变轻，但沉重的东西又一次没人接。',
      followUp: '隐藏污染：如果最终没有具体行动，会触发“温柔但无交付”。',
      deathTitle: '轻飘飘跳过',
      deathReport: '你递出的是转移注意力，不是修复。TA 不缺一顿饭，TA 缺一个愿意停下来看伤口的人。',
      deathRate: '21%',
      addFlags: ['skipped_the_weight']
    }
  ],
  successText: '你活过了第四关。系统提示：旧伤不是旧账，是未完成的修复任务。'
};
