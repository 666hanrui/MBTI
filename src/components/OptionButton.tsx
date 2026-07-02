import type { ChallengeOption } from '../types';

interface OptionButtonProps {
  option: ChallengeOption;
  disabled?: boolean;
  onChoose: (option: ChallengeOption) => void;
}

export function OptionButton({ option, disabled = false, onChoose }: OptionButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onChoose(option)}
      className="group flex w-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-left transition hover:border-white/30 hover:bg-white/[0.1] disabled:cursor-not-allowed disabled:opacity-60"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-slate-950">
        {option.id}
      </span>
      <span className="text-sm leading-6 text-white/85 group-hover:text-white">{option.text}</span>
    </button>
  );
}
