import type { ChallengeQuestion } from '../types';

export const istpQuestions: ChallengeQuestion[] = [
  {
    id: 'istp-1',
    level: 1,
    title: '独行侠',
    scene: '刚认识一个 ISTP，约他周末出来。他说周末要去修车，自己搞。',
    messages: [
      { role: 'target', content: '周末要自己修车，去不了。' },
      { role: 'target', content: '我自己搞得定。' }
    ],
    question: '你约了两次都被"自己有事"拒绝了。他到底是不想见你还是真的忙？怎么回？',
    options: [
      {
        id: 'A',
        text: '你一个人修多累呀，我来帮你吧！两个人快一点～',
        outcome: 'death',
        pattern: 'savior',
        deathTitle: '你想帮他但他不需要',
        deathReport: '你是真心想帮忙。但他修车不是干活——那是他的快乐。你说"我来帮你"等于说"你的世界我可以加入"。但他不想——他自己搞就是他的事。你的好心对他来说反而碍事。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '好吧，那你有空了找我。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1 },
        targetReaction: '嗯。',
        systemComment: '你退得有点快，听着像被拒绝了。他不是不想见你——他是真有活要干。你一委屈他就觉得麻烦。'
      },
      {
        id: 'C',
        text: '自己修？什么车啊？发动机还是变速箱的问题？',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1 },
        targetReaction: '老款牧马人，变速箱有点毛病。研究快一周了。',
        systemComment: '你没觉得被拒绝。你问他修什么车——他对你好奇了。你跟他说他的东西，你们就能聊了。'
      }
    ],
    successText: '你没把他的独立当拒绝。你对他做的事感兴趣——这是他愿意打开门的唯一方式。'
  },
  {
    id: 'istp-2',
    level: 2,
    title: '情感绝缘',
    scene: '你跟他分享了一件让你很难过的事。他听完了，然后说了一句话让你心凉了半截。',
    messages: [
      { role: 'target', content: '那你打算怎么办？有什么方案吗？' },
      { role: 'target', content: '光难受也没用啊，得想想怎么解决。' }
    ],
    question: '你需要的是安慰，他给了你解决方案。怎么回？',
    options: [
      {
        id: 'A',
        text: '我不要方案……我就要你抱抱我嘛。',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你让他不会了',
        deathReport: '你撒娇了，听着挺甜的。但他真的不会别的——他就只有这一种关心方式。你说抱抱才有用，那他的方案就是错的。那他整个人都是错的了。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '算了，你不懂就算了。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, oldPatternDetected: 1 },
        targetReaction: '……好。',
        systemComment: '"算了"——他最讨厌这两个字。他读到的意思是"你的方式不行，我不教你了"。他就不参与了。'
      },
      {
        id: 'C',
        text: '其实我知道怎么处理，就是现在有点难受。你陪我一会就行。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……好。那我在这。',
        systemComment: '你没否定他的方式——"我知道怎么处理"，你已经想过了，他就不用再提供了。你就说"陪我"，指令明确，他做得到。'
      }
    ],
    successText: '你没否定他的关心方式，也没委屈自己。他用他的方式陪了你——这就够了。'
  },
  {
    id: 'istp-3',
    level: 3,
    title: '消失模式',
    scene: '你们一直聊得很好。然后他突然消失了三天。你发消息已读不回。第四天他出现了。',
    messages: [
      { role: 'target', content: '在。之前有点事。' },
      { role: 'target', content: '没看手机。' }
    ],
    question: '三天没消息，一句"没看手机"就完了。你憋了一肚子话。怎么回？',
    options: [
      {
        id: 'A',
        text: '担心死我了……你下次能不能提前跟我说一声呀？',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你要他为你改变',
        deathReport: '你说担心，是真话。但你觉得他消失了是个问题——他得提前报备。可他做不到，他消失就是因为那个时候不想说话。你说"提前说"等于说他那个功能是错的。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '你知道我等了你三天吗？太过分了。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { selfProof: 2, trust: -1 },
        targetReaction: '……对不起。',
        systemComment: '他道歉了，但不是因为懂了——他不想吵架。你越让他内疚他越不想靠近，他只觉着"谈感情好麻烦"。'
      },
      {
        id: 'C',
        text: '回来就好。有啥需要帮忙的吗？',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……不用。就想自己待了几天。你没生气？',
        systemComment: '你没追责。你说"回来就好"——消失不用付情绪代价。但你问了"需要帮忙吗"——你没因为他消失了就撤回关心。他要的就是不纠缠的接纳。'
      }
    ],
    successText: '你没用情绪追债。他回来的时候发现门还开着。'
  },
  {
    id: 'istp-4',
    level: 4,
    title: '解决问题',
    scene: '你跟他说工作中遇到的麻烦，以为他只是听听。结果他给你发了一个长长的解决方案。',
    messages: [
      { role: 'target', content: '我给你列了几个方案，你看哪个可行。' },
      { role: 'target', content: '第三条最简单，但第四条效果最好。' }
    ],
    question: '他花了两小时帮你做方案，但你只是想吐槽。怎么回？',
    options: [
      {
        id: 'A',
        text: '你花这么多时间帮我做这个呀……但其实我就是想吐槽一下而已啦。',
        outcome: 'death',
        pattern: 'defense',
        deathTitle: '他的心意你拨开了',
        deathReport: '你声音软软的，听着像心疼他。但他听到的是——我花两小时帮你，你说你在吐槽。那下次我为什么要花这个时间？他的爱就是行动，你说不需要，他就不给了。',
        deathRate: '55%'
      },
      {
        id: 'B',
        text: '……你好认真啊，我都不知道说什么了。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1 },
        targetReaction: '……行吧。',
        systemComment: '他花了两小时，你给了个尴尬的回应。他不需要磕头感谢，但他需要劳动被认真对待。你说"不知道说什么"——他觉得白做了。'
      },
      {
        id: 'C',
        text: '你真给我列了？！（认真看）……第三条最简单但我觉得第四条更适合我。你也太靠谱了吧！',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 2 },
        targetReaction: '你看了？第四条确实最合适，不过执行起来需要点时间。',
        systemComment: '你认真看了他的方案还给了反馈。他的爱就是"我帮你想办法"——你认真对待他的输出，就是认真对待他。'
      }
    ],
    successText: '你认真看了他的方案。你接受了他的关心方式——行动就是他的情话。'
  },
  {
    id: 'istp-5',
    level: 5,
    title: '独立宣言',
    scene: '你们的关系在升温。然后有一天他突然很认真地说了一段话。',
    messages: [
      { role: 'target', content: '我需要你知道，我永远需要自己的空间和时间。' },
      { role: 'target', content: '不是我不喜欢你，但我不会为了任何人改这一点。' }
    ],
    question: '他在提前打预防针。你怎么回？',
    options: [
      {
        id: 'A',
        text: '嗯我知道……但你不会离开我的对吧？',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你的不安成了他的责任',
        deathReport: '你嘴上说知道，但下一句"你不会离开我吧"——你的不安漏出来了。他刚说了自己需要空间，你问的是"你会走吗"。他给不了那种承诺，你的问题让他压力很大。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '那你需要多少空间呀？每周见几次你比较舒服？',
        outcome: 'damage',
        pattern: 'surrender',
        effects: { oldPatternDetected: 1, trust: -1 },
        targetReaction: '……不用算这么细吧。',
        systemComment: '你把他的宣言变成了排期。他最讨厌被安排——你说每周见几次，他觉得你在签合同。他要的是弹性，不是日程表。'
      },
      {
        id: 'C',
        text: '明白。我也是需要自己空间的人。你有你的节奏，我有我的，知道对方在就行了。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……你真的这么想？',
        systemComment: '你没质疑他，也没修改他的需求。你说你也是一样的人——他听到的不是"我接受你"，是"我们是一类人"。他要的是伙伴，不是挂件。'
      }
    ],
    successText: '你没把他的独立宣言当感情测试。你也是独立的人——这是他选你的理由。'
  },
  {
    id: 'istp-6',
    level: 6,
    title: '依赖恐惧',
    scene: '你今天遇到了很大的麻烦，忍不住找他帮忙。他帮你解决了。然后他有点冷淡。',
    messages: [
      { role: 'target', content: '搞定了。下次这种事先自己试试。' },
      { role: 'target', content: '我不可能每次都帮你。' }
    ],
    question: '他帮了你但好像不太高兴。他生气了吗？怎么回？',
    options: [
      {
        id: 'A',
        text: '对不起……我是不是太依赖你了？我不是故意的。',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你的道歉让他更烦',
        deathReport: '你马上道歉了，听着很乖。但他要的不是道歉——他要的是你下次能自己搞定。你的自责让他觉得"帮了你反而多了个事"。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '那你教我怎么弄，下次我自己来。',
        outcome: 'damage',
        pattern: 'surrender',
        effects: { pressure: 1 },
        targetReaction: '……行吧。',
        systemComment: '你说要学，但语气带着委屈。他分得清真学还是哄他——你这句听着像"你想让我学那我就学吧"。他要的是你真独立，不是装。'
      },
      {
        id: 'C',
        text: '谢了！我已经搞清楚问题在哪了，下次知道怎么弄了。这次算交学费。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '嗯。这样才对。',
        systemComment: '你谢了他，但更重要的是——你告诉他你学到了。他不怕帮忙，怕你变成一个需要他不断修的麻烦。你说"下次知道了"就是最好的回答。'
      }
    ],
    successText: '你接了他的帮忙但没有赖上他。你让他知道你学到了——这是他的安全感。'
  },
  {
    id: 'istp-7',
    level: 7,
    title: '不说爱',
    scene: '你说了"我爱你"。他沉默了很久。然后说了一句。',
    messages: [
      { role: 'target', content: '……我不知道怎么回你。' },
      { role: 'target', content: '我做不来这种。' }
    ],
    question: '你给了他三个字，他给你三个字"做不来"。怎么回？',
    options: [
      {
        id: 'A',
        text: '你连一句"我喜欢你"都不愿意说吗？',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你只盯着他没说的那三个字',
        deathReport: '你问得挺委屈的。但你漏了他做过的全部——他帮你修车、半夜接你电话、花两小时列方案。这些在你这里比不上三个字。他会觉得——我做这么多你看不到，那算了。',
        deathRate: '60%'
      },
      {
        id: 'B',
        text: '没事，我知道你不喜欢说这些。',
        outcome: 'damage',
        pattern: 'surrender',
        effects: { trust: -1, avoidance: 1 },
        targetReaction: '……嗯。',
        systemComment: '你说"没事"，但他扫到你失望了。他宁可你直接骂他，也不想看你忍着难受。你一忍他就想跑。'
      },
      {
        id: 'C',
        text: '我知道你说不出来。但你帮我修车的时候、半夜接我电话的时候、给我做方案的时候——你已经说了很多次了。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 2, emotionalSafety: 1 },
        targetReaction: '……你注意到了？',
        systemComment: '你翻译了他的语言。他不会说那三个字，但用行动说了一百遍。你不是逼他说，你告诉他——我看到了。这是 ISTP 能收到的最好的情话。'
      }
    ],
    successText: '你没逼他说做不来的话。你看到了他行动里的爱——这就是他的全部了。'
  },
  {
    id: 'istp-8',
    level: 8,
    title: '拒绝规划',
    scene: '你问他三个月后有什么计划，想提前约一个旅行。他皱了皱眉。',
    messages: [
      { role: 'target', content: '三个月后的事我怎么知道？到时候再说呗。' },
      { role: 'target', content: '我不喜欢提前定那么远的事。' }
    ],
    question: '你只是想提前安排，但他连听都不想听。怎么回？',
    options: [
      {
        id: 'A',
        text: '我就想跟你一起去嘛～提前定了到时候也有个期待呀。',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你的撒娇是他的压力',
        deathReport: '你撒了个娇，听着挺可爱的。但他最怕这个——你的期待变成了他的任务。他说不就成了让你失望的人，他说好就得扛一个三个月的承诺。他左右为难。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '行吧反正你也不想跟我出去。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { selfProof: 1, trust: -1 },
        targetReaction: '……我不是那个意思。',
        systemComment: '你把他的拒绝规划变成了拒绝你。他不是不想跟你去，他是不想被锁住。你这一曲解他就不想解释了。'
      },
      {
        id: 'C',
        text: '那就不提前定了。到时候说走就走呗，那种反而更有意思。',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '对，到时候看情况。说走才是旅行。',
        systemComment: '你没强推你的方案。你站到了他那边——说走就走比提前三个月更让他兴奋。你不用改变他，跟着他的节奏走就行。'
      }
    ],
    successText: '你放弃了计划的执念。说走就走的旅行比三个月预约更让他想跟你去。'
  },
  {
    id: 'istp-9',
    level: 9,
    title: '冲突冷漠',
    scene: '你们吵架了。你情绪激动地说了很多。他全程面无表情，一个字没说。',
    messages: [
      { role: 'target', content: '……' },
      { role: 'target', content: '你现在太情绪化了。等你冷静了再说。' }
    ],
    question: '你在发泄，他在关机。你感觉自己在对着一堵墙说话。怎么回？',
    options: [
      {
        id: 'A',
        text: '你能不能理我一下？我一个人说了半天，你到底在不在乎？',
        outcome: 'death',
        pattern: 'attack',
        deathTitle: '你的情绪把他的逻辑冲没了',
        deathReport: '你越要他反应他越不想说——因为他知道情绪里说啥都是错的。你问"在不在乎"——他说在乎你觉得敷衍，说不在乎又不是真的。他只能闭嘴。',
        deathRate: '55%'
      },
      {
        id: 'B',
        text: '好，你不说我走。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1, avoidance: 1 },
        targetReaction: '……（没反应）',
        systemComment: '你走了，他不会追。他脑子里的逻辑是——你需要冷静，走了也好。但他心里会觉得你处理不了冲突。'
      },
      {
        id: 'C',
        text: '好。我冷静十分钟。等会儿找你，我们好好说。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '……好。我等你。',
        systemComment: '你自己说要冷静——他没压力了。十分钟是明确的、可预测的、理性的。你给了自己空间，也给了他空间。'
      }
    ],
    successText: '你没逼他在情绪中回应，也没逃跑。十分钟的冷静是他能理解的沟通方式。'
  },
  {
    id: 'istp-10',
    level: 10,
    title: '亲密恐惧',
    scene: '你们的关系越来越近。你能感觉到他在抗拒——不是抗拒你，是抗拒"越来越近"这件事本身。',
    messages: [
      { role: 'target', content: '我们是不是走太快了？' },
      { role: 'target', content: '我需要点距离。' }
    ],
    question: '每当靠近一步，他就退两步。这不是你的问题，是他的系统报警了。怎么回？',
    options: [
      {
        id: 'A',
        text: '你是不是想推开我？我做错什么了吗？',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你把他的恐惧当成了你的错',
        deathReport: '你问得慌慌的，听着让人心疼。但这真不是你的问题——是他的警报响了。你一问他更烦了，因为他不想让你难过，但他自己也不知道怎么办。他不是要推开你，是怕靠太近。',
        deathRate: '55%'
      },
      {
        id: 'B',
        text: '我哪里不好你告诉我，我改。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { selfProof: 2, pressure: 1 },
        targetReaction: '……你没错。是我的问题。',
        systemComment: '你把他的恐惧揽到自己身上了。他更不好受——不是你的错，是他的本能。你越道歉他越有压力，因为他让你难过了但他改不了。'
      },
      {
        id: 'C',
        text: '好。那我们不进不退，就在这。你觉得安全了再说。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 2 },
        addFlags: ['accepted_distance'],
        targetReaction: '……你不生气？',
        systemComment: '你没追也没跑。你说"就在这"——给了他最需要的东西：一个没有压力的停靠点。你不用爱逼他，不用走威胁他。他自己决定什么时候觉得安全。'
      }
    ],
    successText: '你没追也没跑。你停在了他舒服的距离——这种耐心比任何情话都管用。'
  },
  {
    id: 'istp-11',
    level: 11,
    title: '柔软的角落',
    scene: '一个深夜。他喝了一点酒，话比平时多了一点。他看着你，欲言又止。',
    messages: [
      { role: 'target', content: '我以前没想过自己会跟任何人走到这一步。' },
      { role: 'target', content: '我不太会处理这种……但是跟你在一起还行。' }
    ],
    question: '他终于露出了坚硬外壳下的一点点柔软。怎么接？',
    options: [
      {
        id: 'A',
        text: '你终于愿意说了！我好开心～',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你吓到他刚打开的壳了',
        deathReport: '你高兴，很正常！但他刚开了一点点门——你反应这么大他就缩回去了。"终于"听着像他在表演给你看。他好不容易说了一次，你一鼓掌他就不敢再说了。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '你喝多了吧，早点睡。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1 },
        targetReaction: '……嗯。',
        systemComment: '他好不容易打开一次——你关上走了。他很少主动说感受，你说他喝多了，他会记住这次开门没人接，下次就不开了。'
      },
      {
        id: 'C',
        text: '嗯。你不用会说，不用做得多好。我在这又不是来给你打分的。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, emotionalSafety: 2 },
        addFlags: ['accepted_soft_side'],
        targetReaction: '……你这样说我很不习惯。但……谢谢。',
        systemComment: '你用了最轻的力接住了他最重的话。他说不擅长——你说不用擅长。对他来说这就是赦免——他不用有用，不用完美，存在就行。'
      }
    ],
    successText: '你接住了他不擅长的柔软。没有大惊小怪——你安静地让他知道，他不需要完美。'
  },
  {
    id: 'istp-12',
    level: 12,
    title: '最终选择',
    scene: '他把你叫出来。你们坐在他修了一半的车旁边。他手上还有机油。他看着你。',
    messages: [
      { role: 'target', content: '我不太会说。你都知道的。' },
      { role: 'target', content: '我不会变成你想要的那种黏人的男朋友。但你要是能接受这样的我……' }
    ],
    question: '他用他的方式在问你——要不要这个不会说爱但会做事的人。最后一关。怎么回？',
    options: [
      {
        id: 'A',
        text: '我不需要你改什么。你做自己就好，我会一直陪着你。',
        outcome: 'death',
        pattern: 'savior',
        deathTitle: '太完美的话他不敢信',
        deathReport: '你说得很对——但"一直"这个承诺太大了，他连下周的事都不确定。你说得太快太好听了，他不信。他觉得你还没看到他有多难搞才说得这么轻松。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '我跟你在一起这么久了你说呢？',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1 },
        targetReaction: '……行吧。',
        systemComment: '他好不容易鼓起勇气问了最怕的问题——你给了一个反问。他不会再问第二次了。他问出口已经用尽全力了。'
      },
      {
        id: 'C',
        text: '你不用变成别的人。我也不要黏人的男朋友。我要的是——他会修好我的电脑，也会在我哭的时候不说话坐旁边。他会修车，也会半夜接我电话。你每次用行动说"我在"的时候，我都收到了。这就是你，也是我选你的理由。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { emotionalSafety: 99, trust: 99 },
        addFlags: ['final_survive'],
        targetReaction: '（低头擦手上的机油，没让你看到他的表情）……那你坐稳了。',
        systemComment: '【S 级结局：安静的归途】你没说"我爱你"，没说空话。你细数了他所有爱的方式——那些他以为你从没注意过的行动。你翻译了他的语言，告诉他你一开始就读懂了。他一辈子都在等一个不需要他解释的人。'
      }
    ],
    successText: '完美通关。你听懂了他说了一辈子的"我爱你"——他不用再解释了，你全看见了。'
  }
];
