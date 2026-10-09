import { Project, Experience, SkillItem, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'Rithiha U',
  shortName: 'RU',
  location: 'Coimbatore, Tamil Nadu, India',
  title: 'AI Engineer & Software Developer',
  tagline: 'Building Intelligent Systems with Machine Learning, Agentic AI & Robust Backends',
  statusBadge: 'Open to AI / Software Engineering Roles',
  availability: 'Available for Full-time Roles & Projects',
  email: 'rithihaumani2004@gmail.com',
  phone: '+91 9944335406',
  github: 'https://github.com/Rithi-20',
  linkedin: 'https://www.linkedin.com/in/rithiha-u/',
  leetcode: 'https://leetcode.com/u/rithi_2007/',
  headline: 'Engineering Practical AI, Multi-Agent Systems & Production APIs',
  subheading:
    'Computer Science graduate with hands-on production experience developing AI voice agents with ElevenLabs, ML anomaly detection pipelines, LLM copilots with FastAPI & Qwen2.5, and peer-reviewed environmental AI presented at IEEE ICESCS 2025.',
  aboutBio:
    'Recent Computer Science graduate with hands-on industry experience at Fuzionest Private Limited (3 months of internship and 6 months of professional experience as Junior Software Developer) and AI research presented at IEEE. I bridge the gap between machine learning models and production software—building reliable backend APIs, interactive Flutter features, voice agents, and agentic workflows.',
  education: {
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    institution: 'Dr. N.G.P. Institute of Technology',
    location: 'Coimbatore, Tamil Nadu, India',
    cgpa: '8.42 / 10',
    schooling: [
      { standard: 'HSC (Higher Secondary)', percentage: '90.5%', school: 'Venkatalakshmi Matriculation Higher Secondary School' },
      { standard: 'SSLC (Secondary School)', percentage: '79.6%', school: 'Venkatalakshmi Matriculation Higher Secondary School' }
    ]
  }
};

export const QUICK_STATS = [
  { value: '8.42', label: 'B.E. CSE CGPA', subtext: 'Dr. N.G.P. Institute of Technology' },
  { value: '9 Months', label: 'Industry Dev Exp', subtext: 'Fuzionest (3m Intern + 6m Pro)' },
  { value: '20+', label: 'Projects Built', subtext: 'AI, ML, RAG, Web & Analytics' },
  { value: 'IEEE', label: 'Published Research', subtext: 'Presenter at IEEE ICESCS 2025' }
];

