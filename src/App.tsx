import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { ChallengePage } from './pages/ChallengePage';
import { ResultPage } from './pages/ResultPage';
import type { ChallengeResult, PersonalityType } from './types';

type View = 'home' | 'challenge' | 'result';

function App() {
  const [view, setView] = useState<View>('home');
  const [selectedType, setSelectedType] = useState<PersonalityType>('INFJ');
  const [result, setResult] = useState<ChallengeResult | null>(null);

  const startChallenge = (type: PersonalityType) => {
    setSelectedType(type);
    setResult(null);
    setView('challenge');
  };

  const showResult = (nextResult: ChallengeResult) => {
    setResult(nextResult);
    setView('result');
  };

  const goHome = () => {
    setResult(null);
    setView('home');
  };

  if (view === 'challenge') {
    return <ChallengePage key={selectedType} type={selectedType} onBack={goHome} onResult={showResult} />;
  }

  if (view === 'result' && result) {
    return <ResultPage result={result} onRestart={() => startChallenge(result.type)} onHome={goHome} />;
  }

  return <HomePage onStart={startChallenge} />;
}

export default App;
