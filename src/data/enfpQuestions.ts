import type { ChallengeQuestion } from '../types';

export const enfpQuestions: ChallengeQuestion[] = [
  {
    id: 'enfp-1',
    level: 1,
    title: '快乐小狗登场',
    scene: '你和 ENFP 刚认识。TA 热情得像认识了你十年。短短半小时你知道了 TA 的童年梦想、最近痴迷的乐队、以及三只猫的名字。',
    messages: [
      { role: 'target', content: '天哪你也喜欢这个乐队？！我太开心了！！我们是不是上辈子就认识！' },
      { role: 'target', content: '我们周末一起去看他们演出吧！哦不对我周六有个局……不过可以推掉！' }
    ],
    question: 'TA 的热情像一束烟花。怎么接才不被烧到？',
    options: [
      {
        id: 'A',
        text: '哈哈我也觉得我们好投缘！那周末一起去看演出吧！你推掉别的局不太好吧？要不我陪你去你的局也行！',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你被 TA 带着跑了',
        deathReport: '其实我已经有点下头了。你太配合了——我想要的是一个有自己节奏的人，不是一个被我牵着走的人。而且我说要推掉别人的局你居然没觉得有啥问题……',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '哈哈你太热情了，我有点招架不住。我们慢慢来嘛。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '哦哦好……我只是觉得我们聊得来嘛。',
        systemComment: '你在降温。他觉得你在推开他——他那么兴奋地跟你分享，你却说"慢慢来"。他会收敛但也会觉得你不够开放。'
      },
      {
        id: 'C',
        text: '哈哈你这信息量好大。乐队我确实喜欢，但演出我周六有事。你那个局是啥局？说出来听听，说不定我也有兴趣。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '是一个露天电影局！超有意思！你要不要来？！',
        systemComment: '你接住了他的一部分——"确实喜欢乐队"。但你没全盘接受——"周六有事"。你说"你那是什么局"——你把主动权拿回来了。他要的不是跟屁虫，是一个能和他互相点燃的人。'
      }
    ],
    successText: '你没跟着 ENFP 跑也没冷 TA。你接住了 TA 的热情但保留了你的节奏。'
  },
  {
    id: 'enfp-2',
    level: 2,
    title: '你是世界给我的礼物',
    scene: '你们开始频繁约会。ENFP 每天都在夸你——你是 TA 遇到过最特别的人。某天 TA 看着你，眼睛发亮。',
    messages: [
      { role: 'target', content: '你真的好完美。我从来没遇到过像你这样的人。' },
      { role: 'target', content: '你就是这个世界给我的礼物吧。' }
    ],
    question: 'TA 在把你放在神坛上。你知道这不是好事。怎么回？',
    options: [
      {
        id: 'A',
        text: '你才是我遇到的最特别的人！我何德何能遇到你。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你们在互相造神',
        deathReport: '我们都在说对方好完美。但你知道吗——我心里已经在担心了。万一我发现你不完美呢？而且你完美？我还没看到你的缺点呢。你同意我的理想化，让我觉得你不够真实。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '哈哈你这样说我会飘的。我没你说的那么好。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { selfProof: 1, trust: -1 },
        targetReaction: '你就是有这么好！你不要否定自己！',
        systemComment: '你在谦逊但他觉得你在破坏浪漫。他会加倍夸你——然后你们进入一个"我没有——你有"的死循环。'
      },
      {
        id: 'C',
        text: '哈哈你这个滤镜有点厚。听着很开心，但我可不想被当成完美的人——那说明你还不了解我。等你发现我早上也会嘴臭、也会懒得回消息的时候，再跟我说这句话呗。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '哈哈那你嘴臭的时候是什么样？我想看！',
        systemComment: '你没拒绝他的赞美——"听着很开心"。但你打破了理想化——"等发现我嘴臭再说"。你给了他人性的入口。他的 Ne 会被这个转折吸引——他好奇你更真实的样子。'
      }
    ],
    successText: '你没接受造神也没自贬。你让 TA 知道——完美的后面还有真实，而真实比完美更有趣。'
  },
  {
    id: 'enfp-3',
    level: 3,
    title: '换个话题吧',
    scene: '你们第一次吵架。其实也不是大事——但你说了一句让 ENFP 不开心的话。',
    messages: [
      { role: 'target', content: '……' },
      { role: 'target', content: '没事。' },
      { role: 'target', content: '哈哈换个话题吧！你昨天说的那个电影我看了！' }
    ],
    question: 'TA 在回避。一有事 ENFP 就会用转移话题来维持和谐。你怎么选？',
    options: [
      {
        id: 'A',
        text: '看了看了！那电影确实不错！来来来我跟你聊聊剧情！',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你也回避了',
        deathReport: '你配合我转移话题了。好，那我懂了——你也不会直面问题。以后我会越来越频繁地转移话题，然后问题越积越多，直到有一天我莫名其妙就不想跟你说话了。',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '你是不是不开心？我们说清楚，我不想让事情过夜。',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { pressure: 2, trust: -1 },
        targetReaction: '没有啊……真的没事。你太敏感了。',
        systemComment: '你在逼他面对。但他的 Fi 需要时间处理情绪。你逼太紧他会逃。你说"不想过夜"——但你让他觉得现在就得解决好，压力很大。'
      },
      {
        id: 'C',
        text: '好，先聊电影。但刚才那件事我们晚点再说一下，我不想它有隔阂。不急，等你想聊的时候告诉我。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '好。其实我不是不想说，我是不知道怎么开口。',
        systemComment: '你陪他转移了话题——没逼他立刻面对。但你说"晚点再说"——你让问题没有被忘掉。你说"等你想聊"——你给了空间。他要的就是"你不逼我，但你也没走"。'
      }
    ],
    successText: '你没逼 TA 也没陪 TA 逃避。你给了 TA 空间去处理，但你保留了那场对话的位置。'
  },
  {
    id: 'enfp-4',
    level: 4,
    title: '突然消失',
    scene: '前两周 ENFP 天天粘着你。这周突然不怎么回消息了。你看到 TA 发了和一群新朋友出去玩的动态。',
    messages: [
      { role: 'target', content: '哈哈周末和刚认识的一帮人去爬山了！超级开心！' },
      { role: 'target', content: '你周末咋样？' }
    ],
    question: '你被冷落了。但 ENFP 好像完全没意识到。怎么回？',
    options: [
      {
        id: 'A',
        text: '你玩的开心就好！我也挺好的，就是有点想你。',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你在索取关注',
        deathReport: '你说想我。但我刚跟你说我玩得很开心，你就说想我——你在暗示我冷落你了。你越这样我越想逃。我能量就是这样的，我需要新鲜感。你让我感觉被绑住了。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '我周末也挺好的。你去爬山都不叫我。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { selfProof: 1, pressure: 1 },
        targetReaction: '哈哈临时决定的！下次叫你！',
        systemComment: '你说"不叫我"——你在表达不满但用撒娇的方式。他会感觉到你的不安全感。他会说"下次叫你"但心里觉得你有点粘人。'
      },
      {
        id: 'C',
        text: '爬山听着不错！我周末搞了自己的事，也挺充实的。下次有这种活动提前说一声呗，我可能也有兴趣。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '好啊好啊！下次一定叫你！你最近在忙什么？',
        systemComment: '你没抱怨——你说"听着不错"。你也没表达失落——"我也挺充实的"。你有自己的生活——这是最吸引他的地方。你说"下次叫我"——表达了兴趣但没有索取关注。他会觉得你安全又有吸引力。'
      }
    ],
    successText: '你没索取关注也没假装不在乎。你展示了你有自己的生活——这让 ENFP 更有安全感地靠近你。'
  },
  {
    id: 'enfp-5',
    level: 5,
    title: '我需要空间',
    scene: '你们在一起一段时间了。ENFP 最近开始频繁提起"我们是不是太依赖对方了"、"我觉得需要一点个人空间"。',
    messages: [
      { role: 'target', content: '我觉得我们最近太黏了。' },
      { role: 'target', content: '我有点怀念一个人的感觉。不是不喜欢你，就是……我需要新鲜空气。' }
    ],
    question: '经典的三月魔咒来了。TA 不是不爱你，是 TA 的 Ne 在渴求新鲜感。',
    options: [
      {
        id: 'A',
        text: '好……我听你的。你需要空间我给你。你想找我的时候我都在。',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你让 TA 照顾你的不安',
        deathReport: '我说需要空间，你说"好"但你的语气不对。现在我要照顾你的不安全感了。好累。我本来只是需要新鲜空气，现在我觉得跟你在一起像背着氧气瓶。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '好，那我们都冷静一下。你什么时候想找我了再说。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -2, avoidance: 1 },
        targetReaction: '……好。',
        systemComment: '你表面上很酷但他能感觉到你在赌气。你退太彻底了——他会觉得你其实没那么在乎。他要的是"你愿意放我飞，但你还在那里"。'
      },
      {
        id: 'C',
        text: '好。你有自己的生活我也有我的。你去做你想做的事，我在这儿。我不是你生活的全部，你也不需要是我的全部。但我不希望你误会——我给你空间不是因为我不在乎，是因为我在乎到愿意让你做自己。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……你真的不会走？',
        systemComment: '你同意了但你没退。"你去做你想做的事"——你给了他自由。"我在这儿"——你给了安全感。"你不需要是我的全部"——你展示了你的独立性。他最终会回到一个"不绑着他"的人身边。'
      }
    ],
    successText: '你没逼 TA 也没赌气退。你给了 TA 最想要的东西——自由的同时，知道你不会消失。'
  },
  {
    id: 'enfp-6',
    level: 6,
    title: '我好累',
    scene: 'ENFP 最近进入了情绪低谷。那个永远开心的人突然说。',
    messages: [
      { role: 'target', content: '我好累。' },
      { role: 'target', content: '我不知道自己在干嘛。感觉什么都没意义。' },
      { role: 'target', content: '没事你不用管我，我过两天就好了。' }
    ],
    question: 'ENFP 陷入了低谷。TA 在怀疑自己。怎么接？',
    options: [
      {
        id: 'A',
        text: '你怎么了？跟我说说，我来帮你想想办法。',
        outcome: 'death',
        pattern: 'logic',
        deathTitle: '你在解决问题',
        deathReport: '我不想想办法。我低谷的时候最烦别人帮我列一二三四。你说"帮你想想"——你知道我为什么难过吗？因为我困住了，而你还在用脑子试图解开我。',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '你开心一点嘛！你平时不是最乐观的吗？来我带你去吃好吃的！',
        outcome: 'damage',
        pattern: 'savior',
        effects: { pressure: 1, trust: -1 },
        targetReaction: '……你不用哄我。我没事。',
        systemComment: '你在用正能量冲击他的低谷。他最烦别人说"开心一点"——如果能开心他早就开心了。你的好意让他觉得自己的负面情绪是错的。'
      },
      {
        id: 'C',
        text: '好累就别硬撑了。不用开心，不用分析，不用干嘛。我就在这儿，你想说话就说，不想说就待着。你过两天会好的，我知道。但在那之前，你不需要一个人扛。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 2 },
        targetReaction: '……你陪我待一会儿就好。',
        systemComment: '你没分析，没哄，没正能量。你说"不用开心"——你允许他低落。你说"过两天会好的"——你信任他的恢复力。他需要的是低谷时不被抛弃，而不是被拽起来。'
      }
    ],
    successText: '你没试图把 TA 拉出低谷。你坐在低谷里陪了 TA 一会儿。'
  },
  {
    id: 'enfp-7',
    level: 7,
    title: '我忍了很久',
    scene: '之前回避的矛盾终于爆发了。ENFP 把你一直没处理的那件事翻出来了。而且 TA 很激动。',
    messages: [
      { role: 'target', content: '你上次那个事我真的忍了很久。' },
      { role: 'target', content: '我当时没说是怕你觉得我作。但我现在受不了了。' },
      { role: 'target', content: '你根本不知道我有多难受。你只知道我自己会好起来。' }
    ],
    question: '积压的情绪一次性炸了。ENFP 的 Fi 在爆发。',
    options: [
      {
        id: 'A',
        text: '对不起……是我不好。我当时没注意到你这么难受。你继续说，我听着。',
        outcome: 'death',
        pattern: 'defense',
        deathTitle: '你在认错但没真的懂',
        deathReport: '你道歉了——但你真的知道我在说什么吗？你现在只是在灭火。你根本没理解我为什么忍了这么久。你的道歉堵住了我的嘴，但我情绪还在。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '对不起。都是我的错。别生气了。',
        outcome: 'damage',
        pattern: 'surrender',
        effects: { trust: -1 },
        targetReaction: '你在道歉，但你知道我在说什么吗？',
        systemComment: '你道歉太随便了。他能感觉到你在防御而不是真的懂了。你的道歉堵住了他的嘴，但他的情绪还在。'
      },
      {
        id: 'C',
        text: '你说得对。我确实没有意识到你这么难受。我现在知道了。你继续说，我听着。我不辩解。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, emotionalSafety: 1 },
        targetReaction: '……你真的会听吗？',
        systemComment: '你没怪他之前没说，没随便道歉。你说"你说得对"——先承认了感受。你说"你继续说"——邀请他把情绪倒完。你说"我不辩解"——放下了防御。他爆发的时候要的不是答案，是"你终于愿意听了"。'
      }
    ],
    successText: '你没防御也没敷衍。你张开耳朵放下了盾牌。这就是 ENFP 最想要的面对冲突的方式。'
  },
  {
    id: 'enfp-8',
    level: 8,
    title: '做朋友吧',
    scene: '冷静了一段时间。ENFP 回来了，但状态变了。',
    messages: [
      { role: 'target', content: '我这段时间想了很多。' },
      { role: 'target', content: '我觉得我们还是做朋友比较好。' },
      { role: 'target', content: '你太好了，但我不是那种能安定下来的人。你会受伤的。' }
    ],
    question: '经典 ENFP 退堂鼓。TA 觉得给不了你想要的。但你能让它停下来吗？',
    options: [
      {
        id: 'A',
        text: '好……如果你真的想清楚了，我不会绑着你。但我会一直在这里等你。',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你让 TA 的恐惧坐实了',
        deathReport: '你说"等你"。你是在等我回来对吧？但你知道吗——我跑不是因为我想跑，是因为你抓得太紧了。现在你说等我，我感觉更重了。',
        deathRate: '55%'
      },
      {
        id: 'B',
        text: '好吧。如果你觉得这样更好的话。我们做朋友吧。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -2 },
        targetReaction: '……你真的不难过吗？',
        systemComment: '你退太快了。他说"做朋友"的时候其实在等你说"但我不想"——不是绑住他，是让他知道你在乎。你退太干脆，他会想——果然你也没那么喜欢我。'
      },
      {
        id: 'C',
        text: '如果你真的想清楚了，我不会绑着你。但我想让你知道——我不觉得爱你会受伤。就算你觉得自己安定不下来，我也不需要你变成另一个人。你做你自己就好，我也做我自己。我们不用给关系起名字，先在一起开心就行。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, pressure: -1 },
        targetReaction: '……你是认真的吗？就算我不确定？',
        systemComment: '你没答应做朋友也没逼他在一起。你说"不用起名字"——你解除他对"关系"的恐惧。你说"先在一起开心就行"——你用他的语言（开心、现在）来给安全感。你放下了未来，只聊现在。'
      }
    ],
    successText: '你没逼 TA 也没退。你解除了 TA 对"承诺"的恐惧——不用起名字，先开心就好。'
  },
  {
    id: 'enfp-9',
    level: 9,
    title: '你是不是腻了',
    scene: '你们以一种奇怪的方式继续着——比朋友多，但不是情侣。某天 ENFP 突然问你。',
    messages: [
      { role: 'target', content: '你会不会觉得我很烦？' },
      { role: 'target', content: '我有时候觉得自己太自我了。我想什么就是什么，今天想粘着你明天想一个人。你肯定很累吧。' }
    ],
    question: 'TA 在自我审判。你在心里说是挺累的——但怎么说才不伤 TA？',
    options: [
      {
        id: 'A',
        text: '不会啊。你怎么样我都喜欢。',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你在粉饰太平',
        deathReport: '你说"不会"。你在敷衍我。我明明就是这样的——忽冷忽热我自己都知道。你说"不会"让我觉得你根本没在认真看我。你只是在哄我。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '说实话是有点累。但你就是这样的人，我既然选择了就要接受吧。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '……对不起。我不是故意的。',
        systemComment: '你诚实了但听起来像在忍耐。他会觉得愧疚。他不想当"被忍受的人"——他要的是被理解和接纳，不是被容忍。'
      },
      {
        id: 'C',
        text: '有时候你忽冷忽热我确实需要调整适应。但不是因为讨厌你——是因为我在学着理解你的节奏。你就是这样的人，不是故意的。我在意的不是你今天想一个人，而是你明天回来的时候还会不会找我。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……那你觉得我会回来吗？',
        systemComment: '你没说"不会"也没抱怨。你承认了你在适应。但你说"不是讨厌你"——你让他的难受不是他的错。你说"明天回来还会不会找我"——你展示了你在乎的方式是"等待"，不是"绑住"。'
      }
    ],
    successText: '你没否认也没抱怨。你让 TA 看到你在努力理解 TA 的节奏——这让 ENFP 觉得安全。'
  },
  {
    id: 'enfp-10',
    level: 10,
    title: '下个月的事谁说得准',
    scene: '你们的关系在慢慢好起来。ENFP 开始主动约你了。但你发现 TA 从来不聊"以后"。某天你试探性地说了一句。',
    messages: [
      { role: 'target', content: '下个月那个音乐节，你要一起去吗？' },
      { role: 'target', content: '……下个月的事谁说得准呢。到时候再说吧。' }
    ],
    question: 'ENFP 对任何"未来绑定"的瞬间闪避。怎么回？',
    options: [
      {
        id: 'A',
        text: '没事没事，到时候再说嘛。现在开心就好。',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你也逃避了',
        deathReport: '你说"到时候再说"。你怎么也退了？我以为你不一样。你也对未来不确定对吧？那好——我放心了，反正你也没有在认真想以后。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '也是。到时候再看吧。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1, avoidance: 1 },
        targetReaction: '嗯嗯。',
        systemComment: '你退得和他一样快。他会松一口气，但也会想——果然你也对未来不确定。他会觉得这段关系没有重量。'
      },
      {
        id: 'C',
        text: '哈哈没事，我就先占个位。到时候你不想去或者去不了都行，反正我肯定去。你想来的话随时找我。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '哈哈你这是在给我留后门吗？好，那我到时候再说！',
        systemComment: '你没逼他确认。你说"我就先占个位"——把承诺的重量放下了。你说"反正我肯定去"——你展示了你有自己的生活。他看到的是：你不会因为我缺席而塌掉。'
      }
    ],
    successText: '你没逼 TA 承诺也没退。你轻描淡写地留了一个入口——"你想来就来"。'
  },
  {
    id: 'enfp-11',
    level: 11,
    title: '我好怕对你腻了',
    scene: '深夜。你们喝了点酒。ENFP 看着你，眼神突然认真了。',
    messages: [
      { role: 'target', content: '你说人活着到底是为了什么？' },
      { role: 'target', content: '我们每天都在追求快乐……但快乐之后呢？' },
      { role: 'target', content: '我好怕有一天我对你也腻了。你怕不怕？' }
    ],
    question: 'ENFP 的 Ne 在下沉。TA 在问你最深的问题——也是在问自己。',
    options: [
      {
        id: 'A',
        text: '你不会对我腻的。我们跟别人不一样。',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你在回避 TA 的恐惧',
        deathReport: '你说"我们不一样"。你怎么知道？你知道我最怕什么吗？我怕我对自己没有信心。你越说"不一样"我越觉得你在自我安慰。你也没底。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '我有时候也怕。但我们不能因为怕就不去爱啊。',
        outcome: 'damage',
        pattern: 'logic',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '……你说得对。但道理解决不了我的怕。',
        systemComment: '你在讲道理。他现在不在理性模式，他在情绪的深渊里。你的道理他都懂，但他需要的是共鸣，不是答案。'
      },
      {
        id: 'C',
        text: '我怕。你腻了也不是不可能。但你腻了不是因为你差劲——是因为你就是个需要新鲜感的人。我没办法保证你永远不腻，但我知道如果你腻了你会告诉我。你不会骗我也不会偷偷跑掉。对吧？',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, emotionalSafety: 1 },
        targetReaction: '……对。我不会。',
        systemComment: '你承认你怕了——没假装坚强。"你腻了也不是不可能"——你接受了他的天性。"你不会骗我"——你不是在要承诺，你在表达信任。他听到的不是"你会不会走"，是"我知道你不会偷偷走"。信任比承诺更有力量。'
      }
    ],
    successText: '你没回避也没讲道理。你承认了恐惧，然后给了 TA 一种比承诺更轻但更深的信任。'
  },
  {
    id: 'enfp-12',
    level: 12,
    title: '最终选择',
    scene: '所有关卡都走过了。你们坐在海边。ENFP 把脚埋进沙子里，没有看你。',
    messages: [
      { role: 'target', content: '你知道我为什么从来没有跟任何人在一起超过半年吗？' },
      { role: 'target', content: '因为我每次一想到"这个人要一直在我生活里"我就喘不过气。' },
      { role: 'target', content: '但你不一样。我想逃，但我没有走。' }
    ],
    question: '最终审判。ENFP 说出了最真实的话。你怎么接？',
    options: [
      {
        id: 'A',
        text: '那你就留下来。我会一直爱你。',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你的爱太重了',
        deathReport: '你说"一直"。我最怕的就是"一直"。这个词像一座山压在我身上。我知道你是真心的，但你说"一直爱你"让我觉得——万一我不爱你了怎么办？我又想跑了。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '那我们就一直这样吧。不用定义，不用承诺。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1 },
        targetReaction: '……你真的满足这样吗？',
        systemComment: '你在给他想要的形式——但他看得出你不是真的满足。你的妥协他能感受到。他想留下来但不想留在一个"委屈自己来配合我"的人身边。'
      },
      {
        id: 'C',
        text: '你不用说服自己留下来。你逃了那么多次也没有逃掉——不是因为我在追你，是因为你自己选择回来。你不用给我一个答案。你给我你今天的"在"就行了。明天的事明天再说。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { emotionalSafety: 99, trust: 99 },
        targetReaction: '……你真的不怕我明天又跑了吗？',
        systemComment: '你没说"一直"——你说"今天"。你没要答案——你说"明天再说"。你说"逃了也没逃掉，是因为你自己选择回来"——你点破了他的想法。你把承诺拆成了每一天的选择。ENFP 不怕今天，他怕永远。你给了他一个可以呼吸的承诺——"今天"。'
      }
    ],
    successText: '完美通关。你没用"永远"绑住 ENFP。你把承诺拆成了"今天"——这是 ENFP 唯一能听懂的承诺。'
  }
];
