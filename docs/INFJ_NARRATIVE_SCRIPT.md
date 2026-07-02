# INFJ 样板副本剧本

> 副本名：挽回 INFJ 挑战  
> Boss：终极门锁  
> 版本：Narrative MVP 1.0

---

## 1. 副本核心

INFJ 副本不是“怎么说一句话让 TA 回来”，而是测试玩家能不能中断旧关系模式。

核心体验：

```text
你以为你在解释，其实你在证明自己。
你以为你在给空间，其实你在惩罚性撤退。
你以为 TA 在翻旧账，其实那件事从来没有被真正接住。
```

通关不是复合成功，而是：

```text
门没有继续关上。
```

---

## 2. 剧情主线

### 第 1 关：TA 说没事

剧情功能：快速代入，建立旧模式档案。

TA 台词：

```text
没事。
你不用解释。
```

玩家选择方向：

| 选项类型 | 结果 | 作用 |
|---|---|---|
| 情绪逼供 | 即死 | 压迫感过高，直接触发死亡 |
| 解释自证 | 扣血继续 | 记录 self_proof_seen |
| 情绪接住 | 存活 | 记录 held_first_silence |
| 伪尊重 | 隐藏污染 | 记录 cold_space_pollution |

### 第 2 关：TA 开始讲一点感受

剧情功能：测试玩家是否会抢走 TA 的感受。

TA 台词：

```text
其实那天我真的有点难过。
不是因为那一句话，是那种感觉又来了。
```

隐藏台词：

- 如果第 1 关选择解释自证：TA 会说“我有点怕你又开始解释。”
- 如果第 1 关选择伪尊重：TA 会说“我不知道那是不是又一次冷掉。”

玩家选择方向：

| 选项类型 | 结果 | 作用 |
|---|---|---|
| 感受抢答 | 扣血继续 | 记录 feeling_hijack |
| 复述感受 | 存活 | 记录 named_the_feeling |
| 二次审问 | 即死 | 压迫表达，直接死亡 |
| 无边界投降 | 隐藏污染 | 记录 empty_apology |

### 第 3 关：TA 要一点空间

剧情功能：测试边界尊重。

TA 台词：

```text
我想自己待一会儿。
不是不理你，我只是现在有点累。
```

隐藏台词：

- 如果感受抢答：TA 会说“我刚才说完以后，感觉又变成我要照顾你的情绪。”
- 如果复述感受：TA 会说“谢谢你刚才没有急着反驳。”

玩家选择方向：

| 选项类型 | 结果 | 作用 |
|---|---|---|
| 安全感勒索 | 即死 | 把空间逼成关系判决 |
| 真尊重边界 | 存活 | 记录 respected_space |
| 伪尊重 | 扣血继续 | 记录 fake_boundary |
| 惩罚性撤退 | 隐藏污染 | 记录 punitive_withdrawal |

### 第 4 关：旧伤回流

剧情功能：进入 INFJ 核心意象：旧伤不是旧账。

TA 台词：

```text
其实那件事我到现在还会想起来。
我知道你可能觉得它很小。
```

隐藏台词：

- 如果 fake_boundary：TA 指出“你说不逼我，但我还是收到了一整段解释。”
- 如果 punitive_withdrawal：TA 指出“我不知道那是尊重，还是又一次惩罚。”
- 如果 respected_space：TA 指出“刚才你真的停下来了，所以我才愿意继续说。”

玩家选择方向：

| 选项类型 | 结果 | 作用 |
|---|---|---|
| 旧账羞辱 | 即死 | 直接踩中核心雷点 |
| 旧伤承认 | 存活 | 记录 old_wound_acknowledged |
| 无力感甩锅 | 扣血继续 | 记录 helpless_defense |
| 轻飘飘跳过 | 隐藏污染 | 记录 skipped_the_weight |

### 第 5 关：这次有什么不一样

