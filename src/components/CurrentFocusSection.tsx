import React from 'react';
import { CURRENT_FOCUS_TOPICS } from '../data/portfolioData';
import { Compass, Sparkles, ArrowUpRight } from 'lucide-react';

export const CurrentFocusSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            Continuous Learning & Exploration
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            What I'm Exploring Now
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded mt-3" />
          <p className="text-sm text-slate-400 mt-3 max-w-2xl">
            Currently expanding my knowledge in advanced agent architectures, system reliability, and scalable infrastructure patterns.
          </p>
        </div>

        {/* Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CURRENT_FOCUS_TOPICS.map((topic, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0c111e] hover:bg-[#11192d] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-cyan-400/90 bg-cyan-950/40 border border-cyan-800/30 px-2.5 py-0.5 rounded">
                    {topic.status}
                  </span>
                  <Compass className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {topic.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {topic.description}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                  Active Study Areas:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {topic.focusAreas.map((area, aIdx) => (
                    <span
                      key={aIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.04]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
