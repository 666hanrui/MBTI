import { getPersonality } from '../data/personalities';
import type { ChallengeResult } from '../types';
import { getShareText } from '../utils/result';

interface ResultPanelProps {
  result: ChallengeResult;
  onRestart: () => void;
  onHome: () => void;
}

export function ResultPanel({ result, onRestart, onHome }: ResultPanelProps) {
  const meta = getPersonality(result.type);
  const shareText = getShareText(result);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareText);
  };

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-4 py-10">
      <div className={`w-full rounded-[2rem] border border-white/10 bg-gradient-to-br ${meta?.gradient ?? 'from-slate-800 to-slate-950'} p-6 shadow-danger md:p-8`}>
        <p className="text-sm font-semibold tracking-[0.35em] text-white/50">{result.type} RESULT</p>

        {result.isCleared ? (
          <>
            <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">通关成功</h1>
            <p className="mt-4 text-lg leading-8 text-white/80">
              你通关了「{result.title}」。系统判定：你没有急着证明自己，也没有把对方当成情绪交卷机。
            </p>
            <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm text-white/50">通关等级</p>
              <p className="mt-2 text-3xl font-black text-white">S：旧模式暂未复发</p>
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

        <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-5">
          <p className="text-sm text-white/50">分享文案</p>
          <p className="mt-3 text-sm leading-7 text-white/80">{shareText}</p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <button type="button" onClick={onRestart} className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-950 hover:bg-white/85">
            重新挑战
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
