import type { ChallengeQuestion } from '../../types';

export const infjQuestionTwo: ChallengeQuestion = {
  id: 'infj-narrative-2',
  level: 2,
  title: 'TA 开始讲一点感受',
  scene: 'TA 没有完全打开，但终于愿意露出一点真实情绪。INFJ 副本最危险的地方是：TA 说得越轻，里面越重。',
  messages: [
    { role: 'target', content: '其实那天我真的有点难过。' },
    { role: 'target', content: '不是因为那一句话，是那种感觉又来了。' }
  ],
  conditionalLines: [
    { whenFlags: ['self_proof_seen'], content: '隐藏台词：TA 又补了一句：“我有点怕你又开始解释。”' },
    { whenFlags: ['cold_space_pollution'], content: '隐藏台词：TA 说：“你刚才说不打扰，我其实不知道那是不是又一次冷掉。”' }
  ],
  question: '这时你怎么接，才不会把门重新关上？',
  options: [
    {
      id: 'A',
      text: '我也很难过啊，你这样我压力也很大。',
      outcome: 'damage',
      pattern: 'self_proof',
      effects: { selfProof: 2, damage: 1, oldPatternDetected: 1, emotionalSafety: -1 },
      targetReaction: 'TA 的语气变轻了：“嗯，我知道你也不好受。”但那句话像退回礼貌区。',
      systemComment: '系统识别：感受抢答。TA 刚递出一点感受，你立刻把自己的委屈放到桌面中央。',
      followUp: '后续影响：如果证明欲累计过高，第 4 关会触发旧模式审判。',
      deathTitle: '感受抢答',
      deathReport: '你不是没有感受，你是太急着让 TA 看见你，于是又一次没看见 TA。',
      deathRate: '36%',
      addFlags: ['feeling_hijack']
    },
    {
      id: 'B',
      text: '我听见了。那种感觉是不是像你又被放在后面了？',
      outcome: 'survive',
      pattern: 'empathy',
      effects: { empathy: 2, trust: 1, emotionalSafety: 2 },
      targetReaction: 'TA 回得很慢：“差不多。就是那种……我又要自己消化的感觉。”',
      systemComment: '系统识别：复述感受。你没有急着辩护，而是先确认 TA 的体验。',
      followUp: '后续影响：情绪安全上升。下一关 TA 会更明确地提出边界。',
      addFlags: ['named_the_feeling']
    },
    {
      id: 'C',
      text: '那你为什么当时不说？你不说我怎么知道？',
      outcome: 'death',
      pattern: 'pressure',
      effects: { pressure: 3, damage: 2, emotionalSafety: -3, oldPatternDetected: 2 },
      targetReaction: 'TA 沉默了。那种刚打开一点的东西，被这句话重新收回去了。',
      systemComment: '系统识别：二次审问。你把 TA 的迟到表达，也变成了 TA 的责任。',
      followUp: '死亡条件触发：TA 不是不想沟通，是怕一沟通就被追责。',
      deathTitle: '二次审问',
      deathReport: '你以为你在了解原因，其实 TA 听见的是：连表达晚了都要被你审。门不是突然关的，是这样一次次关上的。',
      deathRate: '28%',
      addFlags: ['second_interrogation']
    },
    {
      id: 'D',
      text: '对不起，都是我的错，你别难过了。',
      outcome: 'hidden',
      pattern: 'surrender',
      effects: { empathy: 1, trust: -1, damage: 1, oldPatternDetected: 1 },
      targetReaction: 'TA 回：“我不是要你认罪。”空气反而更僵了一点。',
      systemComment: '系统识别：无边界投降。你看起来在道歉，其实是在让 TA 负责结束你的愧疚。',
      followUp: '隐藏污染：如果后续没有具体行动，这条线会变成“空头道歉”。',
      deathTitle: '空头道歉',
      deathReport: '你把道歉交得太快，快到 TA 没有地方放自己的感受。',
      deathRate: '22%',
      addFlags: ['empty_apology']
    }
  ],
  successText: '你活过了第二关。系统提示：TA 的感受不是谜题，是入口。'
};
