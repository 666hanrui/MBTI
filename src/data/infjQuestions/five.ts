import type { ChallengeQuestion } from '../../types';

export const infjQuestionFive: ChallengeQuestion = {
  id: 'infj-narrative-5',
  level: 5,
  title: '她问以后怎么办',
  scene: '聊到这里，她没有说原谅，也没有说结束。她问了一个很实际的问题。',
  messages: [
    { role: 'target', content: '那以后呢？' },
    { role: 'target', content: '我不想每次都等你发现我不开心了，再来补。' }
  ],
  conditionalLines: [
    { whenFlags: ['old_wound_acknowledged'], content: '她说：“至少这次你没有说我翻旧账。”' },
    { whenFlags: ['empty_apology'], content: '她说：“我不想每次都变成吃顿饭就算了。”' },
    { whenFlags: ['cold_space_pollution'], content: '她说：“我也不想一直猜，你是不是真的想解决。”' }
  ],
  question: '最后你怎么回？',
  options: [
    {
      id: 'A',
      text: '我以后真的不会这样了，你再信我一次。',
      outcome: 'damage',
      pattern: 'self_proof',
      effects: { selfProof: 2, oldPatternDetected: 1, damage: 1, trust: -1 },
      targetReaction: '她没有马上否定你，但只回了句：“你以前也这么说过。”',
      systemComment: '这句话很真实，但太空。听起来像想快点把这件事盖过去。',
      followUp: '如果前面已经扣了很多分，这里会进入残血结局。',
      deathTitle: '只剩保证',
      deathReport: '“我以后不会了”不是没用，但单独说出来太轻。她真正想知道的是：下次遇到类似情况，你具体会怎么做。',
      deathRate: '30%',
      addFlags: ['absolute_promise']
    },
    {
      id: 'B',
      text: '下次如果我要改时间，我提前跟你说，不让你等到最后才知道。做不到我也不找理由。',
      outcome: 'survive',
      pattern: 'empathy',
      effects: { empathy: 2, trust: 2, boundaryRespect: 1, emotionalSafety: 2, oldPatternDetected: -1 },
      targetReaction: '她回：“你先做到吧。”但这次没有把话说死。',
      systemComment: '这句不像大承诺，更像一个能被看见的改变。',
      followUp: '这不是复合成功，但至少不像在糊弄。',
      addFlags: ['broke_old_loop']
    },
    {
      id: 'C',
      text: '那你要我怎么做才肯好？你直接说，我照做。',
      outcome: 'death',
      pattern: 'control',
      effects: { control: 3, pressure: 3, damage: 2, emotionalSafety: -3 },
      targetReaction: '她回：“我不想给你列任务。”',
      systemComment: '这句话表面很配合，其实把问题又丢回给她。',
      followUp: '这一关死在这里：她要的是你自己意识到，不是让她当老师批作业。',
      deathTitle: '把修复交给她安排',
      deathReport: '你说“你直接说我照做”，听起来很听话，但她会觉得累。因为这样一来，连怎么修复都要她来教。',
      deathRate: '38%',
      addFlags: ['asked_for_return_terms']
    },
    {
      id: 'D',
      text: '我先改两个地方：有变动提前说；你不想聊的时候我先停，不用“最后一句”一直补。',
      outcome: 'hidden',
      pattern: 'logic',
      effects: { logic: 2, trust: 2, boundaryRespect: 1, empathy: 1 },
      targetReaction: '她回：“这两个你要是真能做到，会好很多。”',
      systemComment: '这句不煽情，但落地。对 INFJ 来说，稳定的小动作比一大段保证更可信。',
      followUp: '如果前面也比较稳，这里会进入观察期或隐藏通关。',
      addFlags: ['observable_plan']
    }
  ],
  successText: '最终关结束。结果会根据你前面有没有一直防御、追问、逃开来判断。'
};
