import React, { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Cpu, CheckCircle2, ArrowRight, Layers, FileCode2, BookOpen } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'problem' | 'approach' | 'models' | 'results' | 'tech'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#140e24] border border-purple-500/25 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-purple-500/15 flex items-start justify-between gap-4 bg-[#18112c]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono text-violet-300 uppercase tracking-wider">
                {project.category}
              </span>
              {project.conference && (
                <>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs font-mono text-purple-300">
                    {project.conference}
                  </span>
                </>
              )}
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        {project.overviewTabs && (
          <div className="flex items-center gap-1 p-2 bg-[#0e091b] border-b border-purple-500/15 overflow-x-auto scrollbar-none text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-violet-500/20 text-violet-200 border border-violet-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('problem')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                activeTab === 'problem'
                  ? 'bg-violet-500/20 text-violet-200 border border-violet-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Problem Statement
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('approach')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                activeTab === 'approach'
                  ? 'bg-violet-500/20 text-violet-200 border border-violet-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Methodology & Approach
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('models')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                activeTab === 'models'
                  ? 'bg-violet-500/20 text-violet-200 border border-violet-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Architecture & Models
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('results')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                activeTab === 'results'
                  ? 'bg-violet-500/20 text-violet-200 border border-violet-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Results & Verification
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tech')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                activeTab === 'tech'
                  ? 'bg-violet-500/20 text-violet-200 border border-violet-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tech Stack
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Active Tab Content */}
          {project.overviewTabs && (
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              {activeTab === 'overview' && (
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Project Overview</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.overviewTabs.overview}
                  </p>
                </div>
              )}
              {activeTab === 'problem' && (
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Problem Statement</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.overviewTabs.problem}
                  </p>
                </div>
              )}
              {activeTab === 'approach' && (
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Approach</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.overviewTabs.approach}
                  </p>
                </div>
              )}
              {activeTab === 'models' && (
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Models & System Design</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.overviewTabs.modelsOrArchitecture}
                  </p>
                </div>
              )}
              {activeTab === 'results' && (
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Results & System Impact</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.overviewTabs.results}
                  </p>
                </div>
              )}
              {activeTab === 'tech' && (
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies Employed</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded bg-[#20143a] text-violet-300 border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Architecture Visual Pipeline */}
          {project.architectureSteps && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-violet-400" />
                <h4 className="text-sm font-semibold text-white">System Architecture & Pipeline Flow</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {project.architectureSteps.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-lg bg-[#18112c] border border-purple-500/15 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-violet-950 border border-violet-500/40 text-violet-300 font-mono text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {sIdx + 1}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white mb-0.5">{step.label}</div>
                      <div className="text-[11px] text-slate-400 leading-relaxed">{step.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* High-level Description & Tech List if no tabs */}
          {!project.overviewTabs && (
            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="p-4 sm:p-5 border-t border-purple-500/15 bg-[#0e091b] flex items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500">
            Source repository on GitHub
          </div>

          <div className="flex items-center gap-3">
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-purple-500 transition-colors shadow-sm shadow-purple-500/20"
              >
                <BookOpen className="w-4 h-4" />
                <span>IEEE Paper</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm shadow-emerald-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Demo</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-[#1c1333] hover:bg-[#251a44] border border-purple-500/30 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Repository</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-transparent hover:bg-white/[0.04] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
