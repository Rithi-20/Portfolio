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
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#0e1424]/90 hover:bg-cyan-500 text-slate-300 hover:text-slate-900 border border-white/10 hover:border-cyan-400 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 cursor-pointer"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
