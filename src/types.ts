export type SubjectId = 
  | 'python' 
  | 'networking' 
  | 'cloud' 
  | 'databases' 
  | 'linux' 
  | 'windows' 
  | 'it_fundamentals' 
  | 'security' 
  | 'raid'
  | 'all';

export type ExamMode = 'setup' | 'testing' | 'review' | 'history';

export interface SubjectMeta {
  id: SubjectId;
  name: string;
  shortName: string;
  description: string;
  iconName: string;
  questionCount: number;
  color: string;
  badgeBg: string;
  textColor: string;
}

export interface Question {
  id: number;
  subject: SubjectId;
  questionText: string;
  options: [string, string, string, string]; // [A, B, C, D]
  correctAnswerIndex: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOptionIndex: number | null; // null if skipped
  isCorrect: boolean;
}

export interface ExamResult {
  id: string; // unique timestamp id
  date: string;
  subjectId: SubjectId;
  subjectName: string;
  totalQuestions: number;
  score: number;
  percentage: number;
  timeSpentSeconds: number;
  userAnswers: Record<number, number | null>; // questionId -> selectedOptionIndex
  questions: Question[]; // original questions in exam
  isNewRecord?: boolean;
}

export interface SubjectStats {
  subjectId: SubjectId;
  highestScore: number;
  highestPercentage: number;
  totalAttempts: number;
  lastAttemptDate?: string;
}
