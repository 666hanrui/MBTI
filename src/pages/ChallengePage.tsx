import { useCallback, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubble } from '../components/ChatBubble';
import { OptionButton } from '../components/OptionButton';
import { ProgressBar, getSanityState } from '../components/ProgressBar';
import { StickerSlam } from '../components/StickerSlam';
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

// Map damage stickers for slam effect
const damageStickerMap: Record<string, string> = {
  control: '/stickers/月薪喵050.gif',
  avoidance: '/stickers/月薪喵020.gif',
  self_proof: '/stickers/月薪喵051.gif',
  defense: '/stickers/月薪喵156.gif',
  savior: '/stickers/月薪喵087.gif',
  default: '/stickers/月薪喵051.gif',
};

export function ChallengePage({ type, onBack, onResult }: ChallengePageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<ChoiceFeedback | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>(initialPlayerState);
  const [damageCount, setDamageCount] = useState(0);
  const [shakeClass, setShakeClass] = useState('');
  const [showSlam, setShowSlam] = useState(false);
  const [slamSticker, setSlamSticker] = useState('');
  const [slamType, setSlamType] = useState<'damage' | 'heal'>('damage');
  const [userMessage, setUserMessage] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const personality = getPersonality(type);
  const questions = useMemo(() => (type === 'INFJ' ? infjNarrativeQuestions : getChallengeQuestions(type)), [type]);

  if (!questions || questions.length === 0) {
    return (
      <main className="h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col items-center justify-center p-6 bg-zinc-950 text-white text-center space-y-6">
        <h1 className="text-4xl font-black text-red-500">404 NOT FOUND</h1>
        <p className="text-zinc-400">「{personality?.bossName || type}」副本还在紧急施工中，<br/>先去隔壁挑战其他受害者吧。</p>
        <button onClick={onBack} className="px-6 py-2 rounded-full border border-zinc-700 hover:bg-zinc-800 transition">
          返回主页
        </button>
      </main>
    );
  }

  const question = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const conditionalLines = getConditionalLines(playerState, question);
  const sanity = useMemo(() => getSanityState(damageCount), [damageCount]);
  const bossAvatar = '/stickers/月薪喵030.gif';

  // Shuffle options so the correct answer isn't always C
  const shuffledOptions = useMemo(() => {
    const opts = [...question.options];
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    // Reassign A, B, C based on new order
    return opts.map((opt, idx) => ({
      ...opt,
      id: String.fromCharCode(65 + idx) as 'A' | 'B' | 'C' | 'D'
    }));
  }, [currentIndex, question]);

  const triggerShake = useCallback((intensity: 'light' | 'violent') => {
    setShakeClass(intensity === 'violent' ? 'shake-violent' : 'shake-light');
    setTimeout(() => setShakeClass(''), 700);
  }, []);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  }, []);

  const handleChoose = (option: ChallengeOption) => {
    const outcome = getOutcome(option);
    const nextState = applyOptionToState(playerState, option);

    // Show user's chosen message as a chat bubble
    setUserMessage(option.text);
    scrollToBottom();

    if (outcome === 'death') {
      // Death: violent shake + sticker slam
      triggerShake('violent');
      const stkr = damageStickerMap[option.pattern ?? 'default'] || damageStickerMap['default'];
      setSlamSticker(stkr);
      setSlamType('damage');
      setTimeout(() => {
        setShowSlam(true);
      }, 600);
      setTimeout(() => {
        setShowSlam(false);
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
      }, 3200);
      return;
    }

    let feedbackDelay = 800;

    if (outcome === 'damage') {
      triggerShake('light');
      setDamageCount(prev => prev + 1);
    } else if (outcome === 'survive' && !isLastQuestion) {
      // Positive feedback on correct answer
      const positiveStickers = ['/stickers/月薪喵067.gif', '/stickers/月薪喵029.gif', '/stickers/月薪喵131.gif', '/stickers/月薪喵118.gif', '/stickers/月薪喵081.gif'];
      const stkr = positiveStickers[Math.floor(Math.random() * positiveStickers.length)];
      setSlamSticker(stkr);
      setSlamType('heal');
      feedbackDelay = 2200;
      setTimeout(() => setShowSlam(true), 400);
      setTimeout(() => setShowSlam(false), 2000);
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
      setTimeout(() => {
        onResult(buildClearResult({ type, totalCount: questions.length, state: nextState }));
      }, 1500);
      return;
    }

    setTimeout(() => {
      setFeedback(nextFeedback);
      scrollToBottom();
    }, feedbackDelay);
  };

  const handleNext = () => {
    setFeedback(null);
    setUserMessage(null);
    setCurrentIndex((v) => v + 1);
  };

  const stageNames = ['破冰期', '破冰期', '破冰期', '刺痛期', '刺痛期', '刺痛期', '刺痛期', '高压期', '高压期', '高压期', '结算期', '结算期'];
  const stageName = stageNames[currentIndex] ?? '未知';

  return (
    <main className={`h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col ${shakeClass}`} style={{ background: 'transparent' }}>
      {/* WeChat-style header */}
      <header className="sticky top-0 z-40 px-4 py-3 flex items-center gap-3" style={{ background: 'linear-gradient(180deg, rgba(20,20,35,0.98), rgba(15,15,25,0.95))', borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)' }}>
        <button type="button" onClick={onBack} className="text-white/50 hover:text-white text-sm shrink-0">← 退出</button>
        <div className="flex-1 min-w-0">
          <ProgressBar current={question.level} total={questions.length} damageCount={damageCount} bossName={personality?.bossName ?? 'INFJ Boss'} />
        </div>
      </header>

      {/* Chat area */}
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {/* Stage indicator */}
        <div className="flex justify-center mb-4">
          <div className="px-4 py-1.5 rounded-full text-[11px] text-white/40 bg-white/[0.04] border border-white/[0.06]">
            第 {question.level} 关 · {question.title} · {stageName}
          </div>
        </div>

        {/* Scene description */}
        <motion.div
          key={`scene-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mb-2"
        >
          <div className="max-w-[90%] px-4 py-2.5 rounded-2xl text-xs leading-6 text-white/45 bg-white/[0.03] border border-white/[0.05] text-center">
            📱 {question.scene}
          </div>
        </motion.div>

        {/* Conditional lines */}
        {conditionalLines.map((line) => (
          <motion.div key={line.content} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center">
            <div className="max-w-[90%] px-4 py-2.5 rounded-2xl text-xs leading-6 border text-center"
              style={{ color: '#a855f7', background: 'rgba(168, 85, 247, 0.08)', borderColor: 'rgba(168, 85, 247, 0.15)' }}
            >
              {line.content}
            </div>
          </motion.div>
        ))}

        {/* Chat messages */}
        <AnimatePresence mode="wait">
          <div key={`msgs-${currentIndex}`} className="space-y-3">
            {question.messages.map((message, index) => (
              <ChatBubble key={`${currentIndex}-${index}`} message={message} index={index} bossAvatar={bossAvatar} />
            ))}
          </div>
        </AnimatePresence>

        {/* User's chosen reply */}
        {userMessage && (
          <ChatBubble message={{ role: 'user', content: userMessage }} index={0} />
        )}

        {/* Feedback */}
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            {/* Target reaction */}
            <ChatBubble message={{ role: 'target', content: feedback.targetReaction }} index={0} bossAvatar={bossAvatar} />

            {/* System comment */}
            <div className="flex justify-center">
              <div className={`max-w-[90%] px-4 py-3 rounded-2xl text-xs leading-6 border text-center ${
                feedback.outcome === 'damage'
                  ? 'text-amber-200/80 bg-amber-500/[0.08] border-amber-500/15'
                  : 'text-emerald-200/80 bg-emerald-500/[0.08] border-emerald-500/15'
              }`}>
                <span className="font-bold">{feedback.outcome === 'damage' ? '⚡ 扣血存活' : '✅ 暂时存活'}</span>
                <br />
                {feedback.systemComment}
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 rounded-2xl text-sm font-black text-white transition-all hover:scale-[1.03] active:scale-[0.97]"
                style={{ background: 'linear-gradient(135deg, #a855f7, #00f0ff)', boxShadow: '0 4px 30px rgba(168, 85, 247, 0.3)' }}
              >
                进入下一关 →
              </button>
            </div>
          </motion.div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Options bar (bottom) */}
      {!feedback && !userMessage && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="shrink-0 px-4 py-3 space-y-2"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(10,10,15,0.95) 30%)', paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
        >
          <p className="text-xs text-white/40 text-center mb-2 font-bold">💬 {question.question}</p>
          {shuffledOptions.map((option) => (
            <OptionButton key={option.id} option={option} disabled={Boolean(feedback)} onChoose={handleChoose} />
          ))}
        </motion.div>
      )}

      {/* Sticker Slam overlay */}
      <StickerSlam show={showSlam} stickerSrc={slamSticker} mode={slamType} />
    </main>
  );
}