export const TECHNICAL_PILLARS = [
  {
    title: 'Agentic AI & LLMs',
    tag: 'Autonomous Workflows',
    description: 'Constructing multi-agent coordination frameworks, typed tool-calling schemas with FastAPI, and Qwen2.5/LangChain integrations for deterministic, auditable actions.',
    technologies: ['Agentic AI', 'LangChain', 'FastAPI', 'Qwen2.5-72B', 'Tool Calling', 'ElevenLabs Voice']
  },
  {
    title: 'Machine Learning & RAG',
    tag: 'Grounded Intelligence',
    description: 'Engineering semantic search with FAISS vector indexing, supervised classification ensembles (Random Forest + SVM), and computer vision models for anomaly and health detection.',
    technologies: ['RAG', 'FAISS', 'Scikit-learn', 'OpenCV', 'PyTorch / TF', 'Feature Engineering']
  },
  {
    title: 'Backend & Systems Engineering',
    tag: 'Scalable Architecture',
    description: 'Developing high-throughput REST APIs, database persistence layers (SQLite, MySQL, MongoDB), Flutter mobile integrations, and automated Telegram bots.',
    technologies: ['Python', 'Node.js / Express', 'Flutter', 'REST APIs', 'MySQL / SQLite', 'Git']
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: 'Python', usedFor: 'Primary language for ML, Deep Learning, RAG, and FastAPI services', category: 'Programming' },
  { name: 'JavaScript', usedFor: 'Frontend logic, reactive interfaces, and Node.js backend services', category: 'Programming' },
  { name: 'Java', usedFor: 'Object-oriented programming, data structures, and algorithmic logic', category: 'Programming' },
  { name: 'HTML5 & CSS3', usedFor: 'Modern responsive layouts, semantic DOM, and accessible interfaces', category: 'Programming' },

  // AI / ML
  { name: 'Machine Learning', usedFor: 'Supervised/unsupervised algorithms, anomaly detection, and evaluation', category: 'AI / ML' },
  { name: 'Deep Learning', usedFor: 'Neural network architectures and computer vision feature extraction', category: 'AI / ML' },
  { name: 'NLP', usedFor: 'Tokenization, semantic intent parsing, and text representation pipelines', category: 'AI / ML' },
  { name: 'TensorFlow', usedFor: 'Deep neural network design and tensor computation workflows', category: 'AI / ML' },
  { name: 'PyTorch', usedFor: 'Dynamic model experimentation and computational graph training', category: 'AI / ML' },
  { name: 'OpenCV', usedFor: 'Biometric face recognition and plant vitality computer vision', category: 'AI / ML' },
  { name: 'NumPy', usedFor: 'High-performance vector operations and array mathematics', category: 'AI / ML' },
  { name: 'Pandas', usedFor: 'Data cleaning, feature manipulation, and statistical aggregation', category: 'AI / ML' },

  // LLM / Generative AI
  { name: 'LLMs & Copilots', usedFor: 'Large language model prompt orchestration, structured outputs, inference', category: 'LLM / Generative AI' },
  { name: 'RAG Architectures', usedFor: 'Vector search retrieval (FAISS) grounding LLMs in authoritative data', category: 'LLM / Generative AI' },
  { name: 'LangChain', usedFor: 'Agent tool execution, memory handling, and conversational chains', category: 'LLM / Generative AI' },
  { name: 'ElevenLabs Voice AI', usedFor: 'Building voice-enabled autonomous agents and conversational audio pipelines', category: 'LLM / Generative AI' },
  { name: 'Hugging Face', usedFor: 'Open-source transformer models, tokenizers, and model evaluation', category: 'LLM / Generative AI' },
  { name: 'Agentic Tool Calling', usedFor: 'Deterministic multi-step agent actions with typed function schemas', category: 'LLM / Generative AI' },

  // Backend
  { name: 'FastAPI', usedFor: 'High-throughput asynchronous Python endpoints for serving AI models', category: 'Backend' },
  { name: 'Flask', usedFor: 'Lightweight Python web framework for ML dashboards and API endpoints', category: 'Backend' },
  { name: 'Node.js', usedFor: 'Asynchronous event-driven server runtime for web applications', category: 'Backend' },
  { name: 'Express.js', usedFor: 'Modular REST API routing and middleware pipelines', category: 'Backend' },
  { name: 'REST APIs', usedFor: 'Standardized client-server contract protocols and JSON communication', category: 'Backend' },

  // Databases
  { name: 'MySQL', usedFor: 'Relational schema modeling, indexing, and transactional integrity', category: 'Databases' },
  { name: 'MongoDB', usedFor: 'NoSQL document storage for unstructured application records', category: 'Databases' },
  { name: 'SQLite', usedFor: 'Lightweight embedded relational database for local tool persistence', category: 'Databases' },

  // Developer Tools
  { name: 'Git & GitHub', usedFor: 'Version control, branch hygiene, pull requests, and open-source hosting', category: 'Developer Tools' },
  { name: 'Postman', usedFor: 'API contract verification, parameter debugging, and endpoint testing', category: 'Developer Tools' },
  { name: 'VS Code', usedFor: 'Primary IDE for full-stack and Python development workflows', category: 'Developer Tools' },
  // Data Analytics & Business Intelligence
  { name: 'Power BI', usedFor: 'Interactive executive reporting, DAX measures, KPI modeling, and operational dashboards', category: 'Data / BI' },
  { name: 'Advanced Excel', usedFor: 'Pivot tables, dynamic slicers, financial/variance modeling, and retail analytics', category: 'Data / BI' },
  { name: 'SQL & Relational DBs', usedFor: 'Complex multi-table joins, subqueries, window functions, and database schema design', category: 'Data / BI' },
  { name: 'DAX Measures', usedFor: 'Calculated columns, time intelligence, and dynamic KPI variance aggregations in Power BI', category: 'Data / BI' },
  { name: 'Data Modeling', usedFor: 'Star/snowflake schemas, dimensional relationships, and data cleaning transformations', category: 'Data / BI' }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'fuzionest',
    role: 'Junior Software Developer',
    company: 'Fuzionest Private Limited',
    period: '3m Intern + 6m Pro Exp',
    type: 'Full-Time & Internship Transition',
    location: 'Coimbatore, Tamil Nadu, India',
    progressionNote: '3 months of internship and 6 months of professional experience as a Junior Software Developer.',
    highlights: [
      'Developed and integrated backend APIs for web and mobile applications, supporting application functionality and reliable data communication.',
      'Developed mobile application features using Flutter, contributing to frontend and backend integration.',
      'Built AI-powered voice agents using ElevenLabs for automated voice-based interactions and conversational workflows.',
      'Developed a Telegram bot to automate task management and team communication workflows, reducing repetitive manual coordination.'
    ],
    skills: ['Backend APIs', 'Flutter', 'ElevenLabs Voice Agents', 'Telegram Bot API', 'Node.js / Express', 'Python']
  },
  {
    id: 'edufyi',
    role: 'Artificial Intelligence Intern',
    company: 'Edufyi Tech Solutions',
    period: 'Mar 2025 – May 2025',
    type: 'Internship',
    location: 'Remote / India',
    highlights: [
      'Built a machine learning model to identify unusual patterns in data, applicable to fraud detection and system-error monitoring use cases.',
      'Strengthened core AI/ML concepts through applied, real-time project work under direct industry mentorship.',
      'Performed dataset cleaning, feature extraction, and model evaluation to ensure robust classification performance.'
    ],
    skills: ['Machine Learning', 'Anomaly Detection', 'Fraud Detection', 'Python', 'Scikit-learn', 'Feature Engineering']
  },
  {
    id: 'novitech',
    role: 'Artificial Intelligence Intern',
    company: 'NoviTech R&D Private Limited',
    period: 'Sep 2025 – Oct 2025',
    type: 'Internship',
    location: 'Coimbatore, Tamil Nadu, India',
    highlights: [
      'Completed an intensive 30-day AI internship, gaining hands-on experience in building and applying AI solutions.',
      'Worked on practical AI tasks under expert guidance, strengthening algorithmic problem-solving skills.',
      'Implemented computer vision and deep learning pipelines on structured challenge datasets.'
    ],
    skills: ['Artificial Intelligence', 'Computer Vision', 'Deep Learning', 'Python', 'Problem Solving']
  }
];

