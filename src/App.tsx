import React, { useState, Component, ErrorInfo, ReactNode } from 'react';
import { HomePage } from './pages/HomePage';
import { ChallengePage } from './pages/ChallengePage';
import { ResultPage } from './pages/ResultPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { MBTITestPage } from './pages/MBTITestPage';
import type { ChallengeResult, PersonalityType, PersonalityCode } from './types';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null; errorInfo: ErrorInfo | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', padding: '20px', background: 'black', height: '100vh', overflow: 'auto' }}>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

type View = 'onboarding' | 'mbti-test' | 'home' | 'challenge' | 'result';

function App() {
  const [view, setView] = useState<View>('onboarding');
  const [selectedType, setSelectedType] = useState<PersonalityType>('INFJ');
  const [result, setResult] = useState<ChallengeResult | null>(null);
  const [username, setUsername] = useState<string>('');
  const [userMbti, setUserMbti] = useState<PersonalityCode | null>(null);

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

  const handleOnboardingComplete = (name: string, mbti: PersonalityCode) => {
    setUsername(name);
    setUserMbti(mbti);
    setView('home');
  };

  const handleRequestTest = (name: string) => {
    setUsername(name);
    setView('mbti-test');
  };

  if (view === 'onboarding') {
    return <OnboardingPage onComplete={handleOnboardingComplete} onRequestTest={handleRequestTest} />;
  }

  if (view === 'mbti-test') {
    return <MBTITestPage username={username} onComplete={(mbti) => handleOnboardingComplete(username, mbti)} />;
  }

  if (view === 'challenge') {
    return <ChallengePage key={selectedType} type={selectedType} onBack={goHome} onResult={showResult} />;
  }

  if (view === 'result' && result) {
    return <ResultPage result={result} onRestart={() => startChallenge(result.type)} onHome={goHome} />;
  }

  return <HomePage userMbti={userMbti} onStart={startChallenge} />;
}

export default function AppWrapper() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
