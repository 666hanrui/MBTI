import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  damageCount?: number;
  bossName?: string;
}

export interface SanityState {
  sticker: string;
  label: string;
  color: string;
  glowColor: string;
  barColor: string;
}

export const getSanityState = (damageCount: number): SanityState => {
  if (damageCount <= 0) return {
    sticker: '/stickers/月薪喵117.gif',
    label: '理智清醒 · 得体微笑中',
    color: '#07c160',
    glowColor: 'rgba(7, 193, 96, 0.4)',
    barColor: 'linear-gradient(90deg, #07c160, #06ad56)',
  };
  if (damageCount === 1) return {
    sticker: '/stickers/月薪喵092.gif',
    label: '微微皱眉 · 你最好有合理解释',
    color: '#ffd000',
    glowColor: 'rgba(255, 208, 0, 0.4)',
    barColor: 'linear-gradient(90deg, #ffd000, #ff6b35)',
  };
  if (damageCount === 2) return {
    sticker: '/stickers/月薪喵050.gif',
    label: '逐渐暴躁 · 建议你想清楚再说',
    color: '#ff6b35',
    glowColor: 'rgba(255, 107, 53, 0.4)',
    barColor: 'linear-gradient(90deg, #ff6b35, #ff2d78)',
  };
  if (damageCount === 3) return {
    sticker: '/stickers/月薪喵051.gif',
    label: '委屈到变形 · 你怎么还在这',
    color: '#ff2d78',
    glowColor: 'rgba(255, 45, 120, 0.5)',
    barColor: 'linear-gradient(90deg, #ff2d78, #a855f7)',
  };
  if (damageCount === 4) return {
    sticker: '/stickers/月薪喵156.gif',
    label: '精神状态危险 · 请立即停止发言',
    color: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.5)',
    barColor: 'linear-gradient(90deg, #a855f7, #ff2d78)',
  };
  return {
    sticker: '/stickers/月薪喵020.gif',
    label: '理智值归零 · 已对你启动 Door Slam',
    color: '#ff3b5c',
    glowColor: 'rgba(255, 59, 92, 0.6)',
    barColor: 'linear-gradient(90deg, #ff3b5c, #000)',
  };
};

export function ProgressBar({ current, total, damageCount = 0, bossName = 'INFJ Boss' }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100);
  const sanity = useMemo(() => getSanityState(damageCount), [damageCount]);
  const sanityPercent = Math.max(0, 100 - damageCount * 20);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={sanity.sticker}
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="relative"
          >
            <div
              className="w-14 h-14 rounded-full overflow-hidden border-2 shadow-lg bg-white p-1"
              style={{ borderColor: sanity.color, boxShadow: `0 0 20px ${sanity.glowColor}` }}
            >
              <img src={sanity.sticker} alt="Boss" className="w-full h-full object-contain scale-110" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-[#0a0a0f]" style={{ background: sanity.color }} />
          </motion.div>
        </AnimatePresence>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-sm font-bold text-white/90 truncate">{bossName}</p>
              <motion.p key={sanity.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-xs truncate mt-0.5" style={{ color: sanity.color }}>
                {sanity.label}
              </motion.p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs text-white/40">进度</p>
              <p className="text-sm font-black text-white">{current}/{total}</p>
            </div>
          </div>
          <div className="mt-2 relative">
            <div className="h-2 rounded-full bg-white/[0.08] overflow-hidden">
              <motion.div className="h-full rounded-full" style={{ background: sanity.barColor }} initial={{ width: '100%' }} animate={{ width: `${sanityPercent}%` }} transition={{ duration: 0.8, ease: 'easeOut' }} />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-white/30">理智值</span>
              <span className="text-[10px] font-bold" style={{ color: sanity.color }}>{sanityPercent}%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div className="h-full rounded-full bg-gradient-to-r from-violet-500/60 to-cyan-500/60" initial={false} animate={{ width: `${percent}%` }} transition={{ duration: 0.5 }} />
      </div>
    </div>
  );
}
