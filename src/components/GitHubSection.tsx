import React from 'react';
import { Github, ExternalLink, GitBranch, Terminal, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const publicRepos = [
    {
      name: 'Med_bot',
      desc: 'Retrieval-Augmented Generation (RAG) conversational health guidance system indexing structured medical documentation with FAISS.',
      lang: 'Python',
      tags: ['RAG', 'FAISS', 'Healthcare AI'],
      url: 'https://github.com/Rithi-20/Med_bot'
    },
    {
      name: 'AI-Complaint-Bot',
      desc: 'NLP and LLM driven complaint classification and automated routing pipeline for customer service ticket escalation.',
      lang: 'Python',
      tags: ['NLP', 'FastAPI', 'Automation'],
      url: 'https://github.com/Rithi-20/AI-Complaint-Bot'
    },
    {
      name: 'Multiagent',
      desc: 'Collaborative autonomous multi-agent environment exploring role decomposition, message bus coordination, and joint validation.',
      lang: 'Python',
      tags: ['Agentic AI', 'Multi-Agent', 'LangChain'],
      url: 'https://github.com/Rithi-20/Multiagent'
    },
    {
      name: 'Risk-management-bot',
      desc: 'Automated monitoring bot analyzing incoming exposure metrics against rule bounds with real-time alerting triggers.',
      lang: 'Python',
      tags: ['Rule Engine', 'Risk Analysis', 'Telegram Alerts'],
      url: 'https://github.com/Rithi-20/Risk-management-bot'
    }
  ];

  return (
    <section className="py-20 relative bg-[#0c0816]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Conversational: "How I Code" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-violet-300 mb-2">
              Open Source Activity
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              How I Code
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded mt-3 mb-3" />
            <p className="text-sm text-slate-400 max-w-xl">
              Explore my open-source experiments, AI agent architectures, and continuous code commits through GitHub.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors w-fit"
          >
            <Github className="w-4 h-4 text-violet-400" />
            <span>Visit @Rithi-20 on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {publicRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#140e24] hover:bg-[#1c1333] border border-purple-500/15 hover:border-violet-400/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-violet-400" />
                    <span className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
                      <span>{repo.lang}</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5">
                      {repo.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-slate-500">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-violet-300 hover:text-white"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
