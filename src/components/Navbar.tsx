import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommand, onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scroll);
      setIsScrolled(totalScroll > 20);

      // Scroll spy for active section
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll progress bar at the top */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0816]/85 backdrop-blur-md border-b border-purple-500/10 py-3.5 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Monogram */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold font-mono tracking-tight text-sm shadow-md shadow-violet-500/30 group-hover:scale-105 transition-transform duration-200">
                RU
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-white group-hover:text-violet-300 transition-colors">
                  RITHIHA U
                </span>
                <span className="text-[10px] font-mono text-purple-300/70 tracking-wider">
                  AI & SOFTWARE
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 bg-[#140e24]/70 border border-purple-500/15 rounded-full px-3 py-1.5 backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-violet-200 bg-violet-600/30 border border-violet-500/40 shadow-sm'
                        : 'text-purple-200/80 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right actions: Command Palette, Resume, Mobile toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* GitHub Profile Link */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-purple-200 hover:text-white bg-[#140e24]/80 hover:bg-[#1f1537] border border-purple-500/20 hover:border-violet-400/50 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5 text-violet-400" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn Profile Link */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-purple-200 hover:text-white bg-[#140e24]/80 hover:bg-[#1f1537] border border-purple-500/20 hover:border-violet-400/50 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-violet-400" />
                <span>LinkedIn</span>
              </a>

              {/* Resume CTA */}
              <button
                type="button"
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 hover:from-violet-200 hover:to-purple-200 rounded-lg shadow-sm shadow-violet-500/20 hover:shadow-violet-400/40 transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="xl:hidden p-2 text-purple-200 hover:text-white bg-[#140e24] border border-purple-500/20 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[65px] bg-[#0e0a1b]/98 backdrop-blur-xl border-b border-purple-500/20 px-4 py-6 shadow-2xl transition-all">
            <div className="flex flex-col gap-2 max-w-md mx-auto">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-violet-950/70 text-violet-200 border border-violet-700/50'
                        : 'text-purple-200/80 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-purple-500/20 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-mono text-purple-200 bg-[#160f29] border border-purple-500/20 hover:text-white"
                >
                  <Github className="w-4 h-4 text-violet-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-mono text-purple-200 bg-[#160f29] border border-purple-500/20 hover:text-white"
                >
                  <Linkedin className="w-4 h-4 text-violet-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className="flex items-center justify-between text-xs text-purple-300/70 px-2 pt-2 font-mono">
                <span>{PERSONAL_INFO.location}</span>
                <span className="text-violet-400">Open to Opportunities</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
