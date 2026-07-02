import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StickerSlamProps {
  show: boolean;
  stickerSrc?: string;
  criticalText?: string;
  mode?: 'damage' | 'heal' | 'death';
  onComplete?: () => void;
}

const defaultDamageTexts = [
  '对方血压 +999',
  '对方已破防并向你扔了一只猫',
  '精神伤害 x999',
  '已触发 Door Slam 协议'
];

const defaultHealTexts = [
  '对方觉得你很懂',
  '好感度 +1',
  'TA 默默给你点了个赞',
  '情绪价值拉满'
];

export function StickerSlam({ show, stickerSrc, criticalText, mode = 'damage', onComplete }: StickerSlamProps) {
  const [displayText, setDisplayText] = useState('');
  const [floatingTexts, setFloatingTexts] = useState<Array<{ id: number; text: string; x: number; y: number }>>([]);

  useEffect(() => {
    if (show) {
      const texts = mode === 'heal' ? defaultHealTexts : defaultDamageTexts;
      const text = criticalText || texts[Math.floor(Math.random() * texts.length)];
      setDisplayText(text);
      
      const isHeal = mode === 'heal';
      const floatWords = isHeal ? ['+1', '💖', '懂我', '舒服', '赞'] : ['-999', '💀', '破防', '暴击', 'GG'];
      
      const newFloats = Array.from({ length: 5 }, (_, i) => ({
        id: Date.now() + i,
        text: floatWords[i],
        x: 20 + Math.random() * 60,
        y: 30 + Math.random() * 40,
      }));
      setFloatingTexts(newFloats);
      const timer = setTimeout(() => { onComplete?.(); }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, criticalText, mode, onComplete]);

  const isHeal = mode === 'heal';
  const colorPrimary = isHeal ? '#07c160' : '#ff2d78';
  const colorSecondary = isHeal ? '#06ad56' : '#ff6b35';
  const colorGlow = isHeal ? 'rgba(7, 193, 96, 0.4)' : 'rgba(255, 45, 120, 0.4)';

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)' }}
        >
          {stickerSrc && (
            <motion.div
              initial={{ scale: 0, rotate: -30, y: -200 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
              className={`w-48 h-48 md:w-64 md:h-64 bg-white rounded-full p-3 shadow-2xl flex items-center justify-center border-4`}
              style={{ borderColor: colorPrimary }}
            >
              <img
                src={stickerSrc}
                alt="Sticker"
                className="w-full h-full object-contain scale-110"
              />
            </motion.div>
          )}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 12, delay: 0.4 }}
            className="mt-6 px-8 py-4 rounded-2xl text-center"
            style={{ background: `linear-gradient(135deg, ${colorPrimary}, ${colorSecondary})`, boxShadow: `0 0 60px ${colorGlow}` }}
          >
            <p className="text-2xl md:text-3xl font-black text-white tracking-wider">{displayText}</p>
          </motion.div>
          {floatingTexts.map((item) => (
            <motion.span
              key={item.id}
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{ opacity: 0, y: -120, scale: 1.5 }}
              transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 + Math.random() * 0.5 }}
              className="fixed text-2xl font-black"
              style={{ left: `${item.x}%`, top: `${item.y}%`, color: colorPrimary, textShadow: `0 0 20px ${colorGlow}` }}
            >
              {item.text}
            </motion.span>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
