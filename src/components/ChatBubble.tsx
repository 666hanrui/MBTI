import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { ChatMessage } from '../types';

interface ChatBubbleProps {
  message: ChatMessage;
  index?: number;
  bossAvatar?: string;
}

export function ChatBubble({ message, index = 0, bossAvatar }: ChatBubbleProps) {
  const [visible, setVisible] = useState(false);
  const isTarget = message.role === 'target';
  const isSystem = message.role === 'system';
  const delay = index * 0.5;
  const showAvatar = bossAvatar !== undefined;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) {
    if (isTarget) {
      return (
        <div className="flex items-end gap-2 justify-start">
          <div className={`w-9 h-9 shrink-0 ${!showAvatar ? 'opacity-0' : ''}`}>
            {showAvatar && (
              <div className="w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-lg bg-white p-0.5">
                <img src={bossAvatar} alt="" className="w-full h-full object-contain" />
              </div>
            )}
          </div>
          <div className="rounded-2xl rounded-bl-sm px-4 py-3 bg-white/[0.08] border border-white/[0.06]">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-white/30" style={{ animation: 'typing-dots 1.4s infinite 0s' }} />
              <span className="w-2 h-2 rounded-full bg-white/30" style={{ animation: 'typing-dots 1.4s infinite 0.2s' }} />
              <span className="w-2 h-2 rounded-full bg-white/30" style={{ animation: 'typing-dots 1.4s infinite 0.4s' }} />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }

  if (isSystem) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center my-3"
      >
        <div className="px-4 py-2 rounded-full text-xs leading-5 text-white/50 bg-white/[0.06] border border-white/[0.06] max-w-[85%] text-center">
          {message.content}
        </div>
      </motion.div>
    );
  }

  const isSticker = message.content.includes('表情包') || message.content.includes('猫猫');
  const isImageSticker = message.content.startsWith('/表情包/');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, y: 20, x: isTarget ? -30 : 30 }}
      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.05 }}
      className={`flex items-start gap-2 ${isTarget ? 'justify-start' : 'justify-end'}`}
    >
      {isTarget && bossAvatar && (
        <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 shrink-0 shadow-lg bg-white p-0.5 mt-0.5">
          <img src={bossAvatar} alt="" className="w-full h-full object-contain" />
        </div>
      )}

      <div className="relative max-w-[78%]">
        {isTarget && !isImageSticker && (
          <div className="absolute -left-1.5 top-3 w-3 h-3 rotate-45"
            style={{ background: 'rgba(40, 40, 60, 0.9)', borderLeft: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          />
        )}
        {!isTarget && !isImageSticker && (
          <div className="absolute -right-1.5 top-3 w-3 h-3 rotate-45"
            style={{ background: '#07c160' }}
          />
        )}

        {isImageSticker ? (
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-white shadow-xl border-4 p-1" style={{ borderColor: isTarget ? 'rgba(255,255,255,0.1)' : '#07c160' }}>
            <img src={message.content} alt="Sticker" className="w-full h-full object-contain" />
          </div>
        ) : (
          <div
            className={`relative rounded-2xl px-4 py-2.5 text-[15px] leading-7 shadow-lg ${
              isTarget
                ? 'rounded-tl-sm bg-white/[0.08] border border-white/[0.06] text-white/90'
                : 'rounded-tr-sm text-white'
            }`}
            style={!isTarget ? { background: 'linear-gradient(135deg, #07c160, #06ad56)' } : undefined}
          >
            {isSticker ? (
              <div className="flex items-center gap-2">
                <span className="text-xl">🐱</span>
                <span className="italic text-white/70">{message.content}</span>
              </div>
            ) : (
              message.content
            )}
          </div>
        )}
      </div>

      {!isTarget && (
        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 shadow-lg flex items-center justify-center bg-gradient-to-br from-violet-500 to-pink-500 mt-0.5">
          <span className="text-sm font-black text-white">我</span>
        </div>
      )}
    </motion.div>
  );
}
