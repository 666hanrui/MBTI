import { useMemo, useState } from 'react';
import { ChatBubble } from '../components/ChatBubble';
import { OptionButton } from '../components/OptionButton';
import { ProgressBar } from '../components/ProgressBar';
import { getChallengeQuestions } from '../data/challenges';
import { infjNarrativeQuestions } from '../data/infjNarrative';
import { getPersonality } from '../data/personalities';
import type { ChallengeOption, ChallengeResult, ChoiceFeedback, NumericPlayerState, PersonalityType, PlayerState } from '../types';
import { buildClearResult, buildDeathResult } from '../utils/result';
import { applyOptionToState, hasAllFlags, initialPlayerState } from '../utils/playerState';

interface ChallengePageProps {
  type: PersonalityType;
  onBack: () => void;
  onResult: (result: ChallengeResult) => void;
}

const getOutcome = (option: ChallengeOption) => {
  if (option.outcome) return option.outcome;
  return option.isCorrect ? 'survive' : 'death';
};

const getConditionalLines = (state: PlayerState, question: ReturnType<typeof getChallengeQuestions>[number]) => {
  if (!question.conditionalLines?.length) return [];

  return question.conditionalLines.filter((line) => {
    const flagMatched = line.whenFlags ? hasAllFlags(state, line.whenFlags) : true;
    const stateMatched = line.when
      ? (Object.entries(line.when) as Array<[keyof NumericPlayerState, number]>).every(([key, value]) => {
          const current = state[key];
          return value >= 0 ? current >= value : current <= value;
        })
      : true;

    return flagMatched && stateMatched;
  });
};

export function ChallengePage({ type, onBack, onResult }: ChallengePageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<ChoiceFeedback | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>(initialPlayerState);

  const personality = getPersonality(type);
  const questions = useMemo(() => (type === 'INFJ' ? infjNarrativeQuestions : getChallengeQuestions(type)), [type]);
  const question = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const conditionalLines = getConditionalLines(playerState, question);
  const isNarrativeMode = type === 'INFJ';

  const handleChoose = (option: ChallengeOption) => {
    const outcome = getOutcome(option);
    const nextState = applyOptionToState(playerState, option);

    if (outcome === 'death') {
      onResult(
        buildDeathResult({
          type,
          title: personality?.title ?? `${type} 挑战`,
          option,
          level: question.level,
          correctCount: currentIndex,
          totalCount: questions.length,
          state: nextState
        })
      );
      return;
    }

    const nextFeedback: ChoiceFeedback = {
      targetReaction: option.targetReaction ?? question.successText,
      systemComment: option.systemComment ?? '系统识别：暂时存活。你没有踩中本关核心死亡点。',
      followUp: option.followUp,
      pattern: option.pattern,
      outcome
    };

    setPlayerState(nextState);

    if (isLastQuestion) {
      onResult(buildClearResult({ type, totalCount: questions.length, state: nextState }));
      return;
    }

    setFeedback(nextFeedback);
  };

  const handleNext = () => {
    setFeedback(null);
    setCurrentIndex((value) => value + 1);
  };

  return (
    <main className="min-h-screen px-4 py-8 text-white md:px-8">
      <section className="mx-auto max-w-3xl">
        <button type="button" onClick={onBack} className="mb-5 text-sm text-white/50 transition hover:text-white">
          ← 返回副本大厅
        </button>

        <div className={`rounded-[2rem] border border-white/10 bg-gradient-to-br ${personality?.gradient ?? 'from-slate-800 to-slate-950'} p-5 shadow-glow md:p-8`}>
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.35em] text-white/45">{type} CHALLENGE</p>
              <h1 className="mt-3 text-3xl font-black md:text-5xl">{personality?.title}</h1>
              <p className="mt-2 text-sm text-white/55">Boss：{personality?.bossName}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 px-3 py-2 text-right text-xs text-white/60">
              <p>{isNarrativeMode ? '记忆模式' : '通关率'}</p>
              <p className="text-lg font-black text-white">{isNarrativeMode ? 'ON' : personality?.passRate}</p>
            </div>
          </div>

          <ProgressBar current={question.level} total={questions.length} />

          {isNarrativeMode ? (
            <div className="mt-5 grid grid-cols-3 gap-2 text-xs text-white/55">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <p>共情</p>
                <p className="mt-1 text-lg font-black text-white">{playerState.empathy}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <p>压迫</p>
                <p className="mt-1 text-lg font-black text-white">{playerState.pressure}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <p>旧模式</p>
                <p className="mt-1 text-lg font-black text-white">{playerState.oldPatternDetected}</p>
              </div>
            </div>
          ) : null}

          <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-5">
            <p className="text-sm text-white/45">第 {question.level} 关</p>
            <h2 className="mt-2 text-2xl font-black">{question.title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/65">{question.scene}</p>

            <div className="mt-6 space-y-3">
              {question.messages.map((message, index) => (
                <ChatBubble key={`${message.content}-${index}`} message={message} />
              ))}
            </div>

            {conditionalLines.length ? (
              <div className="mt-5 space-y-2">
                {conditionalLines.map((line) => (
                  <div key={line.content} className="rounded-2xl border border-violet-200/15 bg-violet-400/10 px-4 py-3 text-sm leading-6 text-violet-50/80">
                    {line.content}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-black">{question.question}</h3>
            <div className="mt-4 grid gap-3">
              {question.options.map((option) => (
                <OptionButton key={option.id} option={option} disabled={Boolean(feedback)} onChoose={handleChoose} />
              ))}
            </div>
          </div>

          {feedback ? (
            <div className={`mt-6 rounded-3xl border p-5 ${feedback.outcome === 'damage' ? 'border-amber-300/20 bg-amber-400/10' : 'border-emerald-300/20 bg-emerald-400/10'}`}>
              <p className="text-sm font-bold text-white/80">{feedback.outcome === 'damage' ? '扣血存活' : feedback.outcome === 'hidden' ? '隐藏污染已记录' : '暂时存活'}</p>
              <p className="mt-3 text-sm leading-7 text-white/75">{feedback.targetReaction}</p>
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs text-white/45">系统记录</p>
                <p className="mt-2 text-sm leading-7 text-white/75">{feedback.systemComment}</p>
                {feedback.followUp ? <p className="mt-2 text-sm leading-7 text-white/55">{feedback.followUp}</p> : null}
              </div>
              <button type="button" onClick={handleNext} className="mt-4 rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 hover:bg-white/85">
                进入下一关
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
