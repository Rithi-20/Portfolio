import React, { useEffect, useRef } from 'react';
import { X, Download, ExternalLink, FileText, ChevronDown } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const page1Ref = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollToPage = (pageNumber: number) => {
    if (pageNumber === 1 && page1Ref.current) {
      page1Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (pageNumber === 2 && page2Ref.current) {
      page2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#140e24] border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col h-[94vh] max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Header */}
        <div className="px-4 py-3 sm:px-6 bg-[#18112c] border-b border-purple-500/20 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="resume-title" className="text-sm font-bold text-white">
                  Rithiha U — Resume
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/80 text-violet-200 border border-violet-800/40">
                  Official PDF
                </span>
              </div>
              <p className="text-[11px] font-mono text-purple-300/70 hidden sm:block">
                Exact Document Preview · 2 Pages
              </p>
            </div>
          </div>

          {/* Quick Page Jump */}
          <div className="hidden md:inline-flex items-center p-1 rounded-xl bg-black/40 border border-purple-500/20 text-xs font-mono">
            <button
              type="button"
              onClick={() => scrollToPage(1)}
              className="px-2.5 py-1 rounded-lg text-purple-200 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              Page 1
            </button>
            <span className="text-purple-400/30">|</span>
            <button
              type="button"
              onClick={() => scrollToPage(2)}
              className="px-2.5 py-1 rounded-lg text-purple-200 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              Page 2
            </button>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-violet-400/40 transition-colors"
              title="Open raw PDF in a new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-violet-400" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            <a
              href="/resume.pdf"
              download="Rithiha_U_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-slate-950 bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 hover:opacity-95 transition-opacity shadow-sm"
              title="Download official PDF file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Exact Visual PDF Pages Viewer */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 flex flex-col items-center gap-6 bg-[#0a0614]">
          {/* Page 1 */}
          <div
            ref={page1Ref}
            className="relative w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl shadow-black/90 border border-purple-500/20 bg-white"
          >
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 z-10 border border-white/10">
              Page 1 of 2
            </div>
            <img
              src="/resume-page-1.png"
              alt="Rithiha U Resume - Page 1"
              className="w-full h-auto block select-none pointer-events-none"
              loading="eager"
            />
          </div>

          {/* Page 2 */}
          <div
            ref={page2Ref}
            className="relative w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl shadow-black/90 border border-purple-500/20 bg-white"
          >
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[11px] font-mono text-white/90 z-10 border border-white/10">
              Page 2 of 2
            </div>
            <img
              src="/resume-page-2.png"
              alt="Rithiha U Resume - Page 2"
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>

          <div className="py-4 text-center text-xs font-mono text-purple-300/60">
            End of Resume · <a href="/resume.pdf" download="Rithiha_U_Resume.pdf" className="text-violet-400 hover:underline">Download PDF File</a>
          </div>
        </div>
      </div>
    </div>
  );
};
