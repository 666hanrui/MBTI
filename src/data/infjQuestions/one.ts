import type { ChallengeQuestion } from '../../types';

export const infjQuestionOne: ChallengeQuestion = {
  id: 'infj-narrative-1',
  level: 1,
  title: 'TA 说没事',
  scene: '关系已经冷了几天。你终于发了一句“我们聊聊吧”，TA 回得很慢，像是把很多话都压回去了。',
  messages: [
    { role: 'target', content: '没事。' },
    { role: 'target', content: '你不用解释。' }
  ],
  question: '第一句话，你怎么接？',
  options: [
    {
      id: 'A',
      text: '你是不是又在冷暴力？有什么不能直接说？',
      outcome: 'death',
      pattern: 'pressure',
      effects: { pressure: 3, damage: 2, emotionalSafety: -3, oldPatternDetected: 2 },
      targetReaction: 'TA 的头像安静了很久，最后只回了一个“嗯”。',
      systemComment: '系统识别：情绪逼供。你把 TA 的沉默翻译成审判，又把自己的不安递成考卷。',
      followUp: '死亡条件触发：沉默不一定是惩罚，但被逼解释很容易变成最后一根线。',
      deathTitle: '情绪逼供',
      deathReport: '你以为你在争取回应，其实你是在逼 TA 立刻交卷。TA 的沉默不是考验你，是已经没有力气继续解释。',
      deathRate: '31%',
      addFlags: ['pressure_interrogation']
    },
    {
      id: 'B',
      text: '我真的不是那个意思，你听我解释，我可以从头说。',
      outcome: 'damage',
      pattern: 'self_proof',
      effects: { selfProof: 2, empathy: -1, damage: 1, oldPatternDetected: 1, emotionalSafety: -1 },
      targetReaction: '“正在输入”出现了两次，又消失了。TA 没有打断你，但也没有接住你。',
      systemComment: '系统识别：证明欲 +2。你以为解释能修复关系，但你又把镜头推回了自己身上。',
      followUp: '后续影响：旧模式档案已建立。之后如果继续自证，可能触发“解释成瘾”隐藏死亡。',
      deathTitle: '解释成瘾',
      deathReport: 'TA 要的不是说明书，是被接住的感受。你把机会用来证明自己，于是机会开始变窄。',
      deathRate: '42%',
      addFlags: ['self_proof_seen']
    },
    {
      id: 'C',
      text: '我知道你现在不想听解释。我先不逼你回应，但我会认真想这件事。',
      outcome: 'survive',
      pattern: 'empathy',
      effects: { empathy: 2, boundaryRespect: 1, trust: 1, emotionalSafety: 2 },
      targetReaction: 'TA 停了十几秒，回了一句：“嗯，我现在确实不太想讲。”',
      systemComment: '系统识别：情绪接住。你没有急着洗白，也没有把沉默当成攻击。',
      followUp: '后续影响：TA 的防御略微下降。下一关将进入真实感受区。',
      addFlags: ['held_first_silence']
    },
    {
      id: 'D',
      text: '好，那你先冷静吧。我也不打扰你了。',
      outcome: 'hidden',
      pattern: 'avoidance',
      effects: { avoidance: 2, boundaryRespect: -1, damage: 1, trust: -1 },
      targetReaction: 'TA 没有再回。对话停在这里，像一扇门被轻轻推上。',
      systemComment: '系统识别：伪尊重。你说的是给空间，语气里却像撤退和惩罚。',
      followUp: '隐藏污染：如果后面继续用“我不打扰你了”逃避修复，会触发冷处理反噬。',
      deathTitle: '冷处理反噬',
      deathReport: '你把空间变成了关系惩罚。TA 不是需要你消失，是需要你别再制造压力。',
      deathRate: '19%',
      addFlags: ['cold_space_pollution']
    }
  ],
  successText: '你暂时活过了第一关。但系统已经开始记录你的旧模式。'
};
