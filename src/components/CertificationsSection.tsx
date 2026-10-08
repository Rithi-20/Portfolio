import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { ShieldCheck, Cloud, Blocks, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const getBadgeIcon = (id: string) => {
    switch (id) {
      case 'ethical-hacking':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'cloud-computing':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'blockchain':
        return <Blocks className="w-5 h-5 text-indigo-400" />;
      case 'salesforce':
        return <Award className="w-5 h-5 text-blue-400" />;
      case 'novitech-masterclass':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      default:
        return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            What I Achieved
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded mt-3" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#0c111e] hover:bg-[#11192b] border border-white/[0.06] hover:border-cyan-400/60 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getBadgeIcon(cert.id)}
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-0.5 rounded">
                    {cert.credentialBadge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {cert.title}
                </h3>

                <div className="text-xs text-slate-400 font-medium mb-3">
                  {cert.organization}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500">
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
