import React, { useState, useRef, useEffect } from 'react';
import { ALL_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import {
  ArrowUpRight,
  Github,
  Layers,
  Eye,
  Sparkles,
  Search,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Box,
  LayoutGrid,
  Play,
  Pause,
  SlidersHorizontal,
  Flame,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { ProjectModal } from './ProjectModal';

// Reusable 3D Tilt Wrapper with Specular Glare
interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
}

const Card3DTilt: React.FC<Card3DTiltProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 9;
    const rotateY = ((x - centerX) / centerX) * 9;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px) scale3d(1.015, 1.015, 1.015)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)');
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.15s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.2s ease',
        transformStyle: 'preserve-3d'
      }}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Dynamic Specular Glare */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-30"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(6, 182, 212, 0.25) 0%, transparent 65%)`,
          opacity: glare.opacity
        }}
      />
      {children}
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'deck' | 'grid'>('deck');
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Agentic AI' | 'Generative AI' | 'AI / ML' | 'Backend'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [deckIndex, setDeckIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);

  const filterOptions: Array<'All' | 'Agentic AI' | 'Generative AI' | 'AI / ML' | 'Backend'> = [
    'All',
    'Agentic AI',
    'Generative AI',
    'AI / ML',
    'Backend'
  ];

  // Filter projects by category and search term
  const filteredProjects = ALL_PROJECTS.filter((p) => {
    const matchesCategory = selectedFilter === 'All' ? true : p.categoryFilter === selectedFilter;
    const matchesSearch =
      searchQuery.trim() === ''
        ? true
        : p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Keep deckIndex in bounds when filtering
  useEffect(() => {
    if (deckIndex >= filteredProjects.length) {
      setDeckIndex(0);
    }
  }, [filteredProjects.length, deckIndex]);

  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [animKey, setAnimKey] = useState(0);

  // Autoplay for 3D deck view
  useEffect(() => {
    if (!isAutoplay || viewMode !== 'deck' || filteredProjects.length <= 1) return;
    const interval = setInterval(() => {
      setSlideDirection('right');
      setDeckIndex((prev) => (prev + 1) % filteredProjects.length);
      setAnimKey((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoplay, viewMode, filteredProjects.length]);

  const handlePrevDeck = () => {
    setSlideDirection('left');
    setDeckIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
    setAnimKey((prev) => prev + 1);
  };

  const handleNextDeck = () => {
    setSlideDirection('right');
    setDeckIndex((prev) => (prev + 1) % filteredProjects.length);
    setAnimKey((prev) => prev + 1);
  };

  const activeProject = filteredProjects[deckIndex] || filteredProjects[0];

  return (
    <section id="projects" className="pt-8 pb-8 sm:pt-10 sm:pb-10 relative bg-[#070b14]/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              What I Built
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 rounded mt-3" />
          </div>

          {/* View Mode Switcher Toggle */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#0c1220] border border-white/10 shrink-0 shadow-lg">
            <button
              type="button"
              onClick={() => setViewMode('deck')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150 cursor-pointer ${
                viewMode === 'deck'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D Deck Stage</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>3D Matrix Grid</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-white/[0.06]">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {filterOptions.map((filter) => {
              const isActive = selectedFilter === filter;
              const count = ALL_PROJECTS.filter((p) =>
                filter === 'All' ? true : p.categoryFilter === filter
              ).length;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05]'
                  }`}
                >
                  <span>{filter}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-cyan-400/30 text-white' : 'bg-white/10 text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[220px] max-w-xs">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, title, domain..."
              className="w-full pl-8 pr-3 py-1.5 bg-[#0a0f1d] border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-white font-mono"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ----------------- VIEW MODE 1: 3D PERSPECTIVE DECK CAROUSEL ----------------- */}
        {viewMode === 'deck' && (
          <div className="relative mb-6">
            {filteredProjects.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#0b101c] border border-white/10 text-slate-400">
                No projects matched your filter. Try clearing the search query or selecting "All".
              </div>
            ) : (
              <div>
                {/* 3D Perspective Stage */}
                <div className="relative min-h-[460px] flex items-center justify-center perspective-1500 py-6 overflow-hidden">
                  {/* Left Ghost Card Preview (3D receded) */}
                  {filteredProjects.length > 1 && (
                    <div
                      onClick={handlePrevDeck}
                      style={{
                        transform: 'translateX(-58%) translateZ(-160px) rotateY(32deg) scale(0.82)',
                        transformStyle: 'preserve-3d'
                      }}
                      className="absolute hidden md:block w-full max-w-xl p-6 rounded-2xl bg-[#090d18]/90 border border-white/5 opacity-35 hover:opacity-75 transition-all duration-300 cursor-pointer select-none filter blur-[0.5px]"
                    >
                      <div className="text-xs font-mono text-cyan-400 mb-1">
                        {filteredProjects[(deckIndex - 1 + filteredProjects.length) % filteredProjects.length].category}
                      </div>
                      <h4 className="text-lg font-bold text-slate-200">
                        {filteredProjects[(deckIndex - 1 + filteredProjects.length) % filteredProjects.length].title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-2">
                        {filteredProjects[(deckIndex - 1 + filteredProjects.length) % filteredProjects.length].solution}
                      </p>
                    </div>
                  )}

                  {/* Active 3D Card (Center Stage with 3D Slide Animation & Interactive Tilt) */}
                  <div
                    key={`active-deck-${deckIndex}-${animKey}`}
                    className={`relative w-full max-w-2xl z-20 ${
                      slideDirection === 'right' ? 'animate-slide-in-right-3d' : 'animate-slide-in-left-3d'
                    }`}
                  >
                    <Card3DTilt className="p-6 sm:p-8 rounded-2xl bg-[#0c1222] border border-cyan-500/40 shadow-2xl shadow-cyan-950/50">
                      {/* Top neon edge light */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                      {/* Top Meta Row */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                            {activeProject.category}
                          </span>
                          {activeProject.badge && (
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">
                              {activeProject.badge}
                            </span>
                          )}
                          {activeProject.conference && (
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-700/50">
                              {activeProject.conference}
                            </span>
                          )}
                        </div>

                        <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                          {activeProject.liveDemoUrl && (
                            <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              Live Demo Available
                            </span>
                          )}
                          <span>
                            [{deckIndex + 1 < 10 ? `0${deckIndex + 1}` : deckIndex + 1} / {filteredProjects.length < 10 ? `0${filteredProjects.length}` : filteredProjects.length}]
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {activeProject.title}
                      </h3>

                      {/* Problem & Solution (Compact & Crisp) */}
                      <div className="space-y-2.5 mb-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <p>
                          <span className="text-slate-400 font-mono font-medium">Challenge: </span>
                          {activeProject.shortProblem}
                        </p>
                        <p className="text-slate-200">
                          <span className="text-cyan-400 font-mono font-medium">Engineered Solution: </span>
                          {activeProject.solution}
                        </p>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {activeProject.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111828] text-slate-300 border border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-white/[0.08]">
                        <div className="flex flex-wrap items-center gap-3">
                          {activeProject.paperUrl && (
                            <a
                              href={activeProject.paperUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-150 shadow-md shadow-blue-500/25 cursor-pointer"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>IEEE Paper</span>
                            </a>
                          )}

                          {activeProject.liveDemoUrl && (
                            <a
                              href={activeProject.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all duration-150 shadow-md shadow-emerald-500/20 cursor-pointer"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Launch Live App</span>
                            </a>
                          )}

                          <a
                            href={activeProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors cursor-pointer"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub Source</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => setActiveModalProject(activeProject)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-cyan-300 hover:text-white bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-800/40 transition-colors cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Detailed Specs</span>
                          </button>
                        </div>

                        {activeProject.architectureSteps && (
                          <div className="text-[11px] font-mono text-cyan-400/80 flex items-center gap-1">
                            <Layers className="w-3.5 h-3.5" />
                            <span>{activeProject.architectureSteps.length}-Stage Architecture</span>
                          </div>
                        )}
                      </div>
                    </Card3DTilt>
                  </div>

                  {/* Right Ghost Card Preview (3D receded) */}
                  {filteredProjects.length > 1 && (
                    <div
                      onClick={handleNextDeck}
                      style={{
                        transform: 'translateX(58%) translateZ(-160px) rotateY(-32deg) scale(0.82)',
                        transformStyle: 'preserve-3d'
                      }}
                      className="absolute hidden md:block w-full max-w-xl p-6 rounded-2xl bg-[#090d18]/90 border border-white/5 opacity-35 hover:opacity-75 transition-all duration-300 cursor-pointer select-none filter blur-[0.5px]"
                    >
                      <div className="text-xs font-mono text-cyan-400 mb-1">
                        {filteredProjects[(deckIndex + 1) % filteredProjects.length].category}
                      </div>
                      <h4 className="text-lg font-bold text-slate-200">
                        {filteredProjects[(deckIndex + 1) % filteredProjects.length].title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-2">
                        {filteredProjects[(deckIndex + 1) % filteredProjects.length].solution}
                      </p>
                    </div>
                  )}
                </div>

                {/* 3D Carousel Navigation Controls */}
                <div className="flex items-center justify-between max-w-2xl mx-auto mt-4 px-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevDeck}
                      aria-label="Previous Project"
                      className="p-2.5 rounded-lg bg-[#0e1424] hover:bg-[#141e36] text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextDeck}
                      aria-label="Next Project"
                      className="p-2.5 rounded-lg bg-[#0e1424] hover:bg-[#141e36] text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsAutoplay(!isAutoplay)}
                      aria-label={isAutoplay ? 'Pause Carousel' : 'Autoplay Carousel'}
                      className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isAutoplay
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-[#0e1424] text-slate-400 hover:text-white border border-white/10'
                      }`}
                      title={isAutoplay ? 'Pause auto-rotation' : 'Start auto-rotation'}
                    >
                      {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span className="text-[10px] hidden sm:inline">{isAutoplay ? 'Auto 3D Active' : 'Auto 3D'}</span>
                    </button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="flex items-center gap-1.5 overflow-x-auto max-w-[240px] px-2 py-1 scrollbar-none">
                    {filteredProjects.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => {
                          setSlideDirection(dotIdx >= deckIndex ? 'right' : 'left');
                          setDeckIndex(dotIdx);
                          setAnimKey((prev) => prev + 1);
                        }}
                        aria-label={`Go to project ${dotIdx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                          deckIndex === dotIdx
                            ? 'w-6 bg-cyan-400'
                            : 'w-1.5 bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Switch to Grid Hint */}
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>View all 17 as Grid</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ----------------- VIEW MODE 2: 3D INTERACTIVE TILT MATRIX GRID ----------------- */}
        {viewMode === 'grid' && (
          <div>
            {filteredProjects.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#0b101c] border border-white/10 text-slate-400">
                No projects matched your search criteria.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card3DTilt
                    key={project.id}
                    className="p-6 rounded-2xl bg-[#0c1220] hover:bg-[#0f172a] border border-white/[0.08] hover:border-cyan-500/40 shadow-xl transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar: Category + Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold truncate">
                          {project.category}
                        </span>

                        <div className="flex items-center gap-1 shrink-0">
                          {project.liveDemoUrl && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-800/40">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Live
                            </span>
                          )}
                          {project.badge && !project.liveDemoUrl && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-800/40">
                              {project.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {project.title}
                      </h3>

                      {/* Crisp 1-2 sentence Solution Description */}
                      <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                        {project.solution}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.techStack.slice(0, 5).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.04]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 5 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-slate-500">
                            +{project.techStack.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Action Links & Spec Trigger */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono">
                        <button
                          type="button"
                          onClick={() => setActiveModalProject(project)}
                          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Specs</span>
                        </button>

                        <div className="flex items-center gap-3">
                          {project.paperUrl && (
                            <a
                              href={project.paperUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
                              title="Official IEEE Xplore Publication"
                            >
                              <span>IEEE</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}

                          {project.liveDemoUrl && (
                            <a
                              href={project.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                              title="Open Live App"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white flex items-center gap-1"
                            title="View GitHub Repository"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card3DTilt>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Case Study / Quick View Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
