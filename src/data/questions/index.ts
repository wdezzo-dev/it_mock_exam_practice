import { Question, SubjectId } from '../../types';
import { pythonQuestions } from './python';
import { networkingQuestions } from './networking';
import { cloudQuestions } from './cloud';
import { databaseQuestions } from './databases';
import { linuxQuestions } from './linux';
import { windowsQuestions } from './windows';
import { itFundamentalsQuestions } from './it_fundamentals';
import { securityQuestions } from './security';
import { raidQuestions } from './raid';

export const ALL_QUESTIONS: Question[] = [
  ...pythonQuestions,
  ...networkingQuestions,
  ...cloudQuestions,
  ...databaseQuestions,
  ...linuxQuestions,
  ...windowsQuestions,
  ...itFundamentalsQuestions,
  ...securityQuestions,
  ...raidQuestions,
];

/**
 * Fisher-Yates shuffle algorithm to randomly order questions
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Get random questions for a specific subject and count
 */
export function getRandomQuestions(subjectId: SubjectId, count: number): Question[] {
  let filtered: Question[] = [];
  
  if (subjectId === 'all') {
    filtered = ALL_QUESTIONS;
  } else {
    filtered = ALL_QUESTIONS.filter(q => q.subject === subjectId);
  }

  if (filtered.length === 0) {
    filtered = ALL_QUESTIONS;
  }

  const shuffled = shuffleArray(filtered);
  const selectedCount = Math.min(count, shuffled.length);
  
  return shuffled.slice(0, selectedCount);
}

/**
 * Get total question count for a subject
 */
export function getSubjectQuestionCount(subjectId: SubjectId): number {
  if (subjectId === 'all') {
    return ALL_QUESTIONS.length;
  }
  return ALL_QUESTIONS.filter(q => q.subject === subjectId).length;
}
