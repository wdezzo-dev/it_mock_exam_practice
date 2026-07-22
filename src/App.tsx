import { useState, useEffect } from 'react';
import { 
  ExamMode, 
  ExamResult, 
  Question, 
  SubjectId, 
  SubjectStats 
} from './types';
import { SUBJECTS } from './data/subjects';
import { getRandomQuestions } from './data/questions';
import { 
  getExamHistory, 
  saveExamResult, 
  getSubjectStatsMap, 
  clearHistory 
} from './utils/storage';
import { Header } from './components/Header';
import { ExamSetup } from './components/ExamSetup';
import { ExamScreen } from './components/ExamScreen';
import { ExamReview } from './components/ExamReview';
import { StatsHistory } from './components/StatsHistory';

export default function App() {
  const [mode, setMode] = useState<ExamMode>('setup');
  const [activeSubjectId, setActiveSubjectId] = useState<SubjectId>('all');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentResult, setCurrentResult] = useState<ExamResult | null>(null);

  const [history, setHistory] = useState<ExamResult[]>([]);
  const [statsMap, setStatsMap] = useState<Record<SubjectId, SubjectStats>>({} as Record<SubjectId, SubjectStats>);

  // Load saved local data on mount
  useEffect(() => {
    const loadedHistory = getExamHistory();
    const loadedStats = getSubjectStatsMap();
    setHistory(loadedHistory);
    setStatsMap(loadedStats);
  }, []);

  const handleStartExam = (subjectId: SubjectId, questionCount: number) => {
    const questions = getRandomQuestions(subjectId, questionCount);
    setActiveQuestions(questions);
    setActiveSubjectId(subjectId);
    setMode('testing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishExam = (userAnswers: Record<number, number | null>, timeSpentSeconds: number) => {
    let score = 0;
    activeQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswerIndex) {
        score += 1;
      }
    });

    const total = activeQuestions.length;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    const subjectObj = SUBJECTS.find(s => s.id === activeSubjectId) || SUBJECTS[0];

    const resultPayload: ExamResult = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      subjectId: activeSubjectId,
      subjectName: subjectObj.name,
      totalQuestions: total,
      score: score,
      percentage: percentage,
      timeSpentSeconds: timeSpentSeconds,
      userAnswers: userAnswers,
      questions: activeQuestions,
    };

    const { updatedHistory, isNewRecord } = saveExamResult(resultPayload);
    const updatedStats = getSubjectStatsMap();

    setHistory(updatedHistory);
    setStatsMap(updatedStats);

    const resultWithFlag: ExamResult = {
      ...resultPayload,
      isNewRecord,
    };

    setCurrentResult(resultWithFlag);
    setMode('review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelExam = () => {
    setMode('setup');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearHistory = () => {
    clearHistory();
    setHistory([]);
    setStatsMap(getSubjectStatsMap());
  };

  const handleViewPastReview = (result: ExamResult) => {
    setCurrentResult(result);
    setMode('review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetakeExam = () => {
    if (currentResult) {
      handleStartExam(currentResult.subjectId, currentResult.totalQuestions);
    } else {
      setMode('setup');
    }
  };

  const highestOverallPercentage = history.reduce((max, h) => Math.max(max, h.percentage), 0);
  const highestSubjectPercentage = currentResult 
    ? (statsMap[currentResult.subjectId]?.highestPercentage || currentResult.percentage)
    : 0;

  return (
    <div className="min-h-screen bg-[#0F1115] text-gray-200 font-sans antialiased selection:bg-indigo-500 selection:text-white flex flex-col">
      {/* Top Header */}
      <Header
        mode={mode}
        setMode={setMode}
        highestOverallPercentage={highestOverallPercentage}
      />

      {/* Main View Content */}
      <main className="flex-1">
        {mode === 'setup' && (
          <ExamSetup
            onStartExam={handleStartExam}
            statsMap={statsMap}
          />
        )}

        {mode === 'testing' && activeQuestions.length > 0 && (
          <ExamScreen
            questions={activeQuestions}
            subjectId={activeSubjectId}
            onFinishExam={handleFinishExam}
            onCancelExam={handleCancelExam}
          />
        )}

        {mode === 'review' && currentResult && (
          <ExamReview
            result={currentResult}
            highestSubjectPercentage={highestSubjectPercentage}
            onRetake={handleRetakeExam}
            onGoHome={() => setMode('setup')}
          />
        )}

        {mode === 'history' && (
          <StatsHistory
            history={history}
            statsMap={statsMap}
            onSelectSubjectForTest={(subId) => {
              setActiveSubjectId(subId);
              setMode('setup');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onViewPastReview={handleViewPastReview}
            onClearHistory={handleClearHistory}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#121418] py-4 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} ExamCore Mock System. All exam progress auto-saved in your browser.</p>
        </div>
      </footer>
    </div>
  );
}
