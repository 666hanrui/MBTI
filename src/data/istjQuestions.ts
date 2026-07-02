import type { ChallengeQuestion } from '../types';

export const istjQuestions: ChallengeQuestion[] = [
  {
    id: 'istj-1',
    level: 1,
    title: '按计划恋爱',
    scene: '你跟 ISTJ 约会了几次。TA 发来一条消息。',
    messages: [
      { role: 'target', content: '我觉得我们应该把这个关系规范化一下。' },
      { role: 'target', content: '每周约会两次，周三和周六晚上。你有时间吗？' }
    ],
    question: 'TA 把恋爱变成了排班表。你怎么接？',
    options: [
      {
        id: 'A',
        text: '都可以，看你时间方便就行。你定就好。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你什么都没说',
        deathReport: '他是在跟你商量不是在发通知。你说"你定就好"——他反而不知道你是真的想谈还是随便。他要的是一个能一起规划的人，不是一个什么都行的人。',
        deathRate: '25%'
      },
      {
        id: 'B',
        text: '恋爱不是应该随性一点吗？你这样太死板了。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我只是想提高效率减少不确定性。你不喜欢就算了。',
        systemComment: '你直接否定了他规划的方式。他觉得"太死板"是在说他这个人不行。他不会再跟你商量了。'
      },
      {
        id: 'C',
        text: '周三和周六可以。不过我周末有时候要加班，周三如果太累我们也可以改成周五。先试两周看看效果？',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '可以。先试两周，回头复盘调整。',
        systemComment: '你没拒绝规划——你接受了框架并提出了优化。他最喜欢"先试行再调整"这套。你既展示了想法又尊重了他的模式。'
      }
    ],
    successText: '你接受了他的规划方式并提出了自己的调整方案。ISTJ 觉得你是一个可以一起做计划的人。'
  },
  {
    id: 'istj-2',
    level: 2,
    title: '情感短路',
    scene: '你最近工作压力很大，回家后跟 ISTJ 倾诉。TA 听完后沉默了几秒。',
    messages: [
      { role: 'target', content: '你的问题是时间管理没做好。你把任务按优先级重新排一下，每天提前十五分钟到公司就不会这么被动了。' },
    ],
    question: '你在求安慰，TA 在给你做优化方案。怎么让 TA 理解你需要的是情绪价值？',
    options: [
      {
        id: 'A',
        text: '有道理。我明天试试。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你的情绪被忽略了',
        deathReport: '他以为问题解决了——你接受了方案嘛。结果你后来又说他不理解你。但他当时是真的不知道你还需要别的。你不说清楚他真不知道。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '我跟你讲我的感受，你跟我讲时间管理？你到底有没有在听我说话？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我在听。而且我在帮你解决问题。这不是你想要的吗？',
        systemComment: '你否定了他的帮助方式。他的核心语言是行动和解决——你让他觉得"我做什么都不对"。他会困惑而且受伤。'
      },
      {
        id: 'C',
        text: '你的方案是没错。但我现在需要的不是方案——你陪我坐会儿就行。方案我明天再执行。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '哦……好。（坐过来）那你要不要喝点什么？',
        systemComment: '你先肯定了他的方案——他觉得自己被认可了。然后你清楚地说了你现在需要的是陪伴不是方案。他需要明确的指令——你说"陪我坐会儿"他就知道怎么做了。'
      }
    ],
    successText: '你没有否定他的好意，而是直接告诉了他你现在的需求。ISTJ 需要明确的指示——你给了他。'
  },
  {
    id: 'istj-3',
    level: 3,
    title: '批评模式',
    scene: '你兴冲冲做了一顿饭。ISTJ 很认真地吃完，然后开口。',
    messages: [
      { role: 'target', content: '肉稍微老了点。你下次可以试试大火快炒，不要煮太久。' },
      { role: 'target', content: '整体还行，比上次进步了。' }
    ],
    question: '你精心准备的一顿饭，TA 先挑毛病再给好评。怎么反应？',
    options: [
      {
        id: 'A',
        text: '好，我下次注意。那你多吃点。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你把改进建议听成了批评',
        deathReport: '他说改进建议是在帮你变好——他觉得这是对你好。结果你一副"对不起"的样子。他以后反而不敢说了，怕你玻璃心。',
        deathRate: '20%'
      },
      {
        id: 'B',
        text: '你就会挑刺。我做了一下午你就不能说句好吃吗？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我是说了好吃。我说整体还行比上次进步——你没听到吗？',
        systemComment: '你只听到了批评没听到肯定。他给了肯定但你完全没接住。他以后说话会更小心——但也会更疏远。'
      },
      {
        id: 'C',
        text: '肉确实老了。大火快炒是吧？记下了。不过你得承认——今天的汤比上次好喝吧？',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '汤确实不错。你这次盐放得正好。',
        systemComment: '你接受了他的建议——他觉得你理性。同时你指出了自己的进步让他确认——你引导他给出了更多肯定。你没有抗拒批评也没有被压倒。'
      }
    ],
    successText: '你接受了他的改进意见但也让他看到了自己的进步。ISTJ 觉得你是一个听得进话的人。'
  },
  {
    id: 'istj-4',
    level: 4,
    title: '规则至上',
    scene: '你提议周末去一个没去过的地方野餐。ISTJ 拿出手机开始查。',
    messages: [
      { role: 'target', content: '那个地方我去查了一下——没有明确的开放时间说明，而且导航显示有一段路不好走。' },
      { role: 'target', content: '我们换个地方吧。我找了一个评分4.8的公园，有停车场有洗手间有明确的开放时间。' }
    ],
    question: '你的冒险计划被 TA 用风险评估否定了。怎么回应？',
    options: [
      {
        id: 'A',
        text: '好吧，你找的地方肯定靠谱。听你的。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你放弃了自己的想法',
        deathReport: '你每次都"听你的"——但后来你又觉得跟他在一起没意思。他做了功课选了最优方案，你当时同意了就别事后抱怨。',
        deathRate: '20%'
      },
      {
        id: 'B',
        text: '你能不能别什么都查攻略？人生要有未知才有趣。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我只是想确保我们不会白跑一趟。你觉得好玩重要还是到了发现关门重要？',
        systemComment: '你否定了他做事的方式。他的 Si 依赖经验和可靠信息——你的"未知才有趣"在他听来就是"我不在乎会不会搞砸"。'
      },
      {
        id: 'C',
        text: '你查得对。那个公园列入备选。但我还是想去探险一下——这样，我先打电话问问那个地方今天开不开。如果不开就去你找的公园。你帮我看看那个公园能不能烧烤？',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '好。我刚查了，那个公园没写能不能烧烤，我再查查。',
        systemComment: '你先肯定了他的准备——这对他很重要。然后你提了折中方案：先确认，不行就 B 方案。你还给他分了任务——查烧烤。他最喜欢有明确任务和备用计划。'
      }
    ],
    successText: '你没有放弃自己的想法也没有否定他的准备。你给了两全的方案——冒险有保障，稳妥也有乐趣。'
  },
  {
    id: 'istj-5',
    level: 5,
    title: '仪式感冲突',
    scene: '你的生日快到了。ISTJ 问你想要什么礼物。你说不用送。然后生日那天。',
    messages: [
      { role: 'target', content: '你没说想要什么，我就没买。但我订了蛋糕。' },
      { role: 'target', content: '而且晚上我请你吃饭，餐厅我订好了。' }
    ],
    question: 'TA 没有准备惊喜礼物。你嘴上说不用，心里其实有点失落。',
    options: [
      {
        id: 'A',
        text: '嗯，够了够了。挺好的。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你的失落成了定时炸弹',
        deathReport: '他问你了你说不用。他信了。结果后来你翻旧账说他没准备——你说不用他哪知道你是客气？他说话算话——你说不用他就当真。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你就不能给我一个惊喜吗？非要我说你才做吗？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我问过你你说不用。我不明白你为什么说一套要一套。',
        systemComment: '你用"惊喜"这个模糊概念来指责他。他需要明确的指示——"不用"就是行动指令。你说不用他就不做——你事后怪他让他觉得你不可预测。'
      },
      {
        id: 'C',
        text: '我说不用是我的问题。但我确实有点小失落。下次你就直接给我选一个——选错了也没关系，你选的我都喜欢。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……我记住了。下次我自己挑。明年你想要什么类型的？',
        systemComment: '你诚实地说自己说了"不用"但实际想要——他觉得你成熟。你给了明确指示——"下次你自己选"。他得到了可执行的指令。'
      }
    ],
    successText: '你没有隐瞒失落也没有指责他。你诚实地说出了需求并给了他明确的指示——ISTJ 需要的就是这个。'
  },
  {
    id: 'istj-6',
    level: 6,
    title: '传统观念',
    scene: '你们聊到未来的婚后生活。ISTJ 很自然地开始分工。',
    messages: [
      { role: 'target', content: '以后结婚的话，家务我来负责大部分，你负责做饭就行。' },
      { role: 'target', content: '我觉得这些都是很自然的分工。' }
    ],
    question: 'TA 的性别分工观念有点传统。你不认同但不想吵架。',
    options: [
      {
        id: 'A',
        text: '嗯，你觉得好就行。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你埋下了一颗雷',
        deathReport: '你当时说"你觉得好就行"——过了一年突然说你不喜欢这样。他完全懵了：你当时为什么不说？他觉得我们是在认真规划，你却在将就。',
        deathRate: '25%'
      },
      {
        id: 'B',
        text: '你这是什么年代的观念？现在谁还这样分工？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我只是提出了一个效率方案。你不用上纲上线。',
        systemComment: '你攻击了他的价值观。他的传统观念来自经验——他是按照自己熟悉的模式来规划。你直接说他的想法过时，他会觉得你在否定他这个人。'
      },
      {
        id: 'C',
        text: '这个分工可以作为一个初始版本。但我做饭确实一般。要不这样——家务我们按擅长分，而不是按性别分。你擅长什么我擅长什么列出来，然后排班？',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '……也行。列个表确实更清晰。我擅长清洁和收纳。你擅长什么？',
        systemComment: '你没否定他的分工提议——你接受了"分工"这个框架，但改了依据。他能接受流程优化——只要你用他认可的逻辑：效率、擅长、列表。'
      }
    ],
    successText: '你没有攻击他的传统观念，而是在他的框架内做了优化。ISTJ 接受了——因为你的方案更高效。'
  },
  {
    id: 'istj-7',
    level: 7,
    title: '不会安慰',
    scene: '你被老板骂了。你哭着打电话给 ISTJ。TA 十分钟后出现在你家门口。',
    messages: [
      { role: 'target', content: '别哭了。你现在哭也没用。' },
      { role: 'target', content: '你告诉我他骂你什么了，我帮你分析一下怎么回应。' }
    ],
    question: '你在哭，TA 在让你别哭了。怎么让他明白你现在不需要分析？',
    options: [
      {
        id: 'A',
        text: '嗯，你说得对。（然后继续哭）',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你的情绪被搁置了',
        deathReport: '你一直说"你说得对"但一直哭。他不知道你到底要不要他帮。如果你不想听分析你可以直说——但你嘴上接受行动上拒绝，他判断不了。',
        deathRate: '25%'
      },
      {
        id: 'B',
        text: '你能不能别这么冷漠？我就想哭一会儿不行吗？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我没有冷漠。我收到电话就过来了。我只是觉得哭不能解决问题。',
        systemComment: '你把他十分钟赶到的关心全否定了。他觉得行动大于语言——他来了就是最大的安慰。你说他冷漠让他觉得委屈。'
      },
      {
        id: 'C',
        text: '我知道哭没用。但你让我先哭十分钟。十分钟后你再帮我分析——行不行？',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……行。十分钟。到时你跟我说发生什么了。',
        systemComment: '你给了他明确时限——十分钟。他能接受"暂时的情绪释放"只要有个截止时间。你让他知道你最终还是会解决问题的——这完全符合他的逻辑。'
      }
    ],
    successText: '你没有否定他的关心也没有压抑自己的情绪。你给情绪设了时限——ISTJ 接受了这个安排。'
  },
  {
    id: 'istj-8',
    level: 8,
    title: '固执己见',
    scene: '你们在讨论买什么家具。你看中了一个设计感很强的沙发。ISTJ 皱着眉头。',
    messages: [
      { role: 'target', content: '这个沙发坐着不舒服。而且浅色不耐脏，三年就得换。' },
      { role: 'target', content: '我看中了一款深色的——质量好、耐脏、坐感舒适。价格还便宜一千。' }
    ],
    question: '你看重颜值，TA 只看实用性。怎么打破僵局？',
    options: [
      {
        id: 'A',
        text: '好吧，你选的肯定没错。就买你的吧。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你的审美被牺牲了',
        deathReport: '你每次都让步但后来又说家里没有你的痕迹。他不是不让你选——但你选的确实不实用。你要坚持你得有理由说服他。',
        deathRate: '20%'
      },
      {
        id: 'B',
        text: '你就知道实用实用。家里一点美感都没有你住着开心吗？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '实用是第一位的。好看但不好用的东西买回来是浪费钱。',
        systemComment: '你否定了他的实用主义。他的决策系统就是基于实用和耐久——你用"美感"反驳在他看来不成立。他没被说服只觉得你在任性。'
      },
      {
        id: 'C',
        text: '你那个确实更实用，我认。但我就想要一点点好看的。这样——沙发买你那个，但靠垫和盖毯我来选。那个区域的功能归你，审美归我。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '……可以。但盖毯要能机洗的。',
        systemComment: '你认可了他的实用选择——他觉得你理性。你提了分区方案——功能归他审美归你。他最喜欢清晰的分工和边界。你既没妥协也没对抗。'
      }
    ],
    successText: '你接受了他的实用方案但保留了自己的审美。ISTJ 觉得你是一个可以协商的人。'
  },
  {
    id: 'istj-9',
    level: 9,
    title: '信任与验证',
    scene: '你跟朋友出去聚餐。ISTJ 发消息问你什么时候回来。然后发了第二条。',
    messages: [
      { role: 'target', content: '你们在哪吃？发个定位给我。' },
      { role: 'target', content: '大概几点结束？我好安排晚上要不要等你。' }
    ],
    question: 'TA 在查岗。你觉得被控制了。',
    options: [
      {
        id: 'A',
        text: '好的，发你了。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你让边界消失了',
        deathReport: '他问定位是因为他需要信息来安排时间——不是不信任你。但你后来总说他不给你空间——你不说清楚你的边界他怎么知道？他一直以为这样没问题。',
        deathRate: '25%'
      },
      {
        id: 'B',
        text: '你能不能别查岗？我又不是犯人。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我是要安排时间不是查岗。我十点要锁门，你要是不回来我就不等了。我总得知道吧。',
        systemComment: '你把他的信息需求理解成了控制。他的诉求是基于效率不是不信任——你的攻击让他觉得冤枉。'
      },
      {
        id: 'C',
        text: '在 XX 火锅。大概九点半结束。我到家应该十点左右。你不用等我——要是你先睡了，厨房灯给我留一盏就行。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '知道了。厨房灯给你留着。别喝太多。',
        systemComment: '你没等他要——你主动给了他需要的信息。他得到了规划所需的数据就不再问了。而且你加了个需求——让他觉得被需要而不是被推开。'
      }
    ],
    successText: '你没有把他的信息需求当成控制。你主动给了信息并提出了自己的需求。ISTJ 觉得你可靠又体贴。'
  },
  {
    id: 'istj-10',
    level: 10,
    title: '改变恐惧',
    scene: '你想换工作。现在的稳定但无聊，新工作有风险但更有前景。你跟 ISTJ 商量。',
    messages: [
      { role: 'target', content: '你现在的工作很稳定。五险一金最高档，年终奖三个月。你确定要换？' },
      { role: 'target', content: '新公司成立才两年，万一倒闭了呢？' }
    ],
    question: 'TA 在用风险分析阻止你的冒险。',
    options: [
      {
        id: 'A',
        text: '你说得也有道理。那再看看吧。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你放弃了自己的可能性',
        deathReport: '他只是帮你分析风险——没说让你别去。你说"再看看吧"然后后悔了又怪他没支持你。但你要走他会跟你一起做方案的。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你永远都在说风险风险。我的人生就不能有一点冒险吗？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我在帮你做风险评估。你要走我不拦你——但你要知道你在面对什么。',
        systemComment: '你又一次否定了他提供信息的方式。他不反对你换工作——他只是想确保你有 Plan B。你的攻击让他觉得你不领情。'
      },
      {
        id: 'C',
        text: '你分析得都对。所以我才需要你帮我。我已经做好了如果新公司不行就回来的预案。你能不能帮我看看我的简历哪里需要改？',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '你做了预案？……给我看看。简历的话，你上一份工作的数据写得太笼统了。',
        systemComment: '你肯定了他的风险分析——他觉得被尊重。你告诉他你做了预案——他放心了。你邀请他参与——"帮我改简历"。他爱的语言是行动——你让他用最擅长的方式支持了你。'
      }
    ],
    successText: '你没有放弃梦想也没有否定他的担忧。你让他用自己的方式支持了你——用行动和方案。'
  },
  {
    id: 'istj-11',
    level: 11,
    title: '默默付出',
    scene: '你加班到很晚回家。发现桌上有一份便当。冰箱上贴着便利贴。',
    messages: [
      { role: 'target', content: '便当在桌上。微波炉热三分钟。牛奶也买了放在冰箱。' },
      { role: 'target', content: '我先睡了。你吃完把碗放水池就行我明天洗。' }
    ],
    question: 'TA 从不说爱，但用行动把每件事都做了。',
    options: [
      {
        id: 'A',
        text: '好，你也早点睡。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你的感动没有被看见',
        deathReport: '他做这些其实是想让你开心。但你从不说。他做了一年饭你也没说过一句谢谢——他都不知道你到底满不满意。你要是觉得理所当然他真的会心寒。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你不用每次都给我做饭。你这样让我压力很大。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '……我只是想帮你。你不要就算了。',
        systemComment: '你拒绝了他最重要的爱的表达方式。他通过服务和付出来表达关心——你说"压力大"相当于拒绝了他的爱。他会停止付出——但也会收回他的心。'
      },
      {
        id: 'C',
        text: '（吃完后推开卧室门）便当我吃完了。你买的牛奶是我最喜欢的牌子——你怎么知道的？还有你下次别等我了先睡，但你留的灯和饭我都会好好吃掉。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……上次逛超市看你多拿了两瓶。快睡吧，明天还要上班。',
        systemComment: '你注意到了每一个细节——便当吃完了、牛奶是他记得你喜欢的牌子。他不需夸张的感谢——他需要你看见他的付出并且确认他在你心里。'
      }
    ],
    successText: '你看见了他的默默付出并且让他知道了你看见了。ISTJ 的爱就是被看见。'
  },
  {
    id: 'istj-12',
    level: 12,
    title: '最终选择',
    scene: '你们坐在客厅里。ISTJ 拿着一个文件夹。',
    messages: [
      { role: 'target', content: '我跟你在一起这段时间，我做了一份评估。' },
      { role: 'target', content: '你符合我对伴侣的 90% 的要求。剩下的 10% 我觉得可以磨合。我想跟你继续走下去。你同意吗？' }
    ],
    question: '最终告白——一份 PPT。你怎么回答？',
    options: [
      {
        id: 'A',
        text: '我愿意。你列出来的我都能接受。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你没有认真对待他的评估',
        deathReport: '90% 这个数字他是认真算过的。你问都没问那 10% 是什么就说"能接受"。你的答应太草率了——你没有认真对待他做了一周的评估。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你把爱情做成了表格？你有没有想过感情不是数据？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '……你觉得我量化感情不对？那你就当没听过吧。',
        systemComment: '你在他最真诚的时刻否定了他的表达方式。他用了自己最擅长的方式——理性评估——来向你表白。你说"感情不是数据"等于说他不懂爱。他不会再打开自己第二次了。'
      },
      {
        id: 'C',
        text: '90%？那剩下的 10% 是什么？我听听看能不能接受——要是你说我不爱干净那我可以改，要是你说我不会表达那我已经在学了。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……（翻开文件夹）第一，你有时候说话不注意时间——我在工作的时候你总打断我。第二，你袜子乱扔。第三……',
        systemComment: '你认真地对待了他的评估。你没说"我愿意"而是问"哪 10%"。你甚至说了"如果是我不爱干净我可以改"——你接受了他的逻辑框架并且愿意参与优化。对他而言，没有比这更真诚的表白了。'
      }
    ],
    successText: '你没有因为他的方式不浪漫而否定他的真心。你认真看完了他的评估——ISTJ 最大的浪漫就是被认真对待。'
  }
];
