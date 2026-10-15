import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { ShieldCheck, Cloud, Blocks, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const getBadgeIcon = (id: string) => {
    switch (id) {
      case 'ethical-hacking':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'cloud-computing':
        return <Cloud className="w-4 h-4 text-violet-400" />;
      case 'azure-fundamentals':
        return <Cloud className="w-4 h-4 text-sky-400" />;
      case 'blockchain':
        return <Blocks className="w-4 h-4 text-purple-400" />;
      case 'salesforce':
        return <Award className="w-4 h-4 text-fuchsia-400" />;
      case 'novitech-masterclass':
        return <Sparkles className="w-4 h-4 text-violet-300" />;
      default:
        return <Award className="w-4 h-4 text-violet-400" />;
    }
  };

  return (
    <section id="certifications" className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-aos="fade-up" className="flex flex-col mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            What I Achieved
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded mt-2" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={cert.id}
              data-aos="fade-up"
              data-aos-delay={`${100 + idx * 75}`}
              className="p-4.5 sm:p-5 rounded-xl bg-[#140e24] hover:bg-[#1c1333] border border-purple-500/15 hover:border-violet-400/60 shadow-lg hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getBadgeIcon(cert.id)}
                  </div>
                  <span className="text-[11px] font-mono text-violet-300 bg-violet-950/50 border border-violet-800/50 px-2 py-0.5 rounded">
                    {cert.credentialBadge}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-violet-300 transition-colors mb-1">
                  {cert.title}
                </h3>

                <div className="text-xs text-slate-400 font-medium mb-2.5">
                  {cert.organization}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Completed</span>
                <span className="text-slate-400 font-semibold">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
