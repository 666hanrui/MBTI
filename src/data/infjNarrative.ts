import type { ChallengeQuestion } from '../types';

export const infjNarrativeQuestions: ChallengeQuestion[] = [
  {
    id: 'infj-narrative-1',
    level: 1,
    title: 'TA 说没事',
    scene: '关系已经冷了几天。你终于发了一句“我们聊聊吧”，TA 回得很慢，像是把很多话都压回去了。',
    messages: [
      { role: 'target', content: '没事。' },
      { role: 'target', content: '你不用解释。' }
    ],
    question: '第一句话，你怎么接？',
    options: [
      {
        id: 'A',
        text: '你是不是又在冷暴力？有什么不能直接说？',
        outcome: 'death',
        pattern: 'pressure',
        effects: { pressure: 3, damage: 2, emotionalSafety: -3, oldPatternDetected: 2 },
        targetReaction: 'TA 的头像安静了很久，最后只回了一个“嗯”。',
        systemComment: '系统识别：情绪逼供。你把 TA 的沉默翻译成审判，又把自己的不安递成考卷。',
        followUp: '死亡条件触发：INFJ 副本中，沉默不一定是惩罚，但被逼解释很容易变成最后一根线。',
        deathTitle: '情绪逼供',
        deathReport: '你以为你在争取回应，其实你是在逼 TA 立刻交卷。TA 的沉默不是考验你，是已经没有力气继续解释。',
        deathRate: '31%',
        addFlags: ['pressure_interrogation']
      },
      {
        id: 'B',
        text: '我真的不是那个意思，你听我解释，我可以从头说。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { selfProof: 2, empathy: -1, damage: 1, oldPatternDetected: 1, emotionalSafety: -1 },
        targetReaction: '“正在输入”出现了两次，又消失了。TA 没有打断你，但也没有接住你。',
        systemComment: '系统识别：证明欲 +2。你以为解释能修复关系，但你又把镜头推回了自己身上。',
        followUp: '后续影响：旧模式档案已建立。之后如果继续自证，可能触发“解释成瘾”隐藏死亡。',
        deathTitle: '解释成瘾',
        deathReport: 'TA 要的不是说明书，是被接住的感受。你把机会用来证明自己，于是机会开始变窄。',
        deathRate: '42%',
        addFlags: ['self_proof_seen']
      },
      {
        id: 'C',
        text: '我知道你现在不想听解释。我先不逼你回应，但我会认真想这件事。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { empathy: 2, boundaryRespect: 1, trust: 1, emotionalSafety: 2 },
        targetReaction: 'TA 停了十几秒，回了一句：“嗯，我现在确实不太想讲。”',
        systemComment: '系统识别：情绪接住。你没有急着洗白，也没有把沉默当成攻击。',
        followUp: '后续影响：TA 的防御略微下降。下一关将进入真实感受区。',
        addFlags: ['held_first_silence']
      },
      {
        id: 'D',
        text: '好，那你先冷静吧。我也不打扰你了。',
        outcome: 'hidden',
        pattern: 'avoidance',
        effects: { avoidance: 2, boundaryRespect: -1, damage: 1, trust: -1 },
        targetReaction: 'TA 没有再回。对话停在这里，像一扇门被轻轻推上。',
        systemComment: '系统识别：伪尊重。你说的是给空间，语气里却像撤退和惩罚。',
        followUp: '隐藏污染：如果后面继续用“我不打扰你了”逃避修复，会触发冷处理反噬。',
        deathTitle: '冷处理反噬',
        deathReport: '你把空间变成了关系惩罚。TA 不是需要你消失，是需要你别再制造压力。',
        deathRate: '19%',
        addFlags: ['cold_space_pollution']
      }
    ],
    successText: '你暂时活过了第一关。但系统已经开始记录你的旧模式。'
  },
  {
    id: 'infj-narrative-2',
    level: 2,
    title: 'TA 开始讲一点感受',
    scene: 'TA 没有完全打开，但终于愿意露出一点真实情绪。INFJ 副本最危险的地方是：TA 说得越轻，里面越重。',
    messages: [
      { role: 'target', content: '其实那天我真的有点难过。' },
      { role: 'target', content: '不是因为那一句话，是那种感觉又来了。' }
    ],
    conditionalLines: [
      { whenFlags: ['self_proof_seen'], content: '隐藏台词：TA 又补了一句：“我有点怕你又开始解释。”' },
      { whenFlags: ['cold_space_pollution'], content: '隐藏台词：TA 说：“你刚才说不打扰，我其实不知道那是不是又一次冷掉。”' }
    ],
    question: '这时你怎么接，才不会把门重新关上？',
    options: [
      {
        id: 'A',
        text: '我也很难过啊，你这样我压力也很大。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { selfProof: 2, damage: 1, oldPatternDetected: 1, emotionalSafety: -1 },
        targetReaction: 'TA 的语气变轻了：“嗯，我知道你也不好受。”但那句话像退回礼貌区。',
        systemComment: '系统识别：感受抢答。TA 刚递出一点感受，你立刻把自己的委屈放到桌面中央。',
        followUp: '后续影响：如果证明欲累计过高，第 4 关会触发旧模式审判。',
        deathTitle: '感受抢答',
        deathReport: '你不是没有感受，你是太急着让 TA 看见你，于是又一次没看见 TA。',
        deathRate: '36%',
        addFlags: ['feeling_hijack']
      },
      {
        id: 'B',
        text: '我听见了。那种感觉是不是像你又被放在后面了？',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { empathy: 2, trust: 1, emotionalSafety: 2 },
        targetReaction: 'TA 回得很慢：“差不多。就是那种……我又要自己消化的感觉。”',
        systemComment: '系统识别：复述感受。你没有急着辩护，而是先确认 TA 的体验。',
        followUp: '后续影响：情绪安全上升。下一关 TA 会更明确地提出边界。',
        addFlags: ['named_the_feeling']
      },
      {
        id: 'C',
        text: '那你为什么当时不说？你不说我怎么知道？',
        outcome: 'death',
        pattern: 'pressure',
        effects: { pressure: 3, damage: 2, emotionalSafety: -3, oldPatternDetected: 2 },
        targetReaction: 'TA 沉默了。那种刚打开一点的东西，被这句话重新收回去了。',
        systemComment: '系统识别：二次审问。你把 TA 的迟到表达，也变成了 TA 的责任。',
        followUp: '死亡条件触发：TA 不是不想沟通，是怕一沟通就被追责。',
        deathTitle: '二次审问',
        deathReport: '你以为你在了解原因，其实 TA 听见的是：连表达晚了都要被你审。门不是突然关的，是这样一次次关上的。',
        deathRate: '28%',
        addFlags: ['second_interrogation']
      },
      {
        id: 'D',
        text: '对不起，都是我的错，你别难过了。',
        outcome: 'hidden',
        pattern: 'surrender',
        effects: { empathy: 1, trust: -1, damage: 1, oldPatternDetected: 1 },
        targetReaction: 'TA 回：“我不是要你认罪。”空气反而更僵了一点。',
        systemComment: '系统识别：无边界投降。你看起来在道歉，其实是在让 TA 负责结束你的愧疚。',
        followUp: '隐藏污染：如果后续没有具体行动，这条线会变成“空头道歉”。',
        deathTitle: '空头道歉',
        deathReport: '你把道歉交得太快，快到 TA 没有地方放自己的感受。',
        deathRate: '22%',
        addFlags: ['empty_apology']
      }
    ],
    successText: '你活过了第二关。系统提示：TA 的感受不是谜题，是入口。'
  },
  {
    id: 'infj-narrative-3',
    level: 3,
    title: 'TA 要一点空间',
    scene: '对话刚有一点缓和，TA 没有继续讲下去，而是提出想暂停。这里开始考验你是不是真的尊重边界。',
    messages: [
      { role: 'target', content: '我想自己待一会儿。' },
      { role: 'target', content: '不是不理你，我只是现在有点累。' }
    ],
    conditionalLines: [
      { whenFlags: ['feeling_hijack'], content: '隐藏台词：TA 说：“我刚才说完以后，感觉又变成我要照顾你的情绪。”' },
      { whenFlags: ['named_the_feeling'], content: '隐藏台词：TA 说：“谢谢你刚才没有急着反驳。”' }
    ],
    question: 'TA 要空间时，你怎么处理？',
    options: [
      {
        id: 'A',
        text: '那你到底还要不要继续？你给我一个准话。',
        outcome: 'death',
        pattern: 'pressure',
        effects: { pressure: 3, damage: 2, boundaryRespect: -2, emotionalSafety: -3 },
        targetReaction: 'TA 很久没有回复。你看着那行消息，突然意识到你把“休息”逼成了“判决”。',
        systemComment: '系统识别：安全感勒索。你把 TA 的喘息请求翻译成关系审判。',
        followUp: '死亡条件触发：INFJ 要的不是被困在你的不安里。',
        deathTitle: '安全感勒索',
        deathReport: 'TA 要的是喘气，你递过去的是一张考卷。你不是在确认关系，你是在让 TA 为你的恐惧负责。',
        deathRate: '41%',
        addFlags: ['security_extortion']
      },
      {
        id: 'B',
        text: '好。我晚点再找你，这段时间我不会继续追问。',
        outcome: 'survive',
        pattern: 'boundary',
        effects: { boundaryRespect: 2, trust: 1, emotionalSafety: 1, pressure: -1 },
        targetReaction: 'TA 回：“嗯，谢谢。”只有两个字，但紧绷感明显低了一点。',
        systemComment: '系统识别：边界尊重。你给了空间，也没有把空间变成惩罚。',
        followUp: '后续影响：边界尊重上升。第 5 关有机会触发观察期结局。',
        addFlags: ['respected_space']
      },
      {
        id: 'C',
        text: '好，我不逼你。但我想最后说几句，你看不看都行。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { selfProof: 2, boundaryRespect: -1, oldPatternDetected: 1, damage: 1 },
        targetReaction: '你发出去以后才发现，“最后几句”其实有一整屏。TA 没有回。',
        systemComment: '系统识别：伪尊重。你尊重的是台词，不是边界。',
        followUp: '后续影响：触发“边界失效”标记。后面 TA 可能直接指出你说给空间却没有做到。',
        deathTitle: '伪尊重',
        deathReport: '你说不逼，但消息已经替你逼完了。TA 要安静，你给的是倒计时。',
        deathRate: '33%',
        addFlags: ['fake_boundary']
      },
      {
        id: 'D',
        text: '行，那我也消失几天。你想清楚再说。',
        outcome: 'hidden',
        pattern: 'avoidance',
        effects: { avoidance: 2, control: 1, boundaryRespect: -2, trust: -1, damage: 1 },
        targetReaction: 'TA 没再回复。表面上你们都安静了，但这不是空间，是冷战预告。',
        systemComment: '系统识别：惩罚性撤退。你把边界变成了博弈。',
        followUp: '隐藏污染：如果后续再索要回应，会触发“你先消失又怪 TA 不靠近”的死亡报告。',
        deathTitle: '惩罚性撤退',
        deathReport: '你不是给空间，你是在用消失测试 TA 会不会追。INFJ 副本最怕这种安静里的惩罚感。',
        deathRate: '18%',
        addFlags: ['punitive_withdrawal']
      }
    ],
    successText: '你活过了第三关。系统提示：边界不是撤退，是让关系不继续受伤。'
  },
  {
    id: 'infj-narrative-4',
    level: 4,
    title: '旧伤回流',
    scene: '暂停之后，TA 没有直接聊复合，而是提起一件你以为早就过去的小事。',
    messages: [
      { role: 'target', content: '其实那件事我到现在还会想起来。' },
      { role: 'target', content: '我知道你可能觉得它很小。' }
    ],
    conditionalLines: [
      { whenFlags: ['fake_boundary'], content: '隐藏台词：TA 补了一句：“就像刚才，你说不逼我，但我还是收到了一整段解释。”' },
      { whenFlags: ['punitive_withdrawal'], content: '隐藏台词：TA 说：“你消失的时候，我不知道那是尊重，还是又一次惩罚。”' },
      { whenFlags: ['respected_space'], content: '隐藏台词：TA 说：“刚才你真的停下来了，所以我才愿意继续说。”' }
    ],
    question: '旧事被提起时，你怎么回应？',
    options: [
      {
        id: 'A',
        text: '怎么又翻旧账？那都多久以前了。',
        outcome: 'death',
        pattern: 'attack',
        effects: { damage: 3, emotionalSafety: -3, oldPatternDetected: 2 },
        targetReaction: 'TA 像是终于确认了什么，只回：“嗯，我明白了。”',
        systemComment: '系统识别：旧账羞辱。你把未修复的伤口，判成了 TA 的小气。',
        followUp: '死亡条件触发：你嫌 TA 记得太久，TA 只会确认你从来没懂。',
        deathTitle: '旧账羞辱',
        deathReport: 'TA 不是在翻旧账，是在指出那件事从来没有被真正接住。你一句“多久以前了”，把门往里又推了一寸。',
        deathRate: '44%',
        addFlags: ['old_wound_shamed']
      },
      {
        id: 'B',
        text: '我以前可能真的把它看轻了。你愿意说说它现在还怎么影响你吗？',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { empathy: 2, trust: 2, emotionalSafety: 2, oldPatternDetected: -1 },
        targetReaction: 'TA 停了很久，说：“我不是想让你补偿，我只是想让你知道它没有过去。”',
        systemComment: '系统识别：旧伤承认。你没有急着翻篇，也没有把 TA 的记忆当成罪证。',
        followUp: '后续影响：信任回升。第 5 关将进入最终观察期判定。',
        addFlags: ['old_wound_acknowledged']
      },
      {
        id: 'C',
        text: '那我还能怎么办？我也不能穿越回去改啊。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { selfProof: 2, damage: 2, oldPatternDetected: 1, emotionalSafety: -1 },
        targetReaction: 'TA 回：“我不是在要你穿越。”这句话很轻，但关系又冷了一点。',
        systemComment: '系统识别：无力感甩锅。你把修复问题变成 TA 在为难你。',
        followUp: '后续影响：旧模式累计。如果前面已经多次自证，最终可能进入残血结局。',
        deathTitle: '无力感甩锅',
        deathReport: 'TA 还没开始讲，你已经把自己放到受害者位置。',
        deathRate: '27%',
        addFlags: ['helpless_defense']
      },
      {
        id: 'D',
        text: '我们别一直讲难过的了，我带你去吃点好的，换换心情。',
        outcome: 'hidden',
        pattern: 'avoidance',
        effects: { avoidance: 2, playfulness: 1, damage: 1, emotionalSafety: -1 },
        targetReaction: 'TA 没有生气，只是说：“你看，你还是想快点跳过去。”',
        systemComment: '系统识别：轻飘飘跳过。你想让空气变轻，但沉重的东西又一次没人接。',
        followUp: '隐藏污染：如果最终没有具体行动，会触发“温柔但无交付”。',
        deathTitle: '轻飘飘跳过',
        deathReport: '你递出的是转移注意力，不是修复。TA 不缺一顿饭，TA 缺一个愿意停下来看伤口的人。',
        deathRate: '21%',
        addFlags: ['skipped_the_weight']
      }
    ],
    successText: '你活过了第四关。系统提示：旧伤不是旧账，是未完成的修复任务。'
  },
  {
    id: 'infj-narrative-5',
    level: 5,
    title: '这次有什么不一样',
    scene: 'TA 没有说原谅，也没有说结束。最后的问题终于来了：这次，你到底有什么不一样？',
    messages: [
      { role: 'target', content: '我听见你说了很多。' },
      { role: 'target', content: '但我想知道，这次和以前有什么不一样？' }
    ],
    conditionalLines: [
      { whenFlags: ['old_wound_acknowledged'], content: '隐藏台词：TA 说：“至少这次你没有说我翻旧账。”' },
      { whenFlags: ['empty_apology'], content: '隐藏台词：TA 说：“我不想再听很快的道歉了。”' },
      { whenFlags: ['cold_space_pollution'], content: '隐藏台词：TA 说：“我也不想再靠猜来判断你是在尊重我，还是在退开。”' }
    ],
    question: '最终关，你怎么回答？',
    options: [
      {
        id: 'A',
        text: '我保证这次绝对不会了，你相信我一次。',
        outcome: 'damage',
        pattern: 'self_proof',
        effects: { selfProof: 2, oldPatternDetected: 1, damage: 1, trust: -1 },
        targetReaction: 'TA 没有立刻否定你，但眼神里的疲惫没有下去。',
        systemComment: '系统识别：绝对化承诺。你给了一个很大的词，但没有给一个能落地的变化。',
        followUp: '结局影响：如果前面伤害较高，将进入残血结局。',
        deathTitle: '空头保证',
        deathReport: '“绝对不会”听起来很满，但 INFJ 已经听过太多次满格承诺。TA 要的是旧循环被打断的证据。',
        deathRate: '30%',
        addFlags: ['absolute_promise']
      },
      {
        id: 'B',
        text: '不一样的是，我不再急着让你相信。我会先停止解释、尊重你的边界，把我能改的事做出来。',
        outcome: 'survive',
        pattern: 'empathy',
        effects: { empathy: 2, trust: 2, boundaryRespect: 1, emotionalSafety: 2, oldPatternDetected: -1 },
        targetReaction: 'TA 看着这句话停了很久，最后说：“我现在还不能给你答案，但这句话我听进去了。”',
        systemComment: '系统识别：旧循环中断。你没有索要立刻相信，而是把修复从语言移到行动。',
        followUp: '结局影响：如果共情、边界和信任足够高，将触发隐藏通关。',
        addFlags: ['broke_old_loop']
      },
      {
        id: 'C',
        text: '那你要怎么样才肯回来？你直接说条件。',
        outcome: 'death',
        pattern: 'control',
        effects: { control: 3, pressure: 3, damage: 2, emotionalSafety: -3 },
        targetReaction: 'TA 回：“你看，你还是想把它变成一个通关条件。”',
        systemComment: '系统识别：复合索要。你把修复理解成交易，把 TA 的感受理解成条件清单。',
        followUp: '死亡条件触发：你不是在修复，你是在要求给答案。',
        deathTitle: '复合索要',
        deathReport: '你要的是安抚，TA 感到的是被迫交卷。INFJ 副本最终关失败：你仍然把关系变成了你的确认需求。',
        deathRate: '38%',
        addFlags: ['asked_for_return_terms']
      },
      {
        id: 'D',
        text: '我会先做三件具体的事：不在你要空间时追问、不把旧事叫翻旧账、每周复盘一次我有没有又开始自证。',
        outcome: 'hidden',
        pattern: 'logic',
        effects: { logic: 2, trust: 2, boundaryRespect: 1, empathy: 1 },
        targetReaction: 'TA 回：“这比以前具体。”但也补了一句：“我会看，不会马上信。”',
        systemComment: '系统识别：可观察行动。你没有把逻辑当成说明书，而是把它变成了可检查的改变。',
        followUp: '结局影响：开放观察期结局。如果前面共情不足，仍可能只是普通通关。',
        addFlags: ['observable_plan']
      }
    ],
    successText: '最终关完成。系统正在根据你的旧模式、边界感和情绪安全值生成结局。'
  }
];
