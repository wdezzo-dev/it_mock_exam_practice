import React from 'react';
import { Trophy, BookOpen, BarChart3, Layers, Sparkles } from 'lucide-react';
import { ExamMode } from '../types';

interface HeaderProps {
  mode: ExamMode;
  setMode: (mode: ExamMode) => void;
  highestOverallPercentage: number;
}

export const Header: React.FC<HeaderProps> = ({ mode, setMode, highestOverallPercentage }) => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[#121418]/90 border-b border-white/10 transition-colors shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Logo & Title */}
        <div 
          onClick={() => setMode('setup')} 
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            EC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-white leading-tight uppercase">
                ExamCore
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Sparkles className="w-3 h-3" /> 320 Qs
              </span>
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest hidden xs:block">
              Mock System v2.4
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-[#16191E] p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setMode('setup')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all select-none cursor-pointer ${
              mode === 'setup'
                ? 'bg-[#1D2128] text-white border border-white/10 shadow-xs'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Practice</span>
          </button>

          <button
            onClick={() => setMode('history')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all select-none cursor-pointer ${
              mode === 'history'
                ? 'bg-[#1D2128] text-white border border-white/10 shadow-xs'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
            <span>High Scores</span>
            {highestOverallPercentage > 0 && (
              <span className="flex items-center gap-0.5 px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold text-[10px]">
                <Trophy className="w-2.5 h-2.5 text-amber-400" />
                {highestOverallPercentage}%
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
