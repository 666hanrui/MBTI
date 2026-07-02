import { motion } from 'framer-motion';
import { getPersonality } from '../data/personalities';
import type { ChallengeResult } from '../types';
import { getShareText } from '../utils/result';

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
    if (result.grade?.includes('SS')) return '/表情包/月薪喵131.gif';
    if (result.grade?.includes('S')) return '/表情包/月薪喵067.gif';
    return '/表情包/月薪喵029.gif';
  }
  if (result.level <= 2) return '/表情包/月薪喵020.gif';
  if (result.level <= 5) return '/表情包/月薪喵051.gif';
  return '/表情包/月薪喵156.gif';
};

export function ResultPanel({ result, onRestart, onHome }: ResultPanelProps) {
  const meta = getPersonality(result.type);
  const shareText = getShareText(result);
  const sticker = getResultSticker(result);
  const isDeath = !result.isCleared && !result.endingTitle;
  const isNarrativeEnding = Boolean(result.endingTitle);
  const isPerfect = result.grade?.includes('SS') || result.grade?.includes('S级') || result.grade?.includes('灵魂共振');

  const captionPool = isDeath
    ? (deathCaptions[String(result.level)] || deathCaptions['default'])
    : (survivalCaptions[result.grade?.charAt(0) ?? 'default'] || survivalCaptions['default']);
  const snarkyCaption = getRandomCaption(captionPool);
  const cardClass = isDeath ? 'result-card-death' : isPerfect ? 'result-card-perfect' : 'result-card-survive';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareText);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className={`w-full max-w-lg ${cardClass} rounded-[2rem] p-6 md:p-8 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }} />

        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: -8 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.3 }}
          className="absolute -top-2 -right-2 md:top-4 md:right-4 z-10"
        >
          <div className="relative">
            <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full p-2 shadow-xl border-4 flex items-center justify-center" style={{ borderColor: isDeath ? '#ff3b5c' : isPerfect ? '#a855f7' : '#07c160' }}>
              <img src={sticker} alt="" className="w-full h-full object-contain scale-110" />
            </div>
            {isDeath && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-black whitespace-nowrap" style={{ background: '#ff2d78', color: '#fff', boxShadow: '0 0 20px rgba(255, 45, 120, 0.5)' }}>GG</div>
            )}
          </div>
        </motion.div>

        <div className="relative z-10">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xs font-bold tracking-[0.4em] uppercase"
            style={{ color: isDeath ? '#ff3b5c' : isPerfect ? '#a855f7' : '#07c160' }}
          >
            {result.type} · {isDeath ? '阵亡报告' : '通关战报'}
          </motion.p>

          <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="mt-4 text-3xl md:text-4xl font-black leading-tight pr-24 md:pr-32"
          >
            {snarkyCaption}
          </motion.h1>

          {isDeath && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="mt-5 rounded-2xl p-4 border border-white/[0.08] bg-white/[0.04]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">💀</span>
                <span className="text-sm font-bold" style={{ color: '#ff3b5c' }}>死因</span>
              </div>
              <h2 className="text-xl font-black text-white">{result.deathTitle}</h2>
              <p className="mt-2 text-sm leading-7 text-white/70">{result.deathReport}</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: result.deathRate, background: 'linear-gradient(90deg, #ff2d78, #ff6b35)' }} />
                </div>
                <span className="text-xs font-bold" style={{ color: '#ff2d78' }}>{result.deathRate} 的人死在这</span>
              </div>
            </motion.div>
          )}

          {isNarrativeEnding && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="mt-5 rounded-2xl p-4 border border-white/[0.08] bg-white/[0.04]"
            >
              <p className="text-xs font-bold" style={{ color: isPerfect ? '#a855f7' : '#ffd000' }}>{result.grade ?? '结局报告'}</p>
              <h2 className="mt-2 text-xl font-black text-white">{result.endingTitle}</h2>
              <p className="mt-2 text-sm leading-7 text-white/70">{result.endingReport}</p>
            </motion.div>
          )}

          {result.isCleared && !isNarrativeEnding && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="mt-5 rounded-2xl p-4 border border-white/[0.08] bg-white/[0.04]"
            >
              <p className="text-xs font-bold" style={{ color: '#07c160' }}>系统评级</p>
              <h2 className="mt-2 text-2xl font-black text-white">{result.grade ?? 'S：旧模式暂未复发'}</h2>
              <p className="mt-2 text-sm leading-7 text-white/70">{result.endingReport}</p>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-5 grid grid-cols-3 gap-2">
            <div className="rounded-xl p-3 bg-white/[0.04] border border-white/[0.06] text-center">
              <p className="text-[10px] text-white/40">存活</p>
              <p className="text-lg font-black mt-0.5" style={{ color: isDeath ? '#ff3b5c' : '#07c160' }}>{isDeath ? result.level : result.correctCount}/{result.totalCount}</p>
              <p className="text-[10px] text-white/30">关</p>
            </div>
            <div className="rounded-xl p-3 bg-white/[0.04] border border-white/[0.06] text-center">
              <p className="text-[10px] text-white/40">类型</p>
              <p className="text-lg font-black mt-0.5 text-white">{result.type}</p>
              <p className="text-[10px] text-white/30">Boss</p>
            </div>
            <div className="rounded-xl p-3 bg-white/[0.04] border border-white/[0.06] text-center">
              <p className="text-[10px] text-white/40">难度</p>
              <p className="text-lg font-black mt-0.5" style={{ color: '#ffd000' }}>SS</p>
              <p className="text-[10px] text-white/30">地狱</p>
            </div>
          </motion.div>

          {result.stateSummary?.length ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-4 rounded-xl p-4 bg-white/[0.03] border border-white/[0.06]">
              <p className="text-xs font-bold text-white/40 mb-2">📋 系统档案已解锁</p>
              <div className="space-y-1.5">
                {result.stateSummary.map((item) => (
                  <p key={item} className="text-xs leading-5 text-white/60 pl-3 border-l-2 border-white/10">{item}</p>
                ))}
              </div>
            </motion.div>
          ) : null}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-5 rounded-xl p-4 bg-white/[0.03] border border-dashed border-white/[0.1]">
            <p className="text-xs text-white/40 mb-2">📤 一键复制 · 发到朋友圈处刑</p>
            <p className="text-xs leading-5 text-white/60">{shareText}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-6 grid gap-3 grid-cols-2">
            <button type="button" onClick={onRestart}
              className="rounded-2xl py-3.5 text-sm font-black text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: isDeath ? 'linear-gradient(135deg, #ff2d78, #ff6b35)' : 'linear-gradient(135deg, #a855f7, #00f0ff)', boxShadow: isDeath ? '0 4px 30px rgba(255, 45, 120, 0.3)' : '0 4px 30px rgba(168, 85, 247, 0.3)' }}
            >
              {isDeath ? '💀 不服再来' : '🔄 再挑一次'}
            </button>
            <button type="button" onClick={handleCopy}
              className="rounded-2xl py-3.5 text-sm font-bold text-white/80 bg-white/[0.08] border border-white/[0.1] transition-all hover:bg-white/[0.12] hover:scale-[1.02] active:scale-[0.98]"
            >
              📋 复制战报
            </button>
          </motion.div>
          <button type="button" onClick={onHome} className="mt-3 w-full rounded-2xl py-3 text-xs text-white/40 hover:text-white/60 transition">← 返回大厅</button>
          <p className="mt-4 text-[10px] leading-5 text-white/20 text-center">赛博发疯模拟器 · 本站内容为娱乐向互动创作</p>
        </div>
      </div>
    </motion.section>
  );
}
