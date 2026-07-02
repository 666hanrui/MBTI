import { useMemo, useState } from 'react';
import { ChatBubble } from '../components/ChatBubble';
import { OptionButton } from '../components/OptionButton';
import { ProgressBar } from '../components/ProgressBar';
import { getChallengeQuestions } from '../data/challenges';
import { getPersonality } from '../data/personalities';
import type { ChallengeOption, ChallengeResult, PersonalityType } from '../types';
import { buildClearResult, buildDeathResult } from '../utils/result';

interface ChallengePageProps {
  type: PersonalityType;
  onBack: () => void;
  onResult: (result: ChallengeResult) => void;
}

export function ChallengePage({ type, onBack, onResult }: ChallengePageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [successText, setSuccessText] = useState<string | null>(null);

  const personality = getPersonality(type);
  const questions = useMemo(() => getChallengeQuestions(type), [type]);
  const question = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleChoose = (option: ChallengeOption) => {
    if (!option.isCorrect) {
      onResult(
        buildDeathResult({
          type,
          title: personality?.title ?? `${type} 挑战`,
          option,
          level: question.level,
          correctCount: currentIndex,
          totalCount: questions.length
        })
      );
      return;
    }

    if (isLastQuestion) {
      onResult(buildClearResult({ type, totalCount: questions.length }));
      return;
    }

    setSuccessText(question.successText);
  };

  const handleNext = () => {
    setSuccessText(null);
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
              <p>通关率</p>
              <p className="text-lg font-black text-white">{personality?.passRate}</p>
            </div>
          </div>

          <ProgressBar current={question.level} total={questions.length} />

          <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-5">
            <p className="text-sm text-white/45">第 {question.level} 关</p>
            <h2 className="mt-2 text-2xl font-black">{question.title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/65">{question.scene}</p>

            <div className="mt-6 space-y-3">
              {question.messages.map((message, index) => (
                <ChatBubble key={`${message.content}-${index}`} message={message} />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-black">{question.question}</h3>
            <div className="mt-4 grid gap-3">
              {question.options.map((option) => (
                <OptionButton key={option.id} option={option} disabled={Boolean(successText)} onChoose={handleChoose} />
              ))}
            </div>
          </div>

          {successText ? (
            <div className="mt-6 rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-5">
              <p className="text-sm font-bold text-emerald-100/80">暂时存活</p>
              <p className="mt-2 text-sm leading-7 text-white/75">{successText}</p>
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
