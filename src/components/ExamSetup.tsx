import React, { useState } from 'react';
import { Play, Trophy, Keyboard, Smartphone, RefreshCw, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { SubjectId, SubjectMeta, SubjectStats } from '../types';
import { SUBJECTS } from '../data/subjects';
import { SubjectIcon } from './SubjectIcon';
import { getSubjectQuestionCount } from '../data/questions';

interface ExamSetupProps {
  onStartExam: (subjectId: SubjectId, questionCount: number, randomize: boolean) => void;
  statsMap: Record<SubjectId, SubjectStats>;
}

export const ExamSetup: React.FC<ExamSetupProps> = ({ onStartExam, statsMap }) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('all');
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [randomize, setRandomize] = useState<boolean>(true);

  const currentSubjectMeta = SUBJECTS.find(s => s.id === selectedSubject) || SUBJECTS[0];
  const totalAvailable = getSubjectQuestionCount(selectedSubject);
  const selectedStats = statsMap[selectedSubject];

  const questionPresets = [10, 20, 30, 50, 100].filter(count => count <= totalAvailable);
  if (!questionPresets.includes(totalAvailable) && totalAvailable > 0) {
    questionPresets.push(totalAvailable);
  }

  const handleStart = () => {
    const finalCount = Math.min(questionCount, totalAvailable);
    onStartExam(selectedSubject, finalCount, randomize);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-[#16191E] text-white p-6 md:p-8 shadow-xl border border-white/10">
        <div className="relative z-10 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>320 Real IT & Certification Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
            Master IT Certification Exams
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Test your knowledge across Python, CCNA Networking, Cloud Architecture, SQL Databases, Linux, Windows Administration, Cybersecurity, and RAID storage.
          </p>

          <div className="pt-2 flex flex-wrap gap-3 text-xs text-gray-300">
            <div className="flex items-center gap-1.5 bg-[#1D2128] px-3 py-1.5 rounded-lg border border-white/5">
              <Keyboard className="w-4 h-4 text-indigo-400" />
              <span>Press <b className="text-white">1-4</b> to answer & auto-advance</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1D2128] px-3 py-1.5 rounded-lg border border-white/5">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>100% Mobile Optimized</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1D2128] px-3 py-1.5 rounded-lg border border-white/5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Saves High Scores Locally</span>
            </div>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Step 1: Select Subject */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-indigo-600 text-white text-xs flex items-center justify-center font-extrabold shadow-md shadow-indigo-600/20">1</span>
              <span>Choose Exam Subject</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">Select a specific topic or test all subjects combined.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SUBJECTS.map((sub: SubjectMeta) => {
            const isSelected = selectedSubject === sub.id;
            const stats = statsMap[sub.id];

            return (
              <button
                key={sub.id}
                onClick={() => {
                  setSelectedSubject(sub.id);
                  const available = getSubjectQuestionCount(sub.id);
                  setQuestionCount(Math.min(20, available));
                }}
                className={`group relative text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                  isSelected
                    ? 'bg-[#1D2128] border-indigo-500 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/30'
                    : 'bg-[#1A1D23] border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className={`p-2.5 rounded-lg ${sub.badgeBg} ${sub.textColor} transition-transform group-hover:scale-105`}>
                    <SubjectIcon iconName={sub.iconName} className="w-5 h-5" />
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400">
                      {sub.questionCount} Qs
                    </span>

                    {stats && stats.highestPercentage > 0 && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Trophy className="w-2.5 h-2.5" />
                        Best: {stats.highestPercentage}%
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="font-bold text-white text-sm mb-1 group-hover:text-indigo-400 transition-colors">
                  {sub.name}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  {sub.description}
                </p>

                {isSelected && (
                  <div className="absolute top-3 right-3 text-indigo-400">
                    <CheckCircle className="w-4 h-4 fill-indigo-500 text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Configure Test Length & Settings */}
      <div className="bg-[#16191E] rounded-2xl border border-white/10 p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-indigo-600 text-white text-xs flex items-center justify-center font-extrabold shadow-md shadow-indigo-600/20">2</span>
              <span>Question Count & Settings</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">Choose how many questions to attempt from {currentSubjectMeta.name}.</p>
          </div>

          {/* Highest Score Callout */}
          <div className="hidden sm:flex items-center gap-2 bg-[#1D2128] border border-white/5 px-3 py-1.5 rounded-xl">
            <Trophy className="w-4 h-4 text-amber-400" />
            <div className="text-xs">
              <span className="text-gray-400">Personal Best: </span>
              <span className="font-bold text-white">
                {selectedStats?.highestPercentage ? `${selectedStats.highestPercentage}%` : 'Not attempted yet'}
              </span>
            </div>
          </div>
        </div>

        {/* Preset Question Buttons */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
            Number of Questions
          </label>

          <div className="flex flex-wrap gap-2.5">
            {questionPresets.map(preset => (
              <button
                key={preset}
                onClick={() => setQuestionCount(preset)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all min-w-[70px] cursor-pointer select-none ${
                  questionCount === preset
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500/40 scale-105'
                    : 'bg-[#1D2128] border border-white/10 text-gray-300 hover:bg-[#242932] hover:text-white'
                }`}
              >
                {preset === totalAvailable && preset > 100 ? `All (${preset})` : `${preset} Qs`}
              </button>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-3">
            <span className="text-xs text-gray-400">Custom count:</span>
            <input
              type="range"
              min={5}
              max={totalAvailable}
              step={5}
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-48 accent-indigo-500 cursor-pointer"
            />
            <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
              {questionCount} Questions Selected
            </span>
          </div>
        </div>

        {/* Options Toggles */}
        <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={randomize}
              onChange={(e) => setRandomize(e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-white/20 bg-[#1D2128]"
            />
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
              <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
              <span>Randomize and shuffle question order each session</span>
            </div>
          </label>
        </div>

        {/* Big Start Exam CTA Button */}
        <div className="pt-2">
          <button
            onClick={handleStart}
            className="w-full py-4 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-base tracking-wide uppercase shadow-lg shadow-indigo-600/30 active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer min-h-[52px]"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Start {currentSubjectMeta.shortName} Mock Exam ({questionCount} Qs)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
