import React, { useState } from 'react';
import {
  Brain,
  Server,
  Code2,
  Database,
  Wrench,
  Sparkles,
  Layers,
  Cpu,
  Boxes
} from 'lucide-react';

interface SkillDomain {
  id: string;
  title: string;
  prefix: string; // e.g. "Under AI"
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderColor: string;
  badgeBg: string;
  skills: string[];
}

export const SkillsSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  const marqueeSkills = [
    'Python',
    'Power BI',
    'Advanced Excel',
    'SQL Analytics',
    'DAX Measures',
    'RAG Architectures',
    'Machine Learning',
    'Deep Learning',
    'Qwen2.5-72B',
    'LangChain & Agents',
    'FastAPI',
    'Flask',
    'Scikit-learn',
    'Random Forest & SVM',
    'PyTorch & TensorFlow',
    'OpenCV',
    'RESTful APIs',
    'Node.js',
    'FAISS Vector Index',
    'MySQL',
    'MongoDB',
    'Docker',
    'Git & GitHub'
  ];

  const skillDomains: SkillDomain[] = [
    {
      id: 'ai',
      title: 'Artificial Intelligence & Generative AI',
      prefix: 'Under AI',
      subtitle: 'LLMs, agentic systems, RAG retrieval & computer vision models',
      icon: Brain,
      accentColor: 'text-violet-400',
      borderColor: 'border-violet-500/30 hover:border-violet-400/60',
      badgeBg: 'bg-violet-950/70 text-violet-200 border-violet-800/40',
      skills: [
        'RAG Architectures (FAISS)',
        'Machine Learning',
        'Deep Learning',
        'Large Language Models (LLMs)',
        'LangChain & Multi-Agents',
        'Natural Language Processing (NLP)',
        'Computer Vision (OpenCV)',
        'Scikit-learn',
        'PyTorch & TensorFlow',
        'Hugging Face Transformers',
        'NumPy & Pandas'
      ]
    },
    {
      id: 'analytics',
      title: 'Data Analytics & Business Intelligence',
      prefix: 'Under Data Analytics',
      subtitle: 'Executive dashboards, DAX measures, dynamic spreadsheet models & SQL analytics',
      icon: Boxes,
      accentColor: 'text-violet-300',
      borderColor: 'border-purple-500/30 hover:border-violet-400/60',
      badgeBg: 'bg-purple-950/70 text-violet-200 border-purple-800/40',
      skills: [
        'Power BI',
        'Advanced Excel',
        'SQL & Database Analytics',
        'DAX Measures',
        'Data Modeling (Star Schema)',
        'Pandas & NumPy'
      ]
    },
    {
      id: 'backend',
      title: 'Backend & Systems Engineering',
      prefix: 'Under Backend',
      subtitle: 'High-speed asynchronous APIs, RESTful contracts & microservices',
      icon: Server,
      accentColor: 'text-purple-400',
      borderColor: 'border-purple-500/30 hover:border-purple-400/60',
      badgeBg: 'bg-purple-950/70 text-purple-200 border-purple-800/40',
      skills: [
        'FastAPI',
        'Node.js & Express.js',
        'RESTful APIs',
        'Flask'
      ]
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      prefix: 'Under Programming',
      subtitle: 'Core programming syntax, algorithmic problem solving & web logic',
      icon: Code2,
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400/60',
      badgeBg: 'bg-emerald-950/70 text-emerald-300 border-emerald-800/40',
      skills: [
        'Python',
        'JavaScript',
        'Java',
        'Data Structures & Algorithms',
        'HTML5 & CSS3'
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Vector Storage',
      prefix: 'Under Databases',
      subtitle: 'Relational schemas, NoSQL document stores & high-dimensional vector search',
      icon: Database,
      accentColor: 'text-amber-400',
      borderColor: 'border-amber-500/30 hover:border-amber-400/60',
      badgeBg: 'bg-amber-950/70 text-amber-300 border-amber-800/40',
      skills: [
        'MySQL',
        'MongoDB',
        'SQLite',
        'FAISS Vector Index',
        'MySQL Workbench & XAMPP'
      ]
    },
    {
      id: 'tools',
      title: 'Developer Tools & Platforms',
      prefix: 'Under Developer Tools',
      subtitle: 'Version control hygiene, automated testing & cloud environments',
      icon: Wrench,
      accentColor: 'text-fuchsia-400',
      borderColor: 'border-fuchsia-500/30 hover:border-fuchsia-400/60',
      badgeBg: 'bg-fuchsia-950/70 text-fuchsia-200 border-fuchsia-800/40',
      skills: [
        'Git & GitHub',
        'Postman',
        'Docker',
        'VS Code',
        'Google Colab'
      ]
    }
  ];

  const filteredDomains =
    selectedDomain === 'all'
      ? skillDomains
      : skillDomains.filter((d) => d.id === selectedDomain);

  return (
    <section id="skills" className="pt-6 pb-10 sm:pt-8 sm:pb-12 relative bg-[#0c0817]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-aos="fade-up" className="flex flex-col mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            What I Know
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded mt-2" />
        </div>

        {/* Infinite Tech Marquee Row */}
        <div data-aos="fade-up" data-aos-delay="100" className="overflow-hidden py-2.5 mb-8 border-y border-purple-500/15 bg-black/30">
          <div className="animate-marquee gap-2.5">
            {[...marqueeSkills, ...marqueeSkills].map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium whitespace-nowrap bg-white/[0.02] border border-purple-500/15 text-purple-200 hover:text-violet-200 hover:border-violet-500/50 hover:bg-violet-950/40 transition-all duration-150"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div data-aos="fade-up" data-aos-delay="150" className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedDomain('all')}
            className={`px-3 py-1 text-xs font-mono rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer ${
              selectedDomain === 'all'
                ? 'bg-violet-500/20 text-violet-200 border border-violet-500/50 shadow-sm shadow-violet-500/20'
                : 'text-purple-300/70 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-purple-500/10'
            }`}
          >
            All Domains
          </button>
          {skillDomains.map((domain) => {
            const isActive = selectedDomain === domain.id;
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setSelectedDomain(domain.id)}
                className={`px-3 py-1 text-xs font-mono rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-violet-500/20 text-violet-200 border border-violet-500/50 shadow-sm shadow-violet-500/20'
                    : 'text-purple-300/70 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-purple-500/10'
                }`}
              >
                {domain.prefix}
              </button>
            );
          })}
        </div>

        {/* Grouped Skills Domain Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {filteredDomains.map((domain, dIdx) => {
            const Icon = domain.icon;

            return (
              <div
                key={domain.id}
                data-aos="fade-up"
                data-aos-delay={`${150 + dIdx * 100}`}
                className={`p-4.5 sm:p-5 rounded-xl bg-[#140e24] border ${domain.borderColor} transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-violet-500/20 hover:-translate-y-1 flex flex-col justify-between cursor-default`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5 pb-2.5 border-b border-purple-500/15">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg bg-white/[0.03] border border-purple-500/15 ${domain.accentColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${domain.badgeBg}`}>
                            {domain.prefix}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-white">
                            {domain.title}
                          </h3>
                        </div>
                        <p className="text-[11px] text-purple-300/70 mt-0.5">
                          {domain.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-purple-400/60 hidden sm:inline-block">
                      {domain.skills.length} Skills
                    </span>
                  </div>

                  {/* Skills Tag Badges Properly Aligned */}
                  <div className="flex flex-wrap items-center gap-2 pt-0.5">
                    {domain.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/[0.025] hover:bg-violet-950/40 border border-purple-500/15 hover:border-violet-400/50 hover:shadow-sm hover:shadow-violet-500/20 text-xs font-mono font-medium text-purple-100 hover:text-white transition-all duration-200 hover:-translate-y-0.5 cursor-default group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 opacity-80 group-hover:opacity-100 group-hover:scale-125 group-hover:bg-violet-300 transition-all flex-shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