export const ALL_PROJECTS: Project[] = [
  {
    id: 'smart-crm',
    title: 'AI SmartCRM',
    category: 'LLM & AI Agent Copilot',
    categoryFilter: 'Agentic AI',
    badge: 'LLM Copilot',
    isFeatured: true,
    shortProblem:
      'Sales and operations operators waste hours manually writing SQL queries or navigating complex CRM forms to inspect leads and log deals.',
    solution:
      'Built an LLM-powered CRM assistant using Qwen2.5-72B and FastAPI that converts natural language into typed tool calls and auditable SQLite updates.',
    description:
      'An agentic CRM copilot enabling non-technical teams to query, filter, and modify enterprise records in plain English. The agent leverages Qwen2.5-72B to resolve entities, invoke typed CRM tools via FastAPI endpoints, and execute safe SQLite transactions with auditable user feedback.',
    techStack: ['Python', 'Qwen2.5-72B', 'FastAPI', 'React', 'SQLite', 'AI Agents', 'REST API'],
    githubUrl: 'https://github.com/Rithi-20/AI-Smart-CRM',
    architectureSteps: [
      { label: 'User Query', detail: 'Natural language instruction (e.g. "List high-value deals closing this month")' },
      { label: 'FastAPI Gateway', detail: 'Validates request session and injects conversational context' },
      { label: 'Qwen2.5-72B Engine', detail: 'Parses semantic intent and emits deterministic JSON tool schemas' },
      { label: 'Entity Resolution', detail: 'Maps human entities to exact customer IDs, stages, and value thresholds' },
      { label: 'Typed CRM Tools', detail: 'Executes programmatic methods with strict type validation' },
      { label: 'SQLite Persistence', detail: 'Mutates or queries records within isolated database transactions' },
      { label: 'Auditable Action', detail: 'Returns verified execution feedback and UI confirmations' }
    ],
    overviewTabs: {
      overview: 'An intelligent CRM copilot converting conversational prompts into validated database insights and auditable customer actions.',
      problem: 'Modern CRMs require multi-step UI navigation and custom reporting filters. Operators need instantaneous access to relationship records through plain language.',
      approach: 'Designed deterministic tool definitions for CRM queries (read/filter/update). Fed user queries to Qwen2.5-72B, extracted structured tool calls, executed them against FastAPI service layers, and verified state changes.',
      modelsOrArchitecture: 'Qwen2.5-72B model integration + FastAPI asynchronous backend + Typed Tool Execution Layer + SQLite relational store.',
      results: 'Achieved zero-SQL CRM interactions with deterministic entity resolution and transparent action verification.'
    }
  },
  {
    id: 'greenmark',
    title: 'GreenMark',
    category: 'AI & Environmental Intelligence',
    categoryFilter: 'AI / ML',
    badge: 'IEEE ICESCS 2025',
    conference: 'IEEE ICESCS 2025',
    isFeatured: true,
    shortProblem:
      'Urban reforestation initiatives suffer over 70% sapling mortality due to absent longitudinal monitoring and unverifiable carbon credits.',
    solution:
      'Engineered an AI-based urban greening framework pairing computer vision plant vitality analysis with QR sapling tracking, GPS verification, and carbon credit rewards.',
    description:
      'Presented at the IEEE ICESCS 2025 conference (Hindusthan Institute of Technology, Coimbatore). GreenMark introduces a reward-based urban greening architecture that tracks saplings via unique QR identifiers, validates location through GPS telemetry, monitors foliage vitality with computer vision models, and computes quantifiable carbon absorption to grant verified eco-rewards.',
    techStack: ['Python', 'Computer Vision', 'QR Tracking', 'GPS Telemetry', 'Carbon Modeling', 'JavaScript'],
    githubUrl: 'https://github.com/Rithi-20/Greenmark',
    paperUrl: 'https://ieeexplore.ieee.org/document/11212334',
    architectureSteps: [
      { label: 'Sapling Tagging', detail: 'Physical sapling tagged with durable weather-resistant QR identifier' },
      { label: 'GPS Geofencing', detail: 'Coordinate verification preventing duplicate or fraudulent claims' },
      { label: 'Growth Capture', detail: 'Periodic photo capture by community caretakers and volunteers' },
      { label: 'AI Health Model', detail: 'Computer vision evaluates leaf vitality, canopy density, and stress indicators' },
      { label: 'Carbon Modeling', detail: 'Biomass equations calculate sequestered carbon absorption over time' },
      { label: 'Eco Certification', detail: 'Issues verifiable carbon credit certificates and citizen rewards' }
    ],
    overviewTabs: {
      overview: 'Research project and IEEE conference publication presenting a verifiable, AI-monitored urban afforestation and carbon credit system.',
      problem: 'Millions of urban saplings are planted annually in corporate CSR drives, yet over 70% perish within 6 months due to absent monitoring and zero accountability.',
      approach: 'Integrated physical QR markers with mobile GPS geofencing. Built a CV pipeline to inspect plant health and canopy growth over monthly intervals, calculating verified carbon sequestration.',
      modelsOrArchitecture: 'Vision-based health classification + GPS validation engine + Biomass carbon absorption model + Reward verification layer.',
      results: 'Authored and presented research at IEEE ICESCS 2025 detailing the end-to-end architecture, verification protocols, and community incentive structures.'
    }
  },
  {
    id: 'medbot',
    title: 'Medbot',
    category: 'Healthcare AI & Grounded RAG',
    categoryFilter: 'Generative AI',
    badge: 'Hackathon 2024',
    isFeatured: true,
    shortProblem:
      'Individuals seeking initial context on sensitive health conditions (breast cancer, PCOD, stress) face fragmented internet advice or generative hallucinations.',
    solution:
      'Constructed a specialized Retrieval-Augmented Generation (RAG) assistant indexing authoritative medical literature with FAISS vector search for grounded guidance.',
    description:
      'An AI conversational assistant providing personalized health suggestions for breast cancer, PCOD, and stress management. By pairing document chunking with a FAISS vector index, Medbot retrieves authoritative domain literature before prompting the LLM, ensuring educational, grounded, and empathetic explanations without diagnostic overreach.',
    techStack: ['Python', 'RAG', 'FAISS', 'NLP', 'Vector Embeddings', 'LangChain'],
    githubUrl: 'https://github.com/Rithi-20/Med_bot',
    architectureSteps: [
      { label: 'User Health Query', detail: 'Natural language health inquiry regarding symptoms, PCOD, or stress' },
      { label: 'Embedding & Intent', detail: 'Tokenization, embedding generation, and semantic intent parsing' },
      { label: 'FAISS Vector Search', detail: 'Top-k semantic similarity retrieval over curated healthcare literature' },
      { label: 'Context Assembly', detail: 'Combines retrieved reference literature with strict medical disclaimers' },
      { label: 'LLM Synthesis', detail: 'Generates structured, clear, and empathetic conversational guidance' },
      { label: 'Grounded Output', detail: 'Delivers educational guidance strictly anchored in verified references' }
    ],
    overviewTabs: {
      overview: 'A grounded RAG conversational assistant offering targeted health guidance for breast cancer, PCOD, and stress management.',
      problem: 'Direct general-purpose LLM outputs can hallucinate or provide unverified advice for health queries. A retrieval-first architecture ensures every response is anchored in verified medical text.',
      approach: 'Curated structured knowledge bases for selected conditions, vectorized document passages with dense embeddings, indexed them in FAISS, and implemented prompt templates enforcing safety and reference citing.',
      modelsOrArchitecture: 'FAISS index vector store + Dense embedding model + RAG retrieval chain feeding a contextualized prompt to the LLM backend.',
      results: 'Demonstrated an educational AI health assistant that answers queries with verifiable domain grounding rather than speculative generation.'
    }
  },
  {
    id: 'ddos-detection',
    title: 'Network Anomaly & DDoS Detection',
    category: 'Cybersecurity & Machine Learning',
    categoryFilter: 'AI / ML',
    badge: 'ML Ensemble',
    isFeatured: true,
    shortProblem:
      'Polymorphic distributed denial-of-service (DDoS) spikes flood server bandwidth, defeating static rule firewalls and causing downtime.',
    solution:
      'Trained an ensemble machine learning classification pipeline combining Random Forest and SVM with a Flask dashboard for CSV traffic upload and threat scoring.',
    description:
      'Engineered an intrusion detection system to classify network traffic as either DDoS or BENIGN. The system processes statistical network flow features, runs preprocessing and feature selection, and evaluates inputs through a Random Forest and SVM ensemble. Results are presented via an interactive Flask dashboard allowing analysts to inspect real-time threat levels.',
    techStack: ['Python', 'Random Forest', 'SVM', 'Scikit-learn', 'Flask', 'Pandas', 'NumPy', 'Joblib'],
    githubUrl: 'https://github.com/Rithi-20/Anamoly-detection',
    architectureSteps: [
      { label: 'Traffic Ingestion', detail: 'Ingests raw statistical network packet captures and flow attributes' },
      { label: 'Data Cleaning', detail: 'Handles missing attributes, normalization, and flow duration scaling' },
      { label: 'Feature Engineering', detail: 'Extracts critical packet rate, window size, and header length signals' },
      { label: 'RF & SVM Models', detail: 'Parallel evaluation using tuned Random Forest and SVM classifiers' },
      { label: 'Ensemble Aggregation', detail: 'Combines decision boundaries to minimize false positive classifications' },
      { label: 'Flask Security UI', detail: 'Renders traffic breakdown, threat indicators, and confidence metrics' }
    ],
    overviewTabs: {
      overview: 'A robust ML system trained on statistical network traffic flow parameters to differentiate malicious DDoS spikes from legitimate (BENIGN) connections.',
      problem: 'Traditional rule-based firewalls struggle against polymorphic DDoS attacks, causing latency or service outages. Machine learning provides adaptive statistical threat discrimination.',
      approach: 'Cleaned and normalized network flow datasets, evaluated feature importance across packet rates and window sizes, and constructed an ensemble combining Random Forest decision trees with SVM hyperplane boundaries.',
      modelsOrArchitecture: 'Random Forest + SVM ensemble serialized using Joblib, connected to a lightweight Flask REST backend for ad-hoc CSV batch inference.',
      results: 'Delivered an interactive security dashboard enabling fast upload, threat categorization (DDoS vs BENIGN), and transparent feature inspection.'
    }
  },
  {
    id: 'multiagent',
    title: 'Multiagent Collaboration Framework',
    category: 'Autonomous Agent Systems',
    categoryFilter: 'Agentic AI',
    badge: 'Multi-Agent',
    isFeatured: true,
    shortProblem:
      'Complex multi-stage reasoning tasks fail when constrained to single monolithic prompts without distributed critique and verification roles.',
    solution:
      'Designed a collaborative multi-agent framework where specialized AI agents communicate via structured messages to solve multi-stage computational goals.',
    description:
      'An exploration in autonomous agent coordination. Implements role-specialized agents (planner, executor, synthesizer) that exchange intermediary artifacts, validate assumptions, and compile unified problem solutions.',
    techStack: ['Python', 'Agentic AI', 'Multi-Agent Coordination', 'LangChain', 'FastAPI'],
    githubUrl: 'https://github.com/Rithi-20/Multiagent',
    architectureSteps: [
      { label: 'User Goal', detail: 'Complex multi-step analytical prompt provided to supervisor' },
      { label: 'Task Decomposition', detail: 'Planner agent breaks goal into atomic parallel sub-tasks' },
      { label: 'Worker Execution', detail: 'Specialized domain agents execute sub-tasks with tools' },
      { label: 'Verification & Critique', detail: 'Critic agent validates intermediate outputs against constraints' },
      { label: 'Consensus Synthesis', detail: 'Final aggregator combines verified outputs into cohesive response' }
    ]
  },
  {
    id: 'company-research-assistant',
    title: 'AI Company Research Assistant',
    category: 'Deep Research & Synthesis',
    categoryFilter: 'Generative AI',
    badge: 'Deep Research',
    isFeatured: true,
    shortProblem:
      'Manual corporate due diligence and competitive market intelligence requires hours of combing disparate data sources and filings.',
    solution:
      'Built an autonomous research copilot web application performing targeted corporate intelligence gathering, structured fact extraction, and instant executive summaries.',
    description:
      'An autonomous research assistant web application that performs targeted deep intelligence gathering, structured synthesis, and automated company profiling with a modern reactive UI.',
    techStack: ['TypeScript', 'React', 'LLM Synthesis', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Rithi-20/AI_Company_Research_Assisstant',
    architectureSteps: [
      { label: 'Target Inquiry', detail: 'Company name and analytical research criteria entered' },
      { label: 'Query Expansion', detail: 'LLM generates targeted search vectors for financials and operations' },
      { label: 'Information Extraction', detail: 'Parses raw data streams into structured corporate attributes' },
      { label: 'Synthesis Report', detail: 'Generates comprehensive executive brief with actionable insights' }
    ]
  },
  {
    id: 'ai-complaint-bot',
    title: 'AI Complaint Triage Bot',
    category: 'NLP & Ticket Automation',
    categoryFilter: 'Generative AI',
    badge: 'NLP Automation',
    isFeatured: false,
    shortProblem:
      'Customer support teams spend critical hours categorizing incoming grievances manually, delaying resolution for urgent escalations.',
    solution:
      'Engineered an automated ticket classification service utilizing NLP and LLM prompt schemas to parse user grievances, compute severity scores, and dispatch routing payloads.',
    description:
      'An automated customer feedback and complaint triage bot. Processes unstructured tickets, extracts core issue types, calculates sentiment severity, and generates automated routing payloads.',
    techStack: ['Python', 'NLP', 'LLM', 'FastAPI', 'Automation'],
    githubUrl: 'https://github.com/Rithi-20/Ai_complaint_bot'
  },
  {
    id: 'rithi-ai-assistant',
    title: 'Rithi AI Assistant',
    category: 'Conversational AI Interface',
    categoryFilter: 'Generative AI',
    badge: 'Conversational AI',
    isFeatured: false,
    shortProblem:
      'Users require an intuitive, zero-latency conversational assistant with sleek glassmorphism aesthetics and responsive knowledge recall.',
    solution:
      'Constructed an interactive conversational assistant web interface providing prompt completion, dynamic reasoning assistance, and code explanations.',
    description:
      'Interactive conversational AI interface delivering contextual query answering, prompt assistance, and knowledge retrieval with sleek glassmorphism UI.',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'LLM Integration'],
    githubUrl: 'https://github.com/Rithi-20/Rithi-Ai-Assistant'
  },
  {
    id: 'curalink',
    title: 'Curalink Telehealth Platform',
    category: 'Healthcare & Full-Stack Web',
    categoryFilter: 'Backend',
    badge: 'Full-Stack Web',
    isFeatured: false,
    shortProblem:
      'Patients and clinics struggle with cumbersome booking experiences and disconnected medical appointment management systems.',
    solution:
      'Developed a modern responsive healthcare platform providing streamlined doctor discovery, appointment booking, and patient records access.',
    description:
      'Comprehensive healthcare web portal designed for patient management, medical consultation records, and accessible healthcare appointment coordination.',
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Rithi-20/Curalink'
  },
  {
    id: 'financial-health',
    title: 'Financial Health Diagnostic Portal',
    category: 'Financial Analytics & Web',
    categoryFilter: 'Backend',
    badge: 'Financial Analytics',
    isFeatured: false,
    shortProblem:
      'Individuals lack clear visualization of budgeting ratios, debt-to-income balance, and long-term liquidity benchmarks.',
    solution:
      'Engineered a financial diagnostics web portal translating user income and expenditure metrics into interactive stability scorecards and visual breakdowns.',
    description:
      'Interactive financial diagnostics portal evaluating user financial metrics, budgeting health indicators, and cash flow stability with dynamic visual charts.',
    techStack: ['JavaScript', 'Data Visualization', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Rithi-20/Financial-health'
  },
  {
    id: 'risk-management-bot',
    title: 'Risk Management Alert Bot',
    category: 'Automation & Monitoring',
    categoryFilter: 'Backend',
    badge: 'Telegram Bot',
    isFeatured: false,
    shortProblem:
      'Operational teams experience delayed awareness when risk metrics or system health indicators fluctuate beyond safe operational envelopes.',
    solution:
      'Built an automated risk assessment bot that monitors fluctuating metrics against calibrated thresholds and dispatches instantaneous alerts via Telegram.',
    description:
      'Automated risk analysis and notification bot. Monitored risk metrics, compared incoming data against calibrated rules, and issued automated notifications to decision makers.',
    techStack: ['Python', 'Rule Engines', 'REST APIs', 'Telegram Bot API'],
    githubUrl: 'https://github.com/Rithi-20/Risk-management-bot'
  },
  {
    id: 'face-recognizer',
    title: 'Biometric Face Recognizer',
    category: 'Computer Vision & Biometrics',
    categoryFilter: 'AI / ML',
    badge: 'OpenCV Vision',
    isFeatured: false,
    shortProblem:
      'Physical attendance and identity verification systems require low-latency biometric recognition capable of running on edge hardware.',
    solution:
      'Developed a real-time computer vision pipeline utilizing OpenCV cascade classifiers and facial feature encodings for fast face detection and identification.',
    description:
      'Real-time facial recognition and biometric detection system implementing OpenCV cascade classifiers and feature matching pipelines in Python.',
    techStack: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing'],
    githubUrl: 'https://github.com/Rithi-20/Face_recognizer'
  },
  {
    id: 'social-media-bot',
    title: 'Social Media Automation Engine',
    category: 'Social APIs & Automation',
    categoryFilter: 'Backend',
    badge: 'Task Automation',
    isFeatured: false,
    shortProblem:
      'Managing scheduled content distributions across social channels involves repetitive manual overhead and inconsistent timing.',
    solution:
      'Programmed an automation bot to manage scheduled queue dispatch, payload formatting, and engagement tracking via programmatic webhooks.',
    description:
      'Automated scheduler and content distribution bot streamlining multi-platform social workflows, scheduled posts, and audience updates.',
    techStack: ['Python', 'REST APIs', 'Webhooks', 'Task Scheduling'],
    githubUrl: 'https://github.com/Rithi-20/Social-Media-Bot'
  },
  {
    id: 'binance-analytics',
    title: 'Binance Crypto Momentum Analyzer',
    category: 'Financial ML & Data',
    categoryFilter: 'AI / ML',
    badge: 'Market Analytics',
    isFeatured: false,
    shortProblem:
      'Cryptocurrency markets exhibit rapid volatility where manual technical indicator evaluation is prone to delay and emotional bias.',
    solution:
      'Constructed a Python script interfacing with market feeds to compute quantitative technical indicators (RSI, moving averages, volume trends) for signal assessment.',
    description:
      'Algorithmic market data processing script integrating cryptocurrency exchange feeds to calculate technical momentum indicators and volume trends.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Financial APIs'],
    githubUrl: 'https://github.com/Rithi-20/Binance'
  },
  {
    id: 'ecommerce-dashboard',
    title: 'Ecommerce Analytics Dashboard',
    category: 'Business Intelligence & Web',
    categoryFilter: 'Backend',
    badge: 'Analytics UI',
    isFeatured: false,
    shortProblem:
      'Store managers lack unified visibility across real-time order volume, product margins, and customer cohort repeat rates.',
    solution:
      'Built a responsive administrative dashboard interface providing interactive graphs, inventory tracking filters, and revenue metrics visualization.',
    description:
      'Interactive sales analytics platform visualizing revenue trends, inventory levels, order distributions, and customer acquisition metrics.',
    techStack: ['JavaScript', 'React', 'Chart.js', 'CSS'],
    githubUrl: 'https://github.com/Rithi-20/Ecommerce-dashboard'
  },
  {
    id: 'ml-algorithm',
    title: 'ML Algorithms from Scratch',
    category: 'Core Mathematical AI',
    categoryFilter: 'AI / ML',
    badge: 'Core ML',
    isFeatured: false,
    shortProblem:
      'Relying solely on high-level libraries without implementing core gradient descent and cost functions leads to shallow architectural intuition.',
    solution:
      'Implemented fundamental machine learning algorithms (linear regression, logistic regression, k-NN, k-Means, SVM concepts) using pure Python and NumPy matrix algebra.',
    description:
      'Handcrafted implementations of fundamental machine learning algorithms from scratch, demonstrating mathematical mechanics behind regression, classification, and clustering.',
    techStack: ['Python', 'NumPy', 'Matrix Calculus', 'Linear Algebra'],
    githubUrl: 'https://github.com/Rithi-20/ML_Algorithm'
  },
  {
    id: 'aerohome-bi',
    title: 'AeroHome Production Performance Dashboard',
    category: 'Power BI & Operations Analytics',
    categoryFilter: 'Data Analytics',
    badge: 'Power BI Executive',
    isFeatured: true,
    shortProblem:
      'Manufacturing leaders struggled to understand the operational gap between planned and actual production, unable to isolate which plants, downtime causes, or supplier delays caused shortfalls.',
    solution:
      'Developed an executive-level COO dashboard in Power BI leveraging custom DAX measure hierarchies, plant-level attainment tracking, downtime categorization, and supplier delivery delay diagnostics.',
    description:
      'An enterprise-grade Power BI dashboard built to evaluate production plan attainment across multi-site manufacturing facilities. Features root-cause downtime breakdown, supplier delivery delay correlation, defect rate metrics, and plant-by-plant operational benchmarking.',
    techStack: ['Power BI', 'DAX', 'Data Modeling', 'KPI Dashboards', 'Manufacturing Analytics'],
    githubUrl: 'https://github.com/Rithi-20/AeroHome',
    architectureSteps: [
      { label: 'Data Ingestion', detail: 'Extracts multi-plant shift logs, scheduled plans, defect tables, and supplier PO receipts' },
      { label: 'Star Schema Modeling', detail: 'Models dimensional relationships between Plant, Product, Calendar, and Downtime Fact tables' },
      { label: 'DAX Calculations', detail: 'Computes Plan Attainment %, Downtime Hours, Defect Rates, and MoM Variance measures' },
      { label: 'Root Cause Analytics', detail: 'Categorizes downtime into mechanical failure, operator shortage, and supplier delay' },
      { label: 'Interactive Executive UI', detail: 'Renders dynamic slicers, attainment gauges, and drill-through operational views' }
    ],
    overviewTabs: {
      overview: 'An operational intelligence dashboard providing COO and plant managers with real-time clarity on manufacturing plan attainment, downtime bottlenecks, and supplier fulfillment.',
      problem: 'AeroHome experienced persistent production volume deficits across multiple plants without transparent visibility into whether shortfalls were caused by machine downtime, defective batches, or supplier component shortages.',
      approach: 'Designed a star-schema data model linking production actuals against targets. Wrote DAX measures for dynamic attainment variance, categorized downtime events, and generated interactive drill-down reports.',
      modelsOrArchitecture: 'Power BI Desktop + DAX Measures + Star Schema Model + Executive Presentation & PPTX Overview.',
      results: 'Enabled leadership to pinpoint exact facilities underperforming targets and isolated top downtime drivers to improve plan fulfillment.'
    }
  },
  {
    id: 'trendkart-excel',
    title: 'TrendKart Fashion Sales Analysis Dashboard',
    category: 'Advanced Excel & Retail Analytics',
    categoryFilter: 'Data Analytics',
    badge: 'Excel Analytics',
    isFeatured: true,
    shortProblem:
      'TrendKart experienced a sharp 30.6% MoM revenue contraction in November 2024 (dropping from ₹15.19L in Oct to ₹10.54L), requiring root-cause sales decomposition.',
    solution:
      'Constructed an automated Excel sales diagnostic model utilizing dynamic pivot tables, multi-parameter slicers, category contribution matrices, and MoM transaction cohort decomposition.',
    description:
      'A comprehensive retail analytics dashboard in Microsoft Excel built to diagnose month-on-month sales fluctuations. Analyzes order count reduction (512 to 351 orders, 31.4% drop), category performance (Apparel, Footwear, Accessories), customer segments, and seasonal drivers.',
    techStack: ['Advanced Excel', 'Pivot Tables', 'Dynamic Slicers', 'MoM Variance Analysis', 'Retail KPIs', 'Conditional Formatting'],
    githubUrl: 'https://github.com/Rithi-20/Trendkart',
    architectureSteps: [
      { label: 'Transaction Ingestion', detail: 'Consolidates multi-channel order records, customer segments, and product catalogs' },
      { label: 'Data Cleaning & Logic', detail: 'Applies nested formulas (INDEX-MATCH, SUMIFS, XLOOKUP) and date normalization' },
      { label: 'Variance Decomposition', detail: 'Separates revenue impact into Transaction Volume drop (31.4%) vs Average Order Value' },
      { label: 'Category Matrix', detail: 'Evaluates product line elasticity across Apparel, Footwear, and Accessories' },
      { label: 'Interactive Dashboard', detail: 'Features interactive Excel slicers, dynamic KPI cards, and trend sparklines' }
    ],
    overviewTabs: {
      overview: 'A commercial retail intelligence workbook diagnosing sharp MoM sales contractions and revealing category-level revenue opportunities.',
      problem: 'After record-breaking ₹15.19L sales in October 2024, November revenue plummeted to ₹10.54L (-30.6%). Management urgently needed to isolate whether the decline stemmed from basket size erosion or buyer transaction volume.',
      approach: 'Audited transactional log data, formulated dynamic pivot architectures, isolated volume (-31.4% orders) vs pricing factors, and mapped promotional timing.',
      modelsOrArchitecture: 'Advanced Excel Workbook + Pivot Models + Multi-tier Slicers + Executive PowerPoint Presentation.',
      results: 'Demonstrated that order count drop drove the contraction while AOV remained stable, pinpointing marketing re-engagement strategies.'
    }
  },
  {
    id: 'novatech-bi',
    title: 'NovaTech Production & Plant Performance Dashboard',
    category: 'Power BI & Industrial Intelligence',
    categoryFilter: 'Data Analytics',
    badge: 'Power BI Dashboard',
    isFeatured: false,
    shortProblem:
      'NovaTech recorded an unexpected manufacturing contraction in June 2025 compared to May 2025, needing multi-plant operational analysis.',
    solution:
      'Designed an operational Power BI dashboard with multi-facility volume variance, shift-level efficiency benchmarking, and product mix shift tracking.',
    description:
      'Operations performance dashboard diagnosing monthly production volume variance across plants and product lines. Tracks plant capacity utilization, shift output, and defect frequencies.',
    techStack: ['Power BI', 'DAX Measures', 'Capacity Utilization', 'Production Planning', 'Operations BI'],
    githubUrl: 'https://github.com/Rithi-20/NovaTech'
  },
  {
    id: 'healthplus-sql',
    title: 'HealthPlus Healthcare Database & Utilization Analysis',
    category: 'SQL & Healthcare Relational Analytics',
    categoryFilter: 'Data Analytics',
    badge: 'SQL Analytics',
    isFeatured: false,
    shortProblem:
      'HealthPlus clinics struggled with unbalanced patient consultation loads, specialty bottlenecks, and opaque billing revenue distribution.',
    solution:
      'Authored comprehensive relational database queries and analytical scripts analyzing patient consultation patterns, specialist capacity, clinic utilization, and billing revenue.',
    description:
      'Healthcare database analytics in SQL evaluating member visit demand, high-volume clinic performance, doctor specialty workload distribution, and procedure billing revenue streams.',
    techStack: ['SQL', 'MySQL', 'Relational Database Design', 'Complex Joins', 'Window Functions', 'Healthcare Analytics'],
    githubUrl: 'https://github.com/Rithi-20/Healthplus'
  },
  {
    id: 'freshmart-excel',
    title: 'FreshMart Sales & Profitability Analysis Dashboard',
    category: 'Advanced Excel & Profitability Modeling',
    categoryFilter: 'Data Analytics',
    badge: 'Excel Modeling',
    isFeatured: false,
    shortProblem:
      'FreshMart lacked consolidated transparency into product profit margins versus discount erosion across diverse sales channels and product lines.',
    solution:
      'Modeled an interactive Excel decision dashboard evaluating gross margins, product category profitability, channel sales velocity, and inventory turnover.',
    description:
      'Commercial retail profitability workbook in Excel assessing margin drivers across products, categories, sales channels, and seasonal timeframes with dynamic visual KPI trackers.',
    techStack: ['Advanced Excel', 'Financial Modeling', 'Margin Analysis', 'Inventory Turnover', 'Pivot Dashboards'],
    githubUrl: 'https://github.com/Rithi-20/Freshmart'
  },
  {
    id: 'medicare-sql',
    title: 'MediCare Clinical Capacity & Hospital Resource Optimization',
    category: 'SQL & Hospital Capacity Analytics',
    categoryFilter: 'Data Analytics',
    badge: 'SQL Database',
    isFeatured: false,
    shortProblem:
      'Hospital networks faced chronic appointment scheduling delays and suboptimal bed capacity allocation across in-demand medical specialties.',
    solution:
      'Designed a normalized relational database schema with complex SQL queries evaluating hospital bed occupancy, doctor specialization distribution, and appointment wait times.',
    description:
      'Relational hospital database and query optimization project analyzing clinical resources, doctor specialization capacity, patient appointment turnaround, and bed occupancy rates.',
    techStack: ['SQL', 'Database Normalization', 'Stored Queries', 'Hospital Management', 'Capacity Planning'],
    githubUrl: 'https://github.com/Rithi-20/Medicare'
  }
];

