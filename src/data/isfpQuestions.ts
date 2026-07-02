import type { ChallengeQuestion } from '../types';

export const isfpQuestions: ChallengeQuestion[] = [
  {
    id: 'isfp-1',
    level: 1,
    title: '自由的小鸟',
    scene: '你刚认识一个 ISFP，聊得不错。有一天她突然告诉你，她一个人跑去了隔壁城市，就因为她想看那里的日落。',
    messages: [
      { role: 'target', content: '哈哈哈哈我昨天脑子一热买了票跑去隔壁城市了🌇 就为了看那个日落！' },
      { role: 'target', content: '你会不会觉得我好疯呀😂' }
    ],
    question: '她像一只自由的小鸟，你还在想怎么约她周末吃饭，她已经飞走了。怎么回？',
    options: [
      {
        id: 'A',
        text: '一个人去看日落也太浪漫了吧！下次带上我好不好？我也想跟你一起看～',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你的关心绑住了她',
        deathReport: '你说想陪她，听着多甜啊。但她就是想要那种说走就走的自由——一个人，不用跟谁交代。你说"下次带上我"，她想的不是浪漫，是"那我以后是不是就不能一个人跑了"。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '哇我也想去！下次叫上我呗～',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { pressure: 1 },
        targetReaction: '……哈哈好，看情况吧。',
        systemComment: '你说得挺轻松的，但她感觉到了——你在等下一次。她不想承诺带你。'
      },
      {
        id: 'C',
        text: '哇一个人看日落也太爽了吧！那边的天空跟这儿长一样吗？',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '比这边好看一百倍！！而且我在那边遇到一只流浪猫，陪我蹲了好久😭',
        systemComment: '你没怪她，也没说要跟着。你对她经历了什么真的好奇，不是对她没带你有意见。她最吃这套——你懂她的自由。'
      }
    ],
    successText: '你没用关心把她拴住。她飞了一圈回来发现你没走。'
  },
  {
    id: 'isfp-2',
    level: 2,
    title: '忽近忽远',
    scene: '前几天你们聊得火热，她主动找你，分享各种日常。但今天她突然很冷淡，回复只有一两个字。',
    messages: [
      { role: 'target', content: '嗯。' },
      { role: 'target', content: '没事，就是不想讲话。' }
    ],
    question: '她昨天还热情得像个小太阳，今天像变了一个人。怎么回？',
    options: [
      {
        id: 'A',
        text: '你心情不好吗？跟我说说呗，有我在呢～',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你把沉默当成了问题',
        deathReport: '你在哄她，挺好的。但她说不想说话，你偏要她说——她刚说了不想要啥，你给的就是啥。不是你不贴心，是她就是需要一个人待一会儿。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '好吧，那你先休息吧，不打扰你了。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1 },
        targetReaction: '……嗯。',
        systemComment: '你走了。她不是要休息，她是需要你在但不吵她。你一撤她反而觉得算了。'
      },
      {
        id: 'C',
        text: '好，那不吵你。我刚在楼下看到一只超胖的柯基，拍给你看🐶 你空了再回～',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '（过了好一会儿回了张表情包）哈哈哈哈好胖啊它',
        systemComment: '你没追问，也没消失。你给了空间，但你没走——那只柯基的照片比一百句"你怎么了"有用。'
      }
    ],
    successText: '你没追着她问，也没走掉。一张照片让她知道你在，而且不需要她回应。'
  },
  {
    id: 'isfp-3',
    level: 3,
    title: '情感内敛',
    scene: '你鼓起勇气跟她说了心里话。她很安静地听完，然后只是点了点头。你期待更多。',
    messages: [
      { role: 'target', content: '……我知道了。' },
      { role: 'target', content: '我不知道怎么接。但你说的我听到了。' }
    ],
    question: '你的真心话换来了一句"我知道了"。你心里空落落的。怎么回？',
    options: [
      {
        id: 'A',
        text: '你没有什么想跟我说的吗？我就是想知道你在想什么……',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你逼她当场回应',
        deathReport: '你问得小心翼翼，听着挺让人心疼的。但她真的还没想好怎么说。你一催她就觉得自己做错了——不是不想说，是还没消化完。',
        deathRate: '55%'
      },
      {
        id: 'B',
        text: '没事，我知道你放在心里就行了。',
        outcome: 'damage',
        pattern: 'surrender',
        effects: { oldPatternDetected: 1 },
        targetReaction: '……嗯。（但她感觉到你在忍）',
        systemComment: '你嘴上说没事，但那股失望她闻得到。她太敏感了——你说的和你想的不一样，她一下就知道了。'
      },
      {
        id: 'C',
        text: '嗯，那就够了。我不是要你回答什么，就是想让你知道。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……谢谢你跟我说这些。我可能不会说好听的，但你说的我都会记住。',
        systemComment: '你是真的接受了她表达的方式，不是硬撑。她不是没感觉——她需要时间去消化。你不催她，她反而会翻来覆去地想你说的话。'
      }
    ],
    successText: '你没逼她表演感情。你说的每一句她都收着了——以她自己的方式。'
  },
  {
    id: 'isfp-4',
    level: 4,
    title: '随性冲突',
    scene: '你们约好了周六去看展。周六早上她说她不想去了，想去公园画画。',
    messages: [
      { role: 'target', content: '我今天不想去看展了……想去公园画画🎨' },
      { role: 'target', content: '你会不会生气呀……' }
    ],
    question: '她临时变卦了。你期待了一周的约会要泡汤。怎么回？',
    options: [
      {
        id: 'A',
        text: '啊我票都买好了……不过没关系，你想去公园我们就去公园吧。',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你的失望她全收到了',
        deathReport: '你说没事，但你的语气已经出卖你了。她感觉到的不是"没关系"，是"我在忍"。她最怕这个——她说想做自己，但你让她觉得她做错了。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '行吧你开心就好。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { selfProof: 1, trust: -1 },
        targetReaction: '……你别这样说话嘛……',
        systemComment: '听着就是"我委屈但我憋着"。她不会被你的委屈绑架，但会因为这个想逃——她不想做那个让你不开心的人。'
      },
      {
        id: 'C',
        text: '公园画画？那我也去！我坐旁边看书，保证不吵你📚',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '真的吗？！那我可以画你吗哈哈哈',
        systemComment: '你没觉得她变卦是问题。你直接加入了她——她改了计划，你就跟着她走。她不需要你多完美，需要你跟她一样灵活。'
      }
    ],
    successText: '你没揪着"说好的看展呢"不放。她改了主意，你跟着走了——这种随性她最喜欢。'
  },
  {
    id: 'isfp-5',
    level: 5,
    title: '需要空间',
    scene: '你们最近几乎每天都见面。今天她发消息说需要一个人待几天。',
    messages: [
      { role: 'target', content: '我想一个人待几天……不是你的问题。' },
      { role: 'target', content: '我就是需要一些自己的时间。' }
    ],
    question: '一切都很好，但她突然要"一个人待着"。你怎么回？',
    options: [
      {
        id: 'A',
        text: '好。那你照顾好自己，我一直在。想我了就找我。',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你的等待成了她的压力',
        deathReport: '你说得特别温柔吧？"一直在""想我就找我"——听着多感人啊。但她听到的是——你在等她。她的独处变成了倒计时，她得想着"快点回去不然他会难过"。',
        deathRate: '55%'
      },
      {
        id: 'B',
        text: '好吧。那你也别太久哦，我会想你的。',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { pressure: 1, avoidance: 1 },
        targetReaction: '……嗯。',
        systemComment: '"别太久"——这句话本身就是压力。她听到的不是"我会想你"，是"你快点回来"。独处有了截止日期。'
      },
      {
        id: 'C',
        text: '好。你好好享受独处吧。充好电了找我就行，不着急。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 2, emotionalSafety: 1 },
        targetReaction: '你真的不生气吗？……谢谢你。',
        systemComment: '你没加"别太久"没加"我会想你"——你让她走了，门开着，不问什么时候回来。她要的就是这个。'
      }
    ],
    successText: '你没把独处当拒绝。你让她走，不问她什么时候回——她反而因为这份自在更想回来。'
  },
  {
    id: 'isfp-6',
    level: 6,
    title: '不说需求',
    scene: '她明显不太开心，但问什么都不说。一个人在沙发上刷手机，气氛很闷。',
    messages: [
      { role: 'target', content: '没事。' },
      { role: 'target', content: '你别管我了，就是有点烦。' }
    ],
    question: '她知道为什么不开心，但就是不想说。怎么回？',
    options: [
      {
        id: 'A',
        text: '到底怎么了嘛？跟我说说，我帮你分担呀～',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你把关心变成了追问',
        deathReport: '你真的很想帮她，但她说了"别管我"。你再问就是跟她的边界对着干。她不是不想告诉你——她自己都没理清楚，越问越烦。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '那你先自己待着吧，我出去一下。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1, avoidance: 1 },
        targetReaction: '……（更闷了）',
        systemComment: '你走了。她需要的不是一个人——是你在但别吵。你一走她更觉得算了，反正也没人真的想待着。'
      },
      {
        id: 'C',
        text: '好，那不管了。点个外卖吧，你想吃那家螺蛳粉还是上次的咖喱？',
        outcome: 'survive',
        pattern: 'playful',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……螺蛳粉吧。（嘴角动了一下）',
        systemComment: '你没追着问，也没走。你选了最日常的方式告诉她——我在。她不需要被解决，需要你觉得她烦着也没关系。'
      }
    ],
    successText: '你没逼她说出个所以然，也没逃跑。一碗螺蛳粉比一百句"你怎么了"管用。'
  },
  {
    id: 'isfp-7',
    level: 7,
    title: '回避深聊',
    scene: '你试着聊你们的关系。她一开始还在接话，然后开始玩手机，眼神飘忽。',
    messages: [
      { role: 'target', content: '我们一定要聊这个吗？' },
      { role: 'target', content: '我觉得现在这样就挺好的……干嘛非要定义什么呢？' }
    ],
    question: '你想谈未来，她在逃避。怎么回？',
    options: [
      {
        id: 'A',
        text: '我不是非要一个答案……我就是想知道你是怎么想的。',
        outcome: 'death',
        pattern: 'pressure',
        deathTitle: '你还是问她要了答案',
        deathReport: '你说不要答案，但下一句就是"我想知道你怎么想的"——不还是一样嘛。她说出了不想聊的信号，你没接住。你越认真她越想跑。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '算了，你不想说就不说了。',
        outcome: 'damage',
        pattern: 'surrender',
        effects: { trust: -1, avoidance: 1 },
        targetReaction: '……嗯。（但她感觉到了那堵墙）',
        systemComment: '你的"算了"像一扇关上的门。她不是不想聊——是不知道怎么聊。你放弃了，她也就算了。'
      },
      {
        id: 'C',
        text: '好那不聊了。其实我就是想说跟你在一起挺开心的，没别的意思～',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……我也挺开心的。真的。我就是不会说这些。',
        systemComment: '你没聊关系，你说了你的感受。她就不怕了——感受不是考题，不用答对。'
      }
    ],
    successText: '你没逼她定义关系。你说的是感受不是问题——她怕考试，但不怕感受。'
  },
  {
    id: 'isfp-8',
    level: 8,
    title: '艺术与生活',
    scene: '她画了一幅画，犹豫了很久才发给你看。配了一个"随便画的"的表情。',
    messages: [
      { role: 'target', content: '我随便画的……不好看别笑我😂' },
      { role: 'target', content: '你看了就行不要点评！！' }
    ],
    question: '她把她最脆弱的部分展示给你了。怎么回？',
    options: [
      {
        id: 'A',
        text: '好看！你也太有才了吧！！',
        outcome: 'death',
        pattern: 'logic',
        deathTitle: '你的夸赞太轻了',
        deathReport: '你觉得你夸她了。但她随便一画你就说"太有才"——听着像客套。她给你看的是她的一部分，不是要你打分。你像在哄小孩，她就不想再给你看了。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '这个构图不错诶，颜色也挺搭的。',
        outcome: 'damage',
        pattern: 'savior',
        effects: { oldPatternDetected: 1 },
        targetReaction: '……谢谢。',
        systemComment: '你点评得像美术老师。她给你看的是心情，不是作业。你一评分她就没兴趣了。'
      },
      {
        id: 'C',
        text: '（认真看了很久）……这幅画给我一种说不出来的感觉，有点安静又有点暖。你画的时候在想啥呀？',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 2, emotionalSafety: 1 },
        targetReaction: '你真的看出来了？！我当时其实心情挺复杂的……',
        systemComment: '你没说好看不好看，你说了你的感受。她给你开了她的窗户——你走进去了，没在外面打分。'
      }
    ],
    successText: '你没点评她的画，你感受了它。她觉得自己被看见了，不是被评价了。'
  },
  {
    id: 'isfp-9',
    level: 9,
    title: '忽冷忽热',
    scene: '最近她非常粘人，主动找你，撒娇，说想你。你正开心呢，突然她又冷淡了，消息不回。',
    messages: [
      { role: 'target', content: '（已读不回一整天）' },
      { role: 'target', content: '对不起嘛……我就是突然不想说话了。' }
    ],
    question: '她的温度像过山车。你刚觉得靠近了，又被推开。怎么回？',
    options: [
      {
        id: 'A',
        text: '你这样我有点难过……你是不是不喜欢我了呀？',
        outcome: 'death',
        pattern: 'defense',
        deathTitle: '你把她的状态当成了对你的评价',
        deathReport: '你难过了，很正常。但她不是不喜欢你了——她的社交能量就是有高有低。你一说"你是不是不喜欢我了"——她就得解释一个她自己都控制不了的事情。越解释越累。',
        deathRate: '60%'
      },
      {
        id: 'B',
        text: '你有什么事可以跟我说呀，不用不理我嘛。',
        outcome: 'damage',
        pattern: 'control',
        effects: { pressure: 2 },
        targetReaction: '我说了没事嘛……你越这样说我就越不想说了。',
        systemComment: '你在用"沟通"解决她的"冷淡"。但对她说这不是问题，是自然节奏。你越推她回消息她越不想回。'
      },
      {
        id: 'C',
        text: '不想说话就不说呗。我在这呢，温度刚好，不用你一直热着。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 2, emotionalSafety: 2 },
        addFlags: ['accepted_cycle'],
        targetReaction: '……你真的不嫌我烦吗？',
        systemComment: '你说"温度刚好"——你是唯一一个不给压力的人。其他人要么催她热要么嫌她冷，你说就这样就行。她可以做她自己。'
      }
    ],
    successText: '你没让她升温，也没因为她冷了就走开。你给了一个恒温的地方。'
  },
  {
    id: 'isfp-10',
    level: 10,
    title: '害怕承诺',
    scene: '朋友问你们是什么关系。她沉默了。之后她跟你说不想被定义。',
    messages: [
      { role: 'target', content: '我们这样不是挺好的吗？干嘛非要一个名分呢……' },
      { role: 'target', content: '名分对我来说就像笼子。' }
    ],
    question: '她害怕承诺，像怕笼子一样。你不是不想推进，但你不想逼她。怎么回？',
    options: [
      {
        id: 'A',
        text: '我不是要名分……我就是想知道你心里有没有我。',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '绕了一圈还是要答案',
        deathReport: '你说不要名分，但下一句"你心里有没有我"——其实一样的问题。她不是没有你，是她给不了那种标签化的回答。你越问得温柔，她越觉得自己给不够。',
        deathRate: '55%'
      },
      {
        id: 'B',
        text: '你是不是不够喜欢我所以才不愿意确认？',
        outcome: 'damage',
        pattern: 'attack',
        effects: { selfProof: 2, trust: -2 },
        targetReaction: '……不是这样的……但你这样说我很委屈。',
        systemComment: '你把她的恐惧说成了感情不够。她不是不喜欢你——是太珍惜才怕被绑住。你这一问，她百口莫辩。'
      },
      {
        id: 'C',
        text: '不需要名分。你跟我在一起开不开心？开心就够了呗。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, emotionalSafety: 2 },
        targetReaction: '开心……跟你在一起真的很开心。',
        systemComment: '你把"关系"降到了"感受"——这是她能接受的语言。她活在感觉里不是标签里。你不关她进笼子，她反而想待在你的世界里。'
      }
    ],
    successText: '你放下了名分的执念。她没被关进笼子——她感到了自由的安全感。'
  },
  {
    id: 'isfp-11',
    level: 11,
    title: '真实自我',
    scene: '一个深夜，她突然跟你说了一些她从没跟别人说过的事。她的脆弱，她的不安。',
    messages: [
      { role: 'target', content: '其实我很害怕……害怕有一天你会觉得我不够好。' },
      { role: 'target', content: '我看起来什么都不在乎，其实我在乎得要死。' }
    ],
    question: '她终于卸下了那层"随便"的伪装。怎么回？',
    options: [
      {
        id: 'A',
        text: '你怎么会这么想呀？你特别好，真的。',
        outcome: 'death',
        pattern: 'savior',
        deathTitle: '你把她的话轻轻放下了',
        deathReport: '你说她好，想安慰她。但她好不容易说了最害怕的事——你说"你特别好"等于说她的害怕没必要。她不是要你夸她，是让你接住那句害怕，然后说"我知道，我不走"。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '我也经常觉得自己不够好……',
        outcome: 'damage',
        pattern: 'defense',
        effects: { avoidance: 1 },
        targetReaction: '……嗯。',
        systemComment: '她好不容易打开了自己，你把话题拉到自己身上了。她刚把心掏出来，你一转头说自己的事——她就不会再掏第二次了。'
      },
      {
        id: 'C',
        text: '我听到了。你害怕我会走对不对？我不会走的。不是因为你够好，是因为你是你。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, emotionalSafety: 2 },
        addFlags: ['accepted_real_self'],
        targetReaction: '（眼泪出来了）你别说这种话……我会当真的。',
        systemComment: '你没安慰她"你很好"，也没转移话题。你接住了——"我听到了"，然后给了她一个不加条件的承诺。不是"因为你够好"，是"因为你是你"——这是她能收到的最安全的话。'
      }
    ],
    successText: '你没否定她的恐惧。你接住了她最脆弱的话——没有条件，没有但是。'
  },
  {
    id: 'isfp-12',
    level: 12,
    title: '最终选择',
    scene: '经历了所有的波动和拉扯。她坐在你对面，看着你的眼睛。你知道她有话要说。',
    messages: [
      { role: 'target', content: '跟我在一起很累吧……我不够稳定，不会说好听的，还总需要自己的空间。' },
      { role: 'target', content: '……你为什么还在这里？' }
    ],
    question: '最后一关。她用最真实的样子问你为什么不走。怎么回？',
    options: [
      {
        id: 'A',
        text: '因为跟你在一起我很快乐。你做你自己就好，我会一直陪着你。',
        outcome: 'death',
        pattern: 'savior',
        deathTitle: '太好听了反而不像真的',
        deathReport: '你说得特别好听——但好听得像台词。她刚说自己一堆毛病，你说"没关系你做自己"——她不会信的。她知道真实的自己有多难搞。你承诺得太大了，她不敢信。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '我也不知道……可能习惯了吧。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -2 },
        targetReaction: '……习惯？',
        systemComment: '最差的答案。她要的是"选择"不是"习惯"。"习惯"听起来将就——她最怕自己是别人退而求其次的选项。'
      },
      {
        id: 'C',
        text: '因为你早上赖床会哼哼唧唧，我点的外卖不好吃你会全部吃完不想浪费。你会临时想去画画就不去看展，你回"嗯"的时候其实藏了一百个情绪。别人觉得麻烦的地方——我刚好觉得是你。我不是走不了，我是选了你。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { emotionalSafety: 99, trust: 99 },
        targetReaction: '（紧紧抱住你）……你不要走。',
        systemComment: '【S 级结局：自由的归途】你没说"永远不离开"那种空话。你说了她具体的样子——那些她觉得是毛病的地方，在你这里全是吸引你的理由。你不是在忍受她，你是在选择她。她不需要被拯救，她需要被一个不试图改她的人真正看见。',
        addFlags: ['final_survive']
      }
    ],
    successText: '完美通关。你没说漂亮话。你说的都是她真实的、麻烦的、奇怪的样子——而那刚好是你喜欢的原因。'
  }
];
