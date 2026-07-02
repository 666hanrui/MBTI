import type { ChallengeQuestion } from '../types';

export const entjQuestions: ChallengeQuestion[] = [
  {
    id: 'entj-1',
    level: 1,
    title: '上菜太慢了',
    scene: '你和 ENTJ 第一次约会。你选了一家餐厅。吃到一半，TA 放下筷子看着你。',
    messages: [
      { role: 'target', content: '这家上菜速度有点慢。你平时选餐厅会看评分还是看推荐？' },
      { role: 'target', content: '没有批评的意思，我就是习惯性评估一下。' }
    ],
    question: '第一次约会就开始对你的决策能力做绩效评估了。怎么回？',
    options: [
      {
        id: 'A',
        text: '不好意思我没选好……下次你来定吧，你眼光肯定比我好。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你放弃了决策权',
        deathReport: '你直接让我来定。一次没问题，但你在告诉我你不想做决定。我需要的是一个能跟我并肩的人，不是一个需要我全程导航的人。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '我怎么知道它上菜慢。我是来吃饭的不是来测评的。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: 'OK。随便问问。',
        systemComment: '你在防御。他只是在收集信息，你的反应过度了。他会觉得你不够从容——也经不起审视。'
      },
      {
        id: 'C',
        text: '这家我确实是第一次来。评分不错但实战拉了。记下了——下次选餐厅先看差评区的上菜速度评价。你还有啥评估维度，一起说了我记一下。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '……上菜速度、性价比、环境噪音分贝。就这三个。',
        systemComment: '你没认输也没防御。你承认了"第一次来"——诚实。你总结了经验——"先看差评区"。你说"还有啥维度"——你把他的审视变成了玩笑但也在认真收集标准。他看到的是：这个人能接受审视，还能跟我一起优化。'
      }
    ],
    successText: '你没迎合也没对抗。你接受了评估并且用 TA 的方式回敬了 TA。ENTJ 觉得你能跟上节奏。'
  },
  {
    id: 'entj-2',
    level: 2,
    title: '你的作息该优化了',
    scene: '你们开始交往了。ENTJ 注意到你的一些"可以优化的地方"。某天 TA 很认真地看着你。',
    messages: [
      { role: 'target', content: '你每天早上都踩点出门？这样太容易出意外了。' },
      { role: 'target', content: '我帮你规划了一个新的晨间流程。提前十五分钟起床，你的人生质量会提升30%。' }
    ],
    question: '改造计划第一条——你的作息。怎么回应而不被接管人生？',
    options: [
      {
        id: 'A',
        text: '好的好的，听你的！你帮我把闹钟设好吧。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你交出了遥控器',
        deathReport: '你太配合了。今天帮你设闹钟，明天你工作要不要我也帮你做了？我找的是伴侣不是下属。而且你答应太快说明你不会执行。浪费时间。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '我这样挺好的，不用你管。你管好你自己吧。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '……随便你。',
        systemComment: '你在拒绝但带着情绪。他的 Te 会觉得你不理性。你不接受建议可以，但你的态度让他觉得你无法沟通。'
      },
      {
        id: 'C',
        text: '我的作息确实有点乱。但突然提前十五分钟我肯定做不到。你帮我拆一下——先从提前五分钟开始？顺便你也不用帮我规划，你教我方法我自己来。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '五分钟也可以。你先试一周，不行再调。',
        systemComment: '你承认了问题——他最吃这一套。但你加了条件——"从五分钟开始"、"教我方法我自己来"。你接受了优化但保持了主动权。他喜欢的是：你想变好，但你想自己执行。'
      }
    ],
    successText: '你没拒绝优化也没有交出控制权。你接受了建议但由自己来执行。'
  },
  {
    id: 'entj-3',
    level: 3,
    title: '你的问题清单',
    scene: '你们吵架了。但 ENTJ 不吵——TA 列了一个清单。',
    messages: [
      { role: 'target', content: '我整理了我们最近几次矛盾的核心问题。' },
      { role: 'target', content: '第一，你答应的事经常忘记。第二，你做决策太情绪化。第三……' }
    ],
    question: 'TA 把你的问题做成了 PPT。你是生气还是看下去？',
    options: [
      {
        id: 'A',
        text: '你说得对……我确实有这些问题。谢谢你花时间帮我整理。我会改的。',
        outcome: 'death',
        pattern: 'defense',
        deathTitle: '你全盘接受了审判',
        deathReport: '你说"我会改的"——但你真的会吗？你没有反驳没有思考就直接接受了。我列清单不是想要你认错——我是想看看你会怎么回应问题。你让我失望了。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '你说得对。我都改。你消消气。',
        outcome: 'damage',
        pattern: 'surrender',
        effects: { trust: -1 },
        targetReaction: '你根本没看内容。你的"我都改"就是敷衍。',
        systemComment: '你说"都改"但他知道你在敷衍。他要的是你认真对待问题，不是一句承诺。你的投降让他觉得你在逃避沟通。'
      },
      {
        id: 'C',
        text: '……你还真列了清单。行，我看完了。第一点和第三点我认，第二点我不完全同意。情绪化是因为你每次列清单的时候让我觉得在被审判。你给我一周，第一点和第三点我出改进方案。第二点我们改天再聊。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, boundaryRespect: 1 },
        targetReaction: '好。你出方案我看。',
        systemComment: '你看了清单——尊重了他的付出。你认了该认的——诚实。你反驳了第二点并且给了理由——逻辑在线。你说"出改进方案"——你用他的方式回应他。他要的不是你认错，是你有回应问题的能力。'
      }
    ],
    successText: '你没情绪化也没敷衍。你看了 TA 的清单、承认了该认的、反驳了该反驳的、并且承诺了改进方案。'
  },
  {
    id: 'entj-4',
    level: 4,
    title: '所以你想怎么解决',
    scene: '你心情不好，想跟 ENTJ 倾诉。TA 听了两分钟。',
    messages: [
      { role: 'target', content: '所以你现在打算怎么解决？' },
      { role: 'target', content: '你跟我讲这些情绪，但你没有说你要什么。你需要我帮你分析还是需要我做点什么？' }
    ],
    question: 'TA 的情感处理方式是：跳过情绪直接到方案。但你只是想要一个抱抱。',
    options: [
      {
        id: 'A',
        text: '我也不知道怎么办……那你觉得我应该怎么做？',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你把问题丢回给 TA',
        deathReport: '你说"你觉得呢"——你在把情绪问题变成我的问题。我来解决你的情绪还要解决你的方案？我是你的伴侣不是你的项目经理。你连自己要什么都不知道。',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '我不需要你帮我解决问题。我就是想让你抱抱我，这很难吗？',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { pressure: 2, trust: -1 },
        targetReaction: '……我当然可以抱你。但我以为你找我是在求助。',
        systemComment: '你说出了需求但带着指责。他不是不想抱你——他真的以为你在寻求方案。你的语气让他觉得自己的帮忙被嫌弃了。'
      },
      {
        id: 'C',
        text: '我现在不需要解决方案。你先抱我一下，等我缓过来了我再告诉你我需要什么。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……好。（抱）抱多久？',
        systemComment: '你清晰表达了需求——不是"抱抱我"，是"先抱、再聊方案"。你给了他明确的指令——他最需要的就是可执行的指令。你说"缓过来再告诉你"——你让他知道你有后续计划。'
      }
    ],
    successText: '你没关上门也没指责 TA。你给了 TA 一个清晰的指令——先抱，再说。'
  },
  {
    id: 'entj-5',
    level: 5,
    title: '你应该转行',
    scene: 'ENTJ 开始干涉你的职业选择。某天 TA 直接说。',
    messages: [
      { role: 'target', content: '我觉得你现在的工作没有前途。你考虑过转行吗？' },
      { role: 'target', content: '我帮你分析了几个赛道。你的能力结构更适合做 X 或 Y。' }
    ],
    question: 'TA 想帮你规划人生——但你没说要被规划。',
    options: [
      {
        id: 'A',
        text: '那你觉得我适合做什么？我听你的。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你让 TA 帮你活',
        deathReport: '你让我帮你决定人生。如果你自己都不知道要什么，那我规划完了你会执行吗？不，你不会。你只是不想做决定。我找的是伴侣，不是项目。',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '我的事我自己会管。你不要把手伸太长。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '……我在帮你。你非要这么说话的话我以后不说了。',
        systemComment: '你在推远他。他的 Te 觉得你拒绝了"资源输入"。他会退——但他会觉得你不理性、不听建议。'
      },
      {
        id: 'C',
        text: '你的分析我听听看。但我自己有自己的节奏。我现在的工作虽然不完美，但我还有东西没学完。你给我半年，我自己会做判断。到时候如果我要转，我会来找你取经。你的赛道分析先发我，我周末看。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '好。你周末看完给我反馈。',
        systemComment: '你没拒绝也没接受。你说"我听听看"——你打开了门。你说"我有自己的节奏"——你保留了主权。你说"半年后"——你给了时间线。你说"发我"——你接受了资源。他看到的是：这个人有自己的计划，但也接受信息输入。'
      }
    ],
    successText: '你没让 TA 接管你的人生也没有关上耳朵。你接受了 TA 的资源但保持了你的节奏。'
  },
  {
    id: 'entj-6',
    level: 6,
    title: '执行力的问题',
    scene: '你试着跟 ENTJ 表达一些感性的东西。TA 听完了，然后说。',
    messages: [
      { role: 'target', content: '你说的这个情况，在我看来就是一个执行力的问题。你太在意外界的评价了。' },
      { role: 'target', content: '解决方法很简单——你列一个优先级清单，把别人怎么看从你的评估体系里移除。' }
    ],
    question: 'TA 又用 Te 把你的感性问题碾压了。但你怎么让 TA 看到你的深层需求？',
    options: [
      {
        id: 'A',
        text: '你说得对……可能确实是我太在意外界评价了。那我试试你的方法。',
        outcome: 'death',
        pattern: 'defense',
        deathTitle: '你否定了自己的感受',
        deathReport: '你直接接受了我的分析。但你真的接受了吗？你只是不想跟我争。你下次还会这样——来找我倾诉，我帮你分析，你接受了但问题还在。你在敷衍我，也在敷衍你自己。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '你能不能不要总是给我解决方案？我就是想让你理解我的感受。',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { pressure: 1, trust: -1 },
        targetReaction: '……我在努力理解你，但我觉得诉苦不如解决。',
        systemComment: '你表达了需求但带着批评。他会觉得自己怎么做都不对——给方案被嫌弃，不给又会被说冷漠。'
      },
      {
        id: 'C',
        text: '你说得对，从执行层面确实是这样。但我想跟你说的不是怎么解决——我是想让你知道我现在处在一个什么样的状态里。你不用帮我解决，你就说一句"知道了"就行。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……知道了。你最近压力确实大。',
        systemComment: '你第一句认可了他的分析——"你说得对"。这让他不防御。然后你告诉了他现在需要什么——"不是要解决，是要你知道"。你给了他很轻的指令——"说一句知道了就行"。他不是不懂感情，他需要被明确告知"现在不需要方案，只需要在场"。'
      }
    ],
    successText: '你没说 TA 不懂你——你教了 TA 怎么懂你。你给了 TA 一个明确的指令。'
  },
  {
    id: 'entj-7',
    level: 7,
    title: '效益评估',
    scene: '你们经历了一次大吵。ENTJ 消失了三天。然后发来一条消息。',
    messages: [
      { role: 'target', content: '我这三天做了个复盘。' },
      { role: 'target', content: '我们之间的问题大于收益。从效率角度来说，这段关系需要重新评估。' }
    ],
    question: 'ENTJ 用战略分析的格式来提分手。但 TA 还在发消息——说明 TA 没决定。',
    options: [
      {
        id: 'A',
        text: '你的分析我看了……如果你觉得不合适的话，那就听你的吧。',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你接受了 TA 的判决',
        deathReport: '你说"听你的"——你在放弃。我在发这个消息的时候其实在等你反驳。你的放弃让我确认了——你确实不配做我的对手。也确认了——你也没那么在乎。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '你说得对。既然你觉得不合适，那就这样吧。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -2 },
        targetReaction: '……你也要做这个决定？好。',
        systemComment: '你认了他的结论。但他在发这个消息的时候其实在等你的分析——你的回应决定了他的判断。你的放弃让他确认了"确实不合适"。'
      },
      {
        id: 'C',
        text: '你的复盘我看完了。但你漏了几个变量——第一，这段时间我也有我的问题，你没算进去。第二，感情不是纯效率问题，你的模型缺了一个维度叫"磨合成本"。第三，如果你真的决定了我尊重你，但如果你在等我反驳——我在。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, emotionalSafety: 1 },
        targetReaction: '……你也有问题？你说。',
        systemComment: '你用他的方式回应他——结构化的反驳。你没求他留下——你补充了他的模型漏洞。你说"如果你在等我反驳——我在"——你知道他在测试。他最怕的是：你连反驳都不反驳就接受他的判决。'
      }
    ],
    successText: '你没求 TA 也没放弃。你用 TA 的模型补充了 TA 漏掉的维度。'
  },
  {
    id: 'entj-8',
    level: 8,
    title: '我怕一个人',
    scene: '深夜。ENTJ 破天荒喝了酒。声音和平时不一样。',
    messages: [
      { role: 'target', content: '你知道我最怕什么吗？' },
      { role: 'target', content: '我怕我拼了命走到今天，最后发现一个人都没有。' },
      { role: 'target', content: '……我喝多了。你当没听见。' }
    ],
    question: 'ENTJ 的 Fi 裂缝。一生一次的脆弱时刻。你怎么接？',
    options: [
      {
        id: 'A',
        text: '你不会一个人的。我会一直陪着你。你不需要那么累，有我在呢。',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你让 TA 缩回去了',
        deathReport: '你说"有我在"。每个人不都这么说吗？我明天还是一个人面对一切。你把我当弱者来安慰——我看出来了。我以后不会再在你面前喝多了。',
        deathRate: '55%'
      },
      {
        id: 'B',
        text: '你不会一个人的。你有我啊。',
        outcome: 'damage',
        pattern: 'surrender',
        effects: { trust: -1 },
        targetReaction: '……嗯。',
        systemComment: '你在安慰但太轻了。他会防御性地接受但内心不信。你的安慰听起来像客套——他需要的是能接住这句话的重量。'
      },
      {
        id: 'C',
        text: '我听到了。我不会假装没听见。你怕的东西我也怕。但你走到今天不是运气——你有能力，你也有我。不是那种要你照顾的我——是那种你倒了我能接住你的我。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, emotionalSafety: 2 },
        targetReaction: '……你不用说这些。我就是喝多了。',
        systemComment: '你没回避也没轻飘飘安慰。你说"我听到了"——让这个时刻被接住了。你说"你怕的东西我也怕"——用平等而不是怜悯。"你倒了我能接住你"——你承诺了功能性的陪伴。他要的不是甜言蜜语——他要的是"你倒了我能接住"。'
      }
    ],
    successText: '你没回避也没说空话。你告诉 TA——你倒了，我能接着。'
  },
  {
    id: 'entj-9',
    level: 9,
    title: '昨晚的事别再提了',
    scene: '第二天。ENTJ 恢复了正常。但 TA 突然跟你提了一个要求。',
    messages: [
      { role: 'target', content: '昨晚的事不要再提了。' },
      { role: 'target', content: '我不喜欢失控的感觉。包括在你面前。' }
    ],
    question: 'TA 在试图控制昨晚的"失控"。你怎么回应才能让 TA 觉得安全又不被控制？',
    options: [
      {
        id: 'A',
        text: '好，不提了。你说了算。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你在怕 TA',
        deathReport: '你说"你说了算"。你在怕我。我失控过，然后你在怕我。我看到你的退缩了。以后我确实不会失控了——因为我也不信任你了。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '但昨晚的事很重要。我们不能假装没发生过。',
        outcome: 'damage',
        pattern: 'control',
        effects: { pressure: 2, trust: -1 },
        targetReaction: '我说了不提。你是不是听不懂？',
        systemComment: '你在逼他面对——但他现在在防御模式。你的坚持会被他解读为"你不尊重我的边界"。他会更用力地推你走。'
      },
      {
        id: 'C',
        text: '好。不提。但我想让你知道——你昨晚说的那些，在我这里是安全的。你不用怕在我面前失控。你憋着的样子我见过，你失控的样子我也见过。都挺好的。你接着做你的 ENTJ 就好。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 2, emotionalSafety: 2 },
        targetReaction: '……你这话说的。好像我多怕你一样。',
        systemComment: '你答应了不提——你尊重了他当前的边界。但你说"在我这里是安全的"——你给了他一个无形的保证。你说"憋着的样子我见过，失控的样子也见过，都挺好"——你接纳了他的两面。他的 Fi 终于可以喘口气。'
      }
    ],
    successText: '你尊重了 TA 不想聊的边界，但告诉了 TA——你的所有样子在我这里都是安全的。'
  },
  {
    id: 'entj-10',
    level: 10,
    title: '结果最重要',
    scene: '你们遇到一个价值观分歧。ENTJ 认为"结果最重要"，你是"过程也很重要"派。',
    messages: [
      { role: 'target', content: '你的想法太理想主义了。不达到结果的过程没有任何意义。' },
      { role: 'target', content: '如果你做一件事不能保证结果，为什么还要花时间？' }
    ],
    question: 'Te vs Fi 的终极对抗。怎么在不否定 TA 也不否定自己的情况下回应？',
    options: [
      {
        id: 'A',
        text: '你说得有道理……可能我确实太理想主义了。你帮我想想怎么调整？',
        outcome: 'death',
        pattern: 'defense',
        deathTitle: '你否定了自己的价值观',
        deathReport: '你妥协了。你嘴上说我说得对，但你不是真的这么想。你妥协了然后呢？你还会一样的想法。你的投降只是在回避冲突。我宁愿你跟我吵一架。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '你说得有道理。可能是我太感性了。',
        outcome: 'damage',
        pattern: 'surrender',
        effects: { trust: -1 },
        targetReaction: '你并不是真的同意我。你在妥协。你妥协了然后呢？你还是一样的想法。浪费时间。',
        systemComment: '你投降了但他看得出来你在妥协不是真的认同。他不需要你认输——他需要你有一个经得起推敲的立场。'
      },
      {
        id: 'C',
        text: '我不同意"没有意义"这部分。目标是必要的——我同意。但过程中的变量会影响最终结果。如果你只看结果不看过程，你会错过调整路线的时机。而且——我能承受失败不是因为我不在乎结果，是因为我有重来的能力。这两者不矛盾。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, boundaryRespect: 1 },
        targetReaction: '……重来的能力。这个观点倒是有点意思。展开说说。',
        systemComment: '你没否定他的价值观——"目标是必要的——我同意"。你给了你的理由——"变量会影响结果"——你用 Te 的语言为自己的 Fi 价值观辩护。你说"重来的能力"——你用一个他尊重的概念（能力）来包装你的价值观。他听进去了。'
      }
    ],
    successText: '你没否定 TA 也没否定自己。你用 TA 能听懂的逻辑为你的价值观辩护。'
  },
  {
    id: 'entj-11',
    level: 11,
    title: '尊重还是服从',
    scene: 'ENTJ 做了一个你不认同的决定。TA 没有跟你商量。',
    messages: [
      { role: 'target', content: '我已经决定了。下周末搬到我公司附近住。' },
      { role: 'target', content: '你那边通勤太久了，这样效率更高。房子我看了几套，你挑一下。' }
    ],
    question: 'TA 把你当成了决策的一个因子而不是参与决策的人。',
    options: [
      {
        id: 'A',
        text: '好的。那你发我看看。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你被 TA 决定了',
        deathReport: '你没有反对意见。你这样让我觉得你不在乎自己的利益。一个不在乎自己的人——我需要想想要不要继续。因为你的无所谓最后会变成我的负担。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '你为什么不跟我商量就做决定？我在你眼里算什么？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, pressure: 2 },
        targetReaction: '我是在为我们的效率考虑。你非要把这上升到感情层面吗？',
        systemComment: '你的情绪化让他关闭了沟通。他觉得你不理性——"我在讨论方案你在讨论感受"。'
      },
      {
        id: 'C',
        text: '你的决策逻辑我理解了——效率优先。但这个决定涉及我，所以你应该让我参与决策而不是通知我。我不同意现在就搬。如果你有数据支持你的方案，我们坐下来谈。你列你的收益分析，我列我的成本分析。谁的有道理听谁的。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 2 },
        targetReaction: '……好。明天晚上我做一份对比表。',
        systemComment: '你没情绪化也没服从。你承认了他的逻辑——"效率优先我理解"。你指出了问题——"不是通知是商量"。你给出了方案——"你做收益分析我做成本分析"。你用他的游戏规则修正了他的决策流程。他尊重的是能上牌桌的人。'
      }
    ],
    successText: '你没情绪化也没服从。你用 TA 的游戏规则上了牌桌。'
  },
  {
    id: 'entj-12',
    level: 12,
    title: '最终判决',
    scene: '经历了所有的对抗和靠近。你们站在你家的阳台上。ENTJ 看着城市的灯光。',
    messages: [
      { role: 'target', content: '我从来没有跟任何人走到这一步。' },
      { role: 'target', content: '你知道为什么吗？因为大部分人要么怕我，要么依附我。' },
      { role: 'target', content: '你不是。你让我觉得……我可以不用那么累。' }
    ],
    question: 'ENTJ 能说出的最柔软的话。你怎么回答？',
    options: [
      {
        id: 'A',
        text: '那你就不用那么累了。有我在呢。',
        outcome: 'death',
        pattern: 'savior',
        deathTitle: '承诺太重了',
        deathReport: '你说"有我在"。你跟别人说的不一样在哪？每个人都说这句话。明天我还是要一个人面对一切。你不是我的解决方案——你是我选择的同行者。如果你把自己定位成我的避风港，那我反而不能靠岸。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '你也让我变好了很多。我觉得我们都在成长。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { trust: -1 },
        targetReaction: '……嗯。是。',
        systemComment: '你说得没错但听起来像总结报告。他现在表达的是情感层面——你回了一个项目总结。他要的不是评估，是回应。'
      },
      {
        id: 'C',
        text: '你不用不累。你该累还是累——你就是这样的人。但我想说的是：你累的时候不用一个人扛。我不是来替你解决问题的——我是来跟你一起解决问题的。你负责战略我负责执行或者反过来。你带着你的计划来，我带着我的方案来。我们吵，然后我们做决定。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { emotionalSafety: 99, trust: 99 },
        targetReaction: '……所以你是在申请"我的人生联合 CEO"的职位？',
        systemComment: '你没说"有我在"那种空话。你说"你该累还是累"——你接受了他的本质。你说"一起解决"——你用合伙人的模型定义了关系。他听到的不是"我保护你"——是"我与你并肩"。最后那句"你带着计划来我带着方案来，我们吵然后决定"——这是他理解的最高级别的浪漫。'
      }
    ],
    successText: '完美通关。你没做 TA 的避风港也没做 TA 的下属。你申请了"联合 CEO"的职位。ENTJ 接受了。'
  }
];