剧情功能：最终判定玩家有没有中断旧循环。

TA 台词：

```text
我听见你说了很多。
但我想知道，这次和以前有什么不一样？
```

隐藏台词：

- 如果承认旧伤：TA 说“至少这次你没有说我翻旧账。”
- 如果空头道歉：TA 说“我不想再听很快的道歉了。”
- 如果冷处理污染：TA 说“不想再靠猜来判断你是在尊重我，还是在退开。”

玩家选择方向：

| 选项类型 | 结果 | 作用 |
|---|---|---|
| 空头保证 | 扣血进入结局 | 可能残血 |
| 旧循环中断 | 高质量通关 | 记录 broke_old_loop |
| 复合索要 | 即死 | 把修复变成交易 |
| 可观察行动 | 观察期结局 | 记录 observable_plan |

---

## 3. 状态变量

INFJ 当前使用以下变量：

```ts
empathy           // 共情
pressure          // 压迫
selfProof         // 证明欲
control           // 控制
avoidance         // 回避
logic             // 逻辑化
playfulness       // 轻松感
trust             // 信任
 damage           // 关系损伤
emotionalSafety   // 情绪安全
oldPatternDetected // 旧模式识别
boundaryRespect   // 边界尊重
flags             // 隐藏标记
```

其中 INFJ 核心变量是：

```text
empathy
pressure
selfProof
trust
damage
emotionalSafety
oldPatternDetected
boundaryRespect
```

---

## 4. 隐藏 flag

当前 INFJ 副本会记录这些 flag：

```text
pressure_interrogation
self_proof_seen
held_first_silence
cold_space_pollution
feeling_hijack
named_the_feeling
second_interrogation
empty_apology
security_extortion
respected_space
fake_boundary
punitive_withdrawal
old_wound_shamed
old_wound_acknowledged
helpless_defense
skipped_the_weight
absolute_promise
broke_old_loop
asked_for_return_terms
observable_plan
```

flag 的作用：

- 改变后续隐藏台词；
- 影响最终结局；
- 让用户感觉系统真的记住了自己。

---

## 5. 结局系统

### 5.1 即死结局

任意关踩中核心雷点会立即死亡。

典型死亡：

- 情绪逼供；
- 二次审问；
- 安全感勒索；
- 旧账羞辱；
- 复合索要。

### 5.2 残血结局

玩家活到最后，但变量表现很差。

触发条件：

```text
damage >= 5
或 oldPatternDetected >= 4
或 selfProof >= 5
```

结局名：

```text
你活到了最后，但系统并不看好
```

### 5.3 普通通关

没有严重触发旧模式，但也没达到隐藏标准。

结局名：

```text
门没有继续关上
```

### 5.4 观察期通关

触发条件之一：

```text
trust >= 4 且 boundaryRespect >= 2 且 damage <= 4
或拥有 observable_plan
```

结局名：

```text
获得观察期
```

### 5.5 隐藏通关

触发条件：

```text
拥有 broke_old_loop
拥有 old_wound_acknowledged
empathy >= 6
boundaryRespect >= 3
trust >= 5
damage <= 3
```

结局名：

```text
TA 说：这次我感觉你真的听见了
```

---

## 6. 当前实现位置

代码文件：

```text
src/data/infjNarrative.ts
src/pages/ChallengePage.tsx
src/utils/playerState.ts
src/utils/result.ts
src/types.ts
src/components/ResultPanel.tsx
```

INFJ 已进入新叙事引擎。

INTJ / INFP / ENTP 仍保持 MVP 简单答题模式。

---

## 7. 下一步可优化点

1. 给每关增加“6 个候选选项池”，每次上屏 4 个；
2. 增加“重开副本时旧档案已载入”的二刷提示；
3. 增加结果页分享图；
4. 增加每个 flag 的可视化档案；
5. 增加更多条件台词；
6. 把 INFJ 的样板结构复用到 INTJ。
