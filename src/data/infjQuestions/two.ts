import type { ChallengeQuestion } from '../../types';

export const infjQuestionTwo: ChallengeQuestion = {
  id: 'infj-narrative-2',
  level: 2,
  title: '她说不是这一顿饭',
  scene: '她没有继续冷着，但也没有真的翻篇。她开始说得更具体一点。',
  messages: [
    { role: 'target', content: '我不是因为一顿饭。' },
    { role: 'target', content: '是你每次都是最后才跟我说，我就只能自己消化。' }
  ],
  conditionalLines: [
    { whenFlags: ['self_proof_seen'], content: '她又补了一句：“我知道你有理由，但我现在真的不想再听一遍理由。”' },
    { whenFlags: ['cold_space_pollution'], content: '她说：“你刚刚说不打扰，我也不知道你是体谅我，还是又准备冷掉。”' }
  ],
  question: '她说到这里，你怎么接？',
  options: [
    {
      id: 'A',
      text: '那你当时也可以直接说啊，你不说我怎么知道？',
      outcome: 'death',
      pattern: 'pressure',
      effects: { pressure: 3, damage: 2, emotionalSafety: -3, oldPatternDetected: 2 },
      targetReaction: '她沉默了一会儿，回：“算了。”',
      systemComment: '这句话很真实，也很致命。她刚说出一点不舒服，你马上开始追责她为什么没早点说。',
      followUp: '这一关死得很快：她不是来交作业的，她只是想让你知道那天她不好受。',
      deathTitle: '把表达变成追责',
      deathReport: '你问“你为什么不说”，听起来像在说：连难过得晚一点，都是她的问题。她本来只是想说感受，结果又变成她要解释自己。',
      deathRate: '28%',
      addFlags: ['second_interrogation']
    },
    {
      id: 'B',
      text: '我懂了，你不是气我忙，是觉得自己被晾在那儿了。',
      outcome: 'survive',
      pattern: 'empathy',
      effects: { empathy: 2, trust: 1, emotionalSafety: 2 },
      targetReaction: '她回：“差不多吧。就是那种感觉。”',
      systemComment: '这句不华丽，但像是在认真听。你没有抢话，也没有急着洗白。',
      followUp: '她不一定马上好，但至少没有继续往回缩。',
      addFlags: ['named_the_feeling']
    },
    {
      id: 'C',
      text: '我知道你不开心，但我这几天也挺累的。',
      outcome: 'damage',
      pattern: 'self_proof',
      effects: { selfProof: 2, damage: 1, oldPatternDetected: 1, emotionalSafety: -1 },
      targetReaction: '她回：“嗯，你也累。”语气又客气起来了。',
      systemComment: '这句话不是不能说，但现在说太早了。她刚把自己的不舒服拿出来，你马上把天平搬回你这边。',
      followUp: '后面她会更容易觉得：讲到最后又要先照顾你的感受。',
      deathTitle: '感受被抢走',
      deathReport: '你不是没资格累，但这个时间点一说，话题就变成“你也不容易”。她会觉得自己刚开口，又要退回去。',
      deathRate: '36%',
      addFlags: ['feeling_hijack']
    },
    {
      id: 'D',
      text: '那我明天请你吃饭补回来，别不开心了。',
      outcome: 'hidden',
      pattern: 'avoidance',
      effects: { empathy: 1, trust: -1, damage: 1, oldPatternDetected: 1 },
      targetReaction: '她回：“不是吃饭的问题。”',
      systemComment: '这句很像现实里会发的补救，但有点跳太快了。她讲的是被忽略，你给的是补偿。',
      followUp: '这个选择不一定马上死，但后面如果你还一直想“哄过去”，她会更累。',
      deathTitle: '拿补偿当修复',
      deathReport: '奶茶、吃饭、礼物都能缓和气氛，但不能替代真正听懂。她不是缺一顿饭，是缺你别再把她的感受轻轻带过。',
      deathRate: '22%',
      addFlags: ['empty_apology']
    }
  ],
  successText: '这一关重点不是说多漂亮，而是别把她刚拿出来的感受又塞回去。'
};
