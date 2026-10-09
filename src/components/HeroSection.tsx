import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Box, Send, Download, ArrowRight, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [typedIndex, setTypedIndex] = useState(0);
  const titles = [
    'AI Engineer & Software Developer',
    'LLM & Multi-Agent Systems Architect',
    'Applied Machine Learning Engineer',
    'AI & Backend Systems Engineer (FastAPI + Node)'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [titles.length]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroStats = [
    {
      value: '8.42',
      label: 'B.E. CSE CGPA',
      subtext: 'Dr. N.G.P. Institute of Tech'
    },
    {
      value: '9 Months',
      label: 'Industry Dev Exp',
      subtext: 'Fuzionest (3m Intern + 6m Pro)'
    },
    {
      value: '17+',
      label: 'Built Repositories',
      subtext: 'AI, ML & Web Systems'
    },
    {
      value: 'IEEE 2025',
      label: 'GreenMark Paper',
      subtext: 'ICESCS Conference Author'
    }
  ];

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Dynamic ambient color gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-violet-600/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyber grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center">
        {/* Prominent Name Header */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-[1.05] uppercase mb-3">
          RITHIHA <span className="gradient-text">U</span>
        </h1>

        {/* Animated Typing Role Terminal */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6 font-mono text-base sm:text-xl text-purple-100">
          <span className="text-violet-400 font-bold mr-2.5">$</span>
          <span className="text-purple-100 font-semibold transition-all duration-300">
            {titles[typedIndex]}
          </span>
          <span className="inline-block w-2.5 h-6 ml-2 bg-violet-400 animate-pulse align-middle shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
        </div>

        {/* Professional 3-Line Summary of What I Will Do */}
        <div className="text-sm sm:text-base md:text-lg text-purple-200/90 mb-8 leading-relaxed max-w-3xl mx-auto space-y-1 font-normal">
          <p className="text-purple-100 font-medium">
            Building production-grade AI systems, multi-agent workflows, and scalable backend architectures.
          </p>
          <p className="text-violet-300 font-medium">
            Specializing in applied machine learning, RAG pipelines, and environmental AI published at IEEE ICESCS 2025 (GreenMark).
          </p>
          <p className="text-purple-200/80">
            Dedicated to transforming bleeding-edge models into reliable, high-impact products that solve real-world problems.
          </p>
        </div>

        {/* Quick Stats Ribbon - Perfectly aligned & spacious with no cutoffs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 w-full max-w-4xl p-4 sm:p-5 rounded-2xl bg-[#140e24]/70 border border-purple-500/15 backdrop-blur-md shadow-2xl">
          {heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-purple-500/10 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] text-center flex flex-col justify-center cursor-default group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono gradient-text">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-purple-100 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-purple-300/70 mt-1 leading-snug">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Primary Action Buttons - Centered */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 hover:opacity-95 transition-all duration-200 shadow-xl shadow-violet-500/25 hover:shadow-violet-400/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Box className="w-4 h-4" />
            <span>Explore 3D Projects (17)</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-violet-200 hover:text-white bg-violet-950/40 hover:bg-violet-900/40 border border-violet-800/50 hover:border-violet-500/60 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Download className="w-4 h-4 text-violet-400" />
            <span>View Resume PDF</span>
          </button>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-purple-200 hover:text-white bg-[#140e24] hover:bg-[#1d1433] border border-purple-500/20 transition-all duration-200 cursor-pointer"
          >
            <Send className="w-4 h-4 text-violet-400" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Social Footprint Bar - Centered */}
        <div className="flex flex-wrap items-center justify-center gap-5 pt-4 border-t border-purple-500/15 text-xs font-mono text-purple-300/70 w-full max-w-xl">
          <div className="flex items-center gap-1.5 text-violet-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
          <span className="text-purple-800 hidden sm:inline">·</span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-purple-200/80 hover:text-violet-300 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub (Rithi-20)</span>
          </a>
          <span className="text-purple-800 hidden sm:inline">·</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-purple-200/80 hover:text-violet-300 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-violet-400" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300/60">Scroll to Explore</span>
        <ArrowDown className="w-3.5 h-3.5 text-violet-400 animate-bounce" />
      </div>
    </section>
  );
};
