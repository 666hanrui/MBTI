import type { ChallengeQuestion } from '../types';

export const esfjQuestions: ChallengeQuestion[] = [
  {
    id: 'esfj-1',
    level: 1,
    title: '完美恋人面具',
    scene: '你们第一次约会。ESFJ 穿得非常正式，提前半小时就到了。整个约会过程中 TA 一直在观察你的表情，不断问你觉得怎么样。',
    messages: [
      { role: 'target', content: '这家餐厅你喜欢吗？我查了好多评价才选到的。' },
      { role: 'target', content: '你觉得我今天穿这身合适吗？会不会太正式了？' }
    ],
    question: 'TA 很紧张，在想尽办法让你满意。怎么回？',
    options: [
      {
        id: 'A',
        text: '你今天穿得真的很好看！餐厅也选得好——这家我朋友之前推荐过，一直没来。你真的好会安排啊，什么都想得那么周到。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你进入了表演模式',
        deathReport: '你夸我的时候我一直在看你的眼睛——你笑的时候眼睛没眯起来。你在配合我。我最怕的就是别人配合我。你让我觉得我们之间有距离。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '挺好的啊。不用这么紧张，不就是吃个饭嘛。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我没有紧张啊……你觉得我在紧张？我只是……算了。',
        systemComment: '你说"不用紧张"——但他已经紧张了。你越这么说他越觉得自己不该紧张。他花了心思准备，你回得太随意了，他觉得白费劲了。'
      },
      {
        id: 'C',
        text: '你穿这身挺好看的。不过你不穿这么正式我也觉得好看。餐厅选得可以——你花了不少心思吧。但比起这些，我更想多了解你这个人。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '真的吗……我就是想给你留个好印象。那你想了解什么？',
        systemComment: '你夸了具体的东西——"穿这身好看"、"餐厅选得可以"。他听到了。但你又说"不穿这么正式也好看"——你在告诉他不用演。最后你转了话题——"我想了解你这个人"。他需要被看到努力，但他更需要被看到本人。'
      }
    ],
    successText: '你没有配合表演也没有冷落用心。你让 TA 知道：你很满意，但你不需要 TA 完美。'
  },
  {
    id: 'esfj-2',
    level: 2,
    title: '社交展示',
    scene: '在一起一个月了。ESFJ 开始频繁在朋友圈发你们的合照。某天 TA 兴奋地给你看手机。',
    messages: [
      { role: 'target', content: '你看！我发我们昨天去海边的照片，已经一百多个赞了！大家都在说你好看！' },
      { role: 'target', content: '我闺蜜说我们超配！对了，下周我生日，我想办个派对，把你介绍给我所有朋友。' }
    ],
    question: 'TA 把你们的恋爱当成了一场演出，而且希望你参演。',
    options: [
      {
        id: 'A',
        text: '哈哈哈你朋友好可爱！生日派对当然要办啊！我们一起准备吧！到时候我要好好认识你朋友！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你成了最佳配角',
        deathReport: '你说要一起准备的时候我其实很开心。但你知道吗——我心里在打鼓。你是在配合我还是你真的也喜欢？我想要的是一个真实的恋人，不是一个跟我一起演戏的搭档。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你发朋友圈之前能不能问问我？我不太喜欢被晒。而且生日不用搞那么大吧。',
        outcome: 'damage',
        pattern: 'boundary',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '你不喜欢吗……可是我觉得很幸福啊。你是不是不想让别人知道我们？',
        systemComment: '你直接拒绝了。在他眼里你在否认他的幸福。他发朋友圈是因为他以你为骄傲——你否定这个就像在说他的骄傲是错的。'
      },
      {
        id: 'C',
        text: '哈哈哈看到了，你拍得不错。不过下次拍我可以先帮你看看构图，免得你把我拍成表情包。派对的话——你生日我当然到场，但不用搞太大，我想多跟你待会儿，不想你忙着招呼别人没空理我。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '哈哈好那下次你当我的专属摄影师！那派对……就请几个最熟的人？',
        systemComment: '你接受了——"你拍得不错"。你用了玩笑——"把我拍成表情包"。你说不搞太大是因为——"我想多跟你待会儿"。你没有说不喜欢晒，你说想多在一起。他吃这套：你想要的不是不晒，而是更多两人空间。'
      }
    ],
    successText: '你接受了 ESFJ 的社交需求但引导 TA 关注二人世界。TA 觉得你在乎 TA，也在乎你们的关系质量。'
  },
  {
    id: 'esfj-3',
    level: 3,
    title: '过度关心',
    scene: 'ESFJ 开始全方位关心你的生活。某天你随口说了一句有点咳嗽，半小时后 TA 出现在你家门口。',
    messages: [
      { role: 'target', content: '我给你买了药！还有梨汤，我熬了一小时。你开门！' },
      { role: 'target', content: '你一个人在家我不放心。我今天请了半天假陪你。' }
    ],
    question: 'TA 的爱是炙热的。但你觉得有点过了。怎么回应？',
    options: [
      {
        id: 'A',
        text: '天哪你也太好了吧！梨汤都熬了——快进来！其实你不用请假的，但你来我真的好开心。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你鼓励了过度关心',
        deathReport: '你说"你来我好开心"。好，那我记住了——你生病我就该请假陪你。以后你每次不舒服我都会这样。我不知道其实你觉得过了，因为你一直在说好。我会累死，你也会憋死。',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '你太夸张了吧……我就是咳嗽一下。你回去上班吧，药放门口就行。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '你怎么这样……我好心给你送东西你让我放门口？',
        systemComment: '你在拒绝他的好意。他花了心思——熬了一小时的梨汤——你连门都不让进。他会觉得你不需要他。'
      },
      {
        id: 'C',
        text: '你居然熬了梨汤？进来吧。不过你不用请假的——我真的只是小咳嗽。汤我喝了，但你答应我下次先问问我需不需要跑一趟，别为了我请假耽误工作。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '好好好……那你把汤喝完我就回去。你如果严重了一定要叫我。',
        systemComment: '你让他进来了——你接受了他的关心。但你立了规矩——"下次先问问我"。你说"别为了我请假"——你在为他考虑。他觉得自己被关心了，也被关心了。'
      }
    ],
    successText: '你接受了 ESFJ 的关心但没有让 TA 无限投入。TA 感觉到了你的体贴——你不光接受爱，你也替 TA 着想。'
  },
  {
    id: 'esfj-4',
    level: 4,
    title: '传统剧本',
    scene: '你们聊到了见家长的话题。ESFJ 的爸妈想请你来家里吃饭。TA 郑重其事地跟你说了一些"要求"。',
    messages: [
      { role: 'target', content: '我妈说你来了不用带东西，但她肯定会准备一桌子菜。' },
      { role: 'target', content: '还有你到时候穿正式一点，别说脏话，夸她做的菜好吃就行。我教你——你按我说的做，保证他们喜欢你。' }
    ],
    question: 'TA 在教你演一个 TA 父母喜欢的角色。但你是你。',
    options: [
      {
        id: 'A',
        text: '好！你说什么我做什么。你爸妈喜欢什么样的我配合就行——你放心，我肯定不会给你丢脸。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你交出了自己的人设',
        deathReport: '我说什么你做什么。好的，今天我让你演戏应付我爸妈。明天呢？后天呢？你要演一辈子吗？你对我的好是因为你真的想还是因为你觉得该这样？你让我觉得我从来没有真正拥有过你。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '我不喜欢这样。我是去见你爸妈，不是去面试。我有自己的方式。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '我不是说你不好……我只是想让他们喜欢你。你非要这么抵触吗？',
        systemComment: '你在对抗规则。他从小就被教"见长辈要懂事"——你的拒绝在他看来是不尊重他家的规矩。他会夹在你和父母之间很难受。'
      },
      {
        id: 'C',
        text: '知道了，穿正式点、夸你妈做饭好吃。不过我不打算演一个不是我的人——我该怎么样就怎么样。如果他们觉得我不好，那我们一起想办法让他们慢慢了解我。反正我在你身边，你在就行。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '嗯…你说得也对。那你就做你自己吧，我在旁边帮你兜着。',
        systemComment: '你接受了他的部分建议——"穿正式点、夸你妈"。但你说了重点——"我不打算演"。你说"如果觉得不好我们一起想办法"——你给了他安全感。他需要的不是你完美配合剧本，而是你愿意跟他一起面对。'
      }
    ],
    successText: '你没有拒绝 TA 的家庭文化也没有完全照搬剧本。你让 TA 知道：你会尊重 TA 的家人，但你也会做自己。'
  },
  {
    id: 'esfj-5',
    level: 5,
    title: '朋友圈运营',
    scene: '你们吵了一架。原因是你没有点赞 TA 新发的朋友圈。ESFJ 一脸不开心地拿着手机来找你。',
    messages: [
      { role: 'target', content: '你是不是没看到我发的朋友圈？' },
      { role: 'target', content: '我发了我们的合照……我朋友都问我你是不是不喜欢拍照。你从来不主动发我们的照片。' }
    ],
    question: '你的社交表现正在被 TA 当成感情指标在考核。',
    options: [
      {
        id: 'A',
        text: '对不起我看到了忘记点赞了！我现在就去点！我也发一张我们的合照好不好？你说发哪张？',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你开始了补偿模式',
        deathReport: '你道歉了，你点赞了，你说要发合照了。但你不是自愿的。你是在哄我。我要的是你真的想发，不是我觉得你应该发。你让我觉得你只是在应付我。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你因为这个不开心？我不点赞不代表我不喜欢你啊。你太在意别人看法了。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '你说我在意别人看法？我只是想让你在朋友面前承认我，这有错吗？',
        systemComment: '你戳了他最痛的点。他最怕别人说自己在乎别人看法——因为他自己也知道这是问题。你的话像在揭伤口。'
      },
      {
        id: 'C',
        text: '我确实看到了，没点赞是因为我在想配文写什么。我不太习惯在朋友圈晒感情，但如果你在意的话——下次你发了告诉我一声，我看到就点。但发不发合照……你让我想想，我不太喜欢在朋友圈谈恋爱。不是不想让人知道，就是没这个习惯。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '真的吗……那你也偶尔发一下嘛。我不是要你天天发，就是……让我朋友知道我有你。',
        systemComment: '你没有道歉也没有反击。你解释了——"在想配文"。你说了"我不太习惯"——你坦诚了你的模式。你说"你发了告诉我一声"——你在乎他的感受。他要的不是你违背本性配合，而是你愿意理解他为什么在意。'
      }
    ],
    successText: '你没有哄 TA 也没有批评 TA。你让 TA 知道你的行为方式跟爱的程度无关——但你理解 TA 想要被公开承认的需求。'
  },
  {
    id: 'esfj-6',
    level: 6,
    title: '情感索取',
    scene: 'ESFJ 最近特别黏人。你加班回家晚了，看到 TA 坐在沙发上，眼睛红红的。',
    messages: [
      { role: 'target', content: '你今天都没怎么给我发消息。你是不是不爱我了？' },
      { role: 'target', content: '你今天跟我说的话不超过十句。我一直在等你的消息你知道吗？' }
    ],
    question: 'TA 需要不断确认你的爱。你今天很累，没有精力哄人。',
    options: [
      {
        id: 'A',
        text: '对不起对不起！我今天真的太忙了。我最爱你了，你不要乱想。过来抱抱——别难过了好不好？',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你开始用安抚代替沟通',
        deathReport: '你说了对不起，说了爱我，抱了我。但我还是不安心。我觉得你只是在哄我。下次你忙的时候我还是会这样——因为我没学会怎么在你忙的时候不焦虑。你哄我让我暂时好了，但下次我还会发作。',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '我今天真的很累。你能不能不要每次我忙就这样？你这样我压力很大。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '你觉得我让你压力大？好……那我不问了。',
        systemComment: '你发泄了情绪。他会接住你的情绪但他会受伤。他会觉得自己的需求是错的。他会闭嘴，但他不会好。'
      },
      {
        id: 'C',
        text: '我今天真的加班到飞起，不是故意不回你。我理解你等我消息的感觉——我忙起来确实顾不上。我们这样行不行：我忙之前跟你说一声今天会比较忙，你也别一直等，忙完了我会找你的。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '那你说好的……你忙之前跟我说一声，我就不等你了。但你忙完了要找我哦。',
        systemComment: '你没有哄也没有凶。你解释了——"加班到飞起"。你理解了他——"我理解你等我消息的感觉"。你给了方案——"我忙之前打招呼，你别一直等"。他要的不是你每时每刻都在，而是可预测的安全感。'
      }
    ],
    successText: '你没有安抚也没有责备。你给了 TA 一个具体的安全方案——ESFJ 要的不是你的全部时间，而是你知道 TA 在等。'
  },
  {
    id: 'esfj-7',
    level: 7,
    title: '控制型照顾',
    scene: 'ESFJ 帮你整理了衣柜、换了你的洗漱用品、甚至给你预约了体检。TA 很骄傲地展示成果。',
    messages: [
      { role: 'target', content: '我把你的衣柜按颜色和季节重新分类了！还有你那个洗发水我换了，那个牌子不好，我给你买了更好的。' },
      { role: 'target', content: '对了，我帮你约了这周六的体检。你上次说好久没体检了，我帮你安排好了。' }
    ],
    question: 'TA 在接管你的生活。每件事都是为你好——但你没要求过。',
    options: [
      {
        id: 'A',
        text: '哇你真的太贴心了吧！衣柜分类这个好——我找衣服方便多了。体检我都忘了这事了，谢谢你帮我记着！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你成了被照顾的宠物',
        deathReport: '你说谢谢。好，那我继续帮你安排一切。你今天觉得贴心，明天会觉得方便——后天你会觉得我没有给你空间。但你现在说好，我不知道其实你已经开始不舒服了。我慢慢变成你的管家，然后你会恨我。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你能不能别动我东西？我衣柜我自己会收拾，洗发水我用习惯了你别换。体检我自己会约。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '我……我只是想帮你。你干嘛这么凶。',
        systemComment: '你在全面拒绝。他出于爱做的这些——你的反应让他觉得"我的爱是错的"。他会很受伤。'
      },
      {
        id: 'C',
        text: '衣柜分类不错，这个我喜欢。但洗发水我用惯了的你别给我换，我皮肤挑。体检的事谢谢你惦记——不过你下次先跟我说一声，我自己来约就行。你帮我操心了，但有些事让我自己做主好不好？',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '好吧……那个洗发水你不喜欢我换回来。那你体检记得约哦……别忘了。',
        systemComment: '你肯定了他的部分付出——"衣柜分类不错"。你温和地拒绝了改动——"洗发水别换"。你给了他台阶——"谢谢你惦记"。你说"有些事让我自己做主好不好"——你在建边界，但用的是请求的语气。他能接受这个。'
      }
    ],
    successText: '你没有接受全盘接管也没有粗暴拒绝。你让 TA 知道——你感激 TA 的爱，但你也要自己的生活主权。'
  },
  {
    id: 'esfj-8',
    level: 8,
    title: '他人眼光',
    scene: '你们在一家餐厅吃饭。ESFJ 突然变得很紧张——TA 遇到了一个朋友。打完招呼后 TA 开始坐立不安。',
    messages: [
      { role: 'target', content: '刚才那是我同事……她应该看到我们了。你说我刚才跟她说话的时候表情自然吗？' },
      { role: 'target', content: '她回去肯定会跟别人说……你说她会不会觉得我们不太配？' }
    ],
    question: 'TA 在担心别人对你们的评价。你的回应会让 TA 放松或者更焦虑。',
    options: [
      {
        id: 'A',
        text: '你当然自然啊！你想多了，别人怎么看关我们什么事？我们开心就好，别在意他们。',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你否定了 TA 的焦虑',
        deathReport: '你说我想多了。我不喜欢"想多了"这三个字。我是真的在担心。你轻飘飘一句让我不要在意——那我在意的时候谁来理解我？你让我觉得我的担忧是多余的，但我的担忧是真的。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你确实有点紧张，表情不太自然。不过没事啦，别想太多。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '是吗……你也觉得我不自然？完了她肯定看出来了。',
        systemComment: '你确认了他的焦虑。他会把你的话放大——"他说我不自然，那肯定所有人都看出来了"。你让他更焦虑了。'
      },
      {
        id: 'C',
        text: '你表情挺好的啊。而且退一步说——就算她觉得不配又怎样？她了解我们吗？我跟你在一起是因为我喜欢你，不是因为我符合谁的期待。不过如果你这么在意她的看法，下次我们约她一起吃饭让她好好认识我。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '你真的愿意跟她一起吃饭？……好。你说得对，她又不了解你。',
        systemComment: '你先安抚了——"你表情挺好的"。然后你给了新视角——"她了解我们吗？"最后你给了方案——"下次约她一起吃饭"。他需要有人在他意社交评价的时候帮他稳住——不是否定他的在意，而是给个可操作的方案。'
      }
    ],
    successText: '你没有轻飘飘安慰也没有添油加醋。你帮 TA 面对了社交焦虑——用行动而不是空话。'
  },
  {
    id: 'esfj-9',
    level: 9,
    title: '付出与绑架',
    scene: '大吵了一架。ESFJ 红着眼眶列数 TA 为你做过的一切。',
    messages: [
      { role: 'target', content: '我为你做了那么多……你生病我请假陪你，你加班我给你送饭，你家里出事我一直在你身边。' },
      { role: 'target', content: '你现在这样对我？你有没有良心？' }
    ],
    question: 'TA 在拿付出换你的愧疚。这是 ESFJ 最危险的时候。',
    options: [
      {
        id: 'A',
        text: '对不起……我知道你对我好。是我不好。你别难过了，我以后会更好的。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你承认了欠债关系',
        deathReport: '你道歉了。但你道歉的时候我心里更空了。我不要你因为愧疚对我好。我要你发自内心想对我好。我说这些不是为了让你道歉——我是想让你知道我的付出有多重。但你现在道歉了，这个重量你还是没懂。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '你做这些都是你自愿的。我又没让你做。你现在拿来怪我？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -2, emotionalSafety: -2 },
        targetReaction: '我自愿的？好，那我以后不做了。你满意了吧。',
        systemComment: '你在否定他的付出。他最怕的就是自己的付出被说成"自愿的"。你说的逻辑上没错，但关系里没有赢家。'
      },
      {
        id: 'C',
        text: '你为我做的每一件事我都记得。谢谢你。但我想跟你说——我喜欢你不是因为你为我做了什么，是因为你这个人。你不需要用付出来证明你爱我。我也爱你，不管你做了什么。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……真的吗？你真的这么想？',
        systemComment: '你承认了他的付出——"我都记得。谢谢你。"但你说"我喜欢你是因为你这个人，不是你做了什么"。这是他最缺的东西——他一直相信只有付出才能换来爱。你说"不管你做了什么"——你在告诉他的爱是无条件的。这是他最深的渴望。'
      }
    ],
    successText: '你没有在愧疚中屈服也没有在愤怒中否认。你让 TA 知道——你看到 TA 的付出了，但你爱的人不是 TA 的工具箱。'
  },
  {
    id: 'esfj-10',
    level: 10,
    title: '仪式感暴政',
    scene: '情人节快到了。ESFJ 已经准备了一个月——礼物、餐厅、穿搭、拍照路线全部规划好了。TA 拿着一个详细的 schedule 给你看。',
    messages: [
      { role: 'target', content: '这是我们的情人节计划！我订好了餐厅、买了礼物、还预约了拍立得拍照！每个时间点我都排好了！' },
      { role: 'target', content: '你觉得怎么样？惊喜吗？' }
    ],
    question: 'TA 的计划很用心，但你觉得有点太满了。你不想摧毁 TA 的期待。',
    options: [
      {
        id: 'A',
        text: '太棒了！你真的太用心了！我都听你的安排！好期待！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你成全了一场完美表演',
        deathReport: '你说好。但你从头到尾都在配合我。我想要的是你给我一个真实的反应——哪怕你说有点累。你说什么都好，我反而觉得你在敷衍我。我策划的一切好像跟你没关系。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你排得太满了吧……情人节不就想两个人待一会儿吗？搞得像拍综艺一样。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我准备了一个月你说像拍综艺？那算了取消吧。',
        systemComment: '你全面否定了他的心血。每一个细节都是他精心安排的——你说"像拍综艺"让他觉得自己像个笑话。他会彻底泄气。'
      },
      {
        id: 'C',
        text: '你准备得也太细了吧……我看看。餐厅不错，拍照也有意思。不过我觉得中间留两个小时空白吧——万一我们想多待会儿或者换个地方呢？计划赶不上变化，留点随机应变的空间更好玩。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '留空白吗……也行！那到时候我们随机发挥！反正拍照的环节不能删！',
        systemComment: '你肯定了他的大部分计划——"餐厅不错，拍照有意思"。但你温和地调整了——"中间留两个小时空白"。你说"随机应变更好玩"——你没有否定仪式感，而是给它加了呼吸空间。他需要听到的是：你的计划很好，但我们不需要完美执行。'
      }
    ],
    successText: '你没有摧毁 TA 的仪式感也没有全盘配合。你让 TA 的完美计划里多了一点两个人的呼吸空间。'
  },
  {
    id: 'esfj-11',
    level: 11,
    title: '"你变了"',
    scene: '最近你工作很忙，陪 ESFJ 的时间变少了。某天 ESFJ 坐在床边，很认真地看着你。',
    messages: [
      { role: 'target', content: '你变了。你以前不是这样的。' },
      { role: 'target', content: '你以前会主动给我发消息，会给我准备惊喜，会记得我们的纪念日。你现在什么都不做了。你是不是不爱我了？' }
    ],
    question: 'TA 在用过去的你衡量现在的你。你知道你没变——只是阶段不同了。',
    options: [
      {
        id: 'A',
        text: '我没有变！我还是爱你啊！我只是最近太忙了。对不起我以后多陪你。',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你开始了自证循环',
        deathReport: '你说你没变，你说你忙，你说对不起。但下一次我还会问你变了没有。因为你的解释只是解释了你的行为——没有解释你的心。你越说"我没变"，我越觉得你在说服自己。',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '我没有变，是你太敏感了。每个人的生活都会变化，你不能一直用热恋期来比较。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '你说我敏感？热恋期？原来你之前的热情只是热恋期反应？',
        systemComment: '你在辩护。"你太敏感了"是他最讨厌的话之一。他会精确捕捉到你话语里的不耐烦。'
      },
      {
        id: 'C',
        text: '我没有变。我还是爱你。但在不同的阶段爱的方式会不一样。热恋的时候我每天想给你惊喜——现在我在为我们的生活打基础，忙是忙，但忙的也是我们的未来。以前我给了你很多浪漫，现在我想给你的是更长久的稳定。你愿意等我把这段忙完吗？',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '你真的是在为我们的未来忙吗……那你要告诉我你在忙什么啊，你不说我怎么知道。',
        systemComment: '你没有说"我没变"就结束。你解释了爱的不同阶段——热恋 vs 稳定。你说"忙的是我们的未来"——你给了他一个更高层面的安心。你说了"你愿意等我把这段忙完吗"——你请求了他的理解而非要求。他需要感受到你的爱依然在，只是换了方式。'
      }
    ],
    successText: '你没有陷入自证也没有责备 TA 敏感。你让 TA 看到——爱的形式会变，但爱本身没有变。'
  },
  {
    id: 'esfj-12',
    level: 12,
    title: '最终选择',
    scene: '你们的关系到了十字路口。ESFJ 很认真地找你谈话。',
    messages: [
      { role: 'target', content: '我需要你跟我说实话——你觉得我们合适吗？我一直在努力变成你想要的恋人，但我好累。' },
      { role: 'target', content: '我想知道你到底想要什么。如果我不是你想要的，你可以走。' }
    ],
    question: 'TA 把所有的伪装都卸掉了。现在你的一句话决定了这段关系的走向。',
    options: [
      {
        id: 'A',
        text: '你就是我想要的！你不需要改变！你这样就很好——不要胡思乱想。',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你避开了最后一次机会',
        deathReport: '你说我就是你想要的。但我知道你在说好听的。我把自己最脆弱的一面给你看了——我说我好累。你只告诉我"你这样就很好"，你没告诉我我到底是谁。我最需要知道的是你有没有看到真正的我。你没有回答。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '我想要的不是一个为我改变的人，是一个不需要为我改变的人。说实话我觉得你太累了是因为你一直想太多。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -2, emotionalSafety: -2 },
        targetReaction: '……你说我想太多。好。那就这样吧。',
        systemComment: '在他最脆弱的时候你给了他一个批评。"你想太多"否定了他所有的挣扎。他不会原谅你在他的心打开的时候补一刀。'
      },
      {
        id: 'C',
        text: '我想了很久。你问我想要什么——我想要一个不需要时刻表演的恋人。我喜欢你照顾人的时候，但我不需要你照顾我才能证明你爱我。我喜欢你爱面子，但我不需要你活在别人的眼光里。我喜欢你为我付出，但我不需要你用付出来绑架你自己。我要你——不要那个完美的你，要那个真实的你。你愿意留下来试试吗？',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 2, emotionalSafety: 2 },
        targetReaction: '……你居然知道。你一直都知道我在演。那你怎么不早说……（哭了很久）好。我试试。',
        systemComment: '你给了他最想要的东西——被完整地看到。你说出了他的付出、他的爱面子、他的表演——但你没有批评，你说"我喜欢你爱面子"但是"我不需要你活在别人的眼光里"。你说"我不要完美的你，我要真实的你"——这是他这辈子最想听到的话。你给了他一个选择——"你愿意留下来试试吗？"让他自己做决定。'
      }
    ],
    successText: 'ESFJ 终于可以在你面前放下所有的面具。你没有拯救 TA——你只是看到了 TA。而这是 TA 最需要的。'
  }
];
