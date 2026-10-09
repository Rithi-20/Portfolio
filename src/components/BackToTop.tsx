import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#140e24]/90 hover:bg-violet-400 text-slate-300 hover:text-slate-950 border border-purple-500/20 hover:border-violet-300 shadow-xl shadow-purple-950/40 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 cursor-pointer"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
