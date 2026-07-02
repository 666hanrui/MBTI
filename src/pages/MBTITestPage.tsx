import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import apeskLogic from '../data/apeskLogic.json';
// @ts-ignore
import { scoreApeskAnswers } from '../apeskScoring.mjs';
import type { PersonalityCode } from '../types';

interface MBTITestPageProps {
  username: string;
  onComplete: (mbti: PersonalityCode) => void;
}

export function MBTITestPage({ username, onComplete }: MBTITestPageProps) {
  const [answers, setAnswers] = useState<Record<number, 0 | 1>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState<any>(null);

  const questions = apeskLogic.questions;
  const currentQuestion = questions[currentIndex];
  const isFinished = currentIndex >= questions.length;

  const handleAnswer = (value: 0 | 1) => {
    const newAnswers = { ...answers, [currentQuestion.number]: value };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Calculate result
      const score = scoreApeskAnswers(apeskLogic, newAnswers);
      setResult(score);
    }
  };

  const handleComplete = () => {
    if (result && result.type) {
      onComplete(result.type as PersonalityCode);
    }
  };

  if (result) {
    return (
      <div className="relative min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center p-6 text-white overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="z-10 flex flex-col items-center max-w-md w-full text-center"
        >
          <div className="text-sm font-bold text-zinc-500 mb-2">测试完成</div>
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-fuchsia-500 mb-8">
            {result.type}
          </h2>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            系统已完成分析。准备好进入处刑室了吗，<br/><span className="text-white font-bold">@{username}</span>？
          </p>
          <button
            onClick={handleComplete}
            className="w-full py-4 rounded-full bg-white text-black font-black tracking-widest active:scale-95 transition-transform"
          >
            开启我的受虐之旅
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center p-6 text-white overflow-hidden">
      {/* 进度条 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900">
        <motion.div
          className="h-full bg-red-500"
          initial={{ width: 0 }}
          animate={{ width: `${(currentIndex / questions.length) * 100}%` }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
        />
      </div>

      <div className="absolute top-6 left-6 text-xs font-bold text-zinc-600">
        {currentIndex + 1} / {questions.length}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-md flex flex-col z-10"
        >
          <h2 className="text-2xl font-black mb-10 leading-relaxed min-h-[5rem]">
            {currentQuestion.statement}
          </h2>
          
          <div className="flex flex-col gap-4 w-full">
            <button
              onClick={() => handleAnswer(1)}
              className="w-full p-6 text-left rounded-2xl bg-zinc-900 border-2 border-zinc-700 hover:border-red-500 hover:bg-red-500/10 font-bold transition-colors active:scale-95 text-lg"
            >
              {currentQuestion.option1}
            </button>
            <button
              onClick={() => handleAnswer(0)}
              className="w-full p-6 text-left rounded-2xl bg-zinc-900 border-2 border-zinc-700 hover:border-cyan-500 hover:bg-cyan-500/10 font-bold transition-colors active:scale-95 text-lg"
            >
              {currentQuestion.option0}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
