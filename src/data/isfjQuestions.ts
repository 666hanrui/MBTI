import type { ChallengeQuestion } from '../types';

export const isfjQuestions: ChallengeQuestion[] = [
  {
    id: 'isfj-1',
    level: 1,
    title: '默默付出',
    scene: '你们刚在一起没多久。你随口说了一句最近天气变冷了。第二天上班前。',
    messages: [
      { role: 'target', content: '（递给你一个袋子）我昨天多买了一副手套。你骑车上班用得上。' },
      { role: 'target', content: '不用谢，就是顺手的事。' }
    ],
    question: 'TA 明明特意为你买了手套，却说只是顺手。怎么回应？',
    options: [
      {
        id: 'A',
        text: '谢谢！你太贴心了吧。以后别买了，多浪费钱。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你说不要——他就不敢再买了',
        deathReport: '他纠结了好久才送出手的。你说"以后别买了"——他觉得你是不是不喜欢。下次他看到你需要什么，也不会再买了。',
        deathRate: '20%'
      },
      {
        id: 'B',
        text: '嗯，谢谢。（然后收起来没再提）',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '嗯……不用谢。',
        systemComment: '你的冷淡让他不确定你是否喜欢。他本来期待看到你哪怕一个笑容——你的"嗯"让他觉得自己的心意被忽略了。'
      },
      {
        id: 'C',
        text: '（戴上手套）刚好合适。你怎么知道我手的尺寸？还有——这是"顺手"的事？那你的顺手也太准了吧。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……上次你骑车我扶着你的时候大概估计了一下。你别想太多。',
        systemComment: '你没夸张感谢也没冷淡收下。你发现了尺寸刚好合适——这证明他用了心。你点破了他的"顺手"谎言——他觉得被你看见了，又没被过度关注。刚刚好。'
      }
    ],
    successText: '你看见了他的小心思但没有让他尴尬。ISFJ 觉得你懂 TA——这是最好的回应。'
  },
  {
    id: 'isfj-2',
    level: 2,
    title: '过度照顾',
    scene: '你们一起住了一段时间。每天早上 ISFJ 都会帮你准备好一切。今天你看到 TA 在自己吃药。',
    messages: [
      { role: 'target', content: '你醒了？早餐在桌上。咖啡我帮你凉好了——怕你赶时间烫到。' },
      { role: 'target', content: '还有你昨天说肩酸，我买了膏药放在你包里了。' }
    ],
    question: 'TA 事事都帮你做好了。你开始觉得压力大——好像自己被照顾成了一个废人。',
    options: [
      {
        id: 'A',
        text: '你天天这样太辛苦了。明天我自己来吧，你多睡会儿。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你拒绝了他的喜欢',
        deathReport: '他做这些是因为想让你舒服。你说"不用"的时候他很难过——他不知道还能用什么方式对你好。你拒绝他的照顾就像在拒绝他的喜欢。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你天天这样不累吗？你能不能管好你自己就行？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '……我没有觉得累。你是不是嫌我烦了？',
        systemComment: '你直接否定了他核心的付出方式。他活着就是为了让别人舒服——你说"管好你自己"在他听来就是"我不需要你的爱"。'
      },
      {
        id: 'C',
        text: '咖啡凉得刚刚好。膏药我也收了。但我想跟你商量个事——以后早餐我们轮流做？你做的时候我负责洗碗。我想也照顾你一下，不然显得我很废。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '……你也想照顾我？那好吧。但我煮咖啡你不许动——你上次差点把壶烧了。',
        systemComment: '你先肯定了他的照顾——喝了咖啡、收了膏药。然后你提了轮流方案——你不是说"不用了"而是说"我也想照顾你"。他听到的不是拒绝而是"我也想对你好"。'
      }
    ],
    successText: '你没有拒绝他的爱也没有全盘接受。你让 ISFJ 知道你也想照顾 TA——这对 TA 来说是最大的温暖。'
  },
  {
    id: 'isfj-3',
    level: 3,
    title: '委屈不说',
    scene: '你们一起跟朋友吃饭。朋友开了一个玩笑——说你以前的事。你跟着一起笑。但回家后 ISFJ 一直沉默。',
    messages: [
      { role: 'target', content: '没有……没事。' },
      { role: 'target', content: '我有点累，先睡了。' }
    ],
    question: 'TA 明显不开心但嘴上说没事。你知道 TA 在等你问。',
    options: [
      {
        id: 'A',
        text: '好，那你快睡吧。晚安。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你把他的沉默当真了',
        deathReport: '他说"没事"你就信了。其实他在等你再问一次的。你直接去睡了——他一个人坐在黑暗里想你是不是不在乎他的感受。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你到底怎么了？别每次都不说话，我很累的。',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '……真的没事。你睡吧。',
        systemComment: '你用了不耐烦的语气。他本来就害怕冲突——你越逼他越不敢说。你表现出"你很累"让他觉得自己的情绪是你的负担。'
      },
      {
        id: 'C',
        text: '你不说我也知道你在想什么。那个玩笑让你不舒服了对吧？你怕说出来显得你小气——但你是我的人，你不开心我有责任知道。你慢慢说，我听着。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……我就是觉得那个朋友不太尊重你。但你笑得很开心我怕说出来扫你的兴。',
        systemComment: '你没逼问"你怎么了"——你直接说出了他在想什么。他最大的需求是被理解而不是被盘问。你说"你不开心我有责任知道"——他觉得被保护了。'
      }
    ],
    successText: '你没有等他开口而是主动说出了他的感受。ISFJ 不需要被问——TA 需要被懂。'
  },
  {
    id: 'isfj-4',
    level: 4,
    title: '讨好模式',
    scene: '你们计划周末去哪。你说了你想去爬山。ISFJ 说好。但你后来发现 TA 其实恐高。',
    messages: [
      { role: 'target', content: '没事，我可以去。你开心就行。' },
      { role: 'target', content: '我到时候不走边边上就好。' }
    ],
    question: 'TA 明明恐高却为了你答应去爬山。怎么处理这种自我牺牲？',
    options: [
      {
        id: 'A',
        text: '那你到时候走中间，我牵着你。没事的。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你把他的牺牲当成了同意',
        deathReport: '他其实很害怕。但你那么开心他不忍心拒绝。到了山上他全程紧张你都没看出来——他会觉得你根本不在乎他的感受，只在乎想做的事有没有做成。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你恐高干嘛不说？总这样委屈自己以后出问题怎么办？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '……对不起，我不该不说的。',
        systemComment: '你指责了他的讨好行为。他觉得自己又做错了——初衷是让你开心，结果被你骂。他以后更不敢说实话了。'
      },
      {
        id: 'C',
        text: '你恐高还答应？你是不是傻。不过我知道了——山不去了。我们换个地方。但下次你一定要跟我说实话——我可以换方案的，方案没有你重要。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……真不去吗？那你想去哪里？',
        systemComment: '你发现了他没说出口的恐惧并且替他做了决定——不去山了。他会优先考虑你的感受——所以需要你来替他设这个边界。你说"方案没有你重要"——他会记住这句话很久。'
      }
    ],
    successText: '你发现了他没说出来的恐惧并且替他做了正确的决定。ISFJ 觉得被你保护了。'
  },
  {
    id: 'isfj-5',
    level: 5,
    title: '牺牲自我',
    scene: 'ISFJ 最近总是很累。你发现 TA 每天早起一小时给你做便当，晚上还熬夜帮你改简历。',
    messages: [
      { role: 'target', content: '我没事……就是最近睡得晚了一点。你不用担心我。' },
      { role: 'target', content: '你的简历我快改完了——我觉得那个项目描述可以再优化一下。' }
    ],
    question: 'TA 在燃烧自己来照顾你。你心疼但 TA 不承认自己累了。',
    options: [
      {
        id: 'A',
        text: '别太累了，今晚早点睡。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你的关心停在嘴上',
        deathReport: '你说"早点睡"但其实他做到凌晨你也没发现。后来他病了你才知道一直在硬撑。你要是真的心疼他——你应该做点什么，而不是只说一句早点睡。',
        deathRate: '25%'
      },
      {
        id: 'B',
        text: '你别给我做便当了。我也没让你改简历。你把自己搞成这样干嘛？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '……我只是想帮你。我不做了行了吧。',
        systemComment: '你拒绝了他的付出但也否定了他的心。他做这些是因为爱你——你说"我也没让你做"让他觉得自己自作多情。他会停止付出，但也会收回感情。'
      },
      {
        id: 'C',
        text: '简历放下，今天不许改了。便当明天我做——你给我好好睡一觉。你要想帮我，就好好的别让我担心。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '但是你那个简历后天就要交了……',
        systemComment: '你没只说"别太累"——你直接行动了：收走简历、明天你做便当、命令他睡觉。他需要一个比他更强势的人来设边界——你说"你要想帮我就好好睡觉"让他觉得照顾好自己也是在照顾你。'
      }
    ],
    successText: '你没有说教而是直接行动。ISFJ 需要有人帮 TA 踩刹车——你做对了。'
  },
  {
    id: 'isfj-6',
    level: 6,
    title: '期望落空',
    scene: '你的生日。ISFJ 提前一周就开始准备了。但当天出了意外——蛋糕店弄错了订单。',
    messages: [
      { role: 'target', content: '蛋糕搞错了……我跟店家说了但是他们说今天做不了新的了。' },
      { role: 'target', content: '我本来想给你一个完美的生日的……对不起。' }
    ],
    question: 'TA 因为蛋糕出了问题在自责。你其实不介意。',
    options: [
      {
        id: 'A',
        text: '没事没事，一个蛋糕嘛，不影响的。别难过了。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你否定了他的用心',
        deathReport: '你越说"没事"他越难过。他做了一周的方案就因为你说"没事"全白费了——他不是为蛋糕难过，是觉得没能给你最好的。你的"没事"让他的努力显得多余。',
        deathRate: '20%'
      },
      {
        id: 'B',
        text: '确实有点遗憾，不过算了。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '……嗯。',
        systemComment: '你表达了遗憾——他更自责了。他会解读为"我不够好"。你的"算了"听起来像妥协而不是安慰。'
      },
      {
        id: 'C',
        text: '那你可欠我一个蛋糕了。不过——你提前一周就开始准备了这件事，比蛋糕本身重要多了。所以这个"生日搞砸"以后可以拿来笑你很久。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '你还要笑我！……但你真的不生气吗？',
        systemComment: '你没说"没关系"——你说了"你欠我一个蛋糕"，这肯定了他的用心。你把重点转向了他提前一周的准备——你的玩笑化解了他的愧疚。他需要知道：你看见了他的努力，不是只看结果。'
      }
    ],
    successText: '你没有轻描淡写也没有斤斤计较。你让他知道你看见了努力——结果不重要。'
  },
  {
    id: 'isfj-7',
    level: 7,
    title: '失望积累',
    scene: '你最近连续加班，每天回家倒头就睡。今天你稍微早了点回家。',
    messages: [
      { role: 'target', content: '你回来了。饭在锅里热着。' },
      { role: 'target', content: '（声音很平静，但眼神没看你）' }
    ],
    question: 'TA 没有抱怨，但你感觉到 TA 在默默积累失望。',
    options: [
      {
        id: 'A',
        text: '好香。你先吃了吗？我换件衣服就来。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你错过了最后的信号',
        deathReport: '你连续一周没正眼看过他。今天他特意做了你爱吃的——你说了句"好香"就去换衣服了。他甚至觉得你可能已经不在乎他了。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你能不能别每次都不说话？你有什么不满就说出来啊。',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '我没有不满。你去洗澡吧。',
        systemComment: '你没等他准备好就逼他开口。他需要时间组织情绪——你越逼他越缩回去。你的不耐烦让他觉得"我连不开心都是错的"。'
      },
      {
        id: 'C',
        text: '（从背后抱住 TA）饭我闻到了——是我喜欢的番茄牛腩对吧。你这周一个人买菜做饭等我回来……辛苦了。不是你的问题，是我太忙了。周末我们哪儿都不去，就在家陪你。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '（肩膀微微松了一下）你先去洗澡吧……饭凉了不好吃。',
        systemComment: '你没等他开口——你主动看见了他的付出和寂寞。你说"番茄牛腩"证明你知道他做了什么。你道歉说"不是你的问题是我太忙了"——他不需要你开口道歉，他需要你知道你亏欠了陪伴。'
      }
    ],
    successText: '你没有等他爆发也没有逼他开口。你主动看见了他的付出和委屈。ISFJ 的失望被看见了——就好了一半。'
  },
  {
    id: 'isfj-8',
    level: 8,
    title: '意外爆发',
    scene: '你们因为一件小事吵起来了。具体是什么事已经不重要了——ISFJ 突然哭了。',
    messages: [
      { role: 'target', content: '你知道吗……上周你生日我提前一周准备，蛋糕搞砸了你说了没关系。上个月我发烧你加班到十一点才回。上个礼拜我做了你最爱吃的你连看都没看就去洗澡了。' },
      { role: 'target', content: '我一直跟自己说没关系——但我真的累了。' }
    ],
    question: 'TA 爆发了——所有的小事一起涌了上来。你怎么接？',
    options: [
      {
        id: 'A',
        text: '好了好了，我的错。不哭了啊。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你的道歉太轻了',
        deathReport: '你每次都说"我的错"但下次还是一样。他不是要你道歉——他是想你看见他一直以来的努力。你的道歉让他觉得你在敷衍，为了让他别哭而已。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你每次都不说，一爆发就翻旧账，这样公平吗？',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '你觉得不公平？那我是不是应该继续忍着？',
        systemComment: '你在他爆发的时候选择了防御和反击。他忍了很久才敢说出来——你一句"翻旧账"让他所有的勇气都碎了。他再也不会跟你说了。'
      },
      {
        id: 'C',
        text: '你说得对。这三件事我一件都没做好。你最需要我的时候——生日、生病、做饭——我都不在。你不用再说"没关系"了。以后这些事我来记——你只管告诉我。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '（哭得更凶了但搂住了你）',
        systemComment: '你没辩解没敷衍道歉。你一个一个承认了他说的每一件事——他需要被证实他受的委屈是真实的。你说"以后这些事我来记"——他不需要一个人背负所有记忆了。'
      }
    ],
    successText: '你没有敷衍道歉也没有为自己的行为辩护。你承认了每一件事——ISFJ 觉得终于被听见了。'
  },
  {
    id: 'isfj-9',
    level: 9,
    title: '我需要你来猜',
    scene: 'ISFJ 今天心情不好。你问 TA 怎么了。',
    messages: [
      { role: 'target', content: '没事。' },
      { role: 'target', content: '（但一直刷手机不看你）' }
    ],
    question: 'TA 嘴上说没事但全身都在说"有事"。而且 TA 在等你自己发现。',
    options: [
      {
        id: 'A',
        text: '好，那你自己待会儿。我正好打把游戏。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你在他需要你的时候走开了',
        deathReport: '他说"没事"是客气话。他真的有事。他希望你也能看出来——但你直接去打游戏了。他觉得自己在你心里不重要。你如果真的在意他，不会因为他一句"没事"就走开的。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你明明就心情不好。你说出来会怎样？非要我猜吗？',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '算了……没事。',
        systemComment: '你猜到了他不开心但用了不耐烦的语气。他觉得你虽然发现了但他的情绪是你的负担——他宁愿不说也不想被你嫌烦。'
      },
      {
        id: 'C',
        text: '没事也没关系。我就在你旁边坐会儿——你看你的手机，我看我的。你什么时候想说了，我一直在这儿。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '（过了一会儿靠在你肩膀上）今天同事说了一句让我很不舒服的话……',
        systemComment: '你没逼问他也没走开。你给了陪伴但不给压力。他不需要你猜出答案——他需要你愿意坐在那里等他准备好。你说"你什么时候想说我都在"——这是他最需要的安全感。'
      }
    ],
    successText: '你没有逼问他也没有放弃他。你坐在那里等他——ISFJ 的安全感来自你愿意等待。'
  },
  {
    id: 'isfj-10',
    level: 10,
    title: '付出倦怠',
    scene: 'ISFJ 最近变得很安静。以前每天给你发消息问你想吃什么、要不要带东西。现在不发了。',
    messages: [
      { role: 'target', content: '今天加班。你自己吃吧。' },
      { role: 'target', content: '不用给我留饭。' }
    ],
    question: '一向照顾你的 TA 突然停下来了。你知道 TA 不是不爱了——是累了。',
    options: [
      {
        id: 'A',
        text: '好，那你也要记得吃。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你把他的倦怠当成了日常',
        deathReport: '他不发消息不问你吃饭——你居然什么都没发现。你就像平时一样说了句"记得吃"。那一刻他真的觉得——自己的付出对你来说可有可无。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你最近怎么了？你不照顾我了是不是不爱我了？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我没有不爱你……我就是累了。你让我休息一下行吗？',
        systemComment: '你把他的疲惫当成了爱的减少。他最害怕的就是"你不做 XX 就是不爱我"——他的付出本身就已经很累了，你还用这个来检验他的爱。'
      },
      {
        id: 'C',
        text: '你最近不发消息问我了——不是我发现了你有什么不对劲。是我习惯了看到你的消息。你不发了我会想你。不过你不用照顾我——你照顾你自己就好了。今天我给你带饭。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……你不用给我带。',
        systemComment: '你诚实地说你注意到了他的变化——但不是以质问的方式。你说"我习惯了你的消息"——他觉得自己被需要。然后你说"你照顾你自己就好，今天我给你带饭"——你反转了照顾的角色。他需要看到你也能照顾他，他才敢休息。'
      }
    ],
    successText: '你没有把 TA 的倦怠当成拒绝。你让 ISFJ 知道你注意到了变化并且你也可以照顾 TA。'
  },
  {
    id: 'isfj-11',
    level: 11,
    title: '自我找回',
    scene: 'TA 开始做一些以前不做的事。周末一个人去图书馆，报了一个画画班。',
    messages: [
      { role: 'target', content: '我周六去上课。你不用等我吃饭。' },
      { role: 'target', content: '我突然想试试。' }
    ],
    question: '一直围着你转的 ISFJ 开始有自己的生活了。你怎么反应？',
    options: [
      {
        id: 'A',
        text: '好，去吧。那我不等你了。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你没有庆祝他的成长',
        deathReport: '他第一次为自己做了个决定——你好像一点都不在意。他说去上画画课，你连问都没问。他那天在教室里一直在想你是不是不在乎他做什么了。',
        deathRate: '25%'
      },
      {
        id: 'B',
        text: '你怎么突然想学画画了？你不会是想离开我吧？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '……我只是想学个画画。你就不能让我有一点自己的生活吗？',
        systemComment: '你把他的自我成长当成了分离的信号。他鼓起勇气走出自己的壳——你用怀疑迎接他。他会觉得"原来你不希望我有自己的生活"。'
      },
      {
        id: 'C',
        text: '画画？可以啊。上完课给我看看你画了什么——画得丑我也不会笑话你。不过说真的——我挺开心的。你以前什么都围着我转，现在你也有自己喜欢做的事了。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……那你等着。我第一节课画了一棵树——虽然不太像。',
        systemComment: '你正面回应了他的新兴趣——"画得丑也不笑话你"是轻松的支持。你说了"我挺开心的"——你让他知道你不是只接受他的付出，你也希望他有自己的快乐。'
      }
    ],
    successText: '你庆祝了 TA 的自我成长。ISFJ 发现——你爱的不是 TA 的付出，而是 TA 本身。'
  },
  {
    id: 'isfj-12',
    level: 12,
    title: '最终选择',
    scene: '你们坐在阳台。ISFJ 手里捧着一杯茶。',
    messages: [
      { role: 'target', content: '我想跟你说一件事。' },
      { role: 'target', content: '这半年我一直在想——我是不是对你太好了。不是你的问题，是我的问题。我把自己弄丢了。但现在我找回来一点了。你还要这个我吗？' }
    ],
    question: '最终问题。ISFJ 问你——你爱的是付出的我，还是真正的我？',
    options: [
      {
        id: 'A',
        text: '说什么呢。你什么样我都要你。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你没有听到他的问题',
        deathReport: '他说把自己弄丢了。你说"什么样都要"——那你要的是原来的他还是现在的他？如果你说就这样别变——那他还敢找回自己吗？他必须变。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你最近确实变了。但我有点不习惯。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '……那我还是变回去好了。',
        systemComment: '你表达了对变化的犹豫——他误以为你只爱过去那个一直在付出的他。他会为了你再次牺牲自我——但那不是爱，是讨好。'
      },
      {
        id: 'C',
        text: '我喜欢的从来不是你对我多好。我喜欢的是你这个人——你画画的样子比给我做饭的样子更好看。所以那个会去图书馆、会学画画的你——我很喜欢。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '（眼泪掉进茶杯里）你再说一遍。',
        systemComment: '你直接回答了他最深的恐惧——"我喜欢的不是你的付出而是你这个人"。你说"你画画的样子比给我做饭的样子更好看"——这句话击中了他的核心。他终于相信：你不需要他用付出来换取爱。'
      }
    ],
    successText: '你告诉 ISFJ——你爱的是 TA 这个人本身，不是 TA 为你做的那些事。ISFJ 第一次感受到了无条件的爱。'
  }
];
