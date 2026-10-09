export interface Project {
  id: string;
  title: string;
  category: string;
  categoryFilter: 'All' | 'AI / ML' | 'Generative AI' | 'Agentic AI' | 'Backend' | 'Data Analytics';
  badge?: string;
  shortProblem: string;
  solution: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  paperUrl?: string;
  isFeatured: boolean;
  conference?: string;
  architectureSteps?: { label: string; detail: string }[];
  overviewTabs?: {
    overview: string;
    problem: string;
    approach: string;
    modelsOrArchitecture: string;
    results: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Full-Time & Internship Transition' | 'Internship';
  location: string;
  highlights: string[];
  skills: string[];
  progressionNote?: string;
}

export interface SkillItem {
  name: string;
  usedFor: string;
  category: 'Programming' | 'AI / ML' | 'LLM / Generative AI' | 'Backend' | 'Databases' | 'Developer Tools' | 'Data / BI';
  level?: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  year: string;
  credentialBadge?: string;
  description: string;
}

export interface JourneyMilestone {
  id: string;
  title: string;
  phase: string;
  description: string;
  technologies: string[];
}
