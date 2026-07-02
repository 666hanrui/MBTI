import type { ChallengeQuestion, PersonalityType } from '../types';

export const challengeMap: Record<PersonalityType, ChallengeQuestion[]> = {
  INFJ: [
    {
      id: 'infj-1',
      level: 1,
      title: 'TA 说没事',
      scene: '你们刚刚发生了一次不大不小的争执，TA 突然变得很安静。',
      messages: [
        { role: 'target', content: '没事。' },
        { role: 'target', content: '你不用解释。' }
      ],
      question: '你会怎么回？',
      options: [
        { id: 'A', text: '你是不是又在冷暴力？', isCorrect: false, deathTitle: '情绪逼供', deathReport: '你以为你在争取回应，其实你是在逼 TA 立刻交卷。TA 的沉默不是考验你，是已经没有力气继续解释。', deathRate: '31%' },
        { id: 'B', text: '我真的不是那个意思，你听我解释。', isCorrect: false, deathTitle: '解释成瘾', deathReport: '你以为解释能修复关系，但 TA 听见的是：你又把重点放回了你自己身上。TA 要的不是说明书，是被接住的感受。', deathRate: '42%' },
        { id: 'C', text: '我知道你现在不想聊，我先不逼你回应，但我会认真想这件事。', isCorrect: true },
        { id: 'D', text: '行，那你冷静吧。', isCorrect: false, deathTitle: '冷处理反噬', deathReport: '你以为你把空间还给了 TA，但你的语气更像撤退和惩罚。TA 不是需要你消失，是需要你别再制造压力。', deathRate: '19%' }
      ],
      successText: '你没有急着证明自己，也没有把 TA 的沉默当成攻击。你暂时活过了第一关。'
    },
    {
      id: 'infj-2',
      level: 2,
      title: 'TA 开始讲感受',
      scene: 'TA 终于愿意说一点真实感受，但语气很轻。',
      messages: [
        { role: 'target', content: '其实我那天真的有点难过。' }
      ],
      question: '这时你最应该避免什么？',
      options: [
        { id: 'A', text: '立刻说“我也很难过啊”。', isCorrect: false, deathTitle: '感受抢答', deathReport: 'TA 刚把门开了一条缝，你就把自己的委屈塞了进去。你不是没感受，你是太急着让 TA 看见你。', deathRate: '36%' },
        { id: 'B', text: '先复述 TA 的感受，再承认自己当时没有接住。', isCorrect: true },
        { id: 'C', text: '问 TA 为什么当时不直接说。', isCorrect: false, deathTitle: '二次审问', deathReport: '你以为你在了解原因，其实 TA 听见的是：连表达晚了都要被你追责。', deathRate: '28%' },
        { id: 'D', text: '赶紧承诺以后绝对不会了。', isCorrect: false, deathTitle: '空头支票', deathReport: '你急着交保证书，但 TA 已经听过很多次“以后不会了”。没有具体改变的承诺，只会触发旧档案。', deathRate: '22%' }
      ],
      successText: '你没有抢走 TA 的叙事权。系统提示：旧模式暂未触发。'
    },
    {
      id: 'infj-3',
      level: 3,
      title: 'TA 说想一个人待会儿',
      scene: '对话刚有一点缓和，TA 突然提出想一个人待一会儿。',
      messages: [
        { role: 'target', content: '我想自己待一会儿。不是不理你。' }
      ],
      question: '你怎么处理这个空间？',
      options: [
        { id: 'A', text: '马上说“那你到底还爱不爱我”。', isCorrect: false, deathTitle: '安全感勒索', deathReport: '你把 TA 的休息请求翻译成关系审判。TA 要的是喘气，你递过去的是一张考卷。', deathRate: '41%' },
        { id: 'B', text: '说“好，我晚点再找你”，然后真的暂停轰炸。', isCorrect: true },
        { id: 'C', text: '表面说好，十分钟后发一大段小作文。', isCorrect: false, deathTitle: '伪尊重', deathReport: '你尊重的是台词，不是边界。TA 说想安静，你却把安静变成了倒计时。', deathRate: '33%' },
        { id: 'D', text: '直接也消失三天，让 TA 着急。', isCorrect: false, deathTitle: '惩罚性撤退', deathReport: '你把空间变成冷战筹码。INFJ 最怕的不是距离，是距离背后的惩罚感。', deathRate: '18%' }
      ],
      successText: '你给了空间，也没有把空间变成惩罚。你活过了第三关。'
    },
    {
      id: 'infj-4',
      level: 4,
      title: 'TA 提到旧事',
      scene: 'TA 又提起一件你以为早就过去的小事。',
      messages: [
        { role: 'target', content: '其实那件事我到现在还会想起来。' }
      ],
      question: '你的第一反应是什么？',
      options: [
        { id: 'A', text: '说“怎么又翻旧账”。', isCorrect: false, deathTitle: '旧账羞辱', deathReport: '你以为 TA 在翻旧账，其实 TA 在指出没有被修复的伤口。你嫌 TA 记得太久，TA 只会确认你从来没懂。', deathRate: '44%' },
        { id: 'B', text: '问清楚这件事现在还影响 TA 的地方，并承认它没有真正过去。', isCorrect: true },
        { id: 'C', text: '说“那我还能怎么办”。', isCorrect: false, deathTitle: '无力感甩锅', deathReport: '你把修复问题变成 TA 在为难你。TA 还没开始讲，你已经把自己放到受害者位置。', deathRate: '27%' },
        { id: 'D', text: '马上转移话题讲开心的事。', isCorrect: false, deathTitle: '轻飘飘跳过', deathReport: '你试图把空气变轻，但 TA 感受到的是：沉重的东西又一次没人愿意接。', deathRate: '21%' }
      ],
      successText: '你没有把旧伤当成旧账。INFJ 副本通关条件已接近达成。'
    }
  ],
  INTJ: [
    {
      id: 'intj-1',
      level: 1,
      title: 'TA 说先到这吧',
      scene: 'INTJ 已经明显降低联系频率，你试探性问了关系状态。',
      messages: [{ role: 'target', content: '先到这吧。我觉得继续这样没有意义。' }],
      question: '你第一句怎么回？',
      options: [
        { id: 'A', text: '你怎么可以这么冷血？', isCorrect: false, deathTitle: '情绪攻击无效', deathReport: '你试图用情绪突破防火墙，但 INTJ 只会把它标记成高风险输入。权限已驳回。', deathRate: '39%' },
        { id: 'B', text: '我明白你现在的判断。能不能给我一次复盘问题、提交改变方案的机会？', isCorrect: true },
        { id: 'C', text: '我离不开你，求你别这样。', isCorrect: false, deathTitle: '依赖警报', deathReport: '你以为示弱能换回心软，TA 看到的是未来更高的情绪成本。', deathRate: '32%' },
        { id: 'D', text: '行，那就别联系了。', isCorrect: false, deathTitle: '战略自爆', deathReport: '你想保住面子，但系统判定：你没有解决问题，只是退出了任务。', deathRate: '18%' }
      ],
      successText: '你没有求情，也没有攻击，而是把问题转成可评估方案。防火墙出现微弱响应。'
    },
    {
      id: 'intj-2',
      level: 2,
      title: 'TA 要具体改变',
      scene: 'TA 没有拒绝你，但要求你说清楚到底会变什么。',
      messages: [{ role: 'target', content: '你说会改，具体改什么？怎么证明？' }],
      question: '哪个回答更可能活下来？',
      options: [
        { id: 'A', text: '我真的很爱你，这还不够吗？', isCorrect: false, deathTitle: '情绪证据不足', deathReport: '爱不是方案，感动不是交付。INTJ 要看的不是热度，是稳定可验证的变化。', deathRate: '35%' },
        { id: 'B', text: '我会列三件具体问题、对应行动和复盘时间，不要求你马上相信。', isCorrect: true },
        { id: 'C', text: '你要是还在乎我，就应该给机会。', isCorrect: false, deathTitle: '机会勒索', deathReport: '你把机会包装成 TA 的义务。INTJ 最讨厌被情绪绑架成责任人。', deathRate: '29%' },
        { id: 'D', text: '以后你说什么我都听。', isCorrect: false, deathTitle: '失控承诺', deathReport: '你交出的不是改变方案，是没有边界的临时投降。系统判定不可持续。', deathRate: '24%' }
      ],
      successText: '行动、证据、时间点。INTJ 系统暂时允许你继续提交。'
    },
    {
      id: 'intj-3',
      level: 3,
      title: 'TA 开始挑漏洞',
      scene: 'TA 对你的方案开始逐条质疑。',
      messages: [{ role: 'target', content: '这个方案的问题是，你以前也说过类似的话。' }],
      question: '你怎么接？',
      options: [
        { id: 'A', text: '你能不能别这么否定我？', isCorrect: false, deathTitle: '把质疑当否定', deathReport: 'TA 在审查漏洞，你却把审查理解成攻击。对 INTJ 来说，这说明你仍然不能处理问题。', deathRate: '37%' },
        { id: 'B', text: '这个质疑成立，所以这次我会加一个可检查节点，不让它只停在口头。', isCorrect: true },
        { id: 'C', text: '那你到底想我怎样？', isCorrect: false, deathTitle: '责任反抛', deathReport: '你把自己的修复任务重新丢给 TA。系统提示：执行人身份丢失。', deathRate: '26%' },
        { id: 'D', text: '你就是不想给机会。', isCorrect: false, deathTitle: '动机审判', deathReport: '你没有回应漏洞，而是审判 TA 的动机。防火墙升级。', deathRate: '22%' }
      ],
      successText: '你接受了漏洞，不急着为自己辩护。INTJ 防火墙短暂降级。'
    },
    {
      id: 'intj-4',
      level: 4,
      title: '最后一次评估',
      scene: 'TA 没有明显回头，但也没有直接拒绝。',
      messages: [{ role: 'target', content: '我需要时间观察，不想现在给答案。' }],
      question: '最后一步怎么做？',
      options: [
        { id: 'A', text: '要求 TA 现在给明确关系身份。', isCorrect: false, deathTitle: '强制结算', deathReport: '你把观察期变成结算日。INTJ 还在评估，你已经开始催交结果。', deathRate: '34%' },
        { id: 'B', text: '接受观察期，按计划行动，不把每一步都拿去索要反馈。', isCorrect: true },
        { id: 'C', text: '每天汇报自己多努力。', isCorrect: false, deathTitle: '刷屏式交付', deathReport: '你把改变变成求夸系统。TA 要的是稳定结果，不是每日打卡求认证。', deathRate: '31%' },
        { id: 'D', text: '开始冷淡，测试 TA 会不会主动。', isCorrect: false, deathTitle: '博弈污染', deathReport: '你刚提交方案，就开始博弈。系统判定：可靠性不足。', deathRate: '25%' }
      ],
      successText: '你通过了最后一次评估。防火墙未完全关闭，但你获得了继续观察权限。'
    }
  ],
  INFP: [
    {
      id: 'infp-1',
      level: 1,
      title: 'TA 说感觉变了',
      scene: 'INFP 没有激烈争吵，只是轻轻说了一句很重的话。',
      messages: [{ role: 'target', content: '我觉得我们好像回不到以前了。' }],
      question: '你会怎么回？',
      options: [
        { id: 'A', text: '你别想太多，我们还和以前一样。', isCorrect: false, deathTitle: '否认坍塌', deathReport: 'TA 的旧梦已经裂了，你却让 TA 假装没看见裂缝。INFP 最怕自己的感受被轻轻抹掉。', deathRate: '40%' },
        { id: 'B', text: '我知道有些东西确实变了，我不想逼你装作没事。', isCorrect: true },
        { id: 'C', text: '那你是不是不爱了？', isCorrect: false, deathTitle: '把伤口逼成答案', deathReport: 'TA 在描述失落，你却逼 TA 立刻给关系判刑。', deathRate: '30%' },
        { id: 'D', text: '我都道歉了，你还要怎样？', isCorrect: false, deathTitle: '道歉索赔', deathReport: '你把道歉当成付款凭证，要求 TA 立刻恢复原状。旧梦不是按钮，按了不会亮。', deathRate: '24%' }
      ],
      successText: '你承认变化，而不是强迫 TA 回到旧滤镜里。'
    },
    {
      id: 'infp-2',
      level: 2,
      title: 'TA 开始怀疑意义',
      scene: 'TA 说的不是具体矛盾，而是关系的意义感。',
      messages: [{ role: 'target', content: '我不知道坚持还有什么意义。' }],
      question: '哪个回应更像修复旧梦？',
      options: [
        { id: 'A', text: '意义不意义的，现实点吧。', isCorrect: false, deathTitle: '现实铁锤', deathReport: '你一锤子砸掉了 TA 最在意的东西。INFP 不是不懂现实，是不想只剩现实。', deathRate: '33%' },
        { id: 'B', text: '那我们一起把“为什么继续”重新找出来，不用急着假装答案已经有了。', isCorrect: true },
        { id: 'C', text: '你就是太矫情了。', isCorrect: false, deathTitle: '灵魂踩踏', deathReport: '系统提示：你踩到的不是情绪，是 TA 的内核。副本已崩塌。', deathRate: '45%' },
        { id: 'D', text: '我给你买东西，你别难过了。', isCorrect: false, deathTitle: '礼物遮盖', deathReport: '你递出补偿，但 TA 要的是意义被认真对待。礼物盖不住旧梦的裂纹。', deathRate: '17%' }
      ],
      successText: '你没有嘲笑 TA 的意义感。旧梦开始出现修复点。'
    },
    {
      id: 'infp-3',
      level: 3,
      title: 'TA 翻出曾经的你',
      scene: 'TA 提到你以前不是这样的。',
      messages: [{ role: 'target', content: '以前的你不会这样对我。' }],
      question: '你如何避免死亡？',
      options: [
        { id: 'A', text: '人都会变，你也别活在过去。', isCorrect: false, deathTitle: '回忆驱逐', deathReport: '你把 TA 珍惜过的回忆赶出房间。TA 不是活在过去，是在哀悼那个相信过你的自己。', deathRate: '38%' },
        { id: 'B', text: '你怀念的那部分我，我也不想弄丢。可以从一件具体小事开始找回来。', isCorrect: true },
        { id: 'C', text: '那你去找以前的我啊。', isCorrect: false, deathTitle: '自尊反刺', deathReport: 'TA 递来的是怀念，你回过去的是刺。INFP 副本直接进入坏结局。', deathRate: '29%' },
        { id: 'D', text: '别说以前了，往前看。', isCorrect: false, deathTitle: '强行翻篇', deathReport: '你急着往前，是因为你不想看见后面留下的碎片。', deathRate: '22%' }
      ],
      successText: '你没有否定回忆，也没有承诺复刻过去，而是给出一个小小的重新开始。'
    },
    {
      id: 'infp-4',
      level: 4,
      title: 'TA 害怕再次失望',
      scene: '关系似乎有一点松动，但 TA 很怕重来一次还是一样。',
      messages: [{ role: 'target', content: '我怕我再相信一次，最后还是失望。' }],
      question: '最后怎么回应？',
      options: [
        { id: 'A', text: '你不试怎么知道？', isCorrect: false, deathTitle: '勇敢绑架', deathReport: '你把 TA 的害怕说成不够勇敢。TA 不是不想试，是不想再替你的不稳定买单。', deathRate: '32%' },
        { id: 'B', text: '你可以慢慢看，不需要马上相信我。我会先把能做的事做出来。', isCorrect: true },
        { id: 'C', text: '你这样我也很累。', isCorrect: false, deathTitle: '疲惫反压', deathReport: 'TA 刚说害怕，你立刻递回压力。旧梦修复失败。', deathRate: '28%' },
        { id: 'D', text: '我保证这次绝对不会。', isCorrect: false, deathTitle: '绝对化幻觉', deathReport: 'INFP 想相信你，但“绝对”这个词听起来像又一层泡沫。', deathRate: '26%' }
      ],
      successText: '你没有要求 TA 立刻恢复信任。旧梦没有完全复原，但它不再继续碎下去。'
    }
  ],
  ENTP: [
    {
      id: 'entp-1',
      level: 1,
      title: 'TA 用玩笑试探',
      scene: 'ENTP 没有直接表达不满，而是用一句玩笑开场。',
      messages: [{ role: 'target', content: '哟，今天终于想起我了？' }],
      question: '你怎么回不容易被反杀？',
      options: [
        { id: 'A', text: '你能不能别阴阳怪气？', isCorrect: false, deathTitle: '玩笑识别失败', deathReport: '你把试探当攻击，ENTP 立刻获得辩论主场。恭喜，你已经被拖进场。', deathRate: '34%' },
        { id: 'B', text: '被你抓到了，确实该罚。先认错，再申请补一次。', isCorrect: true },
        { id: 'C', text: '我忙啊，你又不是不知道。', isCorrect: false, deathTitle: '防御性开局', deathReport: '你刚进场就开始防御，ENTP 已经准备好三连追问。', deathRate: '31%' },
        { id: 'D', text: '那你也没找我啊。', isCorrect: false, deathTitle: '互相甩锅', deathReport: '你以为这叫公平，其实这是把轻松局打成拉扯局。', deathRate: '24%' }
      ],
      successText: '你接住了玩笑，也承认了问题。ENTP 暂时没有找到反杀角度。'
    },
    {
      id: 'entp-2',
      level: 2,
      title: 'TA 开始反问',
      scene: 'TA 用问题套问题，试图看你会不会乱。',
      messages: [{ role: 'target', content: '所以你觉得你错在哪？说说看。' }],
      question: '怎么不被带偏？',
      options: [
        { id: 'A', text: '你别审我行不行？', isCorrect: false, deathTitle: '被审判感破防', deathReport: 'ENTP 的问题还没展开，你已经先炸了。系统判定：抗压不足。', deathRate: '29%' },
        { id: 'B', text: '我先说一个最具体的：我没有提前说明，让你只能猜我的状态。', isCorrect: true },
        { id: 'C', text: '你觉得我错哪我就错哪。', isCorrect: false, deathTitle: '投降无效', deathReport: 'ENTP 不吃空白投降。你交出的不是诚意，是懒得思考。', deathRate: '27%' },
        { id: 'D', text: '那你先说你有没有错。', isCorrect: false, deathTitle: '回合污染', deathReport: '你把问题变成谁先认输。ENTP：好，现在开始辩论。', deathRate: '36%' }
      ],
      successText: '你没有跟着问题乱跳，而是抓住一个具体点。辩论恶魔暂时闭嘴。'
    },
    {
      id: 'entp-3',
      level: 3,
      title: 'TA 说你没意思了',
      scene: 'TA 突然丢出一句很轻但很伤的话。',
      messages: [{ role: 'target', content: '你最近真的挺没意思的。' }],
      question: '你怎么接这句？',
      options: [
        { id: 'A', text: '你才没意思。', isCorrect: false, deathTitle: '小学鸡互啄', deathReport: '你成功把关系降级成斗嘴。ENTP 可能会赢，但不会更想靠近你。', deathRate: '33%' },
        { id: 'B', text: '这句有点扎，但我懂你说的是我们最近失去互动感了。', isCorrect: true },
        { id: 'C', text: '你是不是看上别人了？', isCorrect: false, deathTitle: '剧情过度脑补', deathReport: 'TA 扔的是反馈，你直接写成连续剧。ENTP 会觉得这局开始变麻烦。', deathRate: '25%' },
        { id: 'D', text: '那你找有意思的人去。', isCorrect: false, deathTitle: '自尊爆雷', deathReport: '你想表现洒脱，结果像把门反锁还期待 TA 敲门。', deathRate: '30%' }
      ],
      successText: '你没有被刺痛后反刺，而是翻译出背后的互动需求。'
    },
    {
      id: 'entp-4',
      level: 4,
      title: 'TA 最后的挑衅',
      scene: 'TA 似笑非笑地问你是不是又要开始表演改变。',
      messages: [{ role: 'target', content: '所以你现在是准备演一个全新的你吗？' }],
      question: '最后一句怎么过？',
      options: [
        { id: 'A', text: '你爱信不信。', isCorrect: false, deathTitle: '摆烂退赛', deathReport: '你被一句挑衅打掉了耐心。ENTP 记录：抗激将能力为零。', deathRate: '28%' },
        { id: 'B', text: '不演全新的，我先修一个最烦人的旧 bug，你负责吐槽验收。', isCorrect: true },
        { id: 'C', text: '你为什么总把我想得这么坏？', isCorrect: false, deathTitle: '受害者转身', deathReport: '你没有处理质疑，而是把 TA 的怀疑变成对你的伤害。反杀完成。', deathRate: '32%' },
        { id: 'D', text: '我这次真的不一样。', isCorrect: false, deathTitle: '经典废话', deathReport: 'ENTP 对这句话的耐受度约等于零。请提交一点有趣且可验证的东西。', deathRate: '35%' }
      ],
      successText: '你用轻松感接住挑衅，又给了具体行动。你从 ENTP 反杀局里活着出来了。'
    }
  ]
};

export const getChallengeQuestions = (type: PersonalityType) => challengeMap[type];
