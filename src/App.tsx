import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ResearchPublicationSection } from './components/ResearchPublicationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandMenu } from './components/CommandMenu';
import { BackToTop } from './components/BackToTop';
import { CosmicStarfield } from './components/CosmicStarfield';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open command menu on '/' or Cmd/Ctrl + K
      if (
        (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k')) &&
        !isCommandOpen &&
        !isResumeOpen &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA' &&
        document.activeElement?.tagName !== 'SELECT'
      ) {
        e.preventDefault();
        setIsCommandOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandOpen, isResumeOpen]);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Ambient Cosmic Starfield Background */}
      <CosmicStarfield />

      {/* Navigation */}
      <Navbar
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ResearchPublicationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <BackToTop />

      {/* Interactive Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CommandMenu
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </div>
  );
}
