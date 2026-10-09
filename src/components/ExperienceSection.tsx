import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import {
  Briefcase,
  TrendingUp,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCES[0].id);
  const [viewMode, setViewMode] = useState<'spotlight' | 'timeline'>('spotlight');

  const currentIndex = EXPERIENCES.findIndex((e) => e.id === selectedId);
  const activeExp = EXPERIENCES[currentIndex] || EXPERIENCES[0];

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + EXPERIENCES.length) % EXPERIENCES.length;
    setSelectedId(EXPERIENCES[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % EXPERIENCES.length;
    setSelectedId(EXPERIENCES[nextIndex].id);
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-aos="fade-up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              What I Did
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded mt-3" />
            <p className="text-xs sm:text-sm font-mono text-violet-300/80 mt-2">
              Click any milestone dot along the route to list detailed responsibilities and achievements
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#140e24] border border-purple-500/20 w-fit">
            <button
              type="button"
              onClick={() => setViewMode('spotlight')}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'spotlight'
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-md shadow-purple-900/30'
                  : 'text-purple-300/70 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Dot View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('timeline')}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'timeline'
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-md shadow-purple-900/30'
                  : 'text-purple-300/70 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Full Timeline</span>
            </button>
          </div>
        </div>

        {/* Interactive Milestone Route Track (Clickable Dots) */}
        <div data-aos="fade-up" data-aos-delay="100" className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#140e24] border border-purple-500/20 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-purple-300/70 mb-5">
            <span className="flex items-center gap-1.5 uppercase tracking-wider font-semibold text-violet-300">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Milestone Route ({currentIndex + 1} of {EXPERIENCES.length})
            </span>
            <span className="hidden sm:inline">Select a dot to inspect experience</span>
          </div>

          {/* Connected track line with interactive clickable dots */}
          <div className="relative flex items-center justify-between">
            {/* Background connecting track line */}
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-purple-900/40 z-0" />
            {/* Illuminated connecting line up to active dot */}
            <div
              className="absolute left-6 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 z-0 transition-all duration-300"
              style={{
                width: `${(currentIndex / Math.max(1, EXPERIENCES.length - 1)) * 100 * 0.9}%`
              }}
            />

            {/* Clickable Milestone Dot Stops */}
            {EXPERIENCES.map((exp, idx) => {
              const isSelected = exp.id === selectedId;
              return (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => setSelectedId(exp.id)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                  aria-label={`Select experience: ${exp.role} at ${exp.company}`}
                >
                  {/* Glowing Clickable Dot Node */}
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-br from-violet-300 to-purple-500 text-slate-950 ring-4 ring-violet-400/40 shadow-xl shadow-violet-500/50 scale-110'
                        : 'bg-[#18112b] border border-purple-500/30 text-purple-300 group-hover:border-violet-400/70 group-hover:bg-[#20153b] group-hover:scale-105'
                    }`}
                  >
                    0{idx + 1}
                  </div>

                  {/* Company and Period Tag below dot */}
                  <div className="mt-2.5 text-center max-w-[110px] sm:max-w-[160px]">
                    <div
                      className={`text-xs font-bold transition-colors truncate ${
                        isSelected ? 'text-violet-200' : 'text-slate-400 group-hover:text-purple-200'
                      }`}
                    >
                      {exp.company}
                    </div>
                    <div className="text-[10px] font-mono text-purple-400/80 truncate">
                      {exp.period}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* View Mode 1: Spotlight Card (Lists the clicked dot's detailed experience) */}
        {viewMode === 'spotlight' && (
          <div data-aos="fade-up" data-aos-delay="150" className="p-6 sm:p-8 rounded-2xl bg-[#140e24] border border-purple-500/25 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-violet-400/50">
            {/* Top metadata row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-purple-500/15">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-violet-300 uppercase tracking-wider font-semibold">
                    Milestone 0{currentIndex + 1}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-violet-950/60 text-violet-300 border border-violet-800/40">
                    {activeExp.type}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeExp.role}
                </h3>
                <div className="text-base font-semibold text-violet-400 mt-0.5">
                  {activeExp.company}
                </div>
              </div>

              {/* Date & Location */}
              <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs font-mono text-slate-300">
                <span className="inline-flex items-center gap-1.5 text-violet-300 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-violet-400" />
                  {activeExp.period}
                </span>
                <span className="inline-flex items-center gap-1.5 text-purple-300/70">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  {activeExp.location}
                </span>
              </div>
            </div>

            {/* Career Progression Note if present */}
            {activeExp.progressionNote && (
              <div className="mb-6 p-4 rounded-xl bg-violet-950/40 border border-violet-800/50 flex items-start gap-3 shadow-md shadow-violet-950/20">
                <TrendingUp className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                  <strong className="font-semibold text-violet-300">Career Progression: </strong>
                  {activeExp.progressionNote}
                </div>
              </div>
            )}

            {/* Detailed Responsibilities & Highlights List */}
            <div className="mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />
                <span>Key Responsibilities & Impact:</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-purple-100/95">
                {activeExp.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-3 hover:border-purple-500/30 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies & Skills chips */}
            <div className="pt-5 border-t border-purple-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Technologies Employed
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeExp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-3 py-1 rounded bg-[#20153b] text-purple-200 border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-purple-500/20 transition-all cursor-pointer"
                  title="Previous Milestone"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-purple-500/20 transition-all cursor-pointer"
                  title="Next Milestone"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* View Mode 2: Full Chronological Timeline (All Cards) */}
        {viewMode === 'timeline' && (
          <div className="relative border-l border-purple-500/20 ml-4 md:ml-32 space-y-12 mb-6">
            {EXPERIENCES.map((exp, idx) => {
              const isSelected = exp.id === selectedId;
              return (
                <div key={exp.id} className="relative pl-6 sm:pl-8 group">
                  {/* Clickable Node marker on the line */}
                  <button
                    type="button"
                    onClick={() => setSelectedId(exp.id)}
                    className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-violet-400 border-white shadow-xl shadow-violet-500/50 scale-125'
                        : 'bg-[#140e24] border-purple-400 group-hover:border-violet-300 group-hover:scale-110'
                    }`}
                    title="Click to spotlight this milestone"
                  />

                  {/* Date indicator for wide screens on the left */}
                  <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                    <span className="text-xs font-mono font-medium text-violet-400 block">
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-mono text-purple-300/60 block truncate">
                      {exp.location}
                    </span>
                  </div>

                  {/* Experience Card */}
                  <div
                    onClick={() => setSelectedId(exp.id)}
                    className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-2xl cursor-pointer ${
                      isSelected
                        ? 'bg-[#18112c] border-2 border-violet-400/80 shadow-2xl shadow-violet-950/50 ring-1 ring-violet-400/30'
                        : 'bg-[#140e24] border border-purple-500/20 hover:border-violet-500/50 hover:shadow-violet-500/15'
                    }`}
                  >
                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-sm font-medium text-violet-400">
                          {exp.company}
                        </div>
                      </div>

                      <div className="md:hidden flex items-center gap-3 text-xs font-mono text-purple-300/70">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-violet-400" />
                          {exp.period}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-purple-400/60" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Career Progression Note */}
                    {exp.progressionNote && (
                      <div className="mb-4 p-3 rounded-lg bg-violet-950/40 border border-violet-800/40 flex items-start gap-2.5">
                        <TrendingUp className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <div className="text-xs text-purple-200 leading-relaxed font-medium">
                          <span className="font-semibold text-violet-300">Career Progression: </span>
                          {exp.progressionNote}
                        </div>
                      </div>
                    )}

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 mb-5 text-xs sm:text-sm text-purple-100/90">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 mt-2" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills tags */}
                    <div className="pt-4 border-t border-purple-500/15 flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#1c1333] text-purple-200 border border-purple-500/20"
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
        )}
      </div>
    </section>
  );
};
