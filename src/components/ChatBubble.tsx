import type { ChatMessage } from '../types';

interface ChatBubbleProps {
  message: ChatMessage;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isTarget = message.role === 'target';

  return (
    <div className={`flex ${isTarget ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[82%] rounded-3xl px-4 py-3 text-sm leading-6 shadow-lg ${
          isTarget
            ? 'rounded-bl-md border border-white/10 bg-white/10 text-white/90'
            : 'rounded-br-md bg-white text-slate-950'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
