import { motion } from 'framer-motion';
import type { PersonalityMeta } from '../types';

interface PersonalityCardProps {
  personality: PersonalityMeta;
  onStart: (type: PersonalityMeta['type']) => void;
}

export function PersonalityCard({ personality, onStart }: PersonalityCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${personality.gradient} p-5 shadow-glow`}
    >
      <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70">
        难度 {personality.difficulty}
      </div>

      <div className="mb-8">
        <p className="text-sm font-semibold tracking-[0.35em] text-white/50">{personality.type}</p>
        <h2 className="mt-3 text-2xl font-black text-white">{personality.title}</h2>
        <p className="mt-2 text-sm text-white/70">Boss：{personality.bossName}</p>
      </div>

      <p className="min-h-12 text-base font-medium leading-relaxed text-white/90">{personality.subtitle}</p>
      <p className="mt-4 text-sm leading-6 text-white/60">{personality.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {personality.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
          <p className="text-white/45">通关率</p>
          <p className="mt-1 text-xl font-black text-white">{personality.passRate}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
          <p className="text-white/45">平均死亡</p>
          <p className="mt-1 text-xl font-black text-white">第 {personality.averageDeathLevel} 关</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onStart(personality.type)}
        className="mt-6 w-full rounded-2xl bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-white/85"
      >
        开始挑战
      </button>
    </motion.article>
  );
}
