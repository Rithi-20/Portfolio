import React, { useState } from 'react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';
import { Sparkles, ArrowRight, CheckCircle2, GitCommit, ChevronRight } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<string>(JOURNEY_MILESTONES[0].id);

  const activeData = JOURNEY_MILESTONES.find((m) => m.id === selectedMilestone) || JOURNEY_MILESTONES[0];

  return (
    <section id="journey" className="py-20 relative bg-[#0c0816]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-violet-300 mb-2">
            Engineering Evolution
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            My Learning & Engineering Journey
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded mt-3" />
          <p className="text-sm text-slate-400 mt-3 max-w-2xl">
            Click on any milestone to trace the technical progression from Computer Science foundations to production software engineering, RAG, and Agentic AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Milestone Selector List */}
          <div className="lg:col-span-5 space-y-2">
            {JOURNEY_MILESTONES.map((m, idx) => {
              const isSelected = m.id === selectedMilestone;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedMilestone(m.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-violet-950/50 border-violet-500/50 shadow-md shadow-violet-950/20 text-white'
                      : 'bg-[#140e24] border-white/[0.04] text-slate-400 hover:text-white hover:bg-[#1c1333]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full font-mono text-xs flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-gradient-to-r from-violet-400 to-purple-400 text-slate-950 font-bold'
                          : 'bg-white/[0.05] text-slate-400'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-sm font-semibold">{m.title}</div>
                      <div className="text-[11px] font-mono text-violet-300">{m.phase}</div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-violet-300 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Milestone Deep Dive Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#140e24] border border-purple-500/25 shadow-xl relative min-h-[320px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-violet-300 uppercase tracking-wider font-semibold">
                  {activeData.phase}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Milestone Focus
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {activeData.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeData.description}
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.06]">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                Key Technologies & Competencies
              </div>
              <div className="flex flex-wrap gap-2">
                {activeData.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded bg-[#20143a] text-violet-300 border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
