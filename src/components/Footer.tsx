import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#06080e] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.04]">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded bg-cyan-500/20 text-cyan-400 font-bold font-mono text-xs flex items-center justify-center border border-cyan-500/30">
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
              <MapPin className="w-3 h-3 text-cyan-500" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
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
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
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
