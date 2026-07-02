import { useMemo, useState } from 'react';
import { personalities } from '../data/personalities';
import { PersonalityCard } from '../components/PersonalityCard';
import type { PersonalityCode, PersonalityType } from '../types';

interface HomePageProps {
  onStart: (type: PersonalityType) => void;
}

export function HomePage({ onStart }: HomePageProps) {
  const [previewType, setPreviewType] = useState<PersonalityCode | null>(null);
  const previewPersonality = useMemo(
    () => personalities.find((item) => item.type === previewType),
    [previewType]
  );
  const opened = personalities.filter((item) => item.releaseStatus === 'sample' || item.releaseStatus === 'open');
  const previews = personalities.filter((item) => item.releaseStatus === 'preview' || item.releaseStatus === 'hidden');

  const handlePreview = (type: PersonalityCode) => {
    setPreviewType(type);
  };

  return (
    <main className="min-h-screen px-4 py-10 text-white md:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-glow backdrop-blur md:p-10">
          <p className="text-sm font-semibold tracking-[0.45em] text-violet-200/70">MBTI DUNGEON</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            你以为你懂 TA？
            <span className="block text-white/45">看看你会死在第几关。</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            选择一个人格 Boss，进入关系副本。这里不做严肃测评，只负责把 16 型人格刻板印象做得足够好玩、足够像、足够让人想转发。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a href="#archive" className="rounded-3xl border border-white/10 bg-white px-5 py-5 text-slate-950 transition hover:bg-white/85">
              <p className="text-sm font-black text-slate-500">我知道自己的类型</p>
              <p className="mt-2 text-2xl font-black">直接选择人格 Boss</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">首发 4 个副本已开放，INFJ 是当前样板副本。</p>
            </a>
            <div className="rounded-3xl border border-violet-200/15 bg-violet-400/10 px-5 py-5">
              <p className="text-sm font-black text-violet-100/70">我不知道自己的类型</p>
              <p className="mt-2 text-2xl font-black text-white">先做前置测试</p>
              <p className="mt-3 text-sm leading-6 text-white/60">
                APESK 评分逻辑已经进入仓库，适合作为娱乐向类型分流。页面入口下一步接上；现在可以先从 INFJ 样板副本体验完整玩法。
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/60">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">死亡报告</span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">人格 Boss</span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">软解锁档案</span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">娱乐向互动内容</span>
          </div>
        </div>

        <section id="archive" className="mt-10">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.35em] text-white/40">OPEN DUNGEONS</p>
              <h2 className="mt-2 text-3xl font-black text-white">已开放副本</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                先把少数副本做深，不一口气把全部内容摊开。这样既能开玩，也有“档案正在展开”的世界观感。
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/60">
              已开放 {opened.length} / 16
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {opened.map((personality) => (
              <PersonalityCard key={personality.type} personality={personality} onStart={onStart} onPreview={handlePreview} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.35em] text-white/40">ARCHIVE PREVIEW</p>
              <h2 className="mt-2 text-3xl font-black text-white">未开放档案</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                不是锁死内容，而是让用户看到这个世界还很大。点击“想玩这个”可以制造呼声感，后面用点击热度决定优先制作哪个副本。
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/60">
              档案预告 {previews.length} 个
            </div>
          </div>

          {previewPersonality ? (
            <div className="mt-5 rounded-[2rem] border border-amber-300/20 bg-amber-400/10 p-5">
              <p className="text-sm font-bold text-amber-100/80">已记录你的呼声</p>
              <h3 className="mt-2 text-2xl font-black text-white">{previewPersonality.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                系统已把「{previewPersonality.type}」加入待开放热度池。这个按钮现在不强迫分享、不收费，只负责让用户感觉自己参与了副本开放顺序。
              </p>
            </div>
          ) : null}

          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {previews.map((personality) => (
              <PersonalityCard key={personality.type} personality={personality} onStart={onStart} onPreview={handlePreview} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
