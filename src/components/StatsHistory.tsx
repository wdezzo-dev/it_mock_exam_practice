import React, { useState } from 'react';
import { 
  Trophy, 
  Trash2, 
  Play, 
  BarChart3, 
  Eye, 
  Sparkles,
  Award
} from 'lucide-react';
import { ExamResult, SubjectId, SubjectStats } from '../types';
import { SUBJECTS } from '../data/subjects';
import { SubjectIcon } from './SubjectIcon';

interface StatsHistoryProps {
  history: ExamResult[];
  statsMap: Record<SubjectId, SubjectStats>;
  onSelectSubjectForTest: (subjectId: SubjectId) => void;
  onViewPastReview: (result: ExamResult) => void;
  onClearHistory: () => void;
}

export const StatsHistory: React.FC<StatsHistoryProps> = ({
  history,
  statsMap,
  onSelectSubjectForTest,
  onViewPastReview,
  onClearHistory,
}) => {
  const [showClearModal, setShowClearModal] = useState<boolean>(false);

  const totalExams = history.length;
  const highestOverallPct = history.reduce((max, h) => Math.max(max, h.percentage), 0);
  const totalQuestionsAnswered = history.reduce((sum, h) => sum + h.totalQuestions, 0);

  // Find best subject
  let bestSubjectName = 'None';
  let bestSubjectPct = 0;
  Object.values(statsMap).forEach((st: SubjectStats) => {
    if (st.highestPercentage > bestSubjectPct) {
      bestSubjectPct = st.highestPercentage;
      const sub = SUBJECTS.find(s => s.id === st.subjectId);
      if (sub) bestSubjectName = sub.shortName;
    }
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-[#16191E] rounded-3xl border border-white/10 p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-2">
              <Trophy className="w-6 h-6 text-amber-400" />
              <span>Performance Analytics & High Scores</span>
            </h2>
            <p className="text-xs text-gray-400">
              Track your highest scores and exam improvement over time saved locally in your browser.
            </p>
          </div>

          {totalExams > 0 && (
            <button
              onClick={() => setShowClearModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 text-xs font-semibold transition-all cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Reset History</span>
            </button>
          )}
        </div>

        {/* Global Summary Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#1D2128] border border-white/5 space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Highest Overall
            </span>
            <span className="text-3xl font-extrabold text-white block">
              {highestOverallPct}%
            </span>
            <span className="text-[11px] text-gray-400 block">Personal Record</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#1D2128] border border-white/5 space-y-1">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
              Exams Completed
            </span>
            <span className="text-3xl font-extrabold text-white block">
              {totalExams}
            </span>
            <span className="text-[11px] text-gray-400 block">Mock Tests Taken</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#1D2128] border border-white/5 space-y-1">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              Questions Solved
            </span>
            <span className="text-3xl font-extrabold text-white block">
              {totalQuestionsAnswered}
            </span>
            <span className="text-[11px] text-gray-400 block">Practice Questions</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#1D2128] border border-white/5 space-y-1">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
              Top Domain
            </span>
            <span className="text-xl font-bold text-white block truncate">
              {bestSubjectName}
            </span>
            <span className="text-[11px] text-gray-400 block">
              {bestSubjectPct > 0 ? `${bestSubjectPct}% Best` : 'No tests yet'}
            </span>
          </div>
        </div>
      </div>

      {/* Highest Scores by Subject Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-400" />
          <span>Subject High Score Leaderboard</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SUBJECTS.filter(s => s.id !== 'all').map(sub => {
            const stats = statsMap[sub.id];
            const pct = stats?.highestPercentage || 0;
            const attempts = stats?.totalAttempts || 0;

            return (
              <div
                key={sub.id}
                className="bg-[#16191E] rounded-2xl border border-white/10 p-5 shadow-sm flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  <div className={`p-3 rounded-xl shrink-0 ${sub.badgeBg} ${sub.textColor}`}>
                    <SubjectIcon iconName={sub.iconName} className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-white text-sm truncate">
                        {sub.name}
                      </h4>
                      <span className="font-mono font-extrabold text-sm text-indigo-400">
                        {pct}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-500 rounded-full transition-all duration-500" 
                        style={{ width: `${pct}%` }} 
                      />
                    </div>

                    <p className="text-[11px] text-gray-400">
                      {attempts > 0 ? `${attempts} tests completed` : 'Not attempted yet'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onSelectSubjectForTest(sub.id)}
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span className="hidden xs:inline">Test</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Past Exam History Logs */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-indigo-400" />
          <span>Past Exam History</span>
        </h3>

        {history.length === 0 ? (
          <div className="bg-[#16191E] rounded-2xl border border-white/10 p-8 text-center space-y-3">
            <Trophy className="w-10 h-10 text-gray-500 mx-auto" />
            <h4 className="font-bold text-gray-200 text-sm">No exam history recorded yet</h4>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Take a mock test in any subject to record your scores and track your progress over time!
            </p>
          </div>
        ) : (
          <div className="bg-[#16191E] rounded-2xl border border-white/10 overflow-hidden shadow-sm">
            <div className="divide-y divide-white/10">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 hover:bg-[#1D2128] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-bold text-indigo-400 text-sm">
                      {item.percentage}%
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">
                          {item.subjectName}
                        </span>
                        {item.isNewRecord && (
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-400" /> Record
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400">
                        {item.score} / {item.totalQuestions} Correct • {formatTime(item.timeSpentSeconds)} • {new Date(item.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onViewPastReview(item)}
                    className="px-3.5 py-2 rounded-xl border border-white/10 bg-[#1D2128] hover:bg-[#242932] text-gray-300 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-indigo-400" />
                    <span>View Review</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Clear History Confirmation Modal */}
      {showClearModal && (
        <div className="fixed inset-0 z-50 bg-[#0F1115]/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#16191E] rounded-2xl border border-white/10 p-6 max-w-sm w-full shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-white uppercase">Clear All Exam History?</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              This will erase all past exam score logs and reset your personal highest score records stored in this browser. This action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowClearModal(false)}
                className="px-4 py-2 rounded-xl border border-white/10 bg-[#1D2128] text-gray-300 text-xs font-bold cursor-pointer hover:bg-[#242932]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onClearHistory();
                  setShowClearModal(false);
                }}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold cursor-pointer"
              >
                Yes, Reset All Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