export const FEATURED_PROJECTS = ALL_PROJECTS.filter((p) => p.isFeatured);
export const OTHER_PROJECTS = ALL_PROJECTS.filter((p) => !p.isFeatured);

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    organization: 'NPTEL (Elite)',
    year: '2024',
    credentialBadge: 'Elite',
    description: 'Covered penetration testing principles, network security vulnerabilities, threat identification, and cryptographic protections.'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    organization: 'NPTEL (Elite + Silver)',
    year: '2024',
    credentialBadge: 'Elite + Silver',
    description: 'Comprehensive study of distributed computing architectures, cloud virtualization, resource orchestration, and storage patterns.'
  },
  {
    id: 'blockchain',
    title: 'Specialization Course in Blockchain',
    organization: 'Academic Specialization',
    year: '2024–2025',
    credentialBadge: 'Specialization',
    description: 'In-depth coursework in decentralized ledgers, consensus algorithms, smart contracts, and cryptographic verification mechanisms.'
  },
  {
    id: 'salesforce',
    title: 'Salesforce Certified Training',
    organization: 'Innovalley Works',
    year: '2025',
    credentialBadge: 'Industry Training',
    description: 'Hands-on CRM data structures, process automation, relational schema modeling, and business logic execution.'
  },
  {
    id: 'novitech-masterclass',
    title: '30-Day Masterclass in Artificial Intelligence',
    organization: 'NoviTech R&D Private Limited',
    year: '2025',
    credentialBadge: 'Masterclass',
    description: 'Intensive 30-day technical program in applied machine learning, neural networks, computer vision, and real-world AI pipelines.'
  }
];

