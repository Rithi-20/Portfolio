import React, { useState } from 'react';
import {
  MapPin,
  Languages,
  Mail,
  Briefcase,
  User,
  Copy,
  Check,
  Github,
  Linkedin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LeetCodeIcon } from './LeetCodeIcon';

export const AboutSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const personalDetails = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu, India',
      subtext: 'Open to Relocation & Remote Roles',
      color: 'text-violet-400',
      bgGlow: 'border-purple-500/20 hover:border-violet-500/50 bg-[#140e24]/70'
    },
    {
      icon: Languages,
      label: 'Languages',
      value: 'Tamil (Native) · English (Professional)',
      subtext: 'Fluent Technical & Team Communication',
      color: 'text-purple-300',
      bgGlow: 'border-purple-500/20 hover:border-purple-500/50 bg-[#140e24]/70'
    },
    {
      icon: Mail,
      label: 'Email Address',
      value: PERSONAL_INFO.email,
      subtext: copiedEmail ? 'Copied to clipboard!' : 'Click to copy email address',
      color: 'text-violet-300',
      bgGlow: 'border-purple-500/20 hover:border-violet-500/50 bg-[#140e24]/70',
      onClick: handleCopyEmail,
      isInteractive: true
    },
    {
      icon: Briefcase,
      label: 'Current Status',
      value: 'Available to Work',
      subtext: 'Full-time Roles, AI Systems & Projects',
      color: 'text-emerald-400',
      bgGlow: 'border-emerald-500/30 bg-emerald-950/20',
      isLive: true
    }
  ];

  return (
    <section id="about" className="pt-16 pb-8 sm:pt-20 sm:pb-10 relative bg-[#0d0917]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Who I Am
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded mt-3" />
        </div>

        {/* Top Split: Professional Summary on the Left & Quick Info Stack on the Right (Fahad & Nikhil Rajput Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Rich Personal Narrative Card (7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-[#140e24] border border-purple-500/25 hover:border-violet-400/60 shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] relative overflow-hidden flex flex-col justify-between group cursor-default">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-purple-500/15">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300 shadow-sm">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-mono text-violet-300 tracking-wider uppercase">
                    Engineering Ethos & Summary
                  </h3>
                  <p className="text-xs text-purple-300/70">
                    Junior Software Developer @ Fuzionest · B.E. CSE Graduate
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-purple-100/90 text-sm sm:text-base leading-relaxed">
                <p>
                  I build <span className="text-white font-semibold">production-grade AI systems and scalable backend software</span>—not just theoretical experiments in notebooks. I graduated with a <span className="text-violet-300 font-semibold">Bachelor of Engineering in Computer Science</span> from <span className="text-white font-medium">Dr. N.G.P. Institute of Technology</span> (CGPA: <span className="text-violet-400 font-mono font-bold">8.42 / 10</span>).
                </p>
                <p>
                  At <span className="text-white font-semibold">Fuzionest Private Limited</span>, I completed 3 months of internship and 6 months of professional experience as a Junior Software Developer, developing robust backend APIs, mobile application features in <span className="text-violet-300 font-medium">Flutter</span>, autonomous voice agents with <span className="text-purple-300 font-medium">ElevenLabs</span>, and task automation bots via Telegram.
                </p>
                <p>
                  My technical focus lies at the intersection of <span className="text-emerald-400 font-medium">Applied Machine Learning</span>, <span className="text-violet-300 font-medium">RAG Pipelines with FAISS</span>, and <span className="text-purple-300 font-medium">Autonomous Multi-Agent Copilots</span>. I am also the co-author and presenter of the <span className="text-white font-semibold">GreenMark</span> environmental AI project presented at the <span className="text-emerald-400 font-semibold">IEEE ICESCS 2025</span> conference.
                </p>
                <p className="text-purple-300/70 text-xs sm:text-sm">
                  I care deeply about clean system architecture, deterministic tool execution, and shipping high-impact software that solves real-world challenges.
                </p>
              </div>
            </div>

            {/* Social & Contact Buttons inside Summary Card */}
            <div className="pt-5 mt-5 border-t border-purple-500/15 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-purple-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-purple-500/20 hover:border-violet-400/50 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-violet-400" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-purple-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-purple-500/20 hover:border-violet-400/50 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-violet-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-purple-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-purple-500/20 hover:border-amber-400/50 transition-colors"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Right: Personal Details Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {personalDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div
                  key={idx}
                  onClick={detail.onClick}
                  className={`p-5 rounded-2xl border transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-violet-500/20 hover:-translate-y-2 hover:scale-[1.02] flex-1 flex flex-col justify-center ${detail.bgGlow} ${
                    detail.isInteractive
                      ? 'cursor-pointer hover:border-violet-400/60'
                      : 'hover:border-violet-400/50 cursor-default'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl bg-white/[0.03] border border-white/[0.06] ${detail.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {detail.label}
                      </span>
                    </div>

                    {detail.isLive && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono font-medium text-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        AVAILABLE
                      </span>
                    )}

                    {detail.isInteractive && (
                      <span className="text-xs text-slate-400 hover:text-white transition-colors">
                        {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </span>
                    )}
                  </div>

                  <div className="text-sm sm:text-base font-bold text-white break-words pl-1">
                    {detail.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 pl-1">
                    {detail.subtext}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
