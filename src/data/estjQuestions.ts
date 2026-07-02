import type { ChallengeQuestion } from '../types';

export const estjQuestions: ChallengeQuestion[] = [
  {
    id: 'estj-1',
    level: 1,
    title: '规矩清单',
    scene: '你和 ESTJ 刚开始交往。TA 发来一条很长的消息——不是在表白，而是在说"相处原则"。',
    messages: [
      { role: 'target', content: '我有几条约定想说清楚。第一，有事直接说别拐弯抹角。第二，答应的事必须做到。第三……' },
      { role: 'target', content: '你觉得有什么要补充的吗？' }
    ],
    question: 'TA 把恋爱当成项目管理来做了。你接得住这种开场吗？',
    options: [
      {
        id: 'A',
        text: '好的好的，你说的我都同意。谈恋爱确实要有规矩——你说得对，省得以后有矛盾。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你成了 TA 的下属',
        deathReport: '你说全部接受。但你思考了吗？你是在配合我还是真的认同？我需要的是一个有主见的人，不是一个什么都"好的好的"的人。你这样只会让我觉得你没有独立思考能力。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你搞这么正式干嘛？谈恋爱不是签合同。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '这不是正式。这是效率。浪费时间兜圈子不如一开始说清楚。',
        systemComment: '你在否定他的方式。他重视效率和规则——你说"太正式"在他看来是"不成熟"。他会降低对你的评价。'
      },
      {
        id: 'C',
        text: '行，你说的我看了。第一和第二条没问题。第三条我得想想——你说了"晚上十一点后不要发消息"，但我有时候灵感来了就那个点想找你。改一下行不行——十一点后可以发但我不一定马上回，你也是。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '可以。你补充得很清楚。那就这么定了。',
        systemComment: '你接受了大部分规则——他看到的是你有判断力。你提出了一条修改——你不是无脑服从。你给了具体的替代方案——"可以发但不一定马上回"。他最喜欢的就是：你有自己的逻辑，而且你能说出来。'
      }
    ],
    successText: '你没有全盘接受也没有全盘否定。你像一个平等的合作方一样参与规则制定——这正是 ESTJ 想要的方式。'
  },
  {
    id: 'estj-2',
    level: 2,
    title: '效率至上',
    scene: '你们约定了周末约会。你本想随意走走、逛逛小店。但 ESTJ 发来了一个 Excel 表格——约会行程表。',
    messages: [
      { role: 'target', content: '我做了周末的行程规划。11:00-12:30午餐，13:00-15:00美术馆，15:30-17:00咖啡厅，17:30回家。' },
      { role: 'target', content: '路上通勤时间我算了，各段之间预留了十分钟缓冲。你觉得呢？' }
    ],
    question: '你成了 TA 的一个日程项目。浪漫在哪里不知道，但效率拉满了。',
    options: [
      {
        id: 'A',
        text: '太强了！你都帮我安排好了！就按你说的来——省心！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你放弃了日程话语权',
        deathReport: '你很配合。但你知道吗——我给你表是让你看看有没有问题，不是让你直接签字。美术馆你想看多久你都没说。你连想都没想就 OK——你做其他事也这样吗？',
        deathRate: '25%'
      },
      {
        id: 'B',
        text: '你连约会都要做表？我们就不能随性一点吗？你搞得像上班一样。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '不规划就会浪费时间。你更喜欢站在路边拿手机现查餐厅？',
        systemComment: '你在批评他的方式。他觉得你的"随性"等于"没效率"。他不是不懂浪漫——在他看来规划好了才能安心享受。'
      },
      {
        id: 'C',
        text: '你这个表做得挺清楚。美术馆我可以看两小时——那个馆我关注很久了。不过咖啡厅不用排那么久吧——我们可以喝完想走就走，不一定卡点。还有晚上我想带你去一个地方——保密，但你别排东西了。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '你要带我去哪？……行，那下午那段不排了。不过你最好真的有计划。',
        systemComment: '你尊重了他的规划——"做得挺清楚"。你给出了有依据的调整——"美术馆我可以看两小时"。你保留了晚上的未知——"保密"。他需要的是：你能配合结构，但你也带来惊喜。你让他看到你不抗拒效率，你只是比他更灵活。'
      }
    ],
    successText: '你没有拒绝规划也没有机械跟随。你优化了 TA 的计划，还给 TA 留了一个惊喜——ESTJ 看到了你的能力。'
  },
  {
    id: 'estj-3',
    level: 3,
    title: '批评模式',
    scene: '你花了一下午给 ESTJ 做了一顿饭。TA 吃完了，放下筷子，表情认真。',
    messages: [
      { role: 'target', content: '肉稍微老了一点。下次大火快炒三十秒就够了。' },
      { role: 'target', content: '不过整体味道不错，比上周进步了。' }
    ],
    question: 'TA 先给了改进建议再给了表扬。你花了三小时做这顿饭。',
    options: [
      {
        id: 'A',
        text: '嗯嗯你说得对，我下次注意。我确实炒久了——你嘴真灵。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你接受了所有批评',
        deathReport: '你认错太快了。你说"你说得对"——但你真的知道哪里错了吗？你知道下次应该怎么做吗？你只是想让我停止批评。但我不是在批评你，我是在教你。你不想学，你想让我闭嘴。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '我做了三个小时你就给我这个评价？你就不能说一句好吃吗？',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我说了好吃了啊，我说比上周进步了。但问题不说出来下次还是问题。',
        systemComment: '你在情感反击。他会说"我说了好吃啊"——但你只想听好听的。他会觉得你不理性——不能接受客观反馈。'
      },
      {
        id: 'C',
        text: '肉确实老了，你说得对。下次我试试大火快炒的。不过你下次也可以先说"好吃"再说"但是"——你说了好吃，我心里舒服了，再听建议就听得进去了。这叫反馈顺序优化。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '反馈顺序优化……学得挺快。行，下次先夸再批。',
        systemComment: '你接受了建议——"肉确实老了"。你说了改进方案——"下次试试大火快炒"。但你也没有单方面接受——你也给了他反馈——"先说好吃再说但是"。你用他的语言回敬了他——"反馈顺序优化"。他最吃这套：你既能接受优化，又能反过来优化他。'
      }
    ],
    successText: '你没有对抗批评也没有被动挨批。你接受了有效信息，也教了 TA 更好的反馈方式。'
  },
  {
    id: 'estj-4',
    level: 4,
    title: '情感短路',
    scene: 'ESTJ 那天被领导批评了。TA 回家后不说话，坐在沙发上黑着脸。你试图关心 TA。',
    messages: [
      { role: 'target', content: '没事。' },
      { role: 'target', content: '我坐一会儿就好了。你忙你的。' }
    ],
    question: 'TA 的情绪处理方式是封闭。你该给空间还是该突破？',
    options: [
      {
        id: 'A',
        text: '你别不说话啊。你跟我说说发生什么了？说出来会好受一点的。',
        outcome: 'death',
        pattern: 'pressure',
        deathTitle: '你逼 TA 打开了不想打开的门',
        deathReport: '我说了没事你听不懂吗？我不想在没处理好之前跟你聊。你非要我说话——但我还没想清楚我是什么感受。你让我不舒服了。现在我不光要处理工作的问题，还要处理你的情绪。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你每次都这样。有问题不沟通，我根本不知道你在想什么。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '我现在不想讨论这个。你能不能别在这个时候给我制造更多问题？',
        systemComment: '你在低谷的时候又补了一刀。他在压力下是封闭的——你的指责只会让他更封闭。'
      },
      {
        id: 'C',
        text: '行，你先坐会儿。我给你倒杯水放在这儿，你想说的时候叫我。冰箱里有吃的，饿了你自己热一下。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……嗯。谢谢。',
        systemComment: '你没有追问、没有安慰、没有分析。你给了他物理空间——"你先坐会儿"。你给了具体的东西——"倒杯水"、"冰箱里有吃的"。他在压力下需要的是实际的支持而不是情感关注。你做了一点小事让他知道你在，但你没有逼他进入情绪对话。'
      }
    ],
    successText: '你没有在 TA 封闭的时候撬门。你做了最有用的事——在场但不打扰。ESTJ 会在 TA 准备好之后自己走出来。'
  },
  {
    id: 'estj-5',
    level: 5,
    title: '控制与反抗',
    scene: 'ESTJ 开始对你的交友圈发表意见。你有一个 ESTJ 不太喜欢的哥们儿。某天你们吵了起来。',
    messages: [
      { role: 'target', content: '你那个朋友小李，你真的少跟他来往。他天天换工作不靠谱，会带坏你。' },
      { role: 'target', content: '我跟你说的都是为你好。你跟他玩对你没有任何好处。' }
    ],
    question: 'TA 在评估你的社交 ROI。但友谊不是投资。',
    options: [
      {
        id: 'A',
        text: '你说得有道理……他确实不太靠谱。那我少跟他联系吧——你说得对，我是该注意点。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你让 TA 接管了你的朋友圈',
        deathReport: '你听我的了。好的，今天是小李，明天是小王，后天是你同事。你每一次都听我的——但你没发现我在替你安排你的人生吗？我要的是一个有判断力的伴侣，不是一个被我安排的人。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '我的朋友不用你管。我不干涉你的事你也别干涉我的。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '我不是干涉你。我是在帮你做筛选。你非要这么抵触？',
        systemComment: '你在画边界但用了关闭的姿态。他会觉得你"不理性地拒绝客观建议"。他不是想控制你——他真的觉得小李不靠谱。'
      },
      {
        id: 'C',
        text: '他确实跳槽频繁，你说得没错。但他是我十年的兄弟，他人品没问题。他的职业选择是他的事，我跟他的友谊不影响我的判断。你担心我被带坏——那你多跟我待着，看看我有没有被他影响。你拿事实说话，不要预判。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '……行。那我观察一下。如果他真的影响到你，我还是会说。',
        systemComment: '你承认了他说的部分事实——"他确实跳槽频繁"。你给出了你的理由——"十年兄弟，人品没问题"。你设置了检验标准——"你多跟我待着，用事实说话"。他最认的是数据和事实。你用他的逻辑回应了他。他没法反驳。'
      }
    ],
    successText: '你没有让 TA 接管你的社交也没有关闭沟通。你请 TA 用事实而不是恐惧来判断——ESTJ 无法拒绝这个。'
  },
  {
    id: 'estj-6',
    level: 6,
    title: '面子问题',
    scene: '你们在朋友聚会上。ESTJ 讲了一个笑话，你接了一句话，气氛突然尴尬了。',
    messages: [
      { role: 'target', content: '（后来回家路上 TA 一路没说话。进门后才开口）' },
      { role: 'target', content: '你刚才在饭桌上什么意思？你拆我台？在那么多人面前。' }
    ],
    question: 'TA 觉得你在朋友面前让 TA 没面子了。但你觉得你只是随口一说。',
    options: [
      {
        id: 'A',
        text: '对不起我不该那么说。我以后注意——在朋友面前我一定给你面子。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你学会了在公共场合低头',
        deathReport: '你道歉了。但你知道你错在哪里吗？你不知道。你只是不想吵架。下次你还会这样做——因为你根本没有搞清楚我的边界。你道歉只是因为你想结束对话，不是因为你懂了。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '我就随口说了一句你至于吗？你自己太敏感了。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '我敏感？你当着我朋友的面说我说的不对，你现在说我敏感？',
        systemComment: '你在否定他的感受。他会记得你在公开场合让他难堪——他不会轻易忘记。你说"至于吗"让冲突升级了。'
      },
      {
        id: 'C',
        text: '我刚才那句话确实让你不舒服了，我道歉。我当时没想那么多，就觉得是在接你的梗。但我理解你觉得我在拆台——以后我注意场合。不过你也别等回家才说——你在桌上给我一个眼神，我就懂了。你得给我一个补救的机会，别自己憋着。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '好吧……下次我给你递话。但你也要注意分寸。',
        systemComment: '你先道歉了——他看重敢于认错的人。但你接着说"你在桌上给我一个眼神"——你给了他一个改进方案。他最喜欢的是：你有错承认，你还给出了优化方案。你没有完全低头——你让他也参与了沟通。'
      }
    ],
    successText: '你没有在冲突中硬撑也没有全盘接锅。你道歉了，但你教会了 TA 如何更有效地提醒你。'
  },
  {
    id: 'estj-7',
    level: 7,
    title: '固执己见',
    scene: '你们在商量买一个家具。你想买一个舒服的沙发，ESTJ 想买一个功能性的——可以储物、可以变床、可以折叠。你们各执己见。',
    messages: [
      { role: 'target', content: '那个好看但有啥用？我们这个价位应该买功能性的。你以为买家具是买装饰品？' },
      { role: 'target', content: '你看这个——储物+沙发床+折叠桌，一个顶三个。' }
    ],
    question: 'TA 的功能性 VS 你的舒适感。这不仅仅是一个沙发的战争。',
    options: [
      {
        id: 'A',
        text: '好吧你说得对，功能性确实重要。那就买你这个吧——听你的。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你放弃了选择权',
        deathReport: '你妥协了——但我没有赢的感觉。你妥协是因为你懒得争了，不是因为你真的觉得我对。今天你妥协沙发，明天你妥协装修，后天你连去哪里吃饭都让我定。你会慢慢的什么都不在乎了——那我对你的兴趣也会没了。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你就知道功能性功能性。家里要有温暖的感觉你懂吗？不是所有东西都要有用。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '温暖？你躺在一个只能看不能用的沙发上你跟我说温暖？',
        systemComment: '你用情感对抗他的逻辑。他会直接碾压你的"温暖"——因为他无法量化这个价值。你在他的战场上用错了武器。'
      },
      {
        id: 'C',
        text: '你这个功能确实强。但我想要舒服的——因为我每天下班回来就想瘫着。这样行不行——沙发买我选的舒服款，但储物的问题我负责买个好看的收纳柜来解决。功能归功能，舒服归舒服——两个都要。',
        outcome: 'survive',
        pattern: 'logic',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '你确定收纳柜能解决？……算了，你选那个沙发试坐一下，舒服的话就按你说的。',
        systemComment: '你没有否定他的逻辑——"你这个功能确实强"。你解释了你的需求——"我每天下班想瘫着"。你给出了双赢方案——"沙发归我，收纳归我"。你展示了解决问题能力——你同时满足了两边需求。他没法拒绝一个既有逻辑又给出了方案的人。'
      }
    ],
    successText: '你没有投降也没有情感对抗。你用 TA 的方式——用逻辑和方案——赢得了你的空间。'
  },
  {
    id: 'estj-8',
    level: 8,
    title: '妥协困难',
    scene: '你们在计划假期旅行。你想去海边放松，ESTJ 想去一个历史文化名城。两人互不相让。',
    messages: [
      { role: 'target', content: '海边有什么好看的？躺三天你就腻了。历史文化名城可以学到东西，你的假期也有价值。' },
      { role: 'target', content: '我查了攻略——三天可以走完六个景点。不亏。' }
    ],
    question: 'TA 的旅行也要产出 ROI。但你就是想躺平。',
    options: [
      {
        id: 'A',
        text: '那好吧，去历史文化名城听你的。反正去哪都行——开心最重要。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你放弃了度假体验',
        deathReport: '你说了"听你的"。但你全程会不开心。我会看出来你不开心。然后我会觉得你在惩罚我——是你说听我的，但你的不开心让我觉得我的选择是错的。下次我们没法一起做决定了。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '我上班已经够累了，度假还要搞什么价值产出？我就想躺着不行吗？',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '躺三天跟在家躺有什么区别？为什么要花钱去别的地方躺？',
        systemComment: '你的情绪化回应让他觉得你不可理喻。他无法接受"没有产出"的活动——你需要给他一个理由，而不是情绪。'
      },
      {
        id: 'C',
        text: '你的方案有产出，我的方案有休息。这样——四天旅行，前两天去历史文化名城按你计划的走，后两天去海边我躺着你在酒店处理工作或者看书都行。你有了价值，我有了恢复。两边都满足。',
        outcome: 'survive',
        pattern: 'logic',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '……分两天也行。那我今天晚上就把前两天的攻略做出来。',
        systemComment: '你给了结构化方案——"前两天你的，后两天我的"。你承认了他的需求——"历史文化有价值"。你也保留了你的需求——"我需要恢复"。他能接受这种分配——因为公平、清晰、可执行。'
      }
    ],
    successText: '你没有放弃也没有情绪化。你给出了一个结构化双赢方案——ESTJ 最喜欢的解决问题方式。'
  },
  {
    id: 'estj-9',
    level: 9,
    title: '脆弱恐惧',
    scene: '凌晨两点。ESTJ 突然推醒你。TA 的表情前所未有的不安。',
    messages: [
      { role: 'target', content: '……我好像搞砸了。项目上我犯了一个很蠢的错误。' },
      { role: 'target', content: '我不知道怎么补救。这次可能真的不行了。' }
    ],
    question: 'ESTJ 第一次在你面前承认自己不行。这是千年一遇的脆弱时刻。',
    options: [
      {
        id: 'A',
        text: '没事的！你那么厉害肯定能解决的！我相信你！',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你错失了 TA 的信任',
        deathReport: '你说没事。你不知道发生了什么就说没事。你说相信我——你怎么相信我？你连问题是什么都不知道。我跟你说我最害怕的事，你给了我一句鸡汤。下次我不会再跟你说了。',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '你也会犯错？你不是很厉害的吗？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -2, emotionalSafety: -2 },
        targetReaction: '算了。当我没说。',
        systemComment: '你在最脆弱的时候嘲讽了他。他会把这视为背叛。他不会再在你面前展示脆弱了——可能永远不会。'
      },
      {
        id: 'C',
        text: '搞砸了什么？你先跟我说说看，我帮你一起理一下。就算真的不行——我陪你想补救方案。实在补救不了我也在这。犯错不丢人，谁教 ESTJ 不能犯错了？',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 2, emotionalSafety: 2 },
        targetReaction: '……你帮我看看这个数据。我可能忽略了一个变量。',
        systemComment: '你没有给空洞的安慰——"跟我说说看"是行动。你说了"我陪你"——你没有包办但你在。你说"谁教 ESTJ 不能犯错了"——你用轻松的语气化解了他的羞耻。他最深层的恐惧是"我不够好"。你让他知道——不够好也没关系。你做的最好的一件事是：你问"搞砸了什么"而不是说"没事"。因为你认真对待了他的问题。'
      }
    ],
    successText: '你没有用鸡汤敷衍也没有看轻 TA 的脆弱。你让 ESTJ 知道——你的价值不在于永不犯错。'
  },
  {
    id: 'estj-10',
    level: 10,
    title: '信任检验',
    scene: '你犯了一个错误——忘记了 ESTJ 交代你的一件重要的事。TA 知道后，表情很平静。太平静了。',
    messages: [
      { role: 'target', content: '我上周跟你说过这件事很重要。你答应了。' },
      { role: 'target', content: '你知道这意味着什么吗？' }
    ],
    question: 'TA 没有发火。ESTJ 用最平静的语气说最致命的话。这是信任危机。',
    options: [
      {
        id: 'A',
        text: '对不起对不起！我真的忘了！我错了，你骂我吧。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你用自己的情绪逃避了问题',
        deathReport: '你道歉了但你慌了。你在求我骂你——因为挨骂比面对问题容易。但我不想骂你。我想知道你怎么补救。你道歉了一百次但你没说"我现在就去解决"。信任不是道歉换来的——是用行动换来的。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '我忘了怎么了？你交代的事那么多我又不是机器人。你别上纲上线。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -2, pressure: 1 },
        targetReaction: '好。你不是机器人。那我以后不会交代你任何事了。',
        systemComment: '你在推卸责任。他会把你的话翻译为"你不可靠"。一旦他认为你不可靠——他会停止依赖你。关系里没有依赖就没有亲密。'
      },
      {
        id: 'C',
        text: '对不起，我搞砸了。这件事确实重要，我没有借口。我现在马上去处理——我先打电话问问能不能补救。你等我一下，我十分钟后给你一个方案。',
        outcome: 'survive',
        pattern: 'logic',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '好。你处理完跟我说。',
        systemComment: '你没有陷入情绪道歉——"对不起，我搞砸了"简洁有力。你没有解释理由——他讨厌借口。你直接进入行动——"我现在马上去处理"。你给了时间承诺——"十分钟后给你方案"。他对"错误"的容忍度很低，但对"补救"的尊重度很高。你用行动重建了信任。'
      }
    ],
    successText: '你没有逃避也没有狡辩。你犯了错但你没有在错误上停留——你立刻进入了补救模式。这是 ESTJ 最认可的态度。'
  },
  {
    id: 'estj-11',
    level: 11,
    title: '价值观碰撞',
    scene: '你们聊到了人生规划。ESTJ 说了一个具体的五年计划——买房、升职、结婚、生子、每一年都有 KPI。你听完之后沉默了。',
    messages: [
      { role: 'target', content: '我的人生目标是三十五岁之前做到总监。然后换一套大房子，两个孩子。你呢？你怎么规划的？' },
      { role: 'target', content: '你不会没有规划吧？' }
    ],
    question: 'TA 的人生是一张甘特图。你的不是。',
    options: [
      {
        id: 'A',
        text: '我也想要这样的生活！我们一起努力！你定目标我执行！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你签了 TA 的人生合同',
        deathReport: '你说你也想要。但你说话的时候眼神闪了一下。你在说谎——或者说你在将就。我需要的不是一个配合我计划的人，是一个有自己的计划然后跟我合并计划的人。你没有自己的计划——那我怎么跟你合并？',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你别把你的人生观强加给我。我不想被五年计划绑架。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '你有你的人生观，但你有想过未来吗？你连想都不愿意想？',
        systemComment: '你的反应像被攻击了。他不是要强迫你——他真想知道你的规划。你说"绑架"这个词会让他觉得你抗拒承诺。'
      },
      {
        id: 'C',
        text: '你这个规划很具体，我很佩服你能想得这么清楚。我也有目标但我还没拆到年份。比如我想要一个能共同成长的家庭，我想要经济独立，我想在四十岁的时候回头看没有遗憾。这些可能没有你的清晰——但我不是没有想。要不你帮我拆一下？你看看我这些能不能变成你的那种 KPI。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……可以啊。你不介意我帮你梳理的话，周末我们做个思维导图。',
        systemComment: '你真诚地表达了你的规划风格——"我有目标但没拆到年份"。你让他看到你不是没有想法。最后你邀请他参与——"你帮我拆一下"。他不会看不起一个规划不清晰的人——他会看不起一个拒绝规划的人。你打开了合作的大门。'
      }
    ],
    successText: '你没有迎合 TA 的蓝图也没有抵制规划本身。你展示了你的方向，并邀请 TA 一起绘制地图。'
  },
  {
    id: 'estj-12',
    level: 12,
    title: '最终判决',
    scene: '你们经历了很多。现在 ESTJ 坐在你对面，表情严肃——像在做一个最终评估。',
    messages: [
      { role: 'target', content: '我一直在想我们合不合适。你有很多我欣赏的地方，但你也有很多让我不满意的地方。' },
      { role: 'target', content: '我想了很久——你觉得我们该继续吗？你给我一个理由。' }
    ],
    question: 'TA 在用最终面试的方式决定你们的未来。你只有一次回答机会。',
    options: [
      {
        id: 'A',
        text: '我觉得我们很合适！我有哪里让你不满意我可以改！你不要放弃我！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你求 TA 给你一个机会',
        deathReport: '你说你可以改。但你不是在改进——你是在乞求。我说了很多次我需要的是一个能跟我并肩的人。你现在在求我给你一个机会——你没发现吗？你在求我，不是在跟我对话。你把自己放在了下位。我不会跟一个求我的人在一起。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '你觉得不合适那就算了吧。我累了，不想再被你评估了。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -2, emotionalSafety: -2 },
        targetReaction: '好。那就这样。',
        systemComment: '你放弃了。他问你"该不该继续"——他在给你一个表达的机会。你说"算了"——他会尊重你的决定，但会失望。因为他想听到的不是放弃，是想听到你值得他留下的理由。'
      },
      {
        id: 'C',
        text: '你觉得该不该继续？我回答你：该。理由有三个。第一，你是我见过最认真生活的人——你让我对"未来"这两个字有了画面感。第二，我们吵过很多次但我们从来没有真正放弃过沟通——每次吵完都优化了相处方式。第三，你对我有不满我也有对你——但我觉得两个人能不能走下去不是看满不满意，是看愿不愿意在不满的时候继续选对方。我选你。你选我吗？',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, emotionalSafety: 2 },
        targetReaction: '……你居然列了三点。好吧，让我想想——（沉默了很久）好。我也选你。但你说的——要持续优化。',
        systemComment: '你用他的方式回应了他——你列了三点。用结构说服了他的结构。第一点——你认可了他的核心价值。第二点——你指出你们的关系有迭代能力。第三点——你给了最核心的答案："愿不愿意在不满的时候继续选对方。"这句话击穿了他理性外壳下最深的不安全感。你给了他一个确定的、有逻辑的答案。'
      }
    ],
    successText: '你没有求 TA 也没有放弃。你给了 TA 三个理由——像给了一份商业提案。ESTJ 最终选择的不是一个完美的人，是一个愿意持续迭代的人。'
  }
];
