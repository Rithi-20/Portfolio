import React from 'react';
import { QUICK_STATS } from '../data/portfolioData';

export const QuickStats: React.FC = () => {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-2 sm:p-3 bg-[#140e24]/90 backdrop-blur-md rounded-2xl border border-purple-500/25 shadow-xl shadow-purple-950/40">
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.04] transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white group-hover:text-violet-300 transition-colors">
                {stat.value}
              </div>
              <div className="mt-1.5">
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
