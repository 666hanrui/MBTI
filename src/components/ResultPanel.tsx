import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { getPersonality } from '../data/personalities';
import { getRollingMessages } from '../data/typeMessages';
import type { ChallengeResult } from '../types';

interface ResultPanelProps {
  result: ChallengeResult;
  onRestart: () => void;
  onHome: () => void;
}

const deathCaptions: Record<string, string[]> = {
  '1': ['恭喜！你仅存活了 1 轮', '破纪录了！最速死亡', '你甚至没让 TA 打完字'],
  '2': ['死因确诊：嘴比脑子快', '刚开始就结束了', 'TA 已经不想浪费表情包了'],
  '3': ['死因确诊：试图跟 INFJ 讲废话', '你的共情值竟然是负数', '系统建议你先学会闭嘴'],
  '4': ['差一点就差一点', '勇气可嘉，智商感人', 'TA 在犹豫要不要拉黑你'],
  '5': ['倒在了黎明前', '你的灵魂没跟上嘴的速度', '差一丢丢就能让 TA 破防了'],
  '6': ['所有温柔都是铺垫', '半途而废的温柔刺客', '你以为你很行？'],
  '7': ['灵魂拷问？你的灵魂去哪了', '离破关只差一个真诚', '系统：你前面都白演了'],
  '8': ['沉默的黑洞吞噬了你', '你没能扛住寂寞', '24小时就把你淘汰了'],
  '9': ['被切割了！刀刀致命', '不卑不亢？你连卑都做不到', 'Door Slam 声音真好听'],
  '10': ['旧疾复发 无药可救', '系统结算：老演员了', '毫无长进 建议重修'],
  '11': ['倒在黎明前 太遗憾了', '你又开始证明自己了', '刺猬：算了不扎你了 走吧'],
  default: ['社会性死亡已确认', '你的情商余额已欠费', '建议转世投胎重新练号']
};

const survivalCaptions: Record<string, string[]> = {
  'S': ['💎 灵魂共振！TA 已心动', '你是懂 INFJ 的', '系统确认：你是人类之光'],
  'A': ['🌟 高段位选手', '你让 TA 破了大防', 'TA 正在偷偷截屏你的消息'],
  'B': ['🎯 勉强及格', '门没关上，但也没开', '你活着但伤痕累累'],
  default: ['🐱 残血通关', '你用命换来的结果', '下次记得带脑子']
};

const getRandomCaption = (captions: string[]) => captions[Math.floor(Math.random() * captions.length)];

const getResultSticker = (result: ChallengeResult): string => {
  if (result.isCleared) {
    if (result.grade?.includes('SS')) return '/stickers/月薪喵131.gif';
    if (result.grade?.includes('S')) return '/stickers/月薪喵067.gif';
    return '/stickers/月薪喵029.gif';
  }
  if (result.level <= 2) return '/stickers/月薪喵020.gif';
  if (result.level <= 5) return '/stickers/月薪喵051.gif';
  return '/stickers/月薪喵156.gif';
};

