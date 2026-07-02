import type { ChallengeQuestion } from '../types';

export const estpQuestions: ChallengeQuestion[] = [
  {
    id: 'estp-1',
    level: 1,
    title: '热烈追求',
    scene: '你和 ESTP 刚认识一周。TA 每天主动找你聊天，今天直接约你出来，见面第一句话就让你心跳加速。',
    messages: [
      { role: 'target', content: '你今天真好看。不对——其实你每天都好看，但今天光线刚好，我忍不住说了。' },
      { role: 'target', content: '怎么样，有没有想我？' }
    ],
    question: '才认识一周就这么猛，怎么接住这波攻势？',
    options: [
      {
        id: 'A',
        text: '你也是。我今天一直在等你发消息来着。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你暴露了全部底牌',
        deathReport: '就是说——你回得太快了。他还没发力你就说在等他消息。他没挑战了嘛，这还怎么玩。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你天天这么跟女生说话吗？熟练得让人怀疑。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '……就跟你一个人说过。不信算了。',
        systemComment: '你直接怀疑他。他本来兴致很高的，被你这么一说气氛一下就冷了。他觉得你不好玩。'
      },
      {
        id: 'C',
        text: '光线好是真的，毕竟我这张脸什么光线下都好看。想没想你……你先猜猜看？',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '哦？嘴挺硬。那我得好好猜一下了。',
        systemComment: '你没被带着走，又把球踢回去了。他要的是能跟他过招的人，不是一撩就倒的人。'
      }
    ],
    successText: '你没有被他拿捏，反而跟他玩了起来。ESTP 觉得你很有趣——这是最高评价。'
  },
  {
    id: 'estp-2',
    level: 2,
    title: '追到就冷',
    scene: '你们确定关系一周了。之前每天主动找你的 ESTP 今天一整天没发消息。你打开朋友圈——TA 在外面跟朋友玩得正开心。',
    messages: [
      { role: 'target', content: '（你发了消息后过了一小时才回）刚跟哥们儿在打台球，手机放桌上了。咋了？' },
    ],
    question: '追你的时候天天黏着，追到了就开始冷淡。怎么应对？',
    options: [
      {
        id: 'A',
        text: '没事没事，你玩你的，玩完了找我就行。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你把自己排在了最后',
        deathReport: '你越说"没事"他越觉得你可有可无。说白了就是他出去玩压根不用考虑你——反正你都在等他。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '你打台球不带我？你是不是不在乎我了？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '……我就打个台球你也能扯到这个？你想太多了吧。',
        systemComment: '你一下就把小事升到"不在乎我"的高度了。他就打个球而已，被你这么一说压力很大。'
      },
      {
        id: 'C',
        text: '台球？输了几局？发个战绩看看——要是输了就别回了先练练。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '哈哈你还挺狂。三局两胜好吧，你在的话我肯定全赢。',
        systemComment: '你没质问也没讨好。你进了他的话题还带点挑衅——他反而更想跟你聊了。'
      }
    ],
    successText: '你没有在他出去玩的时候施加压力，而是加入了他的话题。ESTP 觉得你既独立又有趣。'
  },
  {
    id: 'estp-3',
    level: 3,
    title: '社交边界',
    scene: '你们一起去酒吧。ESTP 在跟一个异性聊得火热，对方明显对 TA 有意思。TA 完全没注意到你的存在。',
    messages: [
      { role: 'target', content: '（TA 转头看到你站在旁边）哦！这是我一朋友。我们刚才在聊极限运动，你也喜欢这个对吧？' },
    ],
    question: 'TA 当着你的面跟别人调情还让你当观众。怎么处理？',
    options: [
      {
        id: 'A',
        text: '没事没事你们聊。我正好去那边找朋友喝一杯。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你主动退出了自己的位置',
        deathReport: '他当时可能真觉得你无所谓——你都说没事了自己走开了。其实他在等你划个地盘，结果你把地盘让出去了。',
        deathRate: '25%'
      },
      {
        id: 'B',
        text: '我们走吧，我不喜欢这里。',
        outcome: 'damage',
        pattern: 'control',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '……这才刚开始啊。你先回去？我玩会儿再走。',
        systemComment: '你想把他从社交场合拉走。ESTP 最反感被限制社交。他会觉得你在试图控制他——这只会让他想逃。'
      },
      {
        id: 'C',
        text: '极限运动？你说的是上次你从摩托车上摔下来的那个项目吗？来给这位朋友讲讲当时的精彩瞬间。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '？？？你揭我老底是吧。行，那我说说——那天确实摔得挺惨的。',
        systemComment: '你没吃醋也没走人。你用一个玩笑插进对话了，还带上了你的存在感。他反而觉得你有意思。'
      }
    ],
    successText: '你没有在社交场合跟他唱反调，而是用幽默加入了对话。ESTP 看到你既能融入又有个性。'
  },
  {
    id: 'estp-4',
    level: 4,
    title: '说话太直',
    scene: '你换了新发型满心欢喜去见他。ESTP 看了一眼。',
    messages: [
      { role: 'target', content: '你剪头发了？嗯……上次那个发型更适合你。这个显得你脸有点圆。' },
    ],
    question: ' TA 一句话就把你的好心情浇灭了。怎么回应？',
    options: [
      {
        id: 'A',
        text: '真的吗……那我下次不剪了。你喜欢什么样的？',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你把头发的决定权交给了他',
        deathReport: '他就是随口一说。结果你当真了还要问他喜欢什么样——他觉得跟你说话得小心翼翼，累。',
        deathRate: '20%'
      },
      {
        id: 'B',
        text: '你会不会说话啊？我剪个头发你也要打击我？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我实话实说而已……你反应这么大干嘛。',
        systemComment: '你把他的直球评价当成了攻击。他觉得他在提供客观反馈，不明白你为什么情绪化。'
      },
      {
        id: 'C',
        text: '谁问你好看了？我剪头发是为了让自己开心，不是为了取悦你。不过你说得对——确实显脸圆，下次我跟理发师说一声。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '……行，你有主见就成。其实也还行，看习惯了挺好的。',
        systemComment: '你告诉他你不是为他活的——他反而尊重你。同时你也接了他的反馈——"你说得对但我不是为了你"。他吃这套。'
      }
    ],
    successText: '你没有被他的一句话影响心情，也没有情绪化反击。ESTP 觉得你内心强大。'
  },
  {
    id: 'estp-5',
    level: 5,
    title: '活在当下',
    scene: '周末下午。你提议一起规划下个月的旅行。ESTP 躺在沙发上刷手机。',
    messages: [
      { role: 'target', content: '下个月的事下个月再说呗。诶现在天气这么好，出去兜风吧？' },
      { role: 'target', content: '走不走？现在出发还能赶上日落。' }
    ],
    question: '你想做计划，TA 只想说走就走。怎么选？',
    options: [
      {
        id: 'A',
        text: '好，听你的。那你说去哪？我都可以。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你完全放弃了自己的想法',
        deathReport: '他虽然今天玩得开心，但心里会觉得——你什么都"都可以"，那以后所有事都得他来定。他不想带一个挂件。',
        deathRate: '25%'
      },
      {
        id: 'B',
        text: '你能不能先跟我把计划做了再玩？什么事都没规划好你还有心思出去？',
        outcome: 'damage',
        pattern: 'control',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '……你扫兴第一名。算了不去了。',
        systemComment: '你用责任来压他的兴致。ESTP 最恨被说教。他会觉得你太死板、跟他不是一路人。'
      },
      {
        id: 'C',
        text: '行啊，兜风回来你陪我做计划。不过路线我来定——我知道一条山路特别刺激。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '山路？那还等什么。走走走。',
        systemComment: '你答应了当下的冲动——他最吃这套。但你加了个条件：回来做计划。而且你把兜风也变成了他感兴趣的事——山路！你既融入了他的节奏又保留了你的需求。'
      }
    ],
    successText: '你既满足了他当下的冲动，又为未来做了铺垫。ESTP 觉得你既能玩又能规划——完美搭档。'
  },
  {
    id: 'estp-6',
    level: 6,
    title: '逃避未来',
    scene: '你们交往几个月了。你试探性地提起"明年要不要一起租房子"。ESTP 立刻沉默了几秒。',
    messages: [
      { role: 'target', content: '明年？我……说实话我没想那么远。我觉得现在这样就挺好的。' },
      { role: 'target', content: '你非要聊这个吗？' }
    ],
    question: '一聊未来他就想逃。怎么推进关系？',
    options: [
      {
        id: 'A',
        text: '好，不聊了。等你准备好了再说。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你把主动权完全交给了他',
        deathReport: '你说"等你准备好"——但他永远不会"准备好"。他需要的不是你让步，是你让他觉得未来没那么吓人。你退了，他更觉得这事儿不能碰。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '你不愿意跟我有未来吗？你是不是根本不喜欢我？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我从来没说过我不喜欢你。但你一上来就要绑架我一年的规划，我只能跑。',
        systemComment: '你把他对承诺的恐惧当成了对你的否定。他本来只是怕被绑住——你一问"你是不是不喜欢我"他反而不想解释了。'
      },
      {
        id: 'C',
        text: '哈哈我又没说下个月就搬。我就是觉得你这人挺有意思的，住一起应该好玩。你放心，哪天不好玩了我会把你赶出去的。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, playfulness: 1 },
        targetReaction: '……你赶我？那不一定谁赶谁呢。不过这事儿明年再说，先把这周末去哪玩了定了。',
        systemComment: '你把"同居"这个沉重的话题变成了一个玩笑。他放下了防御——因为你不把承诺当成枷锁。你说"好玩"，这完全是他的语言。他终于愿意聊了。'
      }
    ],
    successText: '你没有逼迫他承诺，而是把未来描述成了冒险。ESTP 开始觉得跟你在一起可以有未来——因为那个未来听起来不无聊。'
  },
  {
    id: 'estp-7',
    level: 7,
    title: '冒险成瘾',
    scene: 'ESTP 跟你说周末要去蹦极。你查了一下——那个项目出过事故。',
    messages: [
      { role: 'target', content: '我周末去蹦极。那个悬崖蹦极，我一直想去。' },
      { role: 'target', content: '你一起来？保证爽死你。' }
    ],
    question: ' TA 要去冒险，但你担心安全。怎么办？',
    options: [
      {
        id: 'A',
        text: '那你一定要注意安全。到了给我发个消息。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你变成了一个旁观者',
        deathReport: '你说了跟没说一样。他叫你一起是想跟你分享刺激——你说"注意安全"就像他妈。他瞬间就不想带你玩了。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '别去，太危险了。你出事了怎么办？我不允许你去。',
        outcome: 'damage',
        pattern: 'control',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '你不让我去？凭什么？我最讨厌别人告诉我什么能做不能做。',
        systemComment: '你想用担心来控制他。ESTP 最恨被命令——你越说不许去他越要去。你成了他冒险路上的阻力。'
      },
      {
        id: 'C',
        text: '我去查了一下那个场地——确实出过事故，但是因为设备老化。你确认一下他们换设备了没。换了我跟你一起跳。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……你真的去查了？行，我打电话问一下。要没问题你必须跳。',
        systemComment: '你没阻止他——你加入了他。但你用他尊重的方式：查事实、提条件、说"我陪你"。他觉得你理性又有种。'
      }
    ],
    successText: '你没有限制他也没有逃避。你用事实说话并且愿意一起冒险。ESTP 觉得你是最佳搭档——能一起疯也能一起清醒。'
  },
  {
    id: 'estp-8',
    level: 8,
    title: '承诺过敏',
    scene: '你朋友结婚，你带 ESTP 一起去。回程路上 TA 一直很安静。',
    messages: [
      { role: 'target', content: '你不觉得结婚很可怕吗？当着那么多人的面承诺一辈子。' },
      { role: 'target', content: '我不理解为什么一定要用一张纸来证明感情。' }
    ],
    question: 'TA 看到婚礼就恐婚。怎么回应才能不让他逃跑？',
    options: [
      {
        id: 'A',
        text: '你说得也对。两个人在一起开心就好，形式确实不重要。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你把他带进了死胡同',
        deathReport: '你以为附和他就是安全——但他其实在试探你的想法。你说"形式不重要"等于说——你也不想要未来。他反而更不确定了。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '结婚是爱情的证明啊。难道你不想跟我证明你的爱吗？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '你这是借题发挥吧？我说我不理解婚礼形式，你直接上升到我不爱你。',
        systemComment: '你把婚礼话题变成了逼问。他本来只是随口吐槽——你一说"证明你的爱"他就想跑了。'
      },
      {
        id: 'C',
        text: '哈哈谁说要跟你结婚了？你想得美。不过说真的——一辈子的承诺确实挺扯的。但今天不是挺好玩吗？有免费酒喝还有蛋糕吃。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……你说得对，蛋糕确实不错。而且新娘挺漂亮。',
        systemComment: '你完全同意了他的观点——他放下了防御。你没有把他的话理解成"拒绝你"，而是跟他站在了同一边。然后你轻松地把话题带走了。他觉得安全了。'
      }
    ],
    successText: '你没有把婚礼变成逼婚的工具。你跟 ESTP 站在了同一边吐槽——这让 TA 觉得你理解 TA 的恐惧。'
  },
  {
    id: 'estp-9',
    level: 9,
    title: '冲突处理',
    scene: '你们因为一件事吵起来了。ESTP 想当下解决，但你想冷静一下。TA 不让你走。',
    messages: [
      { role: 'target', content: '你把话说清楚再走。现在不说以后更说不清。' },
      { role: 'target', content: '我就受不了这种——有问题不说，非要冷战。' }
    ],
    question: 'TA 非要当下吵完。但你现在情绪上头说不出话。',
    options: [
      {
        id: 'A',
        text: '行行行，你说。我听着。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你被迫开口说了不该说的话',
        deathReport: '你嘴上说听着但你根本没整理好。说了一堆气话出来。他反而更烦了——他宁愿你冷静了再说，而不是在这硬聊。',
        deathRate: '20%'
      },
      {
        id: 'B',
        text: '我不想说就是不想说。你能不能别逼我？',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '我不是逼你，我是想解决问题。但你这种态度怎么解？',
        systemComment: '你的拒绝沟通在他看就是逃避。他的 Se-Ti 想立刻拆解问题，你的回避让他觉得你在积累情绪——下次爆发会更严重。'
      },
      {
        id: 'C',
        text: '我现在脑子是乱的，跟你说的话肯定会后悔。你给我二十分钟，我去楼下走一圈。回来我跟你说清楚——我保证不走。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '……行，二十分钟。你去吧。',
        systemComment: '你给了他一个明确承诺——二十分钟后回来聊。他能接受这个，因为你不是在逃避，你在给自己时间整理。你说"我保证不走"——他安心了。'
      }
    ],
    successText: '你没有逃避冲突也没有被逼着说话。你设了边界但给了承诺——ESTP 尊重这种直接的处理方式。'
  },
  {
    id: 'estp-10',
    level: 10,
    title: '自由的代价',
    scene: '你生病了，一个人在家。ESTP 本来约了朋友去露营。',
    messages: [
      { role: 'target', content: '你烧多少度？……38度5。那我叫个外卖给你。' },
      { role: 'target', content: '我跟哥们儿约好了，不去不太好。你一个人行吧？' }
    ],
    question: 'TA 选择去玩不陪你。你心里很难受。',
    options: [
      {
        id: 'A',
        text: '嗯，你去吧。外卖到了我自己拿。玩开心点。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你把难受咽下去了',
        deathReport: '你说"玩开心点"他真的就去玩了。他后来才知道你不高兴——但你当时说了没事啊。他只会觉得你嘴上说没事心里在记账，他以后更不知道该怎么办。',
        deathRate: '25%'
      },
      {
        id: 'B',
        text: '我都发烧了你还要出去玩？你到底在不在乎我？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '我又不是医生，我在家你就能退烧吗？我已经帮你叫了药了。',
        systemComment: '你把他放在了"选朋友还是选你"的两难里。他最恨这种道德绑架。他已经用他的方式在照顾你了——但你否定了他的付出。'
      },
      {
        id: 'C',
        text: '叫外卖可以。但你走之前帮我把水杯放床头，体温计也放旁边。你要是半夜回来了可以给我带碗粥——没回来也行，我自己能搞定。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '……行，水给你放这。我吃完早点回来，带粥。',
        systemComment: '你没让他愧疚——你直接告诉了他走之前能做什么。他最喜欢具体可执行的事。你没说"别走"而是说"做了这些再走"。他感觉到了你的独立——也感觉到了你的需要。'
      }
    ],
    successText: '你没有用生病绑架他，而是给了他具体的帮助方式。ESTP 觉得你既独立又会表达需求——这是让 TA 愿意停留的关键。'
  },
  {
    id: 'estp-11',
    level: 11,
    title: '真心时刻',
    scene: '深夜。ESTP 喝了点酒。平时嘻嘻哈哈的 TA 突然安静了。',
    messages: [
      { role: 'target', content: '我有时候觉得……我是不是不适合谈恋爱。' },
      { role: 'target', content: '每个跟我在一起的人最后都会觉得我靠不住。' }
    ],
    question: 'TA 第一次露出脆弱的一面。你怎么办？',
    options: [
      {
        id: 'A',
        text: '不会的。你只是还没遇到对的人。你很好的。',
        outcome: 'death',
        pattern: 'savior',
        deathTitle: '你给了他一句空话',
        deathReport: '他难得打开一次心扉——你给了句万能安慰。他觉得说了也白说，你根本不懂他在说什么。下次不会再跟你说了。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '对啊你确实有时候不太靠谱，但人无完人嘛。',
        outcome: 'damage',
        pattern: 'logic',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '……你说得对。我睡了啊。',
        systemComment: '你在他最脆弱的时候补了一刀。他难得打开心扉，你的"合理化"让他觉得你不理解他的恐惧——你只是在分析他。'
      },
      {
        id: 'C',
        text: '你确实挺不靠谱的——但你跑回来问"我是不是不适合谈恋爱"这件事本身，说明你在乎了。一个真正不在乎的人不会问这个问题。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……啧，你别说这种话。怪肉麻的。',
        systemComment: '你承认了他的不靠谱——他觉得你真实。但你指出了关键：他在乎。他嘴上说肉麻，心里在震动。'
      }
    ],
    successText: '你没有用鸡汤糊弄他也没有用逻辑分析他。你看到了他的在乎并指了出来。ESTP 的心里被打开了一条缝。'
  },
  {
    id: 'estp-12',
    level: 12,
    title: '最终选择',
    scene: 'ESTP 站在你面前。没有笑容。',
    messages: [
      { role: 'target', content: '我想认真问你一个问题。' },
      { role: 'target', content: '你想跟我在一起多久？不要跟我说"永远"，说真话。' }
    ],
    question: '最终问题。ESTP 在问你——这段关系对 TA 来说意味着什么？',
    options: [
      {
        id: 'A',
        text: '我想一直跟你在一起。只要你愿意，我就不走。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你的承诺吓到他了',
        deathReport: '他说了不要说"永远"。你还是说了"一直"。他最怕这种——你越承诺他越觉得被绑住了。他问这个问题是想听真话，不是听甜言蜜语。',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '我不知道……这个问题太沉重了。我们能不能先不聊这个？',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1, emotionalSafety: -1 },
        targetReaction: '你还是不敢回答。我知道了。',
        systemComment: '你在最后关头退缩了。他鼓起勇气问你——你却说"不聊了"。他觉得你也没那么认真。'
      },
      {
        id: 'C',
        text: '我不知道能在一起多久——我只知道跟你在一起的每一天都挺有意思的。明天可能分手，也可能十年后还在一起。反正只要还有意思，我就不会走。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……有意思。你说得对。只要还有意思。那就先这样吧。',
        systemComment: '你没说"永远"也没逃避。你用了他的语言——"有意思"。你承认了不确定性——他觉得你真实。对于他来说，没有什么比"我选择每天跟你在一起"更真实的承诺了。'
      }
    ],
    successText: '你没有给出虚假的承诺，而是给了他最真实的回答。ESTP 第一次觉得——跟这个人在一起，也许未来真的会很有意思。'
  }
];
