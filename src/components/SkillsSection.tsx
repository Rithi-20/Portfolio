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

interface SkillItem {
  name: string;
  tag?: string;
  desc?: string;
}

interface SkillDomain {
  id: string;
  title: string;
  prefix: string; // e.g. "Under AI"
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderColor: string;
  badgeBg: string;
  skills: SkillItem[];
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
        { name: 'RAG Architectures (FAISS)', desc: 'Vector search & grounded context retrieval' },
        { name: 'Machine Learning', desc: 'Supervised/unsupervised algorithms & anomaly detection' },
        { name: 'Deep Learning', desc: 'Neural network training & inference' },
        { name: 'Large Language Models (LLMs)', desc: 'Qwen2.5, prompt design & tool-calling' },
        { name: 'LangChain & Multi-Agents', desc: 'Deterministic autonomous workflows' },
        { name: 'Natural Language Processing (NLP)', desc: 'Tokenization, embeddings & semantics' },
        { name: 'Computer Vision (OpenCV)', desc: 'Image diagnosis & feature extraction' },
        { name: 'Scikit-learn', desc: 'Random Forest, SVM & ensemble classifiers' },
        { name: 'PyTorch & TensorFlow', desc: 'Deep learning model experimentation' },
        { name: 'Hugging Face Transformers', desc: 'Pre-trained open-source models & tokenizers' },
        { name: 'NumPy & Pandas', desc: 'High-performance array mathematics & data cleaning' }
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
        { name: 'Power BI', desc: 'Interactive executive reporting, DAX measures & KPI dashboards' },
        { name: 'Advanced Excel', desc: 'Pivot tables, dynamic slicers, MoM variance models & financial formulas' },
        { name: 'SQL & Database Analytics', desc: 'Complex multi-table joins, aggregations & query optimization' },
        { name: 'DAX Measures', desc: 'Calculated metrics, time intelligence & dynamic variance modeling' },
        { name: 'Data Modeling (Star Schema)', desc: 'Dimensional relationship architecture & table normalization' },
        { name: 'Pandas & NumPy', desc: 'Exploratory data analysis, cohort breakdown & cleaning pipelines' }
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
        { name: 'FastAPI', desc: 'High-throughput async Python endpoints for ML/LLM services' },
        { name: 'Node.js & Express.js', desc: 'Event-driven server runtimes & REST routes' },
        { name: 'RESTful APIs', desc: 'Standardized client-server contracts & JSON payloads' },
        { name: 'Flask', desc: 'Lightweight web framework for ML dashboards & services' }
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
        { name: 'Python', desc: 'Primary language for AI, ML & backend services' },
        { name: 'JavaScript', desc: 'Modern web scripting & asynchronous logic' },
        { name: 'Java', desc: 'Object-oriented programming & data structures' },
        { name: 'HTML5 & CSS3', desc: 'Accessible, responsive semantic structures' }
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
        { name: 'MySQL', desc: 'Relational schema modeling, queries & indexing' },
        { name: 'MongoDB', desc: 'NoSQL document storage & JSON records' },
        { name: 'SQLite', desc: 'Embedded relational DB for lightweight tools' },
        { name: 'FAISS Vector Index', desc: 'Sub-millisecond similarity search for RAG' },
        { name: 'MySQL Workbench & XAMPP', desc: 'Database administration & local environments' }
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
        { name: 'Git & GitHub', desc: 'Version control, branching & open-source workflows' },
        { name: 'Postman', desc: 'API testing, parameter verification & mocking' },
        { name: 'Docker', desc: 'Containerization & deployment consistency' },
        { name: 'VS Code', desc: 'Primary IDE for Python & full-stack development' },
        { name: 'Google Colab', desc: 'Cloud GPU model training & notebook experiments' },
        { name: 'Power BI & Excel', desc: 'Data visualization & business reporting' }
      ]
    }
  ];

  const filteredDomains =
    selectedDomain === 'all'
      ? skillDomains
      : skillDomains.filter((d) => d.id === selectedDomain);

  return (
    <section id="skills" className="pt-8 pb-16 sm:pt-10 sm:pb-20 relative bg-[#0c0817]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            What I Know
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded mt-3" />
        </div>

        {/* Infinite Tech Marquee Row */}
        <div className="overflow-hidden py-3 mb-10 border-y border-purple-500/15 bg-black/30">
          <div className="animate-marquee gap-3">
            {[...marqueeSkills, ...marqueeSkills].map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium whitespace-nowrap bg-white/[0.02] border border-purple-500/15 text-purple-200 hover:text-violet-200 hover:border-violet-500/50 hover:bg-violet-950/40 transition-all duration-150"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedDomain('all')}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer ${
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
                className={`px-3.5 py-1.5 text-xs font-mono rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer ${
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDomains.map((domain) => {
            const Icon = domain.icon;
            const isFullWidth = domain.id === 'ai' && selectedDomain === 'all';

            return (
              <div
                key={domain.id}
                className={`p-6 sm:p-7 rounded-2xl bg-[#140e24] border ${domain.borderColor} transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-1.5 hover:scale-[1.008] flex flex-col justify-between cursor-default ${
                  isFullWidth ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-purple-500/15">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-white/[0.03] border border-purple-500/15 ${domain.accentColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${domain.badgeBg}`}>
                            {domain.prefix}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-white">
                            {domain.title}
                          </h3>
                        </div>
                        <p className="text-xs text-purple-300/70 mt-0.5">
                          {domain.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-purple-400/60">
                      {domain.skills.length} Technologies
                    </span>
                  </div>

                  {/* Skills Tag Pills with Descriptions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
                    {domain.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-purple-500/10 hover:border-violet-400/50 hover:shadow-md hover:shadow-violet-500/15 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] flex flex-col justify-between group cursor-default"
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-xs font-mono font-bold text-purple-100 group-hover:text-violet-200 transition-colors">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                        </div>
                        {skill.desc && (
                          <p className="text-[11px] text-purple-300/70 leading-snug">
                            {skill.desc}
                          </p>
                        )}
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
