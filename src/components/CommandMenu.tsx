import React, { useState, useEffect } from 'react';
import { Search, Home, FolderGit2, Wrench, Briefcase, Mail, Github, FileText, X, ArrowRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isOpen && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        // Trigger via prop would require listener outside or window event
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1500);
  };

  const commands = [
    {
      id: 'home',
      name: 'Go to Home',
      category: 'Navigation',
      icon: <Home className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo('home')
    },
    {
      id: 'about',
      name: 'Go to About',
      category: 'Navigation',
      icon: <Home className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo('about')
    },
    {
      id: 'research',
      name: 'Go to Research & Publication (GreenMark)',
      category: 'Navigation',
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      action: () => scrollTo('research')
    },
    {
      id: 'projects',
      name: 'Go to Projects',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo('projects')
    },
    {
      id: 'skills',
      name: 'Go to Skills',
      category: 'Navigation',
      icon: <Wrench className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo('skills')
    },
    {
      id: 'experience',
      name: 'Go to Experience',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo('experience')
    },
    {
      id: 'contact',
      name: 'Contact Me',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo('contact')
    },
    {
      id: 'github',
      name: 'Open GitHub Profile',
      category: 'External',
      icon: <Github className="w-4 h-4 text-slate-300" />,
      action: () => {
        onClose();
        window.open(PERSONAL_INFO.github, '_blank');
      }
    },
    {
      id: 'resume',
      name: 'Download / View Resume',
      category: 'Action',
      icon: <FileText className="w-4 h-4 text-sky-400" />,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'copy-email',
      name: copied ? 'Email Copied!' : 'Copy Email Address',
      category: 'Action',
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />,
      action: handleCopyEmail
    }
  ];

  const filtered = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-[#0e1424] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input header */}
        <div className="p-3.5 border-b border-white/10 flex items-center gap-3">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command list */}
        <div className="p-2 max-h-80 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-500 font-mono">
              No matching commands found
            </div>
          ) : (
            filtered.map((cmd) => (
              <button
                key={cmd.id}
                type="button"
                onClick={cmd.action}
                className="w-full p-2.5 rounded-lg text-left text-xs text-slate-200 hover:text-white hover:bg-white/[0.05] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  {cmd.icon}
                  <span className="font-medium">{cmd.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    {cmd.category}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              </button>
            ))
          )}
        </div>

        <div className="p-2.5 border-t border-white/[0.06] bg-[#090d16] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigation Quick Menu</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
