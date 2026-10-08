import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, ArrowUpRight, CheckCircle2, TrendingUp, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            What I Did
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded mt-3" />
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12 mb-6">
          {EXPERIENCES.map((exp) => {
            const isFuzionest = exp.id === 'fuzionest';
            return (
              <div key={exp.id} className="relative pl-6 sm:pl-8 group">
                {/* Node marker on the line */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                    isFuzionest
                      ? 'bg-cyan-400 border-cyan-300 shadow-lg shadow-cyan-500/40'
                      : 'bg-[#090d16] border-slate-500 group-hover:border-cyan-400'
                  }`}
                />

                {/* Date indicator for wide screens on the left */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                  <span className="text-xs font-mono font-medium text-cyan-400 block">
                    {exp.period}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 block truncate">
                    {exp.location}
                  </span>
                </div>

                {/* Experience Card */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl cursor-default group ${
                    isFuzionest
                      ? 'bg-[#0e1424] border border-cyan-500/30 hover:border-cyan-400/70 shadow-xl shadow-cyan-950/20 hover:shadow-cyan-500/25'
                      : 'bg-[#0c101d] border border-white/[0.06] hover:border-cyan-500/40 hover:shadow-cyan-500/15'
                  }`}
                >
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-cyan-400">
                        {exp.company}
                      </div>
                    </div>

                    <div className="md:hidden flex items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Career Progression Note for Fuzionest */}
                  {exp.progressionNote && (
                    <div className="mb-4 p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/40 flex items-start gap-2.5">
                      <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div className="text-xs text-cyan-200 leading-relaxed font-medium">
                        <span className="font-semibold text-cyan-300">Career Progression: </span>
                        {exp.progressionNote}
                      </div>
                    </div>
                  )}

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 mb-5 text-xs sm:text-sm text-slate-300">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] text-slate-300 border border-white/[0.04]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