export function ResultPanel({ result, onRestart, onHome }: ResultPanelProps) {
  const meta = getPersonality(result.type);
  const sticker = getResultSticker(result);
  const [userNote, setUserNote] = useState('');
  const [sentNotes, setSentNotes] = useState<string[]>(() => {
    try {
      const stored = window.localStorage.getItem(`mbti-user-notes-${result.type}`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const rollingMessages = useMemo(() => {
    const baseMessages = getRollingMessages(result.type);
    const userMessages = sentNotes.map((note) => `有人想对 ${result.type} 说：${note}`);
    return [...userMessages, ...baseMessages];
  }, [result.type, sentNotes]);
  const screenMessageRows = useMemo(() => {
    const pool = rollingMessages.length ? rollingMessages : [`写给 ${result.type} 的话还在路上。`];
    return Array.from({ length: 9 }, (_, rowIndex) => rowIndex).map((rowIndex) => {
      const offset = (rowIndex * 2) % pool.length;
      const shifted = [...pool.slice(offset), ...pool.slice(0, offset)];
      return {
        messages: [...shifted, ...shifted],
        top: `${5 + rowIndex * 10.7}%`,
        duration: `${24 + rowIndex * 3}s`,
        reverse: rowIndex % 2 === 1
      };
    });
  }, [result.type, rollingMessages]);
  const isDeath = !result.isCleared && !result.endingTitle;
  const isPerfect = result.grade?.includes('SS') || result.grade?.includes('S级') || result.grade?.includes('灵魂共振');

  const captionPool = isDeath
    ? (deathCaptions[String(result.level)] || deathCaptions['default'])
    : (survivalCaptions[result.grade?.charAt(0) ?? 'default'] || survivalCaptions['default']);
  const snarkyCaption = getRandomCaption(captionPool);
  const cardClass = isDeath ? 'result-card-death' : isPerfect ? 'result-card-perfect' : 'result-card-survive';
  const reportTitle = isDeath ? result.deathTitle : result.endingTitle ?? result.grade ?? '通关成功';
  const reportText = isDeath
    ? result.deathReport
    : result.endingReport ?? `你通关了「${result.title}」。系统判定：暂时存活。`;
  const noteText = userNote.trim();
  const latestSentNote = sentNotes[0] ?? '';
  const battleReportLines = useMemo(() => {
    const base = isDeath
      ? [
          `【赛博发疯战报】我挑战「${result.title}」，第 ${result.level} 关当场阵亡。`,
          `死因：${result.deathTitle}。系统锐评：${snarkyCaption}。`,
          `Boss 补刀：${result.deathReport}`,
          `不服就重开，别让 TA 以为你只会嘴硬。`
        ]
      : [
          `【赛博发疯战报】我挑战「${result.title}」，硬是活到了结局。`,
          `结局：${result.endingTitle ?? '通关成功'}。评级：${result.grade ?? 'S'}。`,
          `系统锐评：${result.endingReport ?? '这把算你运气和脑子同时在线。'}`,
          `来试试，看看你是通关还是被 Boss 当场教育。`
        ];

    const note = latestSentNote || noteText;
    return note ? [...base, `我的留言：${note}`] : base;
  }, [isDeath, latestSentNote, noteText, result.deathReport, result.deathTitle, result.endingReport, result.endingTitle, result.grade, result.level, result.title, snarkyCaption]);
  const copyText = battleReportLines.join('\n');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(copyText);
  };

  const handleSendNote = () => {
    const nextNote = userNote.trim();
    if (!nextNote) return;

    const nextNotes = [nextNote, ...sentNotes].slice(0, 6);
    setSentNotes(nextNotes);
    setUserNote('');

    try {
      window.localStorage.setItem(`mbti-user-notes-${result.type}`, JSON.stringify(nextNotes));
    } catch {
      // Local storage is a bonus; sending should still update the current screen.
    }
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-[100dvh] max-h-[100dvh] overflow-hidden flex items-center justify-center px-3 py-3">
      <div className={`w-full max-w-md h-full ${cardClass} rounded-[1.65rem] p-3 relative overflow-hidden flex flex-col gap-2`}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }} />

        <div className="screen-message-layer" aria-hidden="true">
          {screenMessageRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="screen-message-row"
              style={{
                top: row.top,
                animationDuration: row.duration,
                animationDirection: row.reverse ? 'reverse' : 'normal'
              }}
            >
              {row.messages.map((message, messageIndex) => (
                <span key={`${rowIndex}-${messageIndex}-${message}`} className="screen-message-text">
                  {message}
                </span>
              ))}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: -8 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.3 }}
          className="absolute -top-1 -right-1 z-10"
        >
          <div className="relative">
            <div className="w-20 h-20 bg-white rounded-full p-1.5 shadow-xl border-4 flex items-center justify-center" style={{ borderColor: isDeath ? '#ff3b5c' : isPerfect ? '#a855f7' : '#07c160' }}>
              <img src={sticker} alt="" className="w-full h-full object-contain scale-110" />
            </div>
            {isDeath && (
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-black whitespace-nowrap" style={{ background: '#ff2d78', color: '#fff', boxShadow: '0 0 20px rgba(255, 45, 120, 0.5)' }}>GG</div>
            )}
          </div>
        </motion.div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center gap-2 py-2">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[10px] font-bold tracking-[0.35em] uppercase"
            style={{ color: isDeath ? '#ff3b5c' : isPerfect ? '#a855f7' : '#07c160' }}
          >
            {result.type} · {isDeath ? '阵亡报告' : '通关战报'}
          </motion.p>

          <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="text-[clamp(1.35rem,6.3vw,2rem)] font-black leading-[1.08] pr-16 one-screen-clamp-2"
          >
            {snarkyCaption}
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="rounded-2xl p-2.5 border border-white/[0.08] bg-white/[0.04]"
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{isDeath ? '💀' : isPerfect ? '💎' : '📌'}</span>
              <span className="text-xs font-bold" style={{ color: isDeath ? '#ff3b5c' : isPerfect ? '#a855f7' : '#07c160' }}>{isDeath ? '死因' : result.grade ?? '结局'}</span>
            </div>
            <h2 className="mt-1 text-[1.05rem] font-black leading-snug text-white one-screen-clamp-1">{reportTitle}</h2>
            <p className="mt-1.5 text-xs leading-5 text-white/70">{reportText}</p>
            {isDeath ? (
              <div className="mt-2 flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: result.deathRate, background: 'linear-gradient(90deg, #ff2d78, #ff6b35)' }} />
                </div>
                <span className="text-[10px] font-bold whitespace-nowrap" style={{ color: '#ff2d78' }}>{result.deathRate} 死在这</span>
              </div>
            ) : null}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} className="grid grid-cols-3 gap-2">
            <div className="rounded-xl px-2 py-1.5 bg-white/[0.04] border border-white/[0.06] text-center">
              <p className="text-[10px] text-white/40">存活</p>
              <p className="text-base font-black mt-0.5" style={{ color: isDeath ? '#ff3b5c' : '#07c160' }}>{isDeath ? result.level : result.correctCount}/{result.totalCount}</p>
              <p className="text-[10px] text-white/30">关</p>
            </div>
            <div className="rounded-xl px-2 py-1.5 bg-white/[0.04] border border-white/[0.06] text-center">
              <p className="text-[10px] text-white/40">类型</p>
              <p className="text-base font-black mt-0.5 text-white">{result.type}</p>
              <p className="text-[10px] text-white/30">Boss</p>
            </div>
            <div className="rounded-xl px-2 py-1.5 bg-white/[0.04] border border-white/[0.06] text-center">
              <p className="text-[10px] text-white/40">难度</p>
              <p className="text-base font-black mt-0.5" style={{ color: '#ffd000' }}>SS</p>
              <p className="text-[10px] text-white/30">地狱</p>
            </div>
          </motion.div>

          {result.stateSummary?.length ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="rounded-xl px-3 py-2 bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[10px] font-bold text-white/40">📋 系统档案已解锁</p>
              <p className="mt-1 text-[11px] leading-4 text-white/60 pl-2 border-l-2 border-white/10 one-screen-clamp-1">{result.stateSummary[0]}</p>
            </motion.div>
          ) : null}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="rounded-xl p-2 bg-white/[0.035] border border-white/[0.07]">
            <label htmlFor="result-note" className="block text-[10px] font-bold text-white/45">
              想对 {result.type} 或某个 {result.type} 的人说点什么？
            </label>
            <div className="mt-1 flex gap-2">
              <textarea
                id="result-note"
                value={userNote}
                onChange={(event) => setUserNote(event.target.value)}
                maxLength={88}
                rows={1}
                placeholder={`留一句话给那个 ${result.type}`}
                className="h-[2.25rem] min-w-0 flex-1 resize-none rounded-xl border border-white/[0.08] bg-black/20 px-3 py-2 text-xs leading-4 text-white outline-none placeholder:text-white/25 focus:border-white/20"
              />
              <button
                type="button"
                onClick={handleSendNote}
                disabled={!noteText}
                className="h-[2.25rem] shrink-0 rounded-xl bg-white px-3 text-xs font-black text-slate-950 disabled:opacity-30"
              >
                发送
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="rounded-xl p-2 bg-white/[0.03] border border-dashed border-white/[0.1]">
            <p className="text-[10px] font-bold text-white/40">📤 战报预览 · 复制后发给朋友围观</p>
            <div className="mt-1 space-y-0.5">
              {battleReportLines.slice(0, 4).map((line) => (
                <p key={line} className="text-[10.5px] leading-4 text-white/60 one-screen-clamp-1">{line}</p>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }} className="grid grid-cols-[1fr_1fr_0.72fr] gap-2">
            <button type="button" onClick={onRestart}
              className="rounded-2xl py-2.5 text-xs font-black text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: isDeath ? 'linear-gradient(135deg, #ff2d78, #ff6b35)' : 'linear-gradient(135deg, #a855f7, #00f0ff)', boxShadow: isDeath ? '0 4px 30px rgba(255, 45, 120, 0.3)' : '0 4px 30px rgba(168, 85, 247, 0.3)' }}
            >
              {isDeath ? '不服再来' : '再挑一次'}
            </button>
            <button type="button" onClick={handleCopy}
              className="rounded-2xl py-2.5 text-xs font-bold text-white/80 bg-white/[0.08] border border-white/[0.1] transition-all hover:bg-white/[0.12] hover:scale-[1.02] active:scale-[0.98]"
            >
              复制战报
            </button>
            <button type="button" onClick={onHome} className="rounded-2xl py-2.5 text-xs font-bold text-white/45 bg-black/20 border border-white/[0.08] hover:text-white/70 transition">大厅</button>
          </motion.div>
          <p className="text-[9px] leading-none text-white/20 text-center">赛博发疯模拟器 · 娱乐向互动创作</p>
        </div>
      </div>
    </motion.section>
  );
}
