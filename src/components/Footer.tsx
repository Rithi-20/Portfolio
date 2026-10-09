import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, MapPin, ArrowUp } from 'lucide-react';
import { LeetCodeIcon } from './LeetCodeIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer data-aos="fade-up" className="border-t border-purple-500/15 bg-[#080511] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.04]">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded bg-violet-500/20 text-violet-300 font-bold font-mono text-xs flex items-center justify-center border border-violet-500/40">
                RU
              </span>
              <span className="text-base font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mt-1">
              <MapPin className="w-3 h-3 text-violet-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-violet-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-violet-300 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-violet-400" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-300 transition-colors"
            >
              <LeetCodeIcon className="w-4 h-4 text-amber-400" />
              <span>LeetCode</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-violet-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-violet-400" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top CTA */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-violet-400" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex items-center justify-center text-xs text-slate-500 font-mono">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
