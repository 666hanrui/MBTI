import { motion } from 'framer-motion';
import type { PersonalityCode, PersonalityMeta, PersonalityType } from '../types';

interface PersonalityCardProps {
  personality: PersonalityMeta;
  onStart: (type: PersonalityType) => void;
  onPreview: (type: PersonalityCode) => void;
}

const playableStatuses = ['sample', 'open'];

export function PersonalityCard({ personality, onStart, onPreview }: PersonalityCardProps) {
  const isPlayable = playableStatuses.includes(personality.releaseStatus);
  const isSample = personality.releaseStatus === 'sample';

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={`relative overflow-hidden rounded-[2rem] border ${isPlayable ? 'border-white/10 shadow-glow' : 'border-white/5 opacity-85'} bg-gradient-to-br ${personality.gradient} p-5`}
    >
      <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70">
        {personality.statusLabel}
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
          <p className="text-white/45">难度</p>
          <p className="mt-1 text-xl font-black text-white">{personality.difficulty}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
          <p className="text-white/45">平均死亡</p>
          <p className="mt-1 text-xl font-black text-white">第 {personality.averageDeathLevel} 关</p>
        </div>
      </div>

      {personality.unlockHint ? (
        <p className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs leading-5 text-white/55">
          {personality.unlockHint}
        </p>
      ) : null}

      <button
        type="button"
        onClick={() => (isPlayable ? onStart(personality.type as PersonalityType) : onPreview(personality.type))}
        className={`mt-6 w-full rounded-2xl px-4 py-3 text-sm font-black transition ${
          isPlayable ? 'bg-white text-slate-950 hover:bg-white/85' : 'border border-white/15 bg-white/10 text-white hover:bg-white/15'
        }`}
      >
        {isSample ? '进入样板副本' : personality.ctaLabel}
      </button>
    </motion.article>
  );
}
