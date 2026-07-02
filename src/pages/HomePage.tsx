import { personalities } from '../data/personalities';
import { PersonalityCard } from '../components/PersonalityCard';
import type { PersonalityType } from '../types';

interface HomePageProps {
  onStart: (type: PersonalityType) => void;
}

export function HomePage({ onStart }: HomePageProps) {
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

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/60">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">死亡报告</span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">人格 Boss</span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">关系场景选择题</span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">娱乐向互动内容</span>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {personalities.map((personality) => (
            <PersonalityCard key={personality.type} personality={personality} onStart={onStart} />
          ))}
        </div>
      </section>
    </main>
  );
}
