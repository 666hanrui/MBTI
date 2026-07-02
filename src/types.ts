export type PersonalityType = 'INFJ' | 'INTJ' | 'INFP' | 'ENTP';

export type Difficulty = 'A' | 'S' | 'SS';

export interface PersonalityMeta {
  type: PersonalityType;
  title: string;
  bossName: string;
  subtitle: string;
  description: string;
  difficulty: Difficulty;
  passRate: string;
  averageDeathLevel: number;
  tags: string[];
  accent: string;
  gradient: string;
}

export interface ChatMessage {
  role: 'target' | 'user' | 'system';
  content: string;
}

export interface ChallengeOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  isCorrect: boolean;
  deathTitle?: string;
  deathReport?: string;
  deathRate?: string;
}

export interface ChallengeQuestion {
  id: string;
  level: number;
  title: string;
  scene: string;
  messages: ChatMessage[];
  question: string;
  options: ChallengeOption[];
  successText: string;
}

export interface ChallengeResult {
  type: PersonalityType;
  title: string;
  isCleared: boolean;
  level: number;
  deathTitle?: string;
  deathReport?: string;
  deathRate?: string;
  correctCount: number;
  totalCount: number;
}
