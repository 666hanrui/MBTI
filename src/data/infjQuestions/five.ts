import type { ChallengeQuestion } from '../../types';

export const infjQuestionFive: ChallengeQuestion = {
  id: 'infj-narrative-5',
  level: 5,
  title: '这次有什么不一样',
  scene: 'TA 没有说原谅，也没有说结束。最后的问题终于来了：这次，你到底有什么不一样？',
  messages: [
    { role: 'target', content: '我听见你说了很多。' },
    { role: 'target', content: '但我想知道，这次和以前有什么不一样？' }
  ],
  conditionalLines: [
    { whenFlags: ['old_wound_acknowledged'], content: '隐藏台词：TA 说：“至少这次你没有说我翻旧账。”' },
    { whenFlags: ['empty_apology'], content: '隐藏台词：TA 说：“我不想再听很快的道歉了。”' },
    { whenFlags: ['cold_space_pollution'], content: '隐藏台词：TA 说：“我不想再靠猜来判断你是在尊重我，还是在退开。”' }
  ],
  question: '最终关，你怎么回答？',
  options: [
    {
      id: 'A',
      text: '我保证这次绝对不会了，你相信我一次。',
      outcome: 'damage',
      pattern: 'self_proof',
      effects: { selfProof: 2, oldPatternDetected: 1, damage: 1, trust: -1 },
      targetReaction: 'TA 没有立刻否定你，但眼神里的疲惫没有下去。',
      systemComment: '系统识别：绝对化承诺。你给了一个很大的词，但没有给一个能落地的变化。',
      followUp: '结局影响：如果前面伤害较高，将进入残血结局。',
      deathTitle: '空头保证',
      deathReport: '“绝对不会”听起来很满，但 INFJ 已经听过太多次满格承诺。TA 要的是旧循环被打断的证据。',
      deathRate: '30%',
      addFlags: ['absolute_promise']
    },
    {
      id: 'B',
      text: '不一样的是，我不再急着让你相信。我会先停止解释、尊重你的边界，把我能改的事做出来。',
      outcome: 'survive',
      pattern: 'empathy',
      effects: { empathy: 2, trust: 2, boundaryRespect: 1, emotionalSafety: 2, oldPatternDetected: -1 },
      targetReaction: 'TA 看着这句话停了很久，最后说：“我现在还不能给你答案，但这句话我听进去了。”',
      systemComment: '系统识别：旧循环中断。你没有索要立刻相信，而是把修复从语言移到行动。',
      followUp: '结局影响：如果共情、边界和信任足够高，将触发隐藏通关。',
      addFlags: ['broke_old_loop']
    },
    {
      id: 'C',
      text: '那你要怎么样才肯回来？你直接说条件。',
      outcome: 'death',
      pattern: 'control',
      effects: { control: 3, pressure: 3, damage: 2, emotionalSafety: -3 },
      targetReaction: 'TA 回：“你看，你还是想把它变成一个通关条件。”',
      systemComment: '系统识别：复合索要。你把修复理解成交易，把 TA 的感受理解成条件清单。',
      followUp: '死亡条件触发：你不是在修复，你是在要求给答案。',
      deathTitle: '复合索要',
      deathReport: '你要的是安抚，TA 感到的是被迫交卷。INFJ 副本最终关失败：你仍然把关系变成了你的确认需求。',
      deathRate: '38%',
      addFlags: ['asked_for_return_terms']
    },
    {
      id: 'D',
      text: '我会先做三件具体的事：不在你要空间时追问、不把旧事叫翻旧账、每周复盘一次我有没有又开始自证。',
      outcome: 'hidden',
      pattern: 'logic',
      effects: { logic: 2, trust: 2, boundaryRespect: 1, empathy: 1 },
      targetReaction: 'TA 回：“这比以前具体。”但也补了一句：“我会看，不会马上信。”',
      systemComment: '系统识别：可观察行动。你没有把逻辑当成说明书，而是把它变成了可检查的改变。',
      followUp: '结局影响：开放观察期结局。如果前面共情不足，仍可能只是普通通关。',
      addFlags: ['observable_plan']
    }
  ],
  successText: '最终关完成。系统正在根据你的旧模式、边界感和情绪安全值生成结局。'
};
