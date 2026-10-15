import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Box, Send, Download, ArrowRight, MapPin, FileText } from 'lucide-react';
import { PERSONAL_INFO, ALL_PROJECTS } from '../data/portfolioData';
import { LeetCodeIcon } from './LeetCodeIcon';

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
      value: '15+',
      label: 'Projects Built',
      subtext: 'AI, ML & Web Systems'
    },
    {
      value: 'IEEE 2025',
      label: 'GreenMark Paper',
      subtext: 'ICESCS Conference Author'
    }
  ];

  return (
    <section id="home" className="relative min-h-[82vh] pt-24 pb-14 flex items-center justify-center overflow-hidden">
      {/* Dynamic ambient color gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Cyber grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center text-center">
        {/* Prominent Name Header */}
        <h1
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] uppercase mb-2"
        >
          RITHIHA <span className="gradient-text">U</span>
        </h1>

        {/* Animated Typing Role Terminal */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="h-8 sm:h-9 flex items-center justify-center mb-4 font-mono text-sm sm:text-base text-purple-100"
        >
          <span className="text-violet-400 font-bold mr-2">$</span>
          <span className="text-purple-100 font-semibold transition-all duration-300">
            {titles[typedIndex]}
          </span>
          <span className="inline-block w-2 h-5 ml-1.5 bg-violet-400 animate-pulse align-middle shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
        </div>

        {/* Professional 3-Line Summary of What I Will Do */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-xs sm:text-sm text-purple-200/90 mb-6 leading-relaxed max-w-2xl mx-auto space-y-1 font-normal"
        >
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

        {/* Quick Stats Ribbon - Perfectly aligned & compact */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-6 w-full max-w-3xl p-3 sm:p-3.5 rounded-xl bg-[#140e24]/70 border border-purple-500/15 backdrop-blur-md shadow-xl"
        >
          {heroStats.map((stat, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={`${200 + idx * 75}`}
              className="p-2.5 sm:p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-purple-500/10 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] text-center flex flex-col justify-center cursor-default group"
            >
              <div className="text-xl sm:text-2xl font-extrabold font-mono gradient-text">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-purple-100 mt-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-[11px] text-purple-300/70 mt-0.5 leading-snug">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Primary Action Buttons - Centered */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6"
        >
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 hover:opacity-95 transition-all duration-200 shadow-lg shadow-violet-500/20 hover:shadow-violet-400/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Box className="w-3.5 h-3.5" />
            <span>Explore 3D Projects (15+)</span>
            <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-violet-200 hover:text-white bg-violet-950/40 hover:bg-violet-900/40 border border-violet-800/50 hover:border-violet-500/60 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-violet-400" />
            <span>View Resume PDF</span>
          </a>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-purple-200 hover:text-white bg-[#140e24] hover:bg-[#1d1433] border border-purple-500/20 transition-all duration-200 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-violet-400" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Social Footprint Bar - Centered on Single Line */}
        <div
          data-aos="fade-up"
          data-aos-delay="350"
          className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 sm:gap-4 md:gap-5 pt-4 border-t border-purple-500/15 text-xs font-mono text-purple-300/70 w-full max-w-4xl whitespace-nowrap"
        >
          <div className="flex items-center gap-1.5 text-violet-400 shrink-0">
            <MapPin className="w-3.5 h-3.5" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
          <span className="text-purple-800 shrink-0">·</span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-purple-200/80 hover:text-violet-300 transition-colors shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>GitHub (Rithi-20)</span>
          </a>
          <span className="text-purple-800 shrink-0">·</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-purple-200/80 hover:text-violet-300 transition-colors shrink-0"
          >
            <Linkedin className="w-3.5 h-3.5 text-violet-400" />
            <span>LinkedIn</span>
          </a>
          <span className="text-purple-800 shrink-0">·</span>
          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-purple-200/80 hover:text-amber-300 transition-colors shrink-0"
          >
            <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>LeetCode</span>
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
