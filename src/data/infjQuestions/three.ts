import type { ChallengeQuestion } from '../../types';

export const infjQuestionThree: ChallengeQuestion = {
  id: 'infj-narrative-3',
  level: 3,
  title: '她说今天先算了',
  scene: '你们聊了几句，她没有继续往下说。不是突然消失，就是很明显不想再聊了。',
  messages: [
    { role: 'target', content: '今天先算了吧。' },
    { role: 'target', content: '我有点累，想早点睡。' }
  ],
  conditionalLines: [
    { whenFlags: ['feeling_hijack'], content: '她又说：“我刚说完，好像又变成我要照顾你的情绪了。”' },
    { whenFlags: ['named_the_feeling'], content: '她补了一句：“刚刚你那样说，我是有听进去的。”' }
  ],
  question: '她要停一下，你怎么回？',
  options: [
    {
      id: 'A',
      text: '那你到底还要不要继续？你别一直这样吊着我。',
      outcome: 'death',
      pattern: 'pressure',
      effects: { pressure: 3, damage: 2, boundaryRespect: -2, emotionalSafety: -3 },
      targetReaction: '她回：“我只是说我累了。”然后就没再回。',
      systemComment: '这句话像很多真实争吵里的崩盘点：对方说累，你听成了关系判决。',
      followUp: '你不是在确认关系，你是在要求她现在立刻处理你的不安。',
      deathTitle: '把暂停逼成表态',
      deathReport: '她说想休息，不等于她在吊着你。你一追问，她会觉得连停一下都不安全。',
      deathRate: '41%',
      addFlags: ['security_extortion']
    },
    {
      id: 'B',
      text: '好，那你先睡。我不继续发了，明天你方便的时候再说。',
      outcome: 'survive',
      pattern: 'boundary',
      effects: { boundaryRespect: 2, trust: 1, emotionalSafety: 1, pressure: -1 },
      targetReaction: '她回：“嗯。”过了一会儿又补了句：“晚安。”',
      systemComment: '这句很普通，但舒服。没有表演理解，也没有继续追问。',
      followUp: '她要停，你就真的停。这个细节比很多长篇大论更有用。',
      addFlags: ['respected_space']
    },
    {
      id: 'C',
      text: '好，最后一句，我真的不是想让你难受。',
      outcome: 'damage',
      pattern: 'self_proof',
      effects: { selfProof: 2, boundaryRespect: -1, oldPatternDetected: 1, damage: 1 },
      targetReaction: '你发完“最后一句”以后，又忍不住补了两句。她没回。',
      systemComment: '这太像真实聊天了：说最后一句，结果最后了半天。',
      followUp: '她要的是停下，你给的是继续解释，只是包装得温柔一点。',
      deathTitle: '最后一句没完没了',
      deathReport: '你不是故意压她，但你停不下来。INFJ 很容易在这种时候觉得：连一点安静都要靠她自己争取。',
      deathRate: '33%',
      addFlags: ['fake_boundary']
    },
    {
      id: 'D',
      text: '行，那我也不找你了，你自己想清楚吧。',
      outcome: 'hidden',
      pattern: 'avoidance',
      effects: { avoidance: 2, control: 1, boundaryRespect: -2, trust: -1, damage: 1 },
      targetReaction: '她没回。你们都安静了，但这个安静一点也不轻松。',
      systemComment: '这句像给空间，其实带着点赌气。',
      followUp: '后面她可能会觉得：你不是尊重她休息，你是在等她低头。',
      deathTitle: '赌气式消失',
      deathReport: '你想让她自己想清楚，但这句话听起来像“你不哄我，我也不理你”。这不是空间，是冷战预告。',
      deathRate: '18%',
      addFlags: ['punitive_withdrawal']
    }
  ],
  successText: '这一关的关键很简单：她说停，你就真的停。别把体贴说得太满。'
};
