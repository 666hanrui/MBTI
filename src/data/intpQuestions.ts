import type { ChallengeQuestion } from '../types';

export const intpQuestions: ChallengeQuestion[] = [
  {
    id: 'intp-1',
    level: 1,
    title: '理性开场',
    scene: '你跟一个 INTP 聊了一段时间。有一天他发来一段很长的消息。',
    messages: [
      { role: 'target', content: '我最近在分析我们之间的关系模型。' },
      { role: 'target', content: '有几个维度的兼容性还不错，但还有几个变量没搞清。' }
    ],
    question: '他把感情说成了数据分析。怎么回？',
    options: [
      {
        id: 'A',
        text: '感情哪能这么分析呀？你只要喜欢我就够了嘛～',
        outcome: 'death',
        pattern: 'defense',
        deathTitle: '你让他关掉了大脑',
        deathReport: '你说得软软的，像是在撒娇。但对他来说——分析就是他喜欢一个人的方式。他研究你们的关系因为他在乎。你说"不要分析"等于说"不要用你的方式喜欢我"。那他怎么办？',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '你说得好复杂……我听不懂😂',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1, avoidance: 1 },
        targetReaction: '……算了。',
        systemComment: '你说听不懂，他不会怪你。但他不会再跟你聊这个了——他把门关上了，自己回去研究。'
      },
      {
        id: 'C',
        text: '哦？哪些维度你觉得兼容？哪些变量没搞清？展开说说～',
        outcome: 'survive',
        pattern: 'logic',
        effects: { trust: 1 },
        targetReaction: '比如说沟通频率和深度成反比，还有就是……',
        systemComment: '你接住了他的语言。你说"说说看"——你进了他的世界。他不需要你全懂，他只需要你对他的大脑感兴趣。'
      }
    ],
    successText: '你进了他的语言体系。他不需要你跟他一样理性，他只需要你对他的脑子感兴趣。'
  },
  {
    id: 'intp-2',
    level: 2,
    title: '分析感情',
    scene: '你心情不好去找他。他开始分析你为什么会有这个情绪。',
    messages: [
      { role: 'target', content: '你这个情绪可能是因为 A 触发，然后 B 放大了你的反应。' },
      { role: 'target', content: '你有没有想过可能跟你的成长经历有关？' }
    ],
    question: '你在难受，他在写论文。怎么回？',
    options: [
      {
        id: 'A',
        text: '你能不能别分析了？抱抱我就行……',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你让他变得没用',
        deathReport: '你说话软软的，听着让人心疼。但你等于跟他说——你的分析没有用，你的方式我不需要。可他只有这一种关心方式。你让他关掉大脑，他就什么都不会了。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '你说得对……可能是吧。',
        outcome: 'damage',
        pattern: 'surrender',
        effects: { trust: -1, oldPatternDetected: 1 },
        targetReaction: '嗯，那你现在知道原因了，应该会好一点。',
        systemComment: '你敷衍了他。他真的觉得自己帮到了——因为在他的系统里，找出原因就等于解决了。他不知道你更难过了。下次他还会这样。'
      },
      {
        id: 'C',
        text: '你分析得可能对。但我现在脑子乱，你先别分析了，让我靠一会儿就行。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……好。那你靠吧。',
        systemComment: '你没说他分析不对——"可能对"。先肯定了他的大脑，然后给了清晰的指令。他怕的就是没指令。你说"让我靠"他就知道了——陪你，不做别的。'
      }
    ],
    successText: '你没否定他的分析模式，也说出了你的需求。给他指令比否定他有用。'
  },
  {
    id: 'intp-3',
    level: 3,
    title: '消失专注',
    scene: '他之前每天跟你聊天。突然有一天开始回复越来越慢，最后消失了三天。',
    messages: [
      { role: 'target', content: '啊抱歉，我最近在搞一个东西，没看手机。' },
      { role: 'target', content: '什么？已经三天了吗？' }
    ],
    question: '他不是故意的——他是真的忘了看手机。怎么回？',
    options: [
      {
        id: 'A',
        text: '你又消失了这么久……我担心坏了。下次跟我说一声好不好？',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你让他跟本能打架',
        deathReport: '你是真担心，不是作。但他不是故意的——他专注起来真的忘了外面的一切。你要他"下次说一声"——等于让他时刻留一部分注意力在外面。他做不到，他的专注模式就是整片沉浸的。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '好吧没事你忙吧。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1 },
        targetReaction: '嗯好。',
        systemComment: '你忍了，但他完全不知道。他只收到"好的她没事了"，然后回去继续搞项目。你的委屈他收不到。'
      },
      {
        id: 'C',
        text: '啥研究这么好玩？三天没看手机，那肯定很有意思！',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '我在搭一个自动分类图片的算法！有个 bug 卡了我两天，昨天突然通了！',
        systemComment: '你没让他内疚。你对他研究的东西好奇——这比任何情感绑架都管用。他的消失不是因为不在乎你——他的大脑被另一个宇宙吸走了。你进他的宇宙，就是最好的连接。'
      }
    ],
    successText: '你没因为他忘了你而生气。你对他的世界好奇——这比"你为什么不回我"有用一百倍。'
  },
  {
    id: 'intp-4',
    level: 4,
    title: '情感短路',
    scene: '你精心准备了一个惊喜。他知道了之后，反应很平淡。',
    messages: [
      { role: 'target', content: '谢谢你。但你不用花这么多时间弄这些。' },
      { role: 'target', content: '我知道你用心了，但我真的不太需要形式上的东西。' }
    ],
    question: '你花了三天准备的惊喜，他说"不需要"。怎么回？',
    options: [
      {
        id: 'A',
        text: '我花了三天准备的……你就不能开心一点吗？',
        outcome: 'death',
        pattern: 'attack',
        deathTitle: '你让他为自己的感受道歉',
        deathReport: '你委屈了，很正常。但他没有不开心——他的开心就是"谢谢你，但真不用了"。你觉得他冷淡，但他没有你那套"花了心思就得开心"的规则。他的感受不是错误的，只是不一样。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '好吧我以后不做了。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, avoidance: 1 },
        targetReaction: '……我不是那个意思。',
        systemComment: '你说"不做了"——他听到的是惩罚。他不是不感激，他是真的不需要惊喜。你一生气他就懵了。'
      },
      {
        id: 'C',
        text: '哈哈我知道你会这么说。那下次不搞惊喜了，直接问你要什么。不过这次来都来了，陪我吃个饭总行吧？',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……行吧。但真的不用搞这些，直接跟我说就行。',
        systemComment: '你没生气，没否定他。你接受了他不需要惊喜这件事，还换了个方案。他对你的安全感就源于——你不把他的"不一样"当错误。'
      }
    ],
    successText: '你没把他的冷淡当伤害。你接受了他不需要惊喜——下次直接说爱就行。'
  },
  {
    id: 'intp-5',
    level: 5,
    title: '独处需求',
    scene: '你们连续待在一起好几天了。今天早上他坐在沙发上发呆，你叫他他反应很慢。',
    messages: [
      { role: 'target', content: '我想自己待一天。' },
      { role: 'target', content: '不是你的问题，就是需要独处恢复一下能量。' }
    ],
    question: '他不是烦你了，他是社交电池耗尽了。怎么回？',
    options: [
      {
        id: 'A',
        text: '好。那你休息吧，等你回来找我。',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '"等你"就是压力',
        deathReport: '你答应了，听起来挺大方的。但你说了"等你回来找我"——这句话听着正常，但对他来说就是压力。他不是去"休息"，是去充电。你说"等你"他就得想着回来，独处就变成有任务的了。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '那你大概需要多久呀？',
        outcome: 'damage',
        pattern: 'control',
        effects: { pressure: 1 },
        targetReaction: '……不知道。别定时间。',
        systemComment: '你问"多久"——他最怕这个。他要的是无压力的独处，不是有截止期的独处。你的问题把充电变成了倒计时。'
      },
      {
        id: 'C',
        text: '好。你好好充电。我正好也想看那本书，各待各的，晚上想说话了再说。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '嗯。这个安排很好。',
        systemComment: '你不仅同意了，还安排了自己的事。他最舒服的状态就是——各做各的，但知道对方在。你没让独处变成亏欠。'
      }
    ],
    successText: '你给了他不带条件的空间。各做各的事——对他来说这就是最好的相处。'
  },
  {
    id: 'intp-6',
    level: 6,
    title: '承诺分析',
    scene: '你问他你们是什么关系。他想了很久。然后发来了一大段。',
    messages: [
      { role: 'target', content: '我思考了一下。关系对我来说是一个社会建构的概念。' },
      { role: 'target', content: '我在乎你，但我对"男朋友"这个角色没有明确的定义和预期。' }
    ],
    question: '他分析到哲学层面了。怎么回？',
    options: [
      {
        id: 'A',
        text: '就说一句"我喜欢你"有那么难吗？',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你问他要他给不出的答案',
        deathReport: '你问得很直接。但他连"喜欢"的定义都得先搞清楚才能说出口。你催他让他的大脑短路了。他不是不喜欢你——他在努力理解什么叫喜欢。',
        deathRate: '55%'
      },
      {
        id: 'B',
        text: '你不要想那么多了嘛，顺其自然不行吗？',
        outcome: 'damage',
        pattern: 'defense',
        effects: { avoidance: 1, oldPatternDetected: 1 },
        targetReaction: '……不是你在问我的吗？我回答你你又让我别想。',
        systemComment: '你让他别想——他最烦这个。不让用大脑等于不让呼吸。他认真思考你却说"想太多"，他就不想再跟你聊了。'
      },
      {
        id: 'C',
        text: '那我们不用"男朋友"这个词好了。我在乎你，你在乎我，在一起开心——这个公式不需要标签。你同意吗？',
        outcome: 'survive',
        pattern: 'logic',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……这个定义我可以接受。是的，我在乎你。',
        systemComment: '你用了他的语言——"公式""定义"。他卡在了"男朋友"这个概念上，你绕过去了。他不信标签，他信逻辑能通的模型。你给了。'
      }
    ],
    successText: '你没逼他接受理解不了的角色。你重新定义了他能理解的关系——没有标签，但有真的在乎。'
  },
  {
    id: 'intp-7',
    level: 7,
    title: '冷处理',
    scene: '你跟他闹了点小矛盾。你等他来哄你。但他一整天没消息。你忍不住找他。',
    messages: [
      { role: 'target', content: '哦，我看你后面没回复了，我以为你不想聊了。' },
      { role: 'target', content: '你没说你要我回什么啊。' }
    ],
    question: '他不是冷暴力——他是真的以为对话结束了。怎么回？',
    options: [
      {
        id: 'A',
        text: '我在生气你看不出来吗？你就不能来哄哄我？',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你让他猜谜语',
        deathReport: '你生气了，正常的。但他真的看不出来——他看到的只是"上次对话自然结束了"。你说"你来哄我"——他怎么知道你需要哄？他还不读心。你越说他越懵。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '以后我不说话的时候你就来找我，好不好？',
        outcome: 'damage',
        pattern: 'surrender',
        effects: { pressure: 1 },
        targetReaction: '……可以试试。但如果你不说话我就来找你，你可能只是在上厕所怎么办？',
        systemComment: '你给了他模糊指令，他当程序执行了。他不知道"不说话"的边界在哪。他需要的是说明书，不是暗示。'
      },
      {
        id: 'C',
        text: '好吧我直说了——刚才那事我有点不开心。你跟我说句软话就好了。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '哦好。对不起。我不该那样说。还生气吗？',
        systemComment: '你给了明确的指令——什么事不开心 + 需要一句软话 + 说完就好了。他不是不哄你，他不知道怎么哄。你把说明书给他，他会严格执行。'
      }
    ],
    successText: '你没让他猜谜。你把需求翻译成了他懂的指令——他正需要这个。'
  },
  {
    id: 'intp-8',
    level: 8,
    title: '懒得经营',
    scene: '你发现你们最近都没有好好聊过天了。他在旁边刷手机看科普视频。',
    messages: [
      { role: 'target', content: '我们好久没有好好聊天了。' },
      { role: 'target', content: '每天各玩各的，跟合租一样。' }
    ],
    question: '你感觉被忽略了。但在 INTP 看来，待在一起不说话是正常状态。怎么回？',
    options: [
      {
        id: 'A',
        text: '你天天看这些科普视频，有没有想过我需要你陪呀？',
        outcome: 'death',
        pattern: 'attack',
        deathTitle: '你攻击了他的世界',
        deathReport: '你说得委屈，但他听到的是——你看的那些东西没意义，你需要陪我。可那些视频就是他的世界。你说"天天看这些"就是在贬低他的爱好。他宁愿你直接说"陪我"，而不是说他做的事没用。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '算了你继续看吧，我不吵你。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1, avoidance: 1 },
        targetReaction: '……你不是说要聊天吗？',
        systemComment: '你说算了——提出需求又收回。他困惑了。他不知道怎么处理，但会记住"聊天好像是件麻烦事"。'
      },
      {
        id: 'C',
        text: '你现在看到哪了？看完给我讲讲呗，我喜欢听你科普。讲完了陪我看一集剧好不好？',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '好！这个讲的是黑洞的最新发现，你看这里……',
        systemComment: '你先进了他的世界——让他分享他在看的东西。然后提了你的需求。你把"陪我"翻译成了"你先讲给我听，再一起看剧"。他既做了自己又满足了你。'
      }
    ],
    successText: '你先进了他的世界，再邀请他进你的。他不拒绝陪你——他只需要先被理解。'
  },
  {
    id: 'intp-9',
    level: 9,
    title: '忘记恋爱',
    scene: '他最近在忙一个个人项目。完全沉浸了。你已经一周没有好好说过话了。',
    messages: [
      { role: 'target', content: '……啊我忘了回你。最近在搞一个项目。' },
      { role: 'target', content: '时间过得好快。' }
    ],
    question: '他不是故意不理你——他是真的忘了世界上还有恋爱这回事。怎么回？',
    options: [
      {
        id: 'A',
        text: '你忙起来就忘了世界上还有我了是吧？',
        outcome: 'death',
        pattern: 'attack',
        deathTitle: '你跟他的热爱打架了',
        deathReport: '你说这话带着笑都行，但他听到的是——在我和他喜欢的东西之间，你得选。他不会选的。他不是不爱你——他忘了包括吃饭睡觉在内的一切。不是选择，是模式。你这样说只会让他觉得喜欢一个人好累。',
        deathRate: '55%'
      },
      {
        id: 'B',
        text: '没事你忙吧。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1, avoidance: 1 },
        targetReaction: '嗯。',
        systemComment: '你忍了，但他完全不知道——你说了没事他就真觉得没事了，转头继续搞项目。你没给反馈，他下次还会这样。'
      },
      {
        id: 'C',
        text: '啥项目这么着迷？我想看看！你不用管我，我在旁边待着看就行。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '真的？我在搭一个自己的网站，有个功能卡了好几天……',
        systemComment: '你走进了他的世界。他不是故意不理你——他的专注就是全沉浸。你加入他而不是等他出来，效果要好得多。他不是不想跟你在一起——他是需要你进他的宇宙。'
      }
    ],
    successText: '你没跟他热爱的东西打架。你走进他的世界，坐在旁边看他发光。'
  },
  {
    id: 'intp-10',
    level: 10,
    title: '逻辑与感受',
    scene: '你很难过，想让他说点暖心的。他思考了很久。然后说了一段意想不到的话。',
    messages: [
      { role: 'target', content: '根据我对你的了解，你这个情绪大概会在 24 到 48 小时内自然消退。' },
      { role: 'target', content: '所以我建议你吃点甜的，分泌多巴胺，可以加速这个过程。' }
    ],
    question: '世界上最笨拙的安慰。怎么回？',
    options: [
      {
        id: 'A',
        text: '你把我的情绪当数据分析了是吧？我是你女朋友不是报表。',
        outcome: 'death',
        pattern: 'defense',
        deathTitle: '你又否定了他唯一的方式',
        deathReport: '你怼了他，也是话赶话。但他真的去查了资料、分析了你的模式、找到了最优解——这是他表达关心的全部能力。你说他错了，他就真不知道怎么做了。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '……算了，我没事了。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1 },
        targetReaction: '好。那你记得吃甜的。',
        systemComment: '你说没事——他真的以为方案见效了。他不知道你只是懒得说了。下次他还会给同样的方案，因为上次"有效"。'
      },
      {
        id: 'C',
        text: '（忍不住笑了）24 到 48 小时？那这期间你能不能别给方案，就陪我待着？',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……可以。不说话的待着？',
        systemComment: '你接住了他笨拙的温柔——他真的去研究过怎么让你开心。你没打击他，而是把他的"方案"换成了"陪你"。指令明确——"待着"，他做得到。'
      }
    ],
    successText: '你看到了他笨拙的温柔里藏着的在乎。他不是冷漠——他在用自己的方式努力爱你。'
  },
  {
    id: 'intp-11',
    level: 11,
    title: '深度连接',
    scene: '一个深夜。他突然在聊天里说了一句跟平时完全不一样的话。',
    messages: [
      { role: 'target', content: '我最近在想……我可能比我想象中要在乎你。' },
      { role: 'target', content: '我一般不会想这些的。但你让我开始想了。' }
    ],
    question: '他主动说了情感类的话——这对他来说是天大的事。怎么接？',
    options: [
      {
        id: 'A',
        text: '真的吗？！我好开心！你再说一遍嘛！',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你吓跑了他好不容易说出口的话',
        deathReport: '你太高兴了，很正常。但他很久才憋出这一句——你反应这么大，他会觉得说这种话好危险。"再说一遍"——他不会的。你一拍手他就不敢再开口了。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '你原来没有那么在乎我吗？',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, selfProof: 1 },
        targetReaction: '……我不是这个意思。我说不清楚。',
        systemComment: '他好不容易用不擅长的语言表达了一次——你抠他字眼了。他说得不精确，但你抓着不放，他下次就不说了。'
      },
      {
        id: 'C',
        text: '嗯。这话从你嘴里说出来，我知道有多重。我收到了。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, emotionalSafety: 2 },
        addFlags: ['accepted_deep_connection'],
        targetReaction: '……嗯。收到了就好。',
        systemComment: '你没大惊小怪，没让他再说一次。一句"我收到了"——最好的回应。他听懂了他被听懂。'
      }
    ],
    successText: '你接住了他难得说出口的心里话。没有逼他再说——一句"收到了"就够了。'
  },
  {
    id: 'intp-12',
    level: 12,
    title: '最终选择',
    scene: '经历了所有的一切——他的消失、他的分析、他笨拙的温柔。他坐在你对面，看起来不太自在。',
    messages: [
      { role: 'target', content: '我不太确定我是不是一个合格的男朋友。老忘记回消息，整天搞些奇怪的东西，也不会说好听的。' },
      { role: 'target', content: '但你好像……一直没有走。为什么？' }
    ],
    question: '他用理性分析了所有自己的缺点，然后问你为什么不走。最后一关。怎么回？',
    options: [
      {
        id: 'A',
        text: '因为我喜欢你呀。你不需要改什么。',
        outcome: 'death',
        pattern: 'savior',
        deathTitle: '答案太模糊了',
        deathReport: '你说喜欢他，真心话。但他刚列了自己一堆毛病，你说喜欢就完了？他需要为什么。你的回答太模糊了，他没法分析。你说不需要改——但他知道自己需要改。他都不信自己，怎么信你的"不需要改"？',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '我也不知道……可能习惯了吧。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1 },
        targetReaction: '……哦。习惯啊。',
        systemComment: '最差的答案。他是追求意义的生物——"习惯"是他最不能接受的。任何为什么都行，除了"习惯"。'
      },
      {
        id: 'C',
        text: '因为你忘记回消息的时候是在研究让世界进步的东西。你沉浸的那些奇怪东西里眼睛会发光。你不会说好听的，但你查了三天资料就为了让我开心一点。你用你的方式爱我——它跟别人不一样，但它是真的。我为什么要走？我找的就是你这样的。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { emotionalSafety: 99, trust: 99 },
        addFlags: ['final_survive'],
        targetReaction: '（很久没说话）……你居然连我查资料都注意到了。',
        systemComment: '【S 级结局：被理解的宇宙】你没说"我爱你"这种他理解不了的空话。你列了他全部的证据——那些他以为你从没注意到的事。你证明了你真的看见了他。他一生在找的不是理解他多好，是理解他为什么奇怪。'
      }
    ],
    successText: '完美通关。你没说空洞的爱。你给了他全部证据——你看到了真实的他，奇怪的、沉浸的、笨拙的、全部的。'
  }
];
