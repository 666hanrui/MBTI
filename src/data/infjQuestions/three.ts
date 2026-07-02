import type { ChallengeQuestion } from '../../types';

export const infjQuestionThree: ChallengeQuestion = {
  id: 'infj-narrative-3',
  level: 3,
  title: 'TA 要一点空间',
  scene: '对话刚有一点缓和，TA 没有继续讲下去，而是提出想暂停。这里开始考验你是不是真的尊重边界。',
  messages: [
    { role: 'target', content: '我想自己待一会儿。' },
    { role: 'target', content: '不是不理你，我只是现在有点累。' }
  ],
  conditionalLines: [
    { whenFlags: ['feeling_hijack'], content: '隐藏台词：TA 说：“我刚才说完以后，感觉又变成我要照顾你的情绪。”' },
    { whenFlags: ['named_the_feeling'], content: '隐藏台词：TA 说：“谢谢你刚才没有急着反驳。”' }
  ],
  question: 'TA 要空间时，你怎么处理？',
  options: [
    {
      id: 'A',
      text: '那你到底还要不要继续？你给我一个准话。',
      outcome: 'death',
      pattern: 'pressure',
      effects: { pressure: 3, damage: 2, boundaryRespect: -2, emotionalSafety: -3 },
      targetReaction: 'TA 很久没有回复。你看着那行消息，突然意识到你把“休息”逼成了“判决”。',
      systemComment: '系统识别：安全感勒索。你把 TA 的喘息请求翻译成关系审判。',
      followUp: '死亡条件触发：INFJ 要的不是被困在你的不安里。',
      deathTitle: '安全感勒索',
      deathReport: 'TA 要的是喘气，你递过去的是一张考卷。你不是在确认关系，你是在让 TA 为你的恐惧负责。',
      deathRate: '41%',
      addFlags: ['security_extortion']
    },
    {
      id: 'B',
      text: '好。我晚点再找你，这段时间我不会继续追问。',
      outcome: 'survive',
      pattern: 'boundary',
      effects: { boundaryRespect: 2, trust: 1, emotionalSafety: 1, pressure: -1 },
      targetReaction: 'TA 回：“嗯，谢谢。”只有两个字，但紧绷感明显低了一点。',
      systemComment: '系统识别：边界尊重。你给了空间，也没有把空间变成惩罚。',
      followUp: '后续影响：边界尊重上升。第 5 关有机会触发观察期结局。',
      addFlags: ['respected_space']
    },
    {
      id: 'C',
      text: '好，我不逼你。但我想最后说几句，你看不看都行。',
      outcome: 'damage',
      pattern: 'self_proof',
      effects: { selfProof: 2, boundaryRespect: -1, oldPatternDetected: 1, damage: 1 },
      targetReaction: '你发出去以后才发现，“最后几句”其实有一整屏。TA 没有回。',
      systemComment: '系统识别：伪尊重。你尊重的是台词，不是边界。',
      followUp: '后续影响：触发“边界失效”标记。后面 TA 可能直接指出你说给空间却没有做到。',
      deathTitle: '伪尊重',
      deathReport: '你说不逼，但消息已经替你逼完了。TA 要安静，你给的是倒计时。',
      deathRate: '33%',
      addFlags: ['fake_boundary']
    },
    {
      id: 'D',
      text: '行，那我也消失几天。你想清楚再说。',
      outcome: 'hidden',
      pattern: 'avoidance',
      effects: { avoidance: 2, control: 1, boundaryRespect: -2, trust: -1, damage: 1 },
      targetReaction: 'TA 没再回复。表面上你们都安静了，但这不是空间，是冷战预告。',
      systemComment: '系统识别：惩罚性撤退。你把边界变成了博弈。',
      followUp: '隐藏污染：如果后续再索要回应，会触发“你先消失又怪 TA 不靠近”的死亡报告。',
      deathTitle: '惩罚性撤退',
      deathReport: '你不是给空间，你是在用消失测试 TA 会不会追。INFJ 副本最怕这种安静里的惩罚感。',
      deathRate: '18%',
      addFlags: ['punitive_withdrawal']
    }
  ],
  successText: '你活过了第三关。系统提示：边界不是撤退，是让关系不继续受伤。'
};
