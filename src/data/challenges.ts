import type { ChallengeQuestion, PersonalityType } from '../types';
import { infjQuestions } from './infjQuestions';
import { intjQuestions } from './intjQuestions';
import { infpQuestions } from './infpQuestions';
import { entpQuestions } from './entpQuestions';
import { enfjQuestions } from './enfjQuestions';
import { enfpQuestions } from './enfpQuestions';
import { entjQuestions } from './entjQuestions';
import { esfjQuestions } from './esfjQuestions';
import { estjQuestions } from './estjQuestions';
import { esfpQuestions } from './esfpQuestions';
import { estpQuestions } from './estpQuestions';
import { istjQuestions } from './istjQuestions';
import { isfjQuestions } from './isfjQuestions';
import { isfpQuestions } from './isfpQuestions';
import { istpQuestions } from './istpQuestions';
import { intpQuestions } from './intpQuestions';

export const challengeMap: Record<PersonalityType, ChallengeQuestion[]> = {
  INFJ: infjQuestions,
  INTJ: intjQuestions,
  INFP: infpQuestions,
  ENTP: entpQuestions,
  ENFJ: enfjQuestions,
  ENFP: enfpQuestions,
  ENTJ: entjQuestions,
  ESFJ: esfjQuestions,
  ESTJ: estjQuestions,
  ESFP: esfpQuestions,
  ESTP: estpQuestions,
  ISTJ: istjQuestions,
  ISFJ: isfjQuestions,
  ISFP: isfpQuestions,
  ISTP: istpQuestions,
  INTP: intpQuestions,
};

export const getChallengeQuestions = (type: PersonalityType) => challengeMap[type];
