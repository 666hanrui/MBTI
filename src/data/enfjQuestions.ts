import type { ChallengeQuestion } from '../types';

export const enfjQuestions: ChallengeQuestion[] = [
  {
    id: 'enfj-1',
    level: 1,
    title: '救世主登场',
    scene: '你和 ENFJ 刚认识没几天。有天你随口说了句最近加班好多，结果 TA 直接来了一串消息。',
    messages: [
      { role: 'target', content: '诶你最近是不是很累啊？我帮你整理了个减压方案！' },
      { role: 'target', content: '还有你那个项目，我刚好认识一个人能帮上忙。要不要我帮你约他聊聊？' }
    ],
    question: 'TA 已经开始为你的人生操心了。怎么回？',
    options: [
      {
        id: 'A',
        text: '你也太好了吧……谢谢你这么帮我，我真的好感动。那周末我请你吃好吃的！',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你打开了闸门',
        deathReport: '说真的，你太配合了。我一说要帮你就让我帮——那你肯定需要我呗。好，从今天开始你的事就是我的事。但你知道吗，这样真的好累啊。',
        deathRate: '30%'
      },
      {
        id: 'B',
        text: '哈哈你太热心了，不过我的事我自己能处理啦。谢谢你啊。',
        outcome: 'damage',
        pattern: 'boundary',
        effects: { trust: -1 },
        targetReaction: '哦……好。那你需要的话找我。',
        systemComment: '你拒得太快了。他本来想帮你的，你说不用他也不知道该怎么办了。他会退，但心里会有点失落。'
      },
      {
        id: 'C',
        text: '哇你真的好用心……不过我现在其实还好，就是想吐槽一下。你先别急着帮我想办法，听我倒倒苦水就行。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '好好好你说！我听着！',
        systemComment: '你没让他帮你搞定一切，但也没把他推开。你说"先听我说就行"——他有用，但不是救世主。他其实松了口气。'
      }
    ],
    successText: '你没让 ENFJ 直接进入拯救模式。你让他先听你说，而不是先帮你搞定。'
  },
  {
    id: 'enfj-2',
    level: 2,
    title: '馄饨攻势',
    scene: '在一起之后有一天你加班到十二点，下楼看到 ENFJ 拎着馄饨站在风里。',
    messages: [
      { role: 'target', content: '总算出来了！给你带了夜宵，你最爱吃的那家馄饨！' },
      { role: 'target', content: '等一会儿没事，我怕你饿着。以后你加班我都来接你！' }
    ],
    question: 'TA 在用自己的方式爱你。但你知道这样下去不行。怎么回？',
    options: [
      {
        id: 'A',
        text: '你太好了吧！那你以后每天都来接我好不好？我想天天加班都有你陪！',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你让他燃烧自己',
        deathReport: '你说让我天天来。好，那我真的会天天来。然后我越来越累你越来越习惯。有一天我来不了了你还会怪我。你知道我多希望你说"你不用来，但我想你"吗。',
        deathRate: '35%'
      },
      {
        id: 'B',
        text: '太感动了！馄饨好香！不过你不用特意来接我，我打个车就回去了。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '不麻烦……你是不是嫌我太粘人了？',
        systemComment: '你说感动但又在拒绝。他感觉到了——你的话和表情不太一致。他会开始想是不是自己太主动了。'
      },
      {
        id: 'C',
        text: '馄饨好香！辛苦了！但我们约好——你要来之前先跟我说一声，别自己傻等。你对我好我很开心，但你也要对自己好才行。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '好。那你也别太拼了，我会担心你。',
        systemComment: '你没拒绝他的好——你吃了馄饨还说了谢谢。但你约了规矩——"先说一声"。你又关心了他——"你也要对自己好"。他要的是：你接受他的好，但你也在乎他这个人。'
      }
    ],
    successText: '你没拒绝 TA 的付出也没全盘接受。你让 TA 知道——我要你的好，但我也要你好好的。'
  },
  {
    id: 'enfj-3',
    level: 3,
    title: '你的手机在我手里',
    scene: 'ENFJ 越来越想参与你的生活。某天你发现 TA 拿你手机帮你回了工作消息。',
    messages: [
      { role: 'target', content: '我看你手机一直在响就帮你回了！那个同事说话好烦，我帮你怼回去了哈哈哈。' },
      { role: 'target', content: '你不会生气吧？我就是看不惯他们欺负你嘛。' }
    ],
    question: 'TA 越界了。但 TA 是出于爱，你说什么都像不领情。',
    options: [
      {
        id: 'A',
        text: '没事没事！谢谢你帮我出头！有你在我真的好安心。',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你在忍',
        deathReport: '你说没事，但你的表情明明有事。你嘴上说谢谢心里在忍。你忍了，下次我还会这么做，然后你会越来越烦我，最后爆发说"你从来不尊重我"。你现在为什么不说呢？',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '你怎么可以看我手机？这是我的隐私啊。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '……对不起。我只是想帮你。我不知道你这么在意。',
        systemComment: '你说得没错但语气太冲了。他会很愧疚——他只想帮忙结果被你凶了。他会道歉但心里也受伤了。'
      },
      {
        id: 'C',
        text: '我知道你是为我好。但手机是我的隐私，工作的事让我自己来好不好？你想护着我的心意我收到了，但下次换个别的方式嘛。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '……好。对不起，我确实越界了。',
        systemComment: '你先肯定了他——"我知道你是为我好"，所以他不会防御。然后你说了不行。最后你给了台阶——"换个方式嘛"。他没被拒绝，只是被重新引导了。'
      }
    ],
    successText: '你没假装没事也没发火。你肯定了他的好意但画了底线——这是和 ENFJ 相处最重要的技能。'
  },
  {
    id: 'enfj-4',
    level: 4,
    title: '牺牲换爱',
    scene: 'ENFJ 为了陪你，推掉了和朋友的旅行。你从他朋友那儿听说的。',
    messages: [
      { role: 'target', content: '周末那个旅行我后来没去。' },
      { role: 'target', content: '没事啦他们去就行了。你最近心情不好，我不放心你一个人。陪你比较重要嘛。' }
    ],
    question: 'TA 用牺牲来换你的爱。你怎么接？',
    options: [
      {
        id: 'A',
        text: '你也太好了……那周末我们一起做点开心的事吧！我请你吃好的！',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你收下了这份牺牲',
        deathReport: '你没拒绝我的牺牲。你接受了。那我下次会牺牲更多来证明我爱你。直到有一天我受不了了，然后觉得你自私——但明明是我自己先开始的。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '你不应该为了我取消旅行的。你这样让我很有压力。',
        outcome: 'damage',
        pattern: 'pressure',
        effects: { pressure: 2, trust: -1 },
        targetReaction: '没有给你压力……我是自愿的。你不要有负担。',
        systemComment: '你说"有压力"——他本来想让你开心的，结果变成让你难受了。他嘴上说自愿，心里其实也在挣扎。'
      },
      {
        id: 'C',
        text: '我听说你推了旅行。说实话我不希望你为了我牺牲自己的安排。你想去就去，我在这儿等你回来。你不需要用"不陪我就是不够爱我"来证明什么。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……你真的不会走吗？',
        systemComment: '你没收下牺牲也没指责他。你点破了他的想法——"不用牺牲来证明爱"。你说"想去就去，我等你"——你给了他自由，同时保证了自己不会消失。'
      }
    ],
    successText: '你没接受牺牲也没批判他。你让他知道——你不需要牺牲什么，我也一样爱你。'
  },
  {
    id: 'enfj-5',
    level: 5,
    title: '未读消息99+',
    scene: '你和朋友出去聚会，没及时回消息。晚上回来看到 ENFJ 发了好几条。',
    messages: [
      { role: 'target', content: '你今晚玩得开心吗？' },
      { role: 'target', content: '我其实一直在等你消息……你说到了会跟我说的。' },
      { role: 'target', content: '不过没事啦，你开心就好。我就是太在乎你了。' }
    ],
    question: 'TA 在用"在乎"包装失望。怎么接？',
    options: [
      {
        id: 'A',
        text: '对不起对不起，我玩太嗨忘了。你别生气嘛，我最在乎你了！',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你在哄 TA',
        deathReport: '你说"别生气"——但我为什么难过你想过吗？你在哄我但你没有真的懂我在不安什么。下次我还是会这样，因为你只是在灭火不是在修房子。',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '我到了就会回你的啊。你别老是这么紧张，我也有自己的生活。',
        outcome: 'damage',
        pattern: 'defense',
        effects: { pressure: 1, trust: -1 },
        targetReaction: '好，我知道了。以后不会等你了。',
        systemComment: '你在防御——你说他"太紧张"。他听到的是"你在乎我是在烦我"。他会退，但不是释怀，是憋着。'
      },
      {
        id: 'C',
        text: '是我忘了跟你说，我的问题。但我看你发的这些，你不是在怪我——你是在担心我，对吧？',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……我就是怕你出什么事。你下次跟我说一声好不好？',
        systemComment: '你先认了错——没防御。然后你帮他说出了真实情绪——不是生气，是担心。你给了他一个台阶让他说出真正想要的。他要的不是道歉，是你懂他在怕什么。'
      }
    ],
    successText: '你没哄他也没防御。你读出了他失望底下是担心，然后帮他说了出来。'
  },
  {
    id: 'enfj-6',
    level: 6,
    title: '我都是为你好',
    scene: 'ENFJ 帮你报了健身房，还给你制定了一份作息表。但你从来没说过想要这些。',
    messages: [
      { role: 'target', content: '我从下周开始陪你去健身！课程我都看好了，这个教练特别适合你。' },
      { role: 'target', content: '还有你那个作息太不健康了，我帮你排了个新的时间表。' }
    ],
    question: '经典名场面——"我都是为你好"。怎么破？',
    options: [
      {
        id: 'A',
        text: '好的好的，听你的！有人管着也挺好。',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你全盘接受了',
        deathReport: '你全盘接受了。但你根本没打算去，对吧？我感觉得到你在敷衍我。你不说我不停地安排，你越来越敷衍我越来越累。最后两个人都难受。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '我没说要健身啊。你下次能不能先问问我？',
        outcome: 'damage',
        pattern: 'defense',
        effects: { pressure: 1, trust: -1 },
        targetReaction: '……我是为你好。你每天熬夜，我看不下去。',
        systemComment: '你说得对但语气太硬了。他会受伤——他用心做的事被你直接否了。然后他会搬出"为你好"来合理化，对话就变成死循环了。'
      },
      {
        id: 'C',
        text: '我知道你是为我好。但下次这种关于我的决定，我们先商量一下好不好？比如健身——你问我的话，我会说我现在还不想去。不过你想去的话我可以陪你，但我暂时没这个计划。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { trust: 1, boundaryRespect: 1 },
        targetReaction: '……好。我下次先问你。我就是太想让你变好了。',
        systemComment: '你先肯定了他——"知道你是为我好"。然后你说了你的想法。最后你给了替代方案——"我可以陪你"。你没否定他的关心，只是加了个"先问我"的流程。'
      }
    ],
    successText: '你没接受也没对抗。你把"我都是为你好"变成了"我们商量着来"。'
  },
  {
    id: 'enfj-7',
    level: 7,
    title: '你根本不在乎我',
    scene: '最近 ENFJ 一直在为你付出，但你没给出 TA 期待的回应。某天 TA 终于爆发了。',
    messages: [
      { role: 'target', content: '我感觉我在你心里根本不重要。' },
      { role: 'target', content: '我为你做了那么多，你有真的在意过吗？' },
      { role: 'target', content: '还是说你觉得这些都是理所当然的？' }
    ],
    question: 'TA 在清算付出。其实 TA 在说"我需要你看到我"。',
    options: [
      {
        id: 'A',
        text: '我当然在意你啊！你对我有多好我心里都记着。你不要这样想。',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你在辩解',
        deathReport: '你说你在意。但如果你真在意，为什么我不说你就从来不提？你的话像是在安慰我，不是在回答我。比不被在意更难受的是被敷衍——你知道吗。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '你做的那些我没让你做啊。你每次都自作主张，然后怪我不领情。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -2, pressure: 1 },
        targetReaction: '好，是我自作多情。以后不做了。',
        systemComment: '你说的是事实但在他情绪上头的时候说就是在翻旧账。他会被你刺伤——他真的会停下来。但你也失去了他的信任。'
      },
      {
        id: 'C',
        text: '……你说得对。我确实没有让你感觉到我在意你。你做了很多，我有时候不知道该怎么回应，就干脆没回应。不是我不在乎，是我还没学会怎么接住你那么大的爱。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, emotionalSafety: 1 },
        targetReaction: '……你真的有在意吗？',
        systemComment: '你没辩解也没翻旧账。你承认了他的感受——"你说得对"。你说了原因——不是冷，是还没学会。他要的不是"你错了"，是"我终于被你看到了"。'
      }
    ],
    successText: '你没辩解也没回击。你承认了他的感受，也坦诚了你的局限。他要的就是这个——被看见。'
  },
  {
    id: 'enfj-8',
    level: 8,
    title: '我怕失去你',
    scene: '你和一个异性同事吃了顿饭，纯粹是工作。ENFJ 知道了之后反应很大。',
    messages: [
      { role: 'target', content: '你们两个人单独吃饭？' },
      { role: 'target', content: '你怎么没告诉我？' },
      { role: 'target', content: '我不是不信任你……我是怕别人对你有想法。而且你从来不跟我说这些，我感觉你的世界我进不去。' }
    ],
    question: 'TA 的控制欲冒出来了。但背后的逻辑是"我害怕失去你"。',
    options: [
      {
        id: 'A',
        text: '就是普通同事吃个饭，你想多了。以后我什么事都跟你汇报行了吧？',
        outcome: 'death',
        pattern: 'surrender',
        deathTitle: '你在哄 TA 但也在讽刺 TA',
        deathReport: '你说"汇报"——你在讽刺我，你以为我听不出来吗？我要的不是汇报，是你主动让我进你的生活。你讽刺我让我觉得自己很小气。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '就是工作关系。你不要这么敏感，我不可能只跟你一个人吃饭吧？',
        outcome: 'damage',
        pattern: 'defense',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '我敏感？好，你随便吧。',
        systemComment: '你给他贴了"敏感"的标签。他双重受伤——你否定他的情绪，还让他为这个情绪感到羞耻。'
      },
      {
        id: 'C',
        text: '就是一个普通的工作饭局，不是瞒你，是我没觉得这事值得特意说。但我现在知道了，你会想知道。下次我提前跟你说一声。你担心的其实不是这顿饭——你怕的是你需要我的时候我没找你，对不对？',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……你就不能让我进你的世界吗？',
        systemComment: '你没防御也没道歉。你解释了"为什么没说"——不是瞒，是没意识到。然后你读出了他真正的恐惧——"你怕我不需要你"。这是 ENFJ 的终极恐惧。'
      }
    ],
    successText: '你没贴标签也没妥协。你读出了他控制背后真正的恐惧——"我怕不被你需要"。'
  },
  {
    id: 'enfj-9',
    level: 9,
    title: '生日惊喜',
    scene: 'ENFJ 为你的生日策划了一场惊喜派对。但你其实不喜欢这种场合。你的冷淡让 TA 崩溃了。',
    messages: [
      { role: 'target', content: '我准备了整整一个月……' },
      { role: 'target', content: '你朋友我都一个个偷偷联系了，场地我提前踩了三次点。' },
      { role: 'target', content: '你就这个反应？' }
    ],
    question: 'TA 在自我感动里出不来。你怎么说才能不伤 TA 又不委屈自己？',
    options: [
      {
        id: 'A',
        text: '对不起对不起，我很感动！真的很惊喜！是我太不会表达了。',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你在假笑',
        deathReport: '你的眼睛没有在笑。你在哄我——我看得出来。你越说你喜欢，我越觉得你在可怜我。这比直接说不喜欢更让我难受。',
        deathRate: '55%'
      },
      {
        id: 'B',
        text: '你的心意我收到了。但我不喜欢惊喜派对，这个我跟你说过的。你花这么多心思之前有没有想过我到底喜不喜欢？',
        outcome: 'damage',
        pattern: 'logic',
        effects: { trust: -2, pressure: 1 },
        targetReaction: '你是在怪我吗？我花了一个月……',
        systemComment: '你太理性了。虽然你说的是事实，但他现在情绪上来了，你的道理只会让他觉得自己的爱被审判了。'
      },
      {
        id: 'C',
        text: '你走过来，拉住 TA 的手。我看着你说：这个派对花了很多心思，我看得出来。你为我做的这些我都看到了。但你也看看我——我现在有点不知所措。我不习惯这种场面，不是因为你做得不好。我们先出去走走好不好？',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1, emotionalSafety: 1 },
        targetReaction: '……你不喜欢为什么不早说？',
        systemComment: '你先肯定了他的心血——"我看得出来"。你没说谎说喜欢——你说了真实感受"不习惯"而不是"不喜欢"。你还拉了他的手——身体比语言更有力量。你把他从"惊喜派对"带到了"我们一起走走"——这是新的连接。'
      }
    ],
    successText: '你没说谎也没批判。你肯定了他的心血，但也坦诚了你的不适。你把"他为你做的"变成了"你们一起做的"。'
  },
  {
    id: 'enfj-10',
    level: 10,
    title: '我为你做了那么多',
    scene: '你们吵架了。你提出了分手。ENFJ 坐在你们一起买的那张沙发上，声音在抖。',
    messages: [
      { role: 'target', content: '我为你做了那么多……' },
      { role: 'target', content: '我为了你改了那么多，你呢？' },
      { role: 'target', content: '你说分就分？我付出的那些时间、感情，算什么？' }
    ],
    question: 'TA 在用付出来绑架你。但你确实亏欠 TA 吗？',
    options: [
      {
        id: 'A',
        text: '我知道你付出了很多……是我不好。你别难过了。',
        outcome: 'death',
        pattern: 'attack',
        deathTitle: '你否定了 TA 的全部',
        deathReport: '你说"是我不好"。你在认错但你没真的觉得你错了。你只是想让我别哭了。下次我还会用付出来要挟你，因为你每次都会心软。但这解决不了任何问题。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '我知道你付出了很多。但我真的很累了。你先冷静一下好不好？',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1, pressure: 1 },
        targetReaction: '你每次都让我冷静。我不是不冷静，我是太爱你了。',
        systemComment: '你说"冷静"——对他来说等于"我不想面对你的情绪"。你在回避真正的对话。他会觉得你在敷衍他的感情。'
      },
      {
        id: 'C',
        text: '你做了很多，我都知道。我没有不感激。但感情不能靠算账来维系。如果留下来的理由只是因为你付出过，那我们都会越来越痛苦。我不是否定你的付出——我是说我们不应该用付出来绑架彼此。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1 },
        targetReaction: '那你告诉我，我该怎么做……',
        systemComment: '你承认了他的付出——没否定他的爱。但你把"付出"和"感情"分开了。你说"不能靠算账"——你点破了他的想法但不伤他这个人。'
      }
    ],
    successText: '你没否定他的付出也没被他的付出绑架。你把爱和账单分开了。'
  },
  {
    id: 'enfj-11',
    level: 11,
    title: '你好像没有我也过得很好',
    scene: '你们现在处于冷战期。ENFJ 每天都在翻你的社交动态。某天你收到了一条很长的消息。',
    messages: [
      { role: 'target', content: '我看到你昨天和朋友出去玩了。' },
      { role: 'target', content: '你好像没有我也过得很好。' },
      { role: 'target', content: '而我每天都在想你……你不觉得不公平吗？' }
    ],
    question: 'TA 在说"没有我你怎么可以开心"。这是最危险的一关。',
    options: [
      {
        id: 'A',
        text: '我没有你也过得不好……我只是不敢表现出来。我每天都在想你。',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你在安慰 TA',
        deathReport: '你说你也在想我。但那你为什么不找我？你说"不敢表现"——你在说我的爱让你不敢做自己。那我以后也不会找你了，我不想让你为难。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '我没有你也过得很好——这不是很正常吗？我不能因为分手就不活了吧。',
        outcome: 'damage',
        pattern: 'attack',
        effects: { trust: -2, pressure: 1 },
        targetReaction: '……所以你早就放下了。',
        systemComment: '你说了事实但带着刺。他听到的是"你根本不在乎"。你说得越理性，他越觉得你冷血。'
      },
      {
        id: 'C',
        text: '我难过，但我没有表现出来。我不是没有你也开心，我是不知道该以什么身份来难过。你在想我的时候，我也在想你。但如果你觉得我开心就是不公平——那我们之间的问题更大了。你是希望我不开心来证明我在乎你吗？',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 2, emotionalSafety: 1 },
        targetReaction: '……我没有要你不开心。我只是怕你不需要我了。',
        systemComment: '你坦诚了你的情绪——"我难过，我也没放下"。你让他知道你不是不在乎。但你反问了一句——"你要的是我不开心来证明吗？"——你让他看到自己的问题。他会停下来想这句话。'
      }
    ],
    successText: '你没否认你的在乎，也没为他的难受负责。你让他看到了他的爱在变成一种要挟。'
  },
  {
    id: 'enfj-12',
    level: 12,
    title: '最终选择',
    scene: '经历了所有这一切。你们坐在那个初识的咖啡馆。ENFJ 看着你，眼睛里有泪光。',
    messages: [
      { role: 'target', content: '我想问你一个问题。' },
      { role: 'target', content: '我要怎样爱你才是对的？' },
      { role: 'target', content: '我的爱是不是太大了，大到让人想逃？' }
    ],
    question: 'TA 终于问了那个问题。你的回答决定一切。',
    options: [
      {
        id: 'A',
        text: '你的爱没有错。是我不够好，配不上你那么大的爱。',
        outcome: 'death',
        pattern: 'self_proof',
        deathTitle: '你让 TA 的爱变成了负担',
        deathReport: '你说你配不上。你在自贬，但自贬的潜台词是"你走吧"。你宁愿说自己不够好也不愿意接住我的爱。这比拒绝更伤人——你在可怜我。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '你不需要改变。我就喜欢这样的你。',
        outcome: 'damage',
        pattern: 'surrender',
        effects: { trust: -1 },
        targetReaction: '你在哄我。上次我说我付出太多的时候，你可不是这么说的。',
        systemComment: '你在说好话但不一致。他会立刻察觉到你在安慰他而不是说真话。不诚实的温柔比拒绝更让他不安。'
      },
      {
        id: 'C',
        text: '你的爱没有太大。它很好。但你把它给出去的时候，忘了留一份给自己。你爱我的方式让你自己很累，也让我有压力。我要的不是你爱我少一点——我是要你也爱你自己多一点。你不需要用燃烧自己的方式来证明你在乎我。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { emotionalSafety: 99, trust: 99 },
        targetReaction: '……那你还愿意让我学着去爱吗？',
        systemComment: '你没说他的爱是错的。你说"它很好"。你说"也留一份给自己"——你是在邀请他爱自己。你说"不需要用燃烧来证明"——这是他一辈子的课题。你接住了他的爱，然后让他看到自己的好不止是"付出"。'
      }
    ],
    successText: '完美通关。你没拒绝他的爱也没全盘接受他的燃烧。你告诉他——你的爱很好，但你也很好，不需要用爱到没有自己来证明。'
  }
];
