import { motion } from 'framer-motion';
import type { ChallengeOption } from '../types';

interface OptionButtonProps {
  option: ChallengeOption;
  disabled?: boolean;
  onChoose: (option: ChallengeOption) => void;
}

const optionStickers: Record<string, string> = {
  A: '/表情包/月薪喵032.gif',
  B: '/表情包/月薪喵037.gif',
  C: '/表情包/月薪喵120.gif',
  D: '/表情包/月薪喵127.gif',
};

export function OptionButton({ option, disabled = false, onChoose }: OptionButtonProps) {
  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={() => onChoose(option)}
      whileHover={{ scale: 1.01, x: 4 }}
      whileTap={{ scale: 0.98 }}
      className="group flex w-full items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-left transition-colors hover:border-white/20 hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-40 backdrop-blur-sm"
    >
      <div className="relative w-8 h-8 shrink-0 rounded-full bg-white border border-white/20 shadow-md p-0.5 transition-transform group-hover:scale-110">
        <img src={optionStickers[option.id] ?? optionStickers['A']} className="w-full h-full object-contain" alt="" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black bg-gradient-to-br from-violet-500 to-pink-500 text-white border border-[#1a1a2e]">
          {option.id}
        </div>
      </div>
      <span className="text-sm leading-6 text-white/80 group-hover:text-white mt-0.5">{option.text}</span>
    </motion.button>
  );
}
