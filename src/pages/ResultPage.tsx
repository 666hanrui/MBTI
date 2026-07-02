import { ResultPanel } from '../components/ResultPanel';
import type { ChallengeResult } from '../types';

interface ResultPageProps {
  result: ChallengeResult;
  onRestart: () => void;
  onHome: () => void;
}

export function ResultPage({ result, onRestart, onHome }: ResultPageProps) {
  return <ResultPanel result={result} onRestart={onRestart} onHome={onHome} />;
}
