export type PersonalityCode =
  | 'INFJ'
  | 'INTJ'
  | 'INFP'
  | 'INTP'
  | 'ENFP'
  | 'ENTP'
  | 'ENFJ'
  | 'ENTJ'
  | 'ISFJ'
  | 'ISTJ'
  | 'ISFP'
  | 'ISTP'
  | 'ESFJ'
  | 'ESTJ'
  | 'ESFP'
  | 'ESTP';

export type PersonalityType = PersonalityCode;

export type Difficulty = 'A' | 'S' | 'SS';

export type ReleaseStatus = 'sample' | 'open' | 'preview' | 'hidden';

export interface PersonalityMeta {
  type: PersonalityCode;
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
  releaseStatus: ReleaseStatus;
  statusLabel: string;
  ctaLabel: string;
  unlockHint?: string;
}

export interface ChatMessage {
  role: 'target' | 'user' | 'system';
  content: string;
}

export type OptionOutcome = 'death' | 'survive' | 'damage' | 'hidden';

export type BehaviorPattern =
  | 'self_proof'
  | 'pressure'
  | 'avoidance'
  | 'control'
  | 'empathy'
  | 'logic'
  | 'playful'
  | 'attack'
  | 'surrender'
  | 'boundary'
  | 'vulnerability'
  | 'defense'
  | 'savior';

export interface PlayerState {
  empathy: number;
  pressure: number;
  selfProof: number;
  control: number;
  avoidance: number;
  logic: number;
  playfulness: number;
  trust: number;
  damage: number;
  emotionalSafety: number;
  oldPatternDetected: number;
  boundaryRespect: number;
  flags: string[];
}

export type NumericPlayerState = Omit<PlayerState, 'flags'>;

export interface ChallengeOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;

  /** Legacy MVP support. New narrative challenges should prefer outcome. */
  isCorrect?: boolean;

  outcome?: OptionOutcome;
  pattern?: BehaviorPattern;
  effects?: Partial<NumericPlayerState>;
  targetReaction?: string;
  systemComment?: string;
  followUp?: string;
  addFlags?: string[];

  deathTitle?: string;
  deathReport?: string;
  deathRate?: string;
}

export interface ConditionalLine {
  whenFlags?: string[];
  when?: Partial<Record<keyof NumericPlayerState, number>>;
  content: string;
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
  conditionalLines?: ConditionalLine[];
}

export interface ChoiceFeedback {
  targetReaction: string;
  systemComment: string;
  followUp?: string;
  pattern?: BehaviorPattern;
  outcome: OptionOutcome;
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
  endingTitle?: string;
  endingReport?: string;
  grade?: string;
  stateSummary?: string[];
  flags?: string[];
}
