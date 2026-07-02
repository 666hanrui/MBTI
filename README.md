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

本站内容为娱乐向互动创作，不构成心理测评、情感建议或人格诊断。请勿将结果作为真实关系决策依据。
