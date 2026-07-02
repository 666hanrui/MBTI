# 16 型人格副本馆

一个娱乐向 16 型人格互动闯关网站。用户选择一个人格 Boss，通过关系场景选择题进行挑战，系统根据选择给出死亡报告、通关结果和分享文案。

> 这不是严肃 MBTI 测评，也不是情感建议工具。它是一个“人格刻板印象 + 关系场景 + 游戏副本 + 死亡报告”的互动娱乐网站。

## 当前版本

当前版本采用“全站可见，但不是全站可玩”的软解锁策略：

- **已开放副本 4 个**：INFJ / INTJ / INFP / ENTP；
- **档案预告 12 个**：其余人格展示副本名、Boss、简介和“想玩这个”按钮；
- 不登录、不收费、不强制分享；
- 结果页会展示“完整死亡档案”和“副本推荐已解锁”，引导用户自然回到大厅继续玩。

当前 MVP 已包含 4 个首发人格副本：

- **INFJ：挽回 INFJ 挑战**（已升级为叙事样板副本）
- **INTJ：破解 INTJ 防火墙**
- **INFP：修复 INFP 旧梦**
- **ENTP：别被 ENTP 反杀**

INFJ 当前已包含：

- 5 关连续剧情主线；
- 选择后即时反馈：TA 的反应、系统识别、后续影响；
- 状态变量：共情、压迫、证明欲、信任、损伤、边界尊重等；
- 隐藏 flag：前面选项会影响后续台词；
- 多结局：即死、残血、普通通关、观察期、隐藏通关。

其他人格目前仍保持简单 MVP 玩法：

- 4 个关系场景关卡；
- 4 个选项；
- 错误选项死亡报告；
- 正确选项进入下一关；
- 通关结果；
- 分享文案复制。

## MBTI 前置测试逻辑

仓库新增了 APESK 公开测试页的前置人格测试题目和可验证评分逻辑，作为后续「不知道自己类型就先测一下」的入口条件。

它不是官方 APESK / MBTI 工具，也不要包装成专业心理测评。当前逻辑来自公开页面与公开报告结果的反向校验，适合做娱乐向类型分流。

当前反推结论：

- 公开测试页：`https://www.apesk.com/p/main0519.asp`
- 前端公开了 104 个 `a1..a104` 二元答案。
- `a104` 是性别题，不参与人格维度计分。
- 服务器报告公开显示 6 组维度：
  - `EI`：外向型 / 内向型，20 个计分项
  - `SN`：直觉型 / 现实型，24 个计分项
  - `TF`：逻辑型 / 感受型，23 个计分项
  - `JP`：计划型 / 展望型，24 个计分项
  - `AO`：果断型A / 纠结型O，7 题查表
  - `HC`：高冷C / 温暖H，5 题查表
- 平局规则已用公开报告校验：
  - `EI` 50/50 时最终取 `I`
  - `SN` 50/50 时最终取 `N`
  - `JP` 50/50 时最终取 `P`

关键文件：

- `data/apeskLogic.json`：可直接用于本地评分的紧凑逻辑文件
- `src/apeskScoring.mjs`：纯 JS 本地 scorer
- `tests/apeskScoring.test.mjs`：本地单元测试
- `analysis/apesk_scoring_map.md`：104 题 one-flip 反推表
- `analysis/apesk_special_axes_map.md`：A/O 与 C/H 扩展轴穷举查表
- `scripts/scrape_apesk_mbti.py`：抓取公开入口页和题目页
- `scripts/probe_apesk_scoring.py`：逐题 one-flip 探测
- `scripts/probe_apesk_special_axes.py`：扩展轴穷举探测
- `scripts/build_apesk_logic.py`：把探测结果压成 `data/apeskLogic.json`
- `scripts/validate_apesk_logic.mjs`：提交固定随机答案到公开接口，与本地 scorer 对照

逻辑测试：

```bash
npm run test:logic
```

公开接口对照验证：

```bash
npm run validate:apesk
```

最近一次公开接口验证通过：

- seed 7: `ESFJ-A-H`
- seed 23: `INFJ-O-H`
- seed 42: `INTJ-O-C`
- seed 91: `INFP-A-C`
- seed 2026: `ESFJ-A-C`

## 技术栈

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion

## 本地运行

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
```

预览构建产物：

```bash
npm run preview
```

## 目录结构

```text
MBTI/
  docs/
    PROJECT_DOCUMENTATION.md
    GAME_DESIGN_BIBLE.md
    STEREOTYPE_RESEARCH_FRAMEWORK.md
    INFJ_NARRATIVE_SCRIPT.md
    SOFT_UNLOCK_GROWTH_STRATEGY.md
  src/
    components/
      ChatBubble.tsx
      OptionButton.tsx
      PersonalityCard.tsx
      ProgressBar.tsx
      ResultPanel.tsx
    data/
      challenges.ts
      infjNarrative.ts
      personalities.ts
    pages/
      ChallengePage.tsx
      HomePage.tsx
      ResultPage.tsx
    styles/
      globals.css
    utils/
      playerState.ts
      result.ts
    App.tsx
    main.tsx
    types.ts
```

## 核心玩法

```text
首页双入口：知道类型 / 不知道类型先测
  ↓
进入副本大厅
  ↓
已开放副本：直接挑战
档案预告：记录“想玩这个”呼声
  ↓
选择回应方式
  ↓
INFJ：系统记录变量、flag 和旧模式
其他人格：选错死亡，选对进入下一关
  ↓
生成死亡报告 / 残血结局 / 通关结局
  ↓
结果页解锁完整死亡档案与推荐副本
```

## 内容扩展方式

新增普通人格或关卡主要改两个文件：

```text
src/data/personalities.ts
src/data/challenges.ts
```

升级为叙事副本时，建议单独建立对应文件：

```text
src/data/<type>Narrative.ts
```

`personalities.ts` 负责人格卡片信息：

- 人格代号；
- 副本名称；
- Boss 称号；
- 难度；
- 通关率；
- 标签；
- 视觉渐变；
- 释放状态：sample / open / preview / hidden；
- 软解锁提示。

普通 `challenges.ts` 负责基础题目内容；叙事副本题目额外支持：

- outcome：death / survive / damage / hidden；
- pattern：玩家行为模式；
- effects：变量变化；
- targetReaction：TA 的即时反应；
- systemComment：系统识别；
- followUp：后续影响；
- addFlags：隐藏标记。

## 项目文档

完整技术与产品说明见：

```text
docs/PROJECT_DOCUMENTATION.md
docs/GAME_DESIGN_BIBLE.md
docs/STEREOTYPE_RESEARCH_FRAMEWORK.md
docs/INFJ_NARRATIVE_SCRIPT.md
docs/SOFT_UNLOCK_GROWTH_STRATEGY.md
```

## 免责声明

本站内容为娱乐向互动创作，不构成心理测评、情感建议或人格诊断。请勿将结果作为真实关系决策依据。APESK 的服务端源码没有公开；本仓库中的前置测试逻辑不是复制服务端源码，而是基于公开表单与公开报告结果反推出的可运行评分逻辑。
