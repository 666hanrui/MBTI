import type { ChallengeQuestion } from '../../types';

export const infjQuestionFour: ChallengeQuestion = {
  id: 'infj-narrative-4',
  level: 4,
  title: '她提起上一次',
  scene: '第二天她愿意继续聊，但没有从昨天那件事开始，而是提到了之前一件类似的小事。',
  messages: [
    { role: 'target', content: '其实也不是第一次了。' },
    { role: 'target', content: '上次我在楼下等你，你也是快到点才说来不了。' }
  ],
  conditionalLines: [
    { whenFlags: ['fake_boundary'], content: '她又说：“就像昨天，你说最后一句，后面还是发了很多。”' },
    { whenFlags: ['punitive_withdrawal'], content: '她说：“我也不知道你不找我是尊重我，还是在等我先低头。”' },
    { whenFlags: ['respected_space'], content: '她补了一句：“昨天你真的没继续发，我才觉得可以接着说。”' }
  ],
  question: '她提起之前的事，你怎么回？',
  options: [
    {
      id: 'A',
      text: '你怎么又提这个？上次不是已经过去了吗？',
      outcome: 'death',
      pattern: 'attack',
      effects: { damage: 3, emotionalSafety: -3, oldPatternDetected: 2 },
      targetReaction: '她回：“好，那不说了。”',
      systemComment: '这句话太像现实里的关门声了。你一说“又提”，她后面就很难再讲。',
      followUp: '对她来说，那件事不是旧账，是同一种感觉又出现了一次。',
      deathTitle: '一句“又提”把门关上',
      deathReport: '你以为她在翻旧账，其实她是在说“我不是只因为这一次难受”。你把它叫成旧事，她就更确定你没有把它当回事。',
      deathRate: '44%',
      addFlags: ['old_wound_shamed']
    },
    {
      id: 'B',
      text: '我之前确实没当回事。你不是只气昨天，是这几次加起来都让你不舒服。',
      outcome: 'survive',
      pattern: 'empathy',
      effects: { empathy: 2, trust: 2, emotionalSafety: 2, oldPatternDetected: -1 },
      targetReaction: '她回：“嗯，就是这种感觉。”',
      systemComment: '这句不夸张，但很有效：你承认这是连续的，不是把她说成小题大做。',
      followUp: '她会更愿意继续说，因为你没有急着把过去切掉。',
      addFlags: ['old_wound_acknowledged']
    },
    {
      id: 'C',
      text: '那你想让我怎么办？我也不能回到上次重新来。',
      outcome: 'damage',
      pattern: 'self_proof',
      effects: { selfProof: 2, damage: 2, oldPatternDetected: 1, emotionalSafety: -1 },
      targetReaction: '她回：“我不是让你穿越。”语气又淡下来了。',
      systemComment: '这句话也很像真人会说，但它会把她的问题变成“你在为难我”。',
      followUp: '后面如果你再这样回，结局很可能只是残血，不是真通过。',
      deathTitle: '把修复说成没办法',
      deathReport: '她不是要你回到过去，她是想知道你现在有没有真的看见。你一说“那我怎么办”，她就又要反过来安抚你。',
      deathRate: '27%',
      addFlags: ['helpless_defense']
    },
    {
      id: 'D',
      text: '别想这些了，今天我请你喝奶茶，咱们开心点。',
      outcome: 'hidden',
      pattern: 'avoidance',
      effects: { avoidance: 2, playfulness: 1, damage: 1, emotionalSafety: -1 },
      targetReaction: '她回：“我不是想喝奶茶。”',
      systemComment: '这句很生活，但也很容易踩坑。你想缓和气氛，她会觉得你又想跳过去。',
      followUp: '后面如果没有真正改动作，补偿会变成“哄一下就算了”。',
      deathTitle: '想哄过去',
      deathReport: '奶茶可以喝，但不能替代认真听。她要的不是今天开心一点，是以后别再一次次让她自己消化。',
      deathRate: '21%',
      addFlags: ['skipped_the_weight']
    }
  ],
  successText: '这一关要像人，但不能滑过去。人会说错话，所以选项里保留了真实的错法。'
};
