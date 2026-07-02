import type { ChallengeQuestion } from '../types';

export const esfpQuestions: ChallengeQuestion[] = [
  {
    id: 'esfp-1',
    level: 1,
    title: '派对开场',
    scene: '你和 ESFP 在一场朋友的生日派对上认识。全场最嗨的就是 TA——又唱又跳、拉着所有人玩游戏。然后 TA 突然坐到你旁边。',
    messages: [
      { role: 'target', content: '你居然不跳舞？！来来来我教你！超简单的！' },
      { role: 'target', content: '你怎么一个人坐这儿？来都来了就要玩开心啊！' }
    ],
    question: 'TA 要把你拉进 TA 的快乐漩涡里。你怎么应对？',
    options: [
      {
        id: 'A',
        text: '哈哈好！来吧！我其实也喜欢跳舞就是有点害羞——有你带我我就不怕了！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你完全跟了 TA 的节奏',
        deathReport: '你来了，你跳舞了。但你是因为我想让你来你才来的。我带着你跳的时候很开心，但停下来了我发现我不知道你是谁。你太顺着我了——让我觉得你没有自己的颜色。我只对有自己颜色的人感兴趣。',
        deathRate: '25%'
      },
      {
        id: 'B',
        text: '我不喜欢跳舞，你自己玩吧。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '哦……好吧。那你坐着。',
        systemComment: '你在扫兴。他活在当下——你的拒绝在他看来等于"你不想跟我一起快乐"。他不会勉强你但会转身去找别人玩——然后你可能就没机会了。'
      },
      {
        id: 'C',
        text: '你先跳一个给我看看——我得看看你水平够不够当我老师。跳得好我就来。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '哈？！你还考验我？看好了啊！（开始即兴跳舞）怎么样？！来不来？！',
        systemComment: '你没有直接拒绝也没有直接跟上。你给了他一个挑战——"跳给我看看"。他最喜欢展示自己了！你让他表演了他最擅长的事。然后你掌握了选择权——你来决定要不要加入。他要的不是跟屁虫，是一个能跟他玩到一起但也保持自己节奏的人。'
      }
    ],
    successText: '你没有扫兴也没有完全跟随。你给了 ESFP 一个展示的机会——TA 对你留下了印象。'
  },
  {
    id: 'esfp-2',
    level: 2,
    title: '活在当下',
    scene: '你们开始约会了。ESFP 总是最后一刻才约你——"现在有空吗？我们去xxx！" 今天又是这样。',
    messages: [
      { role: 'target', content: '现在！我们去海边吧！日落还有一小时！来得及！' },
      { role: 'target', content: '别想那么多！出发再说！你相信我——绝对好玩！' }
    ],
    question: 'TA 永远在临时起意。你是跟上还是拒绝？',
    options: [
      {
        id: 'A',
        text: '好！走！我也想去海边好久了！你等我五分钟换衣服！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你可预测了',
        deathReport: '你说好——你每次都说是好。今天我约你去海边你好开心。但明天我约你爬山你也会说好？你从来不会说"今天不行"。你就没有自己的安排吗？你永远有空让我觉得自己对你来说太重要了。但我不想对任何人那么重要。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '现在？我刚洗完澡妆都卸了。你下次能不能提前说？',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '卸了妆怎么了又不出门见别人！……算了那我自己去了。',
        systemComment: '你在拒绝 spontaneity。他最怕的就是"计划大于一切"的人。你的扫兴让他觉得你们节奏不合。'
      },
      {
        id: 'C',
        text: '日落还有一小时是吧？那你先出发，定位发我。我换个衣服就来——但先说好，如果我到了太阳已经下山了，你得请我吃晚饭。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '哈哈哈好！那你快点！太阳不等人的！我等你！',
        systemComment: '你接受了——"你先出发，我换衣服就来"。你让他知道你不是永远有空——但你愿意为他调整。你加了条件——"太阳下山了你请我吃饭"。你把拒绝变成了好玩的赌约。他最喜欢的就是：你愿意跟他疯，但你也有自己的玩法。'
      }
    ],
    successText: '你没有破坏 TA 的 spontaneity 也没有永远配合。你给 TA 的感觉是——你愿意玩，但你也有自己的节奏。'
  },
  {
    id: 'esfp-3',
    level: 3,
    title: '逃避深聊',
    scene: '你们在一起一段时间了。某天晚上你们靠在沙发上，你想聊聊你们的关系。ESFP 开始坐立不安。',
    messages: [
      { role: 'target', content: '嗯…我们一定要现在聊这个吗？' },
      { role: 'target', content: '你看外面月亮好圆！我们去阳台看月亮吧！顺便点个外卖！' }
    ],
    question: '每次你想谈正经事，TA 就想转移话题。今天你想让 TA 留下来。',
    options: [
      {
        id: 'A',
        text: '好吧好吧，看月亮！那你想吃什么外卖？我点。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你帮 TA 逃跑了',
        deathReport: '你又让我转移话题了。你知道吗——我不是不想聊，我是不敢聊。但你每次都说"好吧"我就不用面对了。但问题还在。你越纵容我逃避，我越觉得我们之间越来越远。但你又没有拉我回来——你是不是也不在乎？',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你能不能不逃避？我们之间的问题总要面对的。你每次都这样。',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '……你在逼我。我越被你逼越想跑。',
        systemComment: '你在给压力。他被逼的时候会直接关闭。他不会因为你逼他就敞开心扉——他会跑得更远。'
      },
      {
        id: 'C',
        text: '月亮确实挺圆的。看完月亮再聊好不好？我就想说五分钟——说完我们就点外卖看电影。你先陪我看五分钟月亮，然后陪我说五分钟话。公平吧？',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……好。那先看月亮。你说的——五分钟。',
        systemComment: '你接了他的转移——"月亮确实挺圆的"。你没有对抗他的逃避——你先进入了他的世界。然后你给了他一个协议——"看月亮五分钟，说话五分钟"。你给了他清晰的时间边界——他不需要恐惧无底洞的深聊。你说完还可以看电影——让他觉得深聊不是快乐的终点。'
      }
    ],
    successText: '你没有逼 TA 也没有放任 TA 逃。你用 TA 的语言建立了沟通的桥梁。'
  },
  {
    id: 'esfp-4',
    level: 4,
    title: '朋友圈轰炸',
    scene: 'ESFP 不管做什么都要发 story。吃饭发、逛街发、发呆也发。某天 TA 在直播你们约会。',
    messages: [
      { role: 'target', content: '家人们看看我们今天吃的这个！超好吃！' },
      { role: 'target', content: '你也跟大家打个招呼嘛！快来！' }
    ],
    question: 'TA 在把你们的私生活实时直播。你被拉入镜了。',
    options: [
      {
        id: 'A',
        text: '哈哈哈喽大家好！（对镜头挥手）你们好你们好！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你成了 TA 的直播嘉宾',
        deathReport: '你配合了。但你知道吗——你挥手的那个笑容是硬挤的。我看出来了。你在配合我的表演。我不想要一个配合我表演的人——我想要一个真实的人。你让我觉得你在顾客服务我。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你能不能别什么都发？我们出来约会是让你直播的吗？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '我就分享一下开心的事怎么了？你干嘛这么扫兴。',
        systemComment: '你在公众场合让他难堪了。他把分享开心当作一种爱的表达——你说"别什么都发"像在说他的快乐方式有问题。'
      },
      {
        id: 'C',
        text: '你拍吃的就行了别拍我——我今天发型没搞好。等你这段发完了我跟你说一个更好拍的地方，等会儿带你去。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '哈哈真的吗？哪里哪里？！好那你帮我看看哪个角度拍吃的更好看！',
        systemComment: '你没有完全拒绝——你只是说"别拍我"并给了理由"发型没搞好"。你给了他一个更好的 offer——"等会儿带你去一个更好拍的地方"。他喜欢新的、更好的体验。你没有扫兴——你升级了他的快乐。'
      }
    ],
    successText: '你没有配合表演也没有当众扫兴。你保护了你的边界还给 TA 指了一个更好玩的方向。'
  },
  {
    id: 'esfp-5',
    level: 5,
    title: '情绪过山车',
    scene: 'ESFP 今天心情特别好——拉着你唱歌跳舞。一小时后又突然因为一件小事情绪低落。',
    messages: [
      { role: 'target', content: '（刚才还在笑，现在趴在桌上）……我觉得我好差劲。' },
      { role: 'target', content: '我今天发的那个视频根本没人看。也没人给我点赞。我是不是很无聊？' }
    ],
    question: 'TA 的情绪像天气一样多变。上一秒晴天下一秒暴雨。',
    options: [
      {
        id: 'A',
        text: '怎么会！你超有趣的！那个视频特别好！是他们没眼光！',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你否定了 TA 的真实情绪',
        deathReport: '你说我超有趣。但你在哄我。你现在说的跟我心情好的时候说的一样。你既不理解我为什么难过，也不在乎我为什么难过。你只是想让我恢复开心——因为开心的我比较好相处。但我也是真的有难过的时候。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你太情绪化了。刚才还好好的，一个视频就垮了？你别这样。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '你觉得我情绪化？对——我就是这样的人。你现在才知道吗？',
        systemComment: '你批评了他的情绪模式。他会觉得你在否定他的个性——"我就是这样"。你的话不会让他变稳定，只会让他觉得你不接受他。'
      },
      {
        id: 'C',
        text: '你那个视频我看了，我觉得挺好的啊。但你在意的不是视频本身吧？是不是今天发生了什么别的事？你现在不想分析也可以——我就坐这儿。你心情好的时候我陪你疯，你心情不好的时候我陪你丧。反正我都在。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……今天工作上有件事让我不开心。算了不说了……你陪我点个外卖吧。吃甜的我会好。',
        systemComment: '你没有急着哄他开心——"你在意的不是视频本身吧"。你给了他空间——"不想分析也可以"。你做了最让他安心的事——"你开心我陪你疯，你难过我陪你丧"。他活在当下——情绪来得快去得也快。你要做的事不是解决问题——是在情绪里陪着他。'
      }
    ],
    successText: '你没有哄 TA 也没有批评 TA。你让 ESFP 知道——你接受 TA 的全部天气。'
  },
  {
    id: 'esfp-6',
    level: 6,
    title: '金钱观冲突',
    scene: 'ESFP 看上了一双很贵的鞋——但 TA 这个月已经买了三双了。TA 拉着你兴奋地给你看。',
    messages: [
      { role: 'target', content: '好看吗？！这双！限量版！最后一双了！' },
      { role: 'target', content: '我知道有点贵但这个月就买这一次了！而且它真的适合我！' }
    ],
    question: 'TA 在冲动消费的边缘。你是阻止还是支持？',
    options: [
      {
        id: 'A',
        text: '好看！喜欢就买！钱可以再赚，喜欢的东西错过了就没有了！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你成了 TA 的消费助推器',
        deathReport: '你说买。好那我买了。但你知道吗——我其实想让你拦我一下。因为我知道我在乱花钱，但我控制不住。如果你也不拦我——那我们俩一起疯。我不想跟一个跟我一起疯的人在一起。我想要一个能让我在疯的时候有安全感的人。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你上个月已经买三双了。你真的需要吗？你不觉得你在浪费钱吗？',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '你管我花多少钱？我自己的钱我想怎么花怎么花。',
        systemComment: '你在说教。他讨厌被限制。你的逻辑没错但在他眼里你变成了"扫兴的管钱的人"。'
      },
      {
        id: 'C',
        text: '好看是真的好看。但你数数这个月你买了多少了？这样——如果你能等一周，一周后还想买，我陪你来买。如果真的只剩最后一双了——那它命里该是你的。但如果你一周后忘了，说明你也没那么喜欢。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '一周？！那万一卖完了呢！……好吧好吧。那我等一周。如果没了你赔我。',
        systemComment: '你没有阻止也没有纵容。你给了他一个"等一周"的游戏规则。你说"如果真的只剩最后一双了那它命里该是你的"——你把限制包装成了好玩的故事。他容易被当下的冲动控制——但你用"等一周"让冲动降温了。而且你说"如果一周后还想买我陪你来"——你没有站在他对立面。'
      }
    ],
    successText: '你没有变成说教者也没有变成同谋。你帮 ESFP 避免了冲动消费但用的是 TA 能接受的方式。'
  },
  {
    id: 'esfp-7',
    level: 7,
    title: '新鲜感消退',
    scene: '你发现 ESFP 最近对你冷淡了。回消息变慢、约会也不那么热情。你问 TA 怎么了。',
    messages: [
      { role: 'target', content: '没什么啊……就是感觉最近有点无聊。每天都是吃饭看电影。' },
      { role: 'target', content: '你不觉得我们的生活太平淡了吗？' }
    ],
    question: 'TA 觉得你和这段关系没有新意了。这是 ESFP 最致命的问题。',
    options: [
      {
        id: 'A',
        text: '那你想做什么？我都陪你。你想去哪里玩？我来安排！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你变成了 TA 的娱乐策划',
        deathReport: '你说"你想做什么我来安排"。但你让我来决定我们的新鲜感。如果你自己都没有新鲜的点子——那我要一直负责找乐子吗？我不想要一个等着被我带动的人。我想要一个自己就有趣的人。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '平淡不是正常的吗？哪有天天刺激的。你要求太多了。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '你说我要求多？我只是不想活得跟退休一样。',
        systemComment: '你在否定他的核心需求。他需要新鲜的刺激——你说"平淡正常"在他听来是"你以后都要这么无聊"。'
      },
      {
        id: 'C',
        text: '确实有点平淡了。这样——这周末别规划了，我们随机出发。我开车你指路——看到好玩的就停。我也想过点不一样的。不过我跟你保证——我不是一个无聊的人，我只是最近有点懒。你提醒我一下，我会带你玩你想象不到的东西。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '真的？！好！那周末随机出发！你说的——带我玩想象不到的！',
        systemComment: '你承认了问题——"确实有点平淡"。你没有让他来策划——你说"我开车你指路，随机出发"。你也说了你的真实状态——"我只是最近有点懒"。他听到的不是借口而是"他可以变有趣"。你说"我会带你玩你想象不到的"——你重新点燃了他对你的好奇。'
      }
    ],
    successText: '你没有变成 TA 的娱乐工具也没有说 TA 要求太多。你唤起了 TA 对你的好奇心——这是 ESFP 爱上一个人的方式。'
  },
  {
    id: 'esfp-8',
    level: 8,
    title: '独处恐惧',
    scene: '你出差了一周。ESFP 每天给你打好多视频。你回来后发现 TA 把家里搞得乱七八糟——外卖盒子堆了一桌。',
    messages: [
      { role: 'target', content: '你终于回来了！我一个人好无聊！什么也不想做。' },
      { role: 'target', content: '你别走了好不好……我一个人待着好难受。' }
    ],
    question: 'TA 不能独处。你不在的时候 TA 的生活会停摆。',
    options: [
      {
        id: 'A',
        text: '好好好我以后不出差了！我陪着你！我也想你了！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你成了 TA 的情绪拐杖',
        deathReport: '你说不出差了。但你必须出差呢？你说"我陪着你"——但你不能二十四小时陪着我。你越这么说我越怕你离开。因为我一个人的时候我不知道怎么面对自己。你让我依赖你了——但依赖让我更害怕失去你。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '我出差也是工作啊。你能不能有点自己的生活？我不在的时候你就废了？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '你不在我开心不起来怎么了？你嫌弃我了？',
        systemComment: '你在批评他的依赖。他会觉得被抛弃了。他要的是你想他、你也难受——而不是你教育他。'
      },
      {
        id: 'C',
        text: '我也想你了。不过你看看这屋子——你是不是一周没收拾了？来，现在我回来了，我们一起收拾。然后我教你几个一个人也能做的事——你试试，学会了以后我不在的时候你也能把自己照顾好。但如果实在不行——你可以给我打电话，我不接也会回你。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '好……那你要教我什么？但是你要先抱我一下。',
        systemComment: '你先说了"我也想你了"——他最需要确认你的想念。你说"我们一起收拾"——你把他从瘫着状态拉起来一起行动。你说"我教你一个人也能做的事"——你不是在抛弃他，你是在教他独立。最后你说"实在不行你给我打电话"——你给了安全网。'
      }
    ],
    successText: '你没有为 TA 的依赖买单也没有批评 TA 的脆弱。你教 TA 如何独处——但没有让 TA 感到被抛弃。'
  },
  {
    id: 'esfp-9',
    level: 9,
    title: '社交 vs 伴侣',
    scene: '你们说好周末一起过。但周五晚上 ESFP 的朋友叫 TA 去一个派对。TA 看着你。',
    messages: [
      { role: 'target', content: '宝贝——我朋友说今晚有个超好玩的派对！要不要一起去？' },
      { role: 'target', content: '我知道我们说好了一起……但那个派对一年一次！而且很多人都去！' }
    ],
    question: 'TA 永远会被更有趣的选项吸引。你每次都排在可能性之后。',
    options: [
      {
        id: 'A',
        text: '你去吧——我没事的。你开心比较重要。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你成了那个永远等 TA 的人',
        deathReport: '你说你去吧。你总是说你去吧。你从来没有说"我今天也准备了好玩的东西"。你放我走了——但你也没有自己找乐子。你就坐在家里等我回来。你知道吗——你这样让我觉得你不够有趣。如果你不是那个最有趣的选择——我为什么不出去？',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '我们说好的！你每次都这样！你能不能有一次把我们的计划当回事？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '我就问一下你至于吗？你不想去就不去，我自己去。',
        systemComment: '你在给他施加义务感。他会反叛——"你让我觉得被绑住了"。越逼他选你，他越想跑。'
      },
      {
        id: 'C',
        text: '一年一次确实难得。但在你去之前——我今天其实准备了一个 surprise。要不你先看看我的 surprise 再决定？如果你看完还想去——我陪你去。但如果你觉得我的更好玩——那你今晚得留下来陪我。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '你准备了 surprise？！什么 surprise？！快给我看！！好那我看完再说！',
        systemComment: '你没有阻止他去派对也没有委屈自己放他走。你拿出了竞争方案——"我也有 surprise"。他会马上被"惊喜"吸引。你不跟他朋友的派对竞争——你用更有趣的东西赢他。你说"如果你还想去我陪你去"——你也没有阻止他社交。'
      }
    ],
    successText: '你没有让自己变成备选也没有用责任捆绑 TA。你让 ESFP 发现——你才是最有趣的选择。'
  },
  {
    id: 'esfp-10',
    level: 10,
    title: '未来恐惧',
    scene: '你们聊到了未来。你说到想买房、存钱、长期规划。ESFP 的脸慢慢垮了。',
    messages: [
      { role: 'target', content: '你怎么突然说这些……好沉重。' },
      { role: 'target', content: '我不想现在就谈什么五年后。我连下个月想去哪里都不知道。你能不能别破坏现在的气氛？' }
    ],
    question: '你一聊未来 TA 就想逃跑。ESFP 是活在当下的人。',
    options: [
      {
        id: 'A',
        text: '好好好不聊了。你说得对——活在当下最重要。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你关闭了未来的话题',
        deathReport: '你说好好好不聊了。你又妥协了。但我知道你心里想聊。你不跟我聊了但你心里在担心。我感觉得到你在忍着。你让我觉得我们的未来是一个不能碰的话题。那我怎么敢跟你走到未来？',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你能不能成熟一点？人不能永远活在当下吧？总要为以后想想。',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '你说我不成熟？我就是不想被未来绑架怎么了？',
        systemComment: '你在教训他。他会觉得你在否定他的生活方式。"你不成熟"是他最讨厌的评价之一。'
      },
      {
        id: 'C',
        text: '好好好不破坏气氛。但我能说完一句吗？——我想跟你有一个未来，但我不想让你觉得未来是牢笼。我们可以不具体规划，但我想让你知道：跟你在一起的未来对我来说是值得期待的。因为跟你在一起——每一天都可以是冒险。这就是未来的意义。你不需要现在就决定任何事。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……你说得我有点心动。但你保证未来不会很无聊？',
        systemComment: '你停止了沉重的话题但你没有关闭它。你说"我想跟你有一个未来"——你表达了承诺。你说"每一天都可以是冒险"——你把未来包装成了他会期待的东西。你说"你不需要现在就决定"——你给了他最重要的东西：自由。他不是害怕未来——他害怕被一个无聊的未来困住。'
      }
    ],
    successText: '你没有放弃未来的话题也没有逼 TA 面对。你把未来包装成了 ESFP 会期待的东西——一场长期的冒险。'
  },
  {
    id: 'esfp-11',
    level: 11,
    title: '承诺过敏',
    scene: '你们的共同朋友订婚了。回家路上 ESFP 一路沉默。你问 TA 在想什么。',
    messages: [
      { role: 'target', content: '他们好幸福啊……但会不会太快了？一辈子对着一个人……不会腻吗？' },
      { role: 'target', content: '你说——我们以后也会那样吗？每天都一样的生活？' }
    ],
    question: 'TA 在恐惧长期承诺。TA 怕的不是你——是"一辈子"。',
    options: [
      {
        id: 'A',
        text: '我们也会的！但如果你不想我们就不急——你想什么时候都可以。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你把决定权全部交给了 TA',
        deathReport: '你说"如果你不想就不急"。你是认真的吗？你什么都让我决定？我本来就害怕承诺——你现在把承诺的压力全给我了。我更怕了。我不想要一个没有主张的人。我想要一个人告诉我——跟我在一起会很有趣，有趣到我愿意放弃自由。',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '你连想都不敢想以后吗？那你跟我在一起是认真的吗？',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '我没说我不认真！我只是怕不行吗？！',
        systemComment: '你在逼迫他表态。他被逼时会产生逆反心理——"你一定要我现在承诺那我偏不"。你的压力会让他想逃。'
      },
      {
        id: 'C',
        text: '一辈子对着同一个人会不会腻？会吧。但我觉得——如果是对的人，腻了也可以重新有趣。你看我们——也有过觉得平淡的时候，但我们会找到新的玩法。我不是在跟你承诺"一辈子不变"——我承诺的是"一辈子都在想办法让你觉得有趣"。跟我在一起，不会无聊的。信不信？',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……哈哈你说得好像你很有信心。那你怎么保证？',
        systemComment: '你诚实了——"会腻吧"。你没有给他虚假的承诺。你说"如果是对的人，腻了也可以重新有趣"——你把婚姻重新包装成了他能接受的形式。你说"我承诺的是一辈子都在想办法让你觉得有趣"——你给了他最想要的东西：永恒的新鲜感。你用他的语言说了最重的承诺。'
      }
    ],
    successText: '你没有轻视 TA 的恐惧也没有逼 TA 承诺。你给了 TA 对婚姻的全新定义——一个不会无聊的长期冒险。'
  },
  {
    id: 'esfp-12',
    level: 12,
    title: '最终选择',
    scene: 'ESFP 消失了三天。三天后 TA 出现在你家门口，看起来疲惫又清醒。',
    messages: [
      { role: 'target', content: '我去了一个朋友那儿。想了很多。' },
      { role: 'target', content: '我在想——我是不是不适合谈恋爱。我怕我总有一天会伤害你。因为我太容易腻了。你怕吗？' }
    ],
    question: 'TA 把自己最深的恐惧摆在你面前——"我会伤害你"。你的回答决定一切。',
    options: [
      {
        id: 'A',
        text: '你不会伤害我的！我相信你！你是一个好人！我们好好的！',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你没有接住 TA 的真心',
        deathReport: '你说我不会伤害你。你怎么知道？我自己都不知道。你在安慰我——但你没有回答我的问题。我问你怕不怕——你说"我相信你"。你没有正面回答我。你知道吗——你不怕才让我害怕。因为你不怕说明你没有认真想过这个问题。你没有认真想过跟我在一起会面对什么。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '你消失了三天就为了跟我说这个？你如果真的不想谈了就直接说。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -2, emotionalSafety: -2 },
        targetReaction: '算了。你真的不懂我。',
        systemComment: '在他最脆弱的时候你指责了他。他永远不会忘记这一刻——他鼓起勇气跟你说了最深的恐惧，而你只看到了他消失三天。'
      },
      {
        id: 'C',
        text: '怕。我当然怕。你确实容易腻——我看你换手机的频率就知道了。但我想说的是——你容易腻不是问题，我害怕也不是问题。问题是我们愿不愿意在"可能会腻"的恐惧里继续选对方。你消失的这三天我很难受。但现在你回来了——你站在我面前跟我说你怕伤害我。你知道这意味着什么吗？意味着你不是一个不负责任的人。一个怕伤害别人的人——不会真的伤害别人。我不怕你腻——我怕你以为我会怕所以你跑了。你今天回来了——那你还跑吗？',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, emotionalSafety: 2 },
        targetReaction: '……你居然说你也怕。我以为只有我害怕。你还说"你回来了意味着你不是不负责任的人"……你让我觉得我好像没那么坏。（眼眶红了）我还跑吗？我不知道。但今天不跑。',
        systemComment: '你诚实了——"怕。"你没有假装坚强。你给了他一个具体的观察——"你换手机的频率"——让他知道你了解他。你说出了最核心的话——"你怕伤害我意味着你不是一个不负责任的人"。你给了他一个全新的自我认知。你问了关键的问题——"你还跑吗？"你让他面对了选择而不是恐惧。'
      }
    ],
    successText: '你没有否定 TA 的恐惧也没有被 TA 的恐惧吓跑。你告诉 ESFP——真正的勇敢不是不怕，是怕了还选。'
  }
];
