import { getPersonality } from '../data/personalities';
import type { ChallengeResult } from '../types';
import { getShareText } from '../utils/result';

interface ResultPanelProps {
  result: ChallengeResult;
  onRestart: () => void;
  onHome: () => void;
}

const recommendationMap: Record<string, { title: string; reason: string }> = {
  INFJ: {
    title: '系统推荐：破解 INTJ 防火墙',
    reason: '你刚经历了“感受被接住”的审判。下一站可以试试完全不同的冷启动系统：别卖惨，交方案。'
  },
  INTJ: {
    title: '系统推荐：别被 ENTP 反杀',
    reason: '你刚过完风险评估，现在去一个不按流程出牌的副本，看看你的逻辑会不会被当场拆掉。'
  },
  INFP: {
    title: '系统推荐：挽回 INFJ 挑战',
    reason: '旧梦和旧伤是亲戚。你可以去 INFJ 样板副本里看看“被接住”到底有多难。'
  },
  ENTP: {
    title: '系统推荐：修复 INFP 旧梦',
    reason: '你刚从反杀局出来，建议去一个不能靠抖机灵通关的副本冷静一下。'
  }
};

export function ResultPanel({ result, onRestart, onHome }: ResultPanelProps) {
  const meta = getPersonality(result.type);
  const shareText = getShareText(result);
  const recommendation = recommendationMap[result.type];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareText);
  };

  const isNarrativeEnding = Boolean(result.endingTitle);

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-4 py-10">
      <div className={`w-full rounded-[2rem] border border-white/10 bg-gradient-to-br ${meta?.gradient ?? 'from-slate-800 to-slate-950'} p-6 shadow-danger md:p-8`}>
        <p className="text-sm font-semibold tracking-[0.35em] text-white/50">{result.type} RESULT</p>

        {result.isCleared ? (
          <>
            <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">{result.endingTitle ?? '通关成功'}</h1>
            <p className="mt-4 text-lg leading-8 text-white/80">
              {result.endingReport ?? `你通关了「${result.title}」。系统判定：你没有急着证明自己，也没有把对方当成情绪交卷机。`}
            </p>
            <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm text-white/50">系统评级</p>
              <p className="mt-2 text-3xl font-black text-white">{result.grade ?? 'S：旧模式暂未复发'}</p>
            </div>
          </>
        ) : isNarrativeEnding ? (
          <>
            <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">{result.endingTitle}</h1>
            <div className="mt-5 rounded-3xl border border-amber-300/20 bg-amber-500/10 p-5">
              <p className="text-sm text-amber-100/70">结局报告</p>
              <h2 className="mt-2 text-2xl font-black text-white">{result.grade ?? '残血结局'}</h2>
              <p className="mt-4 text-base leading-8 text-white/80">{result.endingReport}</p>
            </div>
          </>
        ) : (
          <>
            <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">你死于第 {result.level} 关</h1>
            <div className="mt-5 rounded-3xl border border-rose-300/20 bg-rose-500/10 p-5">
              <p className="text-sm text-rose-100/60">死亡原因</p>
              <h2 className="mt-2 text-2xl font-black text-white">{result.deathTitle}</h2>
              <p className="mt-4 text-base leading-8 text-white/80">{result.deathReport}</p>
              <p className="mt-4 text-sm text-white/50">{result.deathRate} 的挑战者死在这里。</p>
            </div>
          </>
        )}

        {result.stateSummary?.length ? (
          <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-white/50">完整死亡档案</p>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/50">已解锁</span>
            </div>
            <div className="mt-3 space-y-2">
              {result.stateSummary.map((item) => (
                <p key={item} className="rounded-2xl bg-white/[0.06] px-4 py-3 text-sm leading-6 text-white/75">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ) : null}

        {recommendation ? (
          <div className="mt-6 rounded-3xl border border-violet-200/15 bg-violet-400/10 p-5">
            <p className="text-sm text-violet-100/60">副本推荐已解锁</p>
            <h3 className="mt-2 text-2xl font-black text-white">{recommendation.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">{recommendation.reason}</p>
            <button type="button" onClick={onHome} className="mt-4 rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 hover:bg-white/85">
              回大厅查看推荐副本
            </button>
          </div>
        ) : null}

        <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-5">
          <p className="text-sm text-white/50">分享文案</p>
          <p className="mt-3 text-sm leading-7 text-white/80">{shareText}</p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <button type="button" onClick={onRestart} className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-950 hover:bg-white/85">
            重开副本
          </button>
          <button type="button" onClick={handleCopy} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white hover:bg-white/15">
            复制文案
          </button>
          <button type="button" onClick={onHome} className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-sm font-bold text-white/80 hover:text-white">
            返回大厅
          </button>
        </div>

        <p className="mt-6 text-xs leading-6 text-white/40">
          本站内容为娱乐向互动创作，不构成心理测评、情感建议或人格诊断。
        </p>
      </div>
    </section>
  );
}
