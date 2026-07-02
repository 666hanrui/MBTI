import type { ChallengeQuestion } from '../../types';

export const infjQuestionOne: ChallengeQuestion = {
  id: 'infj-narrative-1',
  level: 1,
  title: '你临时改了约',
  scene: '前天你们本来说好晚上一起吃饭，你临时说有事去不了。她那天没吵，只回得很淡。第二天你想补一句。',
  messages: [
    { role: 'target', content: '没事，你忙吧。' },
    { role: 'target', content: '不用特地说。' }
  ],
  question: '你会怎么回？',
  options: [
    {
      id: 'A',
      text: '你别这样说话行不行，我又不是故意放你鸽子。',
      outcome: 'death',
      pattern: 'pressure',
      effects: { pressure: 3, damage: 2, emotionalSafety: -3, oldPatternDetected: 2 },
      targetReaction: '她回了个“嗯”，后面就没再说了。',
      systemComment: '这句话第一反应是在替自己挡，听起来像把她的不舒服也变成她的问题。',
      followUp: '这一关直接掉下去：她本来就没力气吵，你又把话题推成谁对谁错。',
      deathTitle: '一开口就顶回去',
      deathReport: '你想解释自己不是故意的，但她听到的是：她连不舒服都不能表现出来。对 INFJ 来说，这种“我还没说，你已经先防御”的感觉很劝退。',
      deathRate: '31%',
      addFlags: ['pressure_interrogation']
    },
    {
      id: 'B',
      text: '我昨天真的是临时有事，不是不想见你，你先听我说完。',
      outcome: 'damage',
      pattern: 'self_proof',
      effects: { selfProof: 2, empathy: -1, damage: 1, oldPatternDetected: 1, emotionalSafety: -1 },
      targetReaction: '她没有打断你，但也没接话。过了一会儿，只回了个“嗯”。',
      systemComment: '这句话很常见，也不算恶意，但重点还是在证明“我不是那种人”。',
      followUp: '后面她会更容易觉得：你关心的是解释清楚，不是她昨天怎么过去的。',
      deathTitle: '急着证明自己',
      deathReport: '这不是最糟的回答，但它太像很多关系里的老路：出了事先解释动机，再处理感受。她可能不会立刻走，但会更不想往下说。',
      deathRate: '42%',
      addFlags: ['self_proof_seen']
    },
    {
      id: 'C',
      text: '嗯，我昨天处理得不好。你现在不想聊也行，我先不找理由了。',
      outcome: 'survive',
      pattern: 'empathy',
      effects: { empathy: 2, boundaryRespect: 1, trust: 1, emotionalSafety: 2 },
      targetReaction: '她停了一会儿，回：“我现在确实不太想聊。”但语气没那么硬了。',
      systemComment: '这句像真人会说的话：没急着讲大道理，也没逼她马上回应。',
      followUp: '你先把门口让出来了，她后面才有可能说一点真实想法。',
      addFlags: ['held_first_silence']
    },
    {
      id: 'D',
      text: '好，那你先冷静吧，我不打扰你了。',
      outcome: 'hidden',
      pattern: 'avoidance',
      effects: { avoidance: 2, boundaryRespect: -1, damage: 1, trust: -1 },
      targetReaction: '她没再回。你以为自己给了空间，但这句话听起来也有点赌气。',
      systemComment: '“不打扰”有时候不是体贴，是把话停在一个很冷的位置。',
      followUp: '这个选择不会马上死，但后面她可能会觉得你一遇到不舒服就撤。',
      deathTitle: '把空间说成冷场',
      deathReport: '你看起来是退一步，其实像把门轻轻带上。她要的不是你消失，是你别一边退开一边让她猜。',
      deathRate: '19%',
      addFlags: ['cold_space_pollution']
    }
  ],
  successText: '你先活下来了。这个副本不会奖励漂亮话，只看你第一反应是不是像真人在乎。'
};
