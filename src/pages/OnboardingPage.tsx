import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PersonalityType, PersonalityCode } from '../types';
import { personalities } from '../data/personalities';

interface OnboardingPageProps {
  onComplete: (username: string, mbti: PersonalityCode) => void;
  onRequestTest: (username: string) => void;
}

export function OnboardingPage({ onComplete, onRequestTest }: OnboardingPageProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [username, setUsername] = useState('');

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setStep(2);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center p-6 text-white overflow-hidden">
      {/* 赛博朋克背景光晕 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-md flex flex-col items-center z-10"
          >
            <div className="w-32 h-32 mb-6">
              <img src="/stickers/月薪喵040.gif" alt="鞠躬" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-2xl font-black mb-2 text-center text-white">
              我该怎么称呼您呢？
            </h1>
            <p className="text-zinc-500 font-bold mb-8 text-sm">
              (网名就好，互不打扰)
            </p>
            <form onSubmit={handleNameSubmit} className="w-full flex flex-col items-center">
              <input
                type="text"
                placeholder="在此输入"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                maxLength={10}
                className="w-full bg-zinc-900/50 border-2 border-zinc-800 focus:border-red-500/50 rounded-2xl px-6 py-4 text-center text-2xl font-bold outline-none transition-colors shadow-2xl placeholder:text-zinc-600 mb-8"
                autoFocus
              />
              <button
                type="submit"
                disabled={!username.trim()}
                className="px-8 py-3 rounded-full bg-white text-black font-black tracking-widest disabled:opacity-30 transition-opacity active:scale-95"
              >
                确认进入
              </button>
            </form>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-md flex flex-col items-center z-10"
          >
            <h2 className="text-2xl font-black mb-10 text-center leading-relaxed">
              玩家 <span className="text-red-400">@{username}</span>，<br/>你明确知道自己的 MBTI 吗？
            </h2>
            <div className="flex flex-col gap-4 w-full">
              <button
                onClick={() => setStep(3)}
                className="w-full py-4 rounded-2xl bg-zinc-900 border-2 border-zinc-700 hover:border-fuchsia-500 hover:bg-fuchsia-500/10 font-bold transition-colors active:scale-95"
              >
                我熟得很，直接选
              </button>
              <button
                onClick={() => onRequestTest(username)}
                className="w-full py-4 rounded-2xl bg-zinc-900 border-2 border-zinc-700 hover:border-cyan-500 hover:bg-cyan-500/10 font-bold transition-colors active:scale-95 text-zinc-400 hover:text-white"
              >
                不知道，帮我测测 (104题)
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-lg flex flex-col items-center z-10 h-[80vh]"
          >
            <h2 className="text-xl font-black mb-6 text-center text-zinc-400">
              请选择你的主导人格
            </h2>
            
            <div className="grid grid-cols-4 gap-3 w-full overflow-y-auto pb-20 no-scrollbar">
              {['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'].map((type) => {
                // Remove duplicates if any (ESFP is listed twice, let's fix it)
                return null;
              })}
              {Array.from(new Set(['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'])).map((type) => (
                <button
                  key={type}
                  onClick={() => onComplete(username, type as PersonalityCode)}
                  className="aspect-square bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center font-black text-lg hover:border-red-500 hover:text-red-400 active:scale-90 transition-all"
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
