import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Flag, 
  Grid, 
  CheckCircle2, 
  Clock, 
  Send, 
  X, 
  AlertCircle,
  Keyboard,
  Sparkles
} from 'lucide-react';
import { Question, SubjectId } from '../types';
import { SUBJECTS } from '../data/subjects';
import { SubjectIcon } from './SubjectIcon';

interface ExamScreenProps {
  questions: Question[];
  subjectId: SubjectId;
  onFinishExam: (userAnswers: Record<number, number | null>, timeSpentSeconds: number) => void;
  onCancelExam: () => void;
}

export const ExamScreen: React.FC<ExamScreenProps> = ({
  questions,
  subjectId,
  onFinishExam,
  onCancelExam,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number | null>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const isFinalQuestion = currentIndex === totalQuestions - 1;
  const subjectMeta = SUBJECTS.find(s => s.id === subjectId) || SUBJECTS[0];

  // Timer counter
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpentSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format seconds to MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Answer Selection handler
  const handleSelectOption = useCallback((optionIndex: number) => {
    if (!currentQuestion) return;

    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));

    // Auto advance if not on final question
    if (currentIndex < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 180); // subtle smooth delay for visual feedback
    }
  }, [currentQuestion, currentIndex, totalQuestions]);

  // Keyboard shortcut listener for 1-4 and A-D keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore keypresses if modal is open or modifier keys pressed
      if (showSubmitModal || showDrawer || e.ctrlKey || e.altKey || e.metaKey) return;

      const key = e.key.toUpperCase();
      
      let optionIndex: number | null = null;
      if (key === '1' || key === 'A') optionIndex = 0;
      else if (key === '2' || key === 'B') optionIndex = 1;
      else if (key === '3' || key === 'C') optionIndex = 2;
      else if (key === '4' || key === 'D') optionIndex = 3;

      if (optionIndex !== null) {
        e.preventDefault();
        handleSelectOption(optionIndex);
      } else if (e.key === 'ArrowRight' && currentIndex < totalQuestions - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSelectOption, currentIndex, totalQuestions, showSubmitModal, showDrawer]);

  const toggleFlag = (questionId: number) => {
    setFlagged(prev => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const answeredCount = Object.values(userAnswers).filter(val => val !== null && val !== undefined).length;
  const progressPercentage = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleSubmitConfirmed = () => {
    onFinishExam(userAnswers, timeSpentSeconds);
  };

  if (!currentQuestion) return null;

  const currentSelectedOption = userAnswers[currentQuestion.id] ?? null;
  const isCurrentFlagged = !!flagged[currentQuestion.id];

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-5 pb-12">
      {/* Top Header Bar */}
      <div className="bg-[#121418] rounded-2xl border border-white/10 p-4 shadow-md flex flex-wrap items-center justify-between gap-3">
        {/* Subject & Timer */}
        <div className="flex items-center gap-3">
          <button
            onClick={onCancelExam}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            title="Quit Exam"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${subjectMeta.badgeBg} ${subjectMeta.textColor}`}>
              <SubjectIcon iconName={subjectMeta.iconName} className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block uppercase tracking-tight">
                {subjectMeta.shortName} Mock Test
              </span>
              <span className="text-[11px] text-gray-400">
                {answeredCount} of {totalQuestions} Answered
              </span>
            </div>
          </div>
        </div>

        {/* Live Timer & Question Palette Toggle */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1D2128] text-white font-mono text-xs font-bold border border-white/10">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span>{formatTime(timeSpentSeconds)}</span>
          </div>

          <button
            onClick={() => setShowDrawer(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1D2128] hover:bg-[#242932] text-white text-xs font-bold border border-white/10 transition-all cursor-pointer"
          >
            <Grid className="w-4 h-4 text-indigo-400" />
            <span>Questions</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="flex justify-between items-center text-xs text-gray-400 px-1 font-medium">
          <span>Question {currentIndex + 1} of {totalQuestions}</span>
          <span>{progressPercentage}% Complete</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-[#16191E] rounded-2xl border border-white/10 p-6 md:p-8 shadow-xl space-y-6">
        {/* Question Header & Flag Toggle */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider">
              Q{currentIndex + 1}
            </span>
            <span className="text-xs text-gray-500 font-medium">Single Choice</span>
          </div>

          <button
            onClick={() => toggleFlag(currentQuestion.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer select-none border ${
              isCurrentFlagged
                ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                : 'bg-[#1D2128] text-gray-400 hover:text-white border-white/10 hover:bg-[#242932]'
            }`}
          >
            <Flag className={`w-3.5 h-3.5 ${isCurrentFlagged ? 'fill-amber-400 text-amber-400' : ''}`} />
            <span>{isCurrentFlagged ? 'Flagged' : 'Flag'}</span>
          </button>
        </div>

        {/* Question Text */}
        <h3 className="text-xl sm:text-2xl font-semibold leading-snug text-white">
          {currentQuestion.questionText}
        </h3>

        {/* Answer Options Grid */}
        <div className="space-y-3 pt-2">
          <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5">
            <Keyboard className="w-3.5 h-3.5 text-indigo-400" />
            <span>Click or press <b className="text-gray-300">1</b>, <b className="text-gray-300">2</b>, <b className="text-gray-300">3</b>, or <b className="text-gray-300">4</b> to choose:</span>
          </p>

          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((optionText, idx) => {
              const isSelected = currentSelectedOption === idx;
              const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D
              const keyNumber = idx + 1; // 1, 2, 3, 4

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`group relative flex cursor-pointer items-center justify-between gap-4 rounded-xl p-5 text-left transition-all select-none min-h-[52px] border ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/10 text-white font-medium'
                      : 'border-white/10 bg-[#1A1D23] hover:border-indigo-500/50 hover:bg-indigo-500/5 text-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Key badge indicator */}
                    <span className={`flex h-8 w-8 items-center justify-center rounded border text-xs font-bold transition-colors ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-500 text-white'
                        : 'border-white/20 bg-white/5 text-gray-400 group-hover:bg-indigo-500 group-hover:text-white'
                    }`}>
                      {keyNumber}
                    </span>

                    <span className="text-sm leading-snug">
                      <strong className="mr-1.5 text-gray-500 font-mono">[{optionLetter}]</strong> {optionText}
                    </span>
                  </div>

                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Final Question Notice */}
        {isFinalQuestion && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span><b>Final Question reached!</b> Select your answer above and click <b>"Submit Exam"</b> below to view your score and detailed review.</span>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-5 py-2.5 rounded-lg border border-white/10 bg-[#1D2128] hover:bg-[#242932] text-gray-300 font-semibold text-xs disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer select-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2">
            {isFinalQuestion ? (
              <button
                onClick={() => setShowSubmitModal(true)}
                className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2 cursor-pointer select-none"
              >
                <Send className="w-4 h-4" />
                <span>Submit Exam</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
                className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-1.5 cursor-pointer select-none"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Question Drawer / Modal */}
      {showDrawer && (
        <div className="fixed inset-0 z-50 bg-[#0F1115]/80 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-[#16191E] border-l border-white/10 h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-lg font-bold text-white uppercase flex items-center gap-2">
                  <Grid className="w-5 h-5 text-indigo-400" />
                  <span>Question Map</span>
                </h3>
                <button
                  onClick={() => setShowDrawer(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                <span>Total: {totalQuestions} Questions</span>
                <span className="text-indigo-400 font-bold">{answeredCount} Answered</span>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-3 text-[11px] text-gray-400 border-y border-white/10 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-indigo-600" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-amber-400" />
                  <span>Flagged</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-white/5 border border-white/10" />
                  <span>Unanswered</span>
                </div>
              </div>

              {/* Grid of buttons */}
              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, idx) => {
                  const isAnswered = userAnswers[q.id] !== undefined && userAnswers[q.id] !== null;
                  const isCurrent = idx === currentIndex;
                  const isFlag = !!flagged[q.id];

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setShowDrawer(false);
                      }}
                      className={`h-9 rounded border text-[11px] font-bold transition-all relative flex items-center justify-center cursor-pointer select-none ${
                        isCurrent
                          ? 'border-indigo-500 bg-indigo-500 text-white'
                          : isAnswered
                          ? 'border-indigo-500/50 bg-indigo-500/20 text-indigo-300'
                          : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      <span>{String(idx + 1).padStart(2, '0')}</span>
                      {isFlag && (
                        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-2">
              <button
                onClick={() => {
                  setShowDrawer(false);
                  setShowSubmitModal(true);
                }}
                className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md cursor-pointer"
              >
                Submit Exam Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-[#0F1115]/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#16191E] rounded-2xl border border-white/10 p-6 max-w-md w-full shadow-2xl space-y-5">
            <div className="flex items-center gap-3 text-indigo-400">
              <AlertCircle className="w-8 h-8 shrink-0 text-amber-400" />
              <div>
                <h3 className="text-lg font-bold text-white uppercase">Submit Exam?</h3>
                <p className="text-xs text-gray-400">Are you sure you want to finalize your mock exam?</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#1D2128] border border-white/5 space-y-2 text-xs">
              <div className="flex justify-between text-gray-300">
                <span>Total Questions:</span>
                <span className="font-bold text-white">{totalQuestions}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Questions Answered:</span>
                <span className="font-bold text-emerald-400">{answeredCount}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Unanswered Questions:</span>
                <span className="font-bold text-rose-400">{totalQuestions - answeredCount}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Time Elapsed:</span>
                <span className="font-bold font-mono text-white">{formatTime(timeSpentSeconds)}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2.5 rounded-lg border border-white/10 bg-[#1D2128] text-gray-300 font-bold text-xs hover:bg-[#242932] cursor-pointer"
              >
                Continue Test
              </button>
              <button
                onClick={handleSubmitConfirmed}
                className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md cursor-pointer"
              >
                Yes, Finish & Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
