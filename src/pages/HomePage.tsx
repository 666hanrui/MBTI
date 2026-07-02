import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { personalities } from '../data/personalities'; 
import type { PersonalityType, PersonalityCode } from '../types';
import { audio } from '../utils/audio';

interface HomePageProps {
  userMbti?: PersonalityCode | null;
  onStart: (type: PersonalityType) => void;
}

const stickerMap: Record<string, string> = {
  INFJ: '146',
  INTJ: '092',
  INFP: '051',
  ENTP: '030',
  ENFP: '029',
  INTP: '117',
  ENFJ: '067',
  ENTJ: '156',
  ISFJ: '020',
  ISTJ: '050',
  ISFP: '087',
  ISTP: '131',
  ESFJ: '081',
  ESTJ: '118',
  ESFP: '032',
  ESTP: '037'
};

const getStickerSrc = (type: string) => `/stickers/月薪喵${stickerMap[type] ?? '040'}.gif`;

export function HomePage({ userMbti, onStart }: HomePageProps) {
  // We filter to only show cards that have some gameplay (sample/open/preview)
  // or just show all of them. Let's show all of them for the tinder effect.
  const [cards, setCards] = useState<(typeof personalities[0] & { uniqueKey?: string })[]>(() => {
    const baseCards = (() => {
      if (!userMbti) return personalities;
      const filtered = personalities.filter(p => p.type !== userMbti);
      const target = personalities.find(p => p.type === userMbti);
      return target ? [...filtered, target] : personalities;
    })();
    return baseCards.map(p => ({ ...p, uniqueKey: p.type }));
  });

  // 必须在第一次用户交互后初始化音频上下文，但在点击/滑动时直接调用也可以
  // 我们在 handleReject 和 onStart 时播放
  const SWIPE_THRESHOLD = 100;

  const handleReject = (cardType: string) => {
    audio.playSwipeLeft();
    
    // 先获取要移动的卡片
    const cardToMove = cards.find(c => c.type === cardType);
    if (!cardToMove) return;

    // 纯函数更新：移除当前卡片
    setCards((prev) => prev.filter((card) => card.type !== cardType));
    
    // 在状态更新外部设置定时器，避免 React 严格模式导致定时器触发两次
    setTimeout(() => {
      setCards(current => {
        // 防止用户狂滑导致重复添加
        if (current.some(c => c.type === cardType)) return current;
        return [
          { ...cardToMove, uniqueKey: cardToMove.type + '-' + Date.now() },
          ...current
        ];
      });
    }, 300);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, cardType: string) => {
    const swipeDistance = info.offset.x;

    if (swipeDistance > SWIPE_THRESHOLD) {
      // 右滑：接受挑战，跳转进入副本
      audio.playSwipeRight();
      onStart(cardType as PersonalityType);
    } else if (swipeDistance < -SWIPE_THRESHOLD) {
      // 左滑：拒绝，将卡片塞回底部
      handleReject(cardType);
    }
  };

  return (
    // 外层容器：阻止默认的下拉刷新和左右滑动返回，实现真正的移动端沉浸感
    <div className="relative h-[100dvh] w-full bg-[#0a0514] overflow-hidden flex flex-col items-center justify-center touch-none">
      
      {/* 塔罗星空动态背景 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 星空背景 */}
        <div className="absolute inset-0 opacity-40 mix-blend-screen" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #4c1d95 0%, transparent 60%), radial-gradient(circle at 80% 20%, #7e22ce 0%, transparent 40%)'
        }} />
        {/* 浮动星光点缀 */}
        <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          opacity: 0.15,
          animation: 'stars-rotate 100s linear infinite'
        }} />

        {/* 疯狂散布的 pd-image 背景层 (海量精神污染) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* 原有 8 个 */}
          <motion.img src="/images/pd-image.png" className="absolute w-40 h-40 top-5 left-2 opacity-60" 
            animate={{ y: [0, 15, 0], rotate: [0, 5, 0], x: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <motion.img src="/images/pd-image.png" className="absolute w-56 h-56 top-1/4 -right-10 opacity-50 mix-blend-screen" 
            animate={{ y: [0, -25, 0], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-24 h-24 top-1/2 left-10 opacity-70 blur-[1px]" 
            animate={{ scale: [1, 1.1, 1], rotate: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-72 h-72 -bottom-10 -left-16 opacity-40" 
            animate={{ x: [0, 20, 0], y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-32 h-32 bottom-20 right-12 opacity-60 blur-[2px]" 
            animate={{ y: [0, -10, 0], rotate: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-16 h-16 top-1/3 left-1/3 opacity-70" 
            animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1.5 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-48 h-48 -top-10 right-1/4 opacity-40 mix-blend-screen" 
            animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
          <motion.img src="/images/pd-image.png" className="absolute w-20 h-20 bottom-10 left-1/4 opacity-60" 
            animate={{ y: [0, 20, 0], x: [0, -15, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 4 }} />
          
          {/* 新增 12 个 */}
          <motion.img src="/images/pd-image.png" className="absolute w-[400px] h-[400px] top-1/4 left-1/4 opacity-10 blur-[8px]" 
            animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
          <motion.img src="/images/pd-image.png" className="absolute w-12 h-12 top-40 right-1/3 opacity-80" 
            animate={{ x: [0, -30, 0], y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-36 h-36 bottom-48 left-1/3 opacity-50 blur-[1px]" 
            animate={{ y: [0, 25, 0], rotate: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-[250px] h-[250px] -bottom-20 right-1/4 opacity-20" 
            animate={{ scale: [1, 1.1, 1], x: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-10 h-10 top-20 left-1/2 opacity-70" 
            animate={{ rotate: [0, -360], y: [0, 40, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
          <motion.img src="/images/pd-image.png" className="absolute w-24 h-24 top-2/3 right-1/4 opacity-60 blur-[3px]" 
            animate={{ y: [0, -20, 0], x: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-[300px] h-[300px] -top-20 -left-20 opacity-15 mix-blend-screen" 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-64 h-64 top-1/2 -right-20 opacity-25" 
            animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-14 h-14 bottom-1/4 left-16 opacity-80" 
            animate={{ x: [0, -15, 0], y: [0, -15, 0], scale: [1, 1.2, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-20 h-20 top-32 right-16 opacity-60 blur-[1px]" 
            animate={{ rotate: [0, 45, 0], y: [0, 15, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }} />
          <motion.img src="/images/pd-image.png" className="absolute w-8 h-8 top-3/4 left-1/2 opacity-90" 
            animate={{ rotate: [0, 180, 360], scale: [1, 0.8, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
          <motion.img src="/images/pd-image.png" className="absolute w-[500px] h-[500px] bottom-0 left-0 opacity-10 blur-[10px]" 
            animate={{ rotate: [0, -5, 0], scale: [1, 1.05, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }} />
        </div>
      </div>
      
      <style>{`
        @keyframes stars-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* 顶部标题区 */}
      <div className="absolute top-10 z-50 text-center pointer-events-none flex flex-col items-center">
        <h1 className="text-3xl font-black text-[#fbbf24] tracking-[0.2em] font-serif uppercase drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">
          16型 塔罗牌
        </h1>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#fbbf24] to-transparent mt-2 mb-1" />
        <p className="text-[#fbbf24]/70 text-xs mt-1 font-bold animate-pulse tracking-widest">
          ✧ 左滑遗忘 · 右滑翻牌 ✧
        </p>
      </div>

      {/* 牌桌容器 */}
      <div className="relative w-full max-w-sm h-[65vh] flex items-center justify-center mt-12">
        <AnimatePresence>
          {cards.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-[#fbbf24]/60 text-center font-bold text-xl font-serif"
            >
              命运的牌库已空。<br/>你无牌可翻。
            </motion.div>
          )}

          {cards.map((boss, index) => {
            // 只渲染最上面的 3 张卡片，优化性能
            const isTopCard = index === cards.length - 1;
            const cardZIndex = index;
            // 塔罗牌的堆叠感：间距稍微小一点，更像一副牌
            const scale = 1 - (cards.length - 1 - index) * 0.03;
            const yOffset = (cards.length - 1 - index) * -8; 

            // 隐藏 3 张以下的卡片
            if (cards.length - 1 - index > 2) return null;

            // 罗马数字映射
            const romanNumerals = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI'];
            const roman = romanNumerals[(cards.length - index) % 16 + 1] || 'X';

            return (
              <motion.div
                key={boss.uniqueKey || boss.type}
                className="absolute w-[85%] h-full bg-[#1a1423] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex flex-col items-center justify-between overflow-hidden cursor-grab active:cursor-grabbing border-4 border-[#3b2a45]"
                style={{ zIndex: cardZIndex }}
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: scale, opacity: 1, y: yOffset }}
                exit={{ scale: 0.5, opacity: 0, x: isTopCard ? -300 : 300, rotate: isTopCard ? -15 : 15, transition: { duration: 0.3 } }}
                drag={isTopCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, info) => handleDragEnd(e, info, boss.type)}
              >
                {/* 塔罗牌内边框花纹（纯CSS模拟） */}
                <div className="absolute inset-2 border border-[#fbbf24]/30 rounded-lg pointer-events-none" />
                <div className="absolute inset-3 border border-[#fbbf24]/20 rounded-md pointer-events-none" />

                <div className="flex flex-col items-center w-full mt-6 pointer-events-none z-10 px-4">
                  
                  {/* 罗马数字编号 */}
                  <div className="text-[#fbbf24] font-serif text-lg font-bold mb-3 tracking-widest drop-shadow-md">
                    {roman}
                  </div>

                  {/* 塔罗牌中央插画框 */}
                  <div className="w-full aspect-[4/3] bg-[#0f0a14] border-2 border-[#fbbf24]/40 flex items-center justify-center mb-6 overflow-hidden pointer-events-none shadow-inner relative rounded-sm">
                    <img 
                      src={getStickerSrc(boss.type)}
                      alt={boss.bossName} 
                      className="w-full h-full object-contain pointer-events-none opacity-95 scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/pd-image.png';
                      }}
                    />
                    {/* 复古暗角滤镜 */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                  </div>
                  
                  <h2 className="text-3xl font-black text-[#fbbf24] mb-1 tracking-widest text-center font-serif drop-shadow-md">
                    {boss.type}
                  </h2>
                  <div className="text-white/80 text-sm font-bold tracking-widest mb-4 font-serif">
                    {boss.bossName}
                  </div>
                  
                  <p className="text-[#fbbf24]/70 text-center text-[13px] font-medium leading-relaxed px-2 font-serif italic">
                    "{boss.subtitle}"
                  </p>
                </div>

                {/* 底部按钮 */}
                <div className="w-full flex justify-between px-6 pb-6 z-10 mt-auto">
                   <button 
                     onClick={() => handleReject(boss.type)}
                     className="flex flex-col items-center transition active:scale-90 hover:opacity-100 opacity-80"
                   >
                     <div className="w-12 h-12 rounded-full border border-zinc-600/50 bg-[#0f0a14] flex items-center justify-center mb-1 text-zinc-400 shadow-lg">
                       ✕
                     </div>
                   </button>
                   <button 
                     onClick={() => onStart(boss.type as PersonalityType)}
                     className="flex flex-col items-center transition active:scale-90 hover:opacity-100 opacity-100"
                   >
                     <div className="w-12 h-12 rounded-full border border-[#fbbf24]/50 bg-[#0f0a14] flex items-center justify-center mb-1 text-[#fbbf24] shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                       ✦
                     </div>
                   </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
