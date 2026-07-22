import { useState } from 'react';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Home, 
  Clock, 
  Search,
  Sparkles,
  HelpCircle,
  Lightbulb,
  Award
} from 'lucide-react';
import { ExamResult } from '../types';
import { SubjectIcon } from './SubjectIcon';
import { SUBJECTS } from '../data/subjects';

interface ExamReviewProps {
  result: ExamResult;
  highestSubjectPercentage: number;
  onRetake: () => void;
  onGoHome: () => void;
}

export const ExamReview = ({
  result,
  highestSubjectPercentage,
  onRetake,
  onGoHome,
}: ExamReviewProps) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'wrong'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const subjectMeta = SUBJECTS.find(s => s.id === result.subjectId) || SUBJECTS[0];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  // Grade badge helper
  const getGradeInfo = (percentage: number) => {
    if (percentage >= 90) {
      return { label: 'Outstanding!', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-950/80' };
    } else if (percentage >= 70) {
      return { label: 'Passed!', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-950/80' };
    } else if (percentage >= 50) {
      return { label: 'Satisfactory', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-100 dark:bg-amber-950/80' };
    } else {
      return { label: 'Needs Practice', color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-100 dark:bg-rose-950/80' };
    }
  };

  const grade = getGradeInfo(result.percentage);

  // Filter questions
  const filteredQuestions = result.questions.filter(q => {
    const selected = result.userAnswers[q.id];
    const isCorrect = selected === q.correctAnswerIndex;

    if (filter === 'correct' && !isCorrect) return false;
    if (filter === 'wrong' && isCorrect) return false;

    if (searchQuery.trim() !== '') {
      const qText = q.questionText.toLowerCase();
      const expText = q.explanation.toLowerCase();
      const query = searchQuery.toLowerCase();
      return qText.includes(query) || expText.includes(query);
    }

    return true;
  });

  const correctCount = result.questions.filter(q => result.userAnswers[q.id] === q.correctAnswerIndex).length;
  const wrongCount = result.questions.length - correctCount;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8 pb-16">
      {/* Score Celebration Card */}
      <div className="bg-[#16191E] rounded-3xl border border-white/10 p-6 md:p-8 shadow-xl relative overflow-hidden space-y-6">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-2xl ${subjectMeta.badgeBg} ${subjectMeta.textColor}`}>
              <SubjectIcon iconName={subjectMeta.iconName} className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white uppercase tracking-tight">
                  {result.subjectName} Test Results
                </h2>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                  result.percentage >= 70
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                }`}>
                  {grade.label}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Completed on {new Date(result.date).toLocaleDateString()} at {new Date(result.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>

          {/* New Record Banner */}
          {result.isNewRecord && (
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-md animate-pulse">
              <Sparkles className="w-4 h-4 fill-white" />
              <span>New Personal Best!</span>
            </div>
          )}
        </div>

        {/* Score Numbers & Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Main Score Box */}
          <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#1D2128] border border-white/5 flex flex-col justify-between">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              Final Score
            </span>
            <div className="my-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white">
                {result.percentage}%
              </span>
              <span className="text-xs font-semibold text-gray-400 block mt-0.5">
                {result.score} of {result.totalQuestions} Correct
              </span>
            </div>
          </div>

          {/* Highest Score Tracker Box */}
          <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#1D2128] border border-white/5 flex flex-col justify-between">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Highest Score</span>
            </span>
            <div className="my-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white">
                {highestSubjectPercentage}%
              </span>
              <span className="text-xs font-semibold text-gray-400 block mt-0.5">
                Subject Record
              </span>
            </div>
          </div>

          {/* Correct & Wrong Count Box */}
          <div className="p-4 rounded-2xl bg-[#1D2128] border border-white/5 flex flex-col justify-between">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Accuracy Breakdown
            </span>
            <div className="my-1 space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Right</span>
                <span>{correctCount}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-rose-400">
                <span className="flex items-center gap-1"><XCircle className="w-3.5 h-3.5" /> Wrong</span>
                <span>{wrongCount}</span>
              </div>
            </div>
          </div>

          {/* Time Taken Box */}
          <div className="p-4 rounded-2xl bg-[#1D2128] border border-white/5 flex flex-col justify-between">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>Time Taken</span>
            </span>
            <div className="my-2">
              <span className="text-2xl font-bold font-mono text-white">
                {formatTime(result.timeSpentSeconds)}
              </span>
              <span className="text-xs text-gray-500 block mt-0.5">
                ~{Math.round(result.timeSpentSeconds / result.totalQuestions)}s / question
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={onRetake}
            className="flex-1 py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px] uppercase tracking-wide"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Exam (New Questions)</span>
          </button>
          <button
            onClick={onGoHome}
            className="py-3 px-5 rounded-xl bg-[#1D2128] hover:bg-[#242932] text-gray-300 font-bold text-xs border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
          >
            <Home className="w-4 h-4 text-indigo-400" />
            <span>Back to Practice Setup</span>
          </button>
        </div>
      </div>

      {/* Review Section Heading & Filters */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <span>Detailed Question Review</span>
            </h3>
            <p className="text-xs text-gray-400">
              Review correct answers (green) and wrong answers (red) with full explanations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#16191E] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All ({result.questions.length})
            </button>
            <button
              onClick={() => setFilter('wrong')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                filter === 'wrong'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-rose-400 hover:bg-rose-500/10'
              }`}
            >
              <XCircle className="w-3.5 h-3.5" />
              <span>Wrong ({wrongCount})</span>
            </button>
            <button
              onClick={() => setFilter('correct')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                filter === 'correct'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-emerald-400 hover:bg-emerald-500/10'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Right ({correctCount})</span>
            </button>
          </div>
        </div>

        {/* Keyword Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search questions or keywords (e.g., OSPF, list, chmod, IP)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-[#16191E] text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
          />
        </div>

        {/* Question Review List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="p-8 text-center bg-[#16191E] rounded-2xl border border-white/10 text-gray-400 text-xs space-y-2">
              <HelpCircle className="w-8 h-8 text-gray-500 mx-auto" />
              <p className="font-semibold text-gray-300">No questions match the current filter.</p>
              <p>Try switching filter tabs or clearing your search query.</p>
            </div>
          ) : (
            filteredQuestions.map((q, idx) => {
              const selectedIdx = result.userAnswers[q.id];
              const isCorrect = selectedIdx === q.correctAnswerIndex;
              const isSkipped = selectedIdx === null || selectedIdx === undefined;

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border p-5 md:p-6 shadow-xs transition-all space-y-4 ${
                    isCorrect
                      ? 'bg-[#16191E] border-emerald-500/30'
                      : 'bg-[#16191E] border-rose-500/30'
                  }`}
                >
                  {/* Status Bar */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded text-xs font-extrabold ${
                        isCorrect
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      }`}>
                        Q{idx + 1}
                      </span>

                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-400">
                          <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                          <span>Correct</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-bold text-rose-400">
                          <XCircle className="w-4 h-4 fill-rose-500 text-white" />
                          <span>{isSkipped ? 'Skipped' : 'Incorrect'}</span>
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] font-semibold text-gray-500 uppercase">
                      Subject: {q.subject}
                    </span>
                  </div>

                  {/* Question Prompt */}
                  <h4 className="text-base font-bold text-white leading-relaxed">
                    {q.questionText}
                  </h4>

                  {/* Options List */}
                  <div className="space-y-2 pt-1">
                    {q.options.map((optionText, optIdx) => {
                      const isOptionCorrect = optIdx === q.correctAnswerIndex;
                      const isOptionUserSelected = optIdx === selectedIdx;

                      let optionStyle = 'bg-[#1A1D23] border-white/5 text-gray-400 opacity-60';
                      if (isOptionCorrect) {
                        optionStyle = 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300 font-bold ring-1 ring-emerald-500/30';
                      } else if (isOptionUserSelected && !isCorrect) {
                        optionStyle = 'bg-rose-500/10 border-rose-500/50 text-rose-300 font-bold line-through opacity-90';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-3.5 rounded-xl border text-xs flex items-center justify-between gap-3 ${optionStyle}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono font-bold text-gray-400">
                              [{String.fromCharCode(65 + optIdx)}]
                            </span>
                            <span>{optionText}</span>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {isOptionUserSelected && !isCorrect && (
                              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold text-[10px] border border-rose-500/30">
                                Your Answer
                              </span>
                            )}
                            {isOptionCorrect && (
                              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] flex items-center gap-1 border border-emerald-500/30">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                Correct Answer
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Box */}
                  <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20 text-gray-300 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-indigo-400">
                      <Lightbulb className="w-4 h-4 text-indigo-400" />
                      <span>Explanation:</span>
                    </div>
                    <p className="leading-relaxed pl-5 text-gray-300">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