export const JOURNEY_MILESTONES = [
  {
    id: 'milestone-1',
    title: 'Computer Science & Engineering',
    phase: 'B.E. CSE Foundation',
    description: 'Mastered core computer science principles, algorithms, and data structures at Dr. N.G.P. Institute of Technology.',
    technologies: ['Python', 'Java', 'Data Structures', 'MySQL']
  },
  {
    id: 'milestone-2',
    title: 'AI Engineering & IEEE Publication',
    phase: 'Applied AI & Research',
    description: 'Conducted computer vision research on plant health monitoring and presented GreenMark at IEEE ICESCS 2025.',
    technologies: ['Computer Vision', 'Machine Learning', 'Research']
  },
  {
    id: 'milestone-3',
    title: 'Production Software Developer',
    phase: 'Industry Development',
    description: 'Completed 3 months of internship and 6 months of professional experience as a Junior Software Developer at Fuzionest, engineering backend APIs, Flutter features, and voice agents.',
    technologies: ['Backend APIs', 'Flutter', 'ElevenLabs', 'Node.js']
  }
];

export const CURRENT_FOCUS_TOPICS = [
  {
    title: 'Agentic AI',
    status: 'Currently building',
    description: 'Designing autonomous multi-agent systems with deterministic tool calling and structured reasoning.',
    focusAreas: ['Tool Calling', 'Agent State Machines', 'LangChain']
  },
  {
    title: 'RAG & Vector Retrieval',
    status: 'Currently refining',
    description: 'Grounding large language models with dense FAISS vector indexing and hybrid search.',
    focusAreas: ['FAISS', 'Context Grounding', 'Dense Embeddings']
  }
];

