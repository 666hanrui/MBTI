import type { ChallengeQuestion } from '../types';

export const infjQuestions: ChallengeQuestion[] = [
  {
    id: 'infj-1',
    level: 1,
    title: '那个\u201C不用管我\u201D陷阱',
    scene: '你在追一个 INFJ。断联三天后你发了句\u201C最近还好吗\u201D，过了很久对方才回。',
    messages: [
      { role: 'target', content: '/stickers/月薪喵146.gif' },
      { role: 'target', content: '还行吧，就是最近加班加麻了。' },
      { role: 'target', content: '没事你不用管我，我习惯了一个人消化。' }
    ],
    question: '你信了\u201C不用管\u201D还是看穿了它？',
    options: [
      {
        id: 'A',
        text: '那你早点休息吧，别太累了。有什么想吃的明天我给你带。',
        outcome: 'death',
        pattern: 'avoidance',
        addFlags: ['ignored_emotions'],
        deathTitle: '你信了',
        deathReport: 'INFJ：他真的不管了。行吧，以后我就真的什么都不说了。一个体贴的正常回复，但你不是对的人。',
        deathRate: '45%'
      },
      {
        id: 'B',
        text: '加班太搞人了。又被老板说了？',
        outcome: 'damage',
        pattern: 'logic',
        effects: { logic: 1, pressure: 1 },
        targetReaction: '\u201C\u2026\u2026不是项目的问题。算了不提了。\u201D',
        systemComment: '你记得 TA 之前提过的事，TA 注意到了。但你直接开始分析问题\u2014\u2014INFJ 没在求你解决。T 人属性爆表。'
      },
      {
        id: 'C',
        text: '辛苦了。跟我还客套啥，想聊啥聊啥，不聊就放着，我在呢。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { emotionalSafety: 1, empathy: 1 },
        targetReaction: '\u201C\u2026\u2026其实今天跟主管吵了一架。\u201D',
        systemComment: '你直接戳穿了 TA 的伪装，但没逼 TA 说话。给了出口，没有给压力。'
      }
    ],
    successText: '你没有信那句\u201C不用管\u201D。INFJ 的\u201C不用管\u201D翻译过来是\u201C快来管我\u201D。'
  },
  {
    id: 'infj-2',
    level: 2,
    title: '鸽人哲学',
    scene: '暧昧期约了周末去看展，票你抢了半个月。周四晚上 TA 发来。',
    messages: [
      { role: 'target', content: '/stickers/月薪喵020.gif' },
      { role: 'target', content: '这周末可能去不了了，临时有点事。' },
      { role: 'target', content: '票钱我转你吧，真的不好意思。' }
    ],
    question: '三个选项都是正常人会说的。但 INFJ 会读出完全不同的东西。',
    options: [
      {
        id: 'A',
        text: '没事没事，工作要紧嘛。你忙你的，下次再约一样的，别太累了。',
        outcome: 'death',
        pattern: 'avoidance',
        addFlags: ['ignored_emotions'],
        deathTitle: '你又说\u201C没事\u201D',
        deathReport: 'INFJ：Ta 又说了\u201C没事\u201D。这让我觉得 Ta 其实没那么在意这件事，也没那么在意我。',
        deathRate: '40%'
      },
      {
        id: 'B',
        text: '啊票都抢了半个月呢\u2026\u2026不过算了你肯定有原因。下次补我个大的就行\u301C',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { selfProof: 1, pressure: 1 },
        targetReaction: '\u201C\u2026\u2026家里有点事。真的抱歉。\u201D',
        systemComment: '你表达了失望但没怪我。可是现在变成了 TA 需要解释和安抚你的情绪\u2014\u2014INFJ 只觉得累。'
      },
      {
        id: 'C',
        text: '失落肯定有啊，我期待好久了。但你能鸽肯定有原因，先处理你的事吧。票我来想办法。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 1 },
        targetReaction: '\u201C\u2026\u2026你真的不生气？\u201D',
        systemComment: '你没有假装没事，也没有让 TA 为你的失望负责。你说\u201C你不会随便鸽人\u201D\u2014\u2014你信任 TA 的判断，没有把问题丢回去。'
      }
    ],
    successText: '你没有让 INFJ 为你的情绪负责，也没有假装不在意。你信任了 TA 的理由\u2014\u2014这很难。'
  },
  {
    id: 'infj-3',
    level: 3,
    title: '那个忘不掉的夜晚',
    scene: '你们之前因为某件事闹得很僵，现在关系在慢慢恢复。某天你顺路送 TA 回家，经过一个地方 TA 突然沉默了。',
    messages: [
      { role: 'target', content: '你知道吗，上次我们就是在这吵的。' },
      { role: 'target', content: '我后来每次路过这都会想起那天晚上。我站在那里看着你车开走，站了很久。' }
    ],
    question: 'TA 把最敏感的伤口主动摊开了。你怎么接？',
    options: [
      {
        id: 'A',
        text: '那天确实是我不对。我每次路过这也在想，如果当时我没那么冲就好了。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { selfProof: 1 },
        targetReaction: '\u201C\u2026\u2026嗯。\u201D',
        systemComment: '你在认错，但你把话题拉到了\u201C你的愧疚\u201D上。INFJ 不是来审判你的。你在把焦点转回自己身上。'
      },
      {
        id: 'B',
        text: '都过去啦，现在好好的不就行了。别想那么多了。',
        outcome: 'death',
        pattern: 'avoidance',
        addFlags: ['ignored_emotions'],
        deathTitle: '你在跳过',
        deathReport: 'INFJ：你不愿意待在这种沉重里。那我以后也不会再跟你分享这种沉重了。这等于把最真实的那部分我关在门外了。',
        deathRate: '65%'
      },
      {
        id: 'C',
        text: '\uFF08沉默几秒\uFF09你当时站了多久？',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { empathy: 2, emotionalSafety: 1 },
        targetReaction: '\u201C\u2026\u2026可能有一个小时吧。我也不知道。\u201D',
        systemComment: '你没有道歉，没有安慰，没有跳过。你问\u201C站了多久\u201D\u2014\u2014你想知道 TA 具体经历了什么，而不是说\u201C我错了\u201D。你愿意待在那个沉重里。'
      }
    ],
    successText: 'INFJ 想让你待在那个黑暗里陪着 TA，不是把你拉亮。你做到了。'
  },
  {
    id: 'infj-4',
    level: 4,
    title: '那个\u201C有人追我\u201D',
    scene: '你们处于暧昧期，没有确认关系。某天晚上 INFJ 突然发来。',
    messages: [
      { role: 'target', content: '/stickers/月薪喵040.gif' },
      { role: 'target', content: '今天有个同事跟我表白了。' },
      { role: 'target', content: '他说他默默注意我很久了，觉得我很特别。' }
    ],
    question: '这百分之百是测试。但正确答案不是你想象的那样。',
    options: [
      {
        id: 'A',
        text: '哦这样啊\u2026\u2026那你怎么想的？',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { avoidance: 1, trust: -1 },
        targetReaction: '\u201C\u2026\u2026没什么想法。就跟你说一声。\u201D',
        systemComment: '你在克制。但你克制到像不在乎。INFJ 需要看到你的在乎，即使它不够体面。'
      },
      {
        id: 'B',
        text: '突然有危机感了\u2026\u2026不过挺好的，有人欣赏你说明我眼光没错。',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '不安全感外露',
        deathReport: 'INFJ：你说"应该替你开心"，但我感觉到你根本不是那个意思。你在装大方，我反而更不安了。',
        deathRate: '50%'
      },
      {
        id: 'C',
        text: '\uFF08过了一会儿\uFF09说实话心里咯噔了一下。不过谢谢你告诉我。你自己决定就好。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { trust: 1 },
        targetReaction: '\u201C\u2026\u2026你真的这么想？\u201D',
        systemComment: '你没有急着给反应。你说\u201C心里咯噔了一下\u201D\u2014\u2014你承认了有感觉但没有夸张。你说\u201C谢谢你告诉我\u201D\u2014\u2014你让 TA 觉得告诉你是对的。既真实又有分寸。'
      }
    ],
    successText: '你承认了脆弱但没有绑架对方。这是 INFJ 能接受的\u201C吃醋\u201D的极限形态。'
  },
  {
    id: 'infj-5',
    level: 5,
    title: '凌晨三点的存在主义危机',
    scene: '凌晨 3:17。你醒来看到 INFJ 给你发了三条消息，一条比一条短。',
    messages: [
      { role: 'target', content: '睡不着。' },
      { role: 'target', content: '我在想人活着到底是为了什么。' },
      { role: 'target', content: '算了没事你睡吧。' }
    ],
    question: '你把手机亮度调暗，开始打字。每一个字都在被审视。',
    options: [
      {
        id: 'A',
        text: '怎么啦宝宝？是不是最近太累了？来我怀里，不想了，我哄你睡。',
        outcome: 'death',
        pattern: 'avoidance',
        addFlags: ['ignored_emotions'],
        deathTitle: '你在解决问题',
        deathReport: 'INFJ：我在想的是生死存亡，你跟我说散步。你用\u201C解决情绪\u201D代替了\u201C接住情绪\u201D。以后我不会在深夜找你了。',
        deathRate: '55%'
      },
      {
        id: 'B',
        text: '嗯。这个太大了，我答不了。我在呢。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { emotionalSafety: 2, empathy: 1 },
        targetReaction: '\uFF08很久之后回了一个表情包\uFF09\u201C\u2026\u2026谢谢你没有让我别想了。\u201D',
        systemComment: '你没有给答案，没有安慰，没有否定。你说\u201C我在呢\u201D\u2014\u2014你没有试图把 TA 拽出来，也没有走开。INFJ 最需要的就是这个。'
      },
      {
        id: 'C',
        text: '唉我以前也经常半夜想这些。后来发现想太多也没用。',
        outcome: 'damage',
        pattern: 'savior',
        effects: { oldPatternDetected: 1, pressure: 1 },
        targetReaction: '\u201C\u2026\u2026嗯，你说得对。我睡了。\u201D',
        systemComment: '你给了你的人生哲学。但 INFJ 说这些不是想听你的结论。你在教 TA \u201C应该怎么想\u201D\u2014\u2014爹味溢出。'
      }
    ],
    successText: '你没有给出答案。INFJ 不需要答案，需要一个愿意和 TA 一起在问题里待着的人。'
  },
  {
    id: 'infj-6',
    level: 6,
    title: '逃离计划',
    scene: '你们连续聊了一个多月，每天都在联系，感情持续升温。然后突然有一天。',
    messages: [
      { role: 'target', content: '/stickers/月薪喵156.gif' },
      { role: 'target', content: '我们还是别这样了。' },
      { role: 'target', content: '我最近太依赖你了，这样不正常。我本来一个人可以过的，现在被你打乱了。' },
      { role: 'target', content: '我想退回去。' }
    ],
    question: '回避型依恋全面发作。这不是通知，是求救。',
    options: [
      {
        id: 'A',
        text: '好吧，如果这是你想要的。那我们先各自冷静一下吧。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1, oldPatternDetected: 1 },
        targetReaction: '\u201C\u2026\u2026嗯。\u201D\uFF08心凉了\uFF09',
        systemComment: 'INFJ：你退了。我就知道。不管嘴上说得多好，最后都会退的。你又验证了我的判断。'
      },
      {
        id: 'B',
        text: '我不会走的。你赶我也不走。我喜欢你，依赖我怎么了，我不怕。',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你假装不怕',
        deathReport: 'INFJ：你说\u201C我不怕\u201D，但你没有问我怕不怕。你在用你的坚定压过我的恐惧。你越用力我越怕。',
        deathRate: '55%'
      },
      {
        id: 'C',
        text: '我不会拦你退，但我也不会消失。我就在你看得见的地方待着，你随时可以过来。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 2, emotionalSafety: 2 },
        addFlags: ['accepted_dark_side'],
        targetReaction: '\u201C\u2026\u2026你就不怕我真的退了？\u201D',
        systemComment: '没有否定恐惧，没有全退也没有不退。你说\u201C在你看得见的地方待着\u201D\u2014\u2014这是 INFJ 唯一能接受的距离。你说\u201C你随时可以过来\u201D\u2014\u2014还把选择权还给了 TA。'
      }
    ],
    successText: '这是最难的一关。你没有全退也没有紧逼。\u201C退半步\u201D\u2014\u2014只有 INFJ 听得懂这个距离的精确含义。'
  },
  {
    id: 'infj-7',
    level: 7,
    title: '动机审判',
    scene: '你们闹了矛盾，你道过歉了但 TA 还是没有完全回暖。冷了两天后。',
    messages: [
      { role: 'target', content: '我想问你一个问题。你认真回答我。' },
      { role: 'target', content: '你对我好，是因为你人本来就好，还是因为我值得？' },
      { role: 'target', content: '如果换一个人在你现在的处境里，你也会这样对她吗？' }
    ],
    question: '对\u201C特殊性\u201D的终极审判。两个问题必须同时回答。',
    options: [
      {
        id: 'A',
        text: '当然是因为你值得。我对你不会是假的。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { selfProof: 1 },
        targetReaction: '\u201C\u2026\u2026你回答得太快了。\u201D',
        systemComment: '像背答案。而且没有回答第二个问题。INFJ 的 Ti 已经注意到逻辑漏洞了。'
      },
      {
        id: 'B',
        text: '你怎么会这么想？我对你怎么样你感觉不到吗？',
        outcome: 'death',
        pattern: 'defense',
        deathTitle: '你回避了问题',
        deathReport: 'INFJ：你回避了问题，还让我为问了这个问题而内疚。你以为我看不出来吗？这是最低级的操作。',
        deathRate: '70%'
      },
      {
        id: 'C',
        text: '\uFF08想了很久\uFF09第一个问题：我希望是。但说完全没有我也不信。第二个问题我没法回答\u2014\u2014我没同时走两条路。我现在就在你这。',
        outcome: 'survive',
        pattern: 'vulnerability',
        effects: { empathy: 1, emotionalSafety: 1 },
        addFlags: ['honest_confession'],
        targetReaction: '\u201C\u2026\u2026你是第一个没有直接说\u2018当然是你\u2019的人。\u201D',
        systemComment: '他在认真想，不是在给标准答案。他承认了人性中不完美的部分\u2014\u2014这让 INFJ 觉得很真实。他说\u201C现在选的路是你\u201D\u2014\u2014没说过永远，说\u201C现在\u201D和\u201C选\u201D。他知道 INFJ 不相信永远，但相信当下的选择。'
      }
    ],
    successText: '你没有撒谎说你\u201C百分之百纯粹\u201D，也没有回避问题。诚实到有点冒险，但这是 INFJ 唯一会信的东西。'
  },
  {
    id: 'infj-8',
    level: 8,
    title: '沉默裂谷',
    scene: '上一轮对话停在你的回答。然后 INFJ 消失了。一天。两天。三天。消息显示已读但没有任何回复。你看到 TA 发了朋友圈但没回你。',
    messages: [
      { role: 'target', content: '\uFF08系统提示：对方已读不回 72 小时，有社交活跃但无回应\uFF09' }
    ],
    question: '这不是冷暴力。这是 INFJ 的洞穴期。你怎么做？',
    options: [
      {
        id: 'A',
        text: '\uFF08每天发一条日常\uFF09\u201C今天看到一只猫好像你\u201D\u201C下雨了记得带伞\u201D。不追问，不质问，不提\u201C你怎么不回我\u201D。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { emotionalSafety: 2, trust: 1 },
        targetReaction: '\uFF08第 4 天回了一个表情包\uFF09\u201C\u2026\u2026我在。就是需要缓一下。\u201D',
        systemComment: '每天出现一次，像一束不会被风吹灭的蜡烛。没有催 TA，没有走。第 4 天 TA 有力气了。'
      },
      {
        id: 'B',
        text: '\uFF08当晚发了一条\uFF09\u201C我知道你需要空间，但我真的很担心你。你回我个句号好不好？让我知道你没事。\u201D',
        outcome: 'damage',
        pattern: 'control',
        effects: { pressure: 1 },
        targetReaction: '\uFF08已读，但没回句号\uFF09',
        systemComment: '你说你理解需要空间，但紧接着就让 TA 回句号。行为和语言矛盾\u2014\u2014INFJ 注意到了。压力不减反增。'
      },
      {
        id: 'C',
        text: '\uFF08反复点开对话框又关掉。最终什么都没发。\uFF09',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '两个人的沉默',
        deathReport: 'INFJ：他也沉默了。好吧。两个人都沉默了，那就这样吧。',
        deathRate: '60%'
      }
    ],
    successText: '你没有追问，没有沉默。你做了一个微小的、持续的动作。那个动作的意思是：\u201C我还在，我不着急。\u201D'
  },
  {
    id: 'infj-9',
    level: 9,
    title: '重新定义',
    scene: 'INFJ 从洞穴里出来了。你们见面了。走了很长一段路都没说话，然后 TA 停下来。',
    messages: [
      { role: 'target', content: '我想了很久。' },
      { role: 'target', content: '我们做那种很久联系一次但知道彼此在的朋友吧。这样对大家都安全。' }
    ],
    question: 'INFJ 的终极防御机制——在可能受伤之前先降级关系。',
    options: [
      {
        id: 'A',
        text: '行。如果你觉得这样好的话。我不想让你为难。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1 },
        targetReaction: '\u201C\u2026\u2026嗯。\u201D\uFF08心彻底凉了\uFF09',
        systemComment: '你同意了。INFJ 松了一口气，但也确认了\u2014\u2014你果然没那么想要我。'
      },
      {
        id: 'B',
        text: '不行。我对你不止这样，我没办法骗自己。',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你在逼 TA',
        deathReport: 'INFJ：你的坚定听起来像侵略。我好不容易鼓起勇气说出这个方案，你直接否定了它。你让我觉得我的恐惧对你来说不重要。',
        deathRate: '60%'
      },
      {
        id: 'C',
        text: '我不同意。但我不会逼你，就当我没听过。按你的节奏来，我等你。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { trust: 2, pressure: -2 },
        targetReaction: '\u201C\u2026\u2026你为什么总是能接住我。\u201D',
        systemComment: '他没有答应也没有否定。他说\u201C就当我没听过\u201D\u2014\u2014他没有让提议生效，但也没有惩罚 TA 提出它。他说\u201C按你的节奏\u201D\u2014\u2014把控制权还回去了。他说\u201C我等你\u201D\u2014\u2014他没有走。'
      }
    ],
    successText: '你没有接受降级，也没有强攻。你说了\u201C按你的节奏\u201D\u2014\u2014这是 INFJ 最需要听到的四个字。'
  },
  {
    id: 'infj-10',
    level: 10,
    title: '伤疤被揭开',
    scene: '最近一切都很好。你甚至觉得你们已经和好了。直到有一天你因为加班错过了和 INFJ 的约定。等你忙完看到手机。',
    messages: [
      { role: 'target', content: '\uFF08三小时前\uFF09\u201C在干嘛呢？\u201D' },
      { role: 'target', content: '\uFF08两小时前\uFF09\u201C\uFF3B对方撤回了一条消息\uFF3D\u201D' },
      { role: 'target', content: '\uFF08一小时前\uFF09\u201C没事了。\u201D' }
    ],
    question: '你心里一沉。你知道这三条消息的顺序意味着什么。',
    options: [
      {
        id: 'A',
        text: '对不起刚忙完。你别乱想，我最在乎的就是你了。',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你在哄 TA',
        deathReport: 'INFJ：你说我最在乎你，但你没问我怎么了。你在用甜言蜜语跳过我的不安。以后我不会再让你知道我难过了。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '刚开完会！你撤回了什么？我错了我错了，下次一定提前告诉你。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { selfProof: 1, pressure: 1 },
        targetReaction: '\u201C没生气。你忙吧。\u201D',
        systemComment: '你在道歉，但你在怕 TA 生气，不是在理解 TA 为什么难过。还追问撤回了什么\u2014\u2014TA 不想说。'
      },
      {
        id: 'C',
        text: '刚忙完。等很久了吧。撤回的那句还想说吗？不想说我们就聊别的。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { emotionalSafety: 2 },
        targetReaction: '\u201C\u2026\u2026我撤回了\u2018你是不是跟别人在一起\u2019。是不是很蠢。\u201D',
        systemComment: '没有道歉，没有追问，没有哄。他回来了，他问我还说不说。他把选择给我了。'
      }
    ],
    successText: '你没有让 TA 为不安感到羞耻。你自己说出了 TA 最需要听到的那句话：\u201C我知道那是什么感觉。\u201D'
  },
  {
    id: 'infj-11',
    level: 11,
    title: '崩塌',
    scene: '你们终于走到一个节点。INFJ 在你面前彻底崩溃了。',
    messages: [
      { role: 'target', content: '/stickers/月薪喵194.gif' },
      { role: 'target', content: '我好怕\u2026\u2026我真的好怕。' },
      { role: 'target', content: '我每天都在做准备，准备你哪天突然就不喜欢我了。我每天都在想那个时候我该怎么办。' },
      { role: 'target', content: '我一直觉得，与其等你走，不如我先走\u2026\u2026' },
      { role: 'target', content: '我这样是不是很吓人\u2026\u2026对不起\u2026\u2026你走吧\u2026\u2026' }
    ],
    question: '这是 INFJ 最彻底的一次缴械。你的回应会决定 TA 今后还能不能再信任任何人。',
    options: [
      {
        id: 'A',
        text: '\u2026\u2026\uFF08你走过去，把 TA 抱住。你什么都没说。\uFF09',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { empathy: 3, trust: 3, emotionalSafety: 3 },
        addFlags: ['took_accountability', 'accepted_dark_side'],
        targetReaction: '\u201C\u2026\u2026\uFF08在怀里哭了很久。你没有松手。\uFF09\u201D',
        systemComment: '他没有说话。没有发誓。没有解释。他抱住我了。我的脸贴着他的胸口，可以听到他的心跳。那一刻我知道他还在。行动比一千句誓言都有力。'
      },
      {
        id: 'B',
        text: '别哭了。我不会走的。你看看我，我就在这里，哪也不去。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { pressure: 2, selfProof: 2 },
        targetReaction: '\u201C\u2026\u2026发誓的人最后都走了。\u201D',
        systemComment: '你在安慰 TA，但你在让 TA 别哭了。你没有接住 TA 的崩溃，你在试图让它停下来。INFJ 觉得你要的是\u201C不哭的 TA\u201D，不是真实的 TA。'
      },
      {
        id: 'C',
        text: '我不走。但你这样我很担心，我们坐下来慢慢说好不好？',
        outcome: 'death',
        pattern: 'avoidance',
        deathTitle: '你在给崩溃设条件',
        deathReport: 'INFJ：你说不走，但你让我坐下来慢慢说。你给我的崩溃设了条件——你要我用你能接受的方式崩溃。我做不到。',
        deathRate: '70%'
      }
    ],
    successText: '你什么都没说。你只是抱住了 TA。有时候行动比一千句话都响。'
  },
  {
    id: 'infj-12',
    level: 12,
    title: '破晓',
    scene: '那晚之后风平浪静了几天。你们没有特意聊那件事，但有一种新的默契在生长。然后有一天。',
    messages: [
      { role: 'target', content: '那晚\u2026\u2026谢谢你没走。' },
      { role: 'target', content: '我之前问过你我们算什么。你现在还坚持那个答案吗？' }
    ],
    question: '最终审判。决定结局。',
    options: [
      {
        id: 'A',
        text: '我坚持。我一直都坚持。我想跟你在一起。',
        outcome: 'death',
        pattern: 'control',
        deathTitle: '你太用力了',
        deathReport: 'INFJ：你说坚持，说想在一起。但你的坚定有时候让我安心，有时候让我害怕。现在你在让我害怕。',
        deathRate: '50%'
      },
      {
        id: 'B',
        text: '答案没变。但我不想给你压力，等你真的准备好了我再好好告诉你。',
        outcome: 'damage',
        pattern: 'avoidance',
        effects: { trust: -1 },
        targetReaction: '\u201C\u2026\u2026你是真的不急还是不敢说。\u201D',
        systemComment: '\u3010A级结局：漫长的悬浮\u3011你说不想给压力，听起来很体贴。但 INFJ 读到了你的犹豫——你在保护自己，不是保护 TA。'
      },
      {
        id: 'C',
        text: '那个答案还在。但具体叫什么我说不清楚\u2014\u2014你是我每天早上醒来第一个想到的人，是我做决定时会想\u201C如果是TA会怎么说\u201D的人，是我面对世界时多出来的底气。不需要给它起名字，知道它在就行。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { emotionalSafety: 99, trust: 99 },
        targetReaction: '\uFF08很久之后\uFF09\u201C\u2026\u2026不是暂时的？\u201D',
        systemComment: '\u3010S级结局：不可撤销的在场\u3011他没有说\u201C我爱你\u201D或\u201C在一起\u201D。他说了很具体的东西\u2014\u2014\u201C每天早上醒来第一个想到\u201D、\u201C做决定时会想\u201D、\u201C多出来的底气\u201D。具体比宏大更真实。他没有问\u201C你愿意吗\u201D，没有要任何东西。他只是告诉 INFJ 她在心里是什么样的存在。'
      }
    ],
    successText: '完美通关。你没有给一个标签，你给了一种存在的方式。INFJ 等待的就是这个。'
  }
];
