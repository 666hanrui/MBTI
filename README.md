# 16 型人格副本馆

一个娱乐向 16 型人格互动闯关网站。用户选择一个人格 Boss，通过关系场景选择题进行挑战，系统根据选择给出死亡报告、通关结果和分享文案。

> 这不是严肃 MBTI 测评，也不是情感建议工具。它是一个“人格刻板印象 + 关系场景 + 游戏副本 + 死亡报告”的互动娱乐网站。

## 当前版本

当前 MVP 已包含 4 个首发人格副本：

- **INFJ：挽回 INFJ 挑战**
- **INTJ：破解 INTJ 防火墙**
- **INFP：修复 INFP 旧梦**
- **ENTP：别被 ENTP 反杀**

每个副本目前包含：

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
  src/
    components/
      ChatBubble.tsx
      OptionButton.tsx
      PersonalityCard.tsx
      ProgressBar.tsx
      ResultPanel.tsx
    data/
      challenges.ts
      personalities.ts
    pages/
      ChallengePage.tsx
      HomePage.tsx
      ResultPage.tsx
    styles/
      globals.css
    utils/
      result.ts
    App.tsx
    main.tsx
    types.ts
```

## 核心玩法

```text
首页选择人格 Boss
  ↓
进入对应人格副本
  ↓
阅读关系场景
  ↓
选择回应方式
  ↓
选错：进入死亡报告
选对：进入下一关
  ↓
全部通过：生成通关结果
```

## 内容扩展方式

新增人格或关卡主要改两个文件：

```text
src/data/personalities.ts
src/data/challenges.ts
```

`personalities.ts` 负责人格卡片信息：

- 人格代号；
- 副本名称；
- Boss 称号；
- 难度；
- 通关率；
- 标签；
- 视觉渐变。

`challenges.ts` 负责题目内容：

- 场景；
- 聊天气泡；
- 问题；
- 四个选项；
- 正确答案；
- 死亡标题；
- 死亡报告；
- 死亡率。

## 项目文档

完整技术与产品说明见：

```text
docs/PROJECT_DOCUMENTATION.md
```

## 免责声明

本站内容为娱乐向互动创作，不构成心理测评、情感建议或人格诊断。请勿将结果作为真实关系决策依据。APESK 的服务端源码没有公开；本仓库中的前置测试逻辑不是复制服务端源码，而是基于公开表单与公开报告结果反推出的可运行评分逻辑。
