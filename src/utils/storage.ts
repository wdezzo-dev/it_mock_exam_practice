import { ExamResult, SubjectId, SubjectStats } from '../types';
import { SUBJECTS } from '../data/subjects';

const STORAGE_KEY = 'it_mock_exam_results_v1';

export function getExamHistory(): ExamResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to parse exam history from localStorage:', err);
    return [];
  }
}

export function saveExamResult(result: ExamResult): { updatedHistory: ExamResult[]; isNewRecord: boolean } {
  const history = getExamHistory();
  
  // Check if this is a new high score for the given subject
  const subjectPastResults = history.filter(h => h.subjectId === result.subjectId);
  const prevHighestPercentage = subjectPastResults.reduce((max, h) => Math.max(max, h.percentage), 0);
  
  const isNewRecord = result.percentage > prevHighestPercentage && subjectPastResults.length > 0;
  
  const updatedResult: ExamResult = {
    ...result,
    isNewRecord,
  };

  const newHistory = [updatedResult, ...history];
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
  } catch (err) {
    console.error('Failed to save exam result to localStorage:', err);
  }

  return { updatedHistory: newHistory, isNewRecord };
}

export function getSubjectStatsMap(): Record<SubjectId, SubjectStats> {
  const history = getExamHistory();
  
  const statsMap: Record<SubjectId, SubjectStats> = {} as Record<SubjectId, SubjectStats>;
  
  SUBJECTS.forEach(sub => {
    statsMap[sub.id] = {
      subjectId: sub.id,
      highestScore: 0,
      highestPercentage: 0,
      totalAttempts: 0,
    };
  });

  history.forEach(res => {
    const subId = res.subjectId;
    if (!statsMap[subId]) {
      statsMap[subId] = {
        subjectId: subId,
        highestScore: 0,
        highestPercentage: 0,
        totalAttempts: 0,
      };
    }

    const curr = statsMap[subId];
    curr.totalAttempts += 1;
    if (res.score > curr.highestScore) {
      curr.highestScore = res.score;
    }
    if (res.percentage > curr.highestPercentage) {
      curr.highestPercentage = res.percentage;
    }
    if (!curr.lastAttemptDate || new Date(res.date) > new Date(curr.lastAttemptDate)) {
      curr.lastAttemptDate = res.date;
    }
  });

  return statsMap;
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear history:', err);
  }
}
