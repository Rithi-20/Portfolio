import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, FEATURED_PROJECTS, CERTIFICATIONS, SKILLS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = async () => {
    const resumeText = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
LeetCode: ${PERSONAL_INFO.leetcode}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.aboutBio}

EDUCATION:
${PERSONAL_INFO.education.degree}
${PERSONAL_INFO.education.institution}, ${PERSONAL_INFO.education.location}
CGPA: ${PERSONAL_INFO.education.cgpa}

EXPERIENCE:
${EXPERIENCES.map(e => `
${e.role} - ${e.company} (${e.period})
${e.highlights.join('\n- ')}
`).join('\n')}

FEATURED PROJECTS:
${FEATURED_PROJECTS.map(p => `
${p.title} (${p.category})
Tech Stack: ${p.techStack.join(', ')}
${p.description}
`).join('\n')}

CERTIFICATIONS:
${CERTIFICATIONS.map(c => `- ${c.title} (${c.organization}, ${c.year})`).join('\n')}
    `.trim();

    try {
      await navigator.clipboard.writeText(resumeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#140e24] border border-purple-500/25 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Header */}
        <div className="p-4 sm:px-6 bg-[#18112c] border-b border-purple-500/15 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-violet-300 font-semibold uppercase tracking-wider">
              Recruiter Dossier
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs font-mono text-slate-300">
              Verified Source of Truth
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-violet-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

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

        {/* Resume Content Paper */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#140e24] text-slate-200 text-xs sm:text-sm">
          {/* Resume Header */}
          <div className="border-b border-purple-500/20 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 id="resume-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="text-sm font-semibold text-violet-300 mt-1">
                  {PERSONAL_INFO.title}
                </div>
              </div>

              <div className="text-right sm:text-right space-y-1 text-xs font-mono text-slate-400">
                <div>{PERSONAL_INFO.email}</div>
                <div>{PERSONAL_INFO.location}</div>
                <div className="text-violet-400">{PERSONAL_INFO.github}</div>
                <div className="text-purple-300">{PERSONAL_INFO.linkedin}</div>
                <div className="text-amber-400/90">{PERSONAL_INFO.leetcode}</div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-violet-300 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {PERSONAL_INFO.aboutBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-violet-300 font-bold mb-3">
              Education
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="font-bold text-white text-sm">
                  {PERSONAL_INFO.education.degree}
                </div>
                <div className="text-slate-400 text-xs">
                  {PERSONAL_INFO.education.institution}, {PERSONAL_INFO.education.location}
                </div>
              </div>
              <div className="font-mono text-violet-300 font-semibold text-xs sm:text-sm">
                CGPA: {PERSONAL_INFO.education.cgpa}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-violet-300 font-bold mb-3">
              Professional Experience & Internships
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div>
                      <span className="font-bold text-white text-sm">{exp.role}</span>
                      <span className="text-slate-400"> — {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-violet-300">{exp.period}</span>
                  </div>

                  {exp.progressionNote && (
                    <div className="text-xs text-violet-200/90 font-mono mb-2 bg-violet-950/40 border border-violet-800/40 px-2 py-1 rounded">
                      Progression: {exp.progressionNote}
                    </div>
                  )}

                  <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-violet-300 font-bold mb-3">
              Key Engineering Projects
            </h2>
            <div className="space-y-3">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-white text-sm">{proj.title}</span>
                    <span className="text-xs font-mono text-violet-300">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="text-[11px] font-mono text-slate-400">
                    <strong className="text-slate-300">Stack: </strong>
                    {proj.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-violet-300 font-bold mb-3">
              Publications
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="font-bold text-white text-sm">
                  GreenMark: A Reward-Based Urban Greening System with Plant Monitoring and Carbon Credit Certification
                </div>
                <div className="text-xs font-mono text-violet-300 mt-1">
                  IEEE ICESCS 2025 · Hindusthan Institute of Technology, Coimbatore
                </div>
              </div>
              <a
                href="https://ieeexplore.ieee.org/document/11212334"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-violet-200 hover:text-white bg-violet-950/60 hover:bg-violet-900 border border-violet-500/40 transition-colors shrink-0"
              >
                <span>IEEE Xplore</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-violet-300 font-bold mb-3">
              Certifications & Training
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((c) => (
                <div key={c.id} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="font-semibold text-white">{c.title}</div>
                  <div className="text-slate-400 text-[11px]">{c.organization} ({c.year})</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
