import React from 'react';
import { BookOpen, Award, CheckCircle2, QrCode, MapPin, Sparkles, FileText, ArrowUpRight, Github, ExternalLink, Leaf } from 'lucide-react';

export const ResearchPublicationSection: React.FC = () => {
  const pipelineFlow = [
    { title: 'Sapling Planting', desc: 'Affixed with weather-resistant QR tag' },
    { title: 'QR Tracking', desc: 'Cryptographic identity registration' },
    { title: 'GPS Verification', desc: 'Geofenced coordinate audit' },
    { title: 'Monthly Growth Audit', desc: 'Longitudinal photographic record' },
    { title: 'AI Plant Health Analysis', desc: 'Computer vision canopy & vitality scoring' },
    { title: 'Carbon Absorption Est.', desc: 'Biomass sequestration equations' },
    { title: 'Eco Rewards & Cert.', desc: 'Auditable carbon credit issuance' }
  ];

  return (
    <section id="research" className="py-24 relative bg-[#070b14]/90">
      <div id="publication" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
            <span>Research & Publication</span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-800/40 font-normal">
              IEEE ICESCS 2025
            </span>
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 rounded mt-3" />
        </div>

        {/* Research Paper Feature Card */}
        <div className="p-7 sm:p-10 rounded-3xl bg-[#0b101c] border border-cyan-500/30 hover:border-cyan-400/60 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group cursor-default">
          {/* Subtle paper watermark grid background */}
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <BookOpen className="w-64 h-64 text-cyan-400" />
          </div>

          {/* Top metadata row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://ieeexplore.ieee.org/document/11212334"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-950/70 hover:bg-blue-900/80 border border-blue-500/50 hover:border-blue-400 text-xs font-mono text-blue-300 hover:text-white font-semibold shadow-md shadow-blue-500/10 transition-all cursor-pointer group"
                title="View published record on IEEE Xplore Digital Library"
              >
                <Award className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>IEEE Xplore Digital Library · Doc #11212334</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
              </a>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-300 font-semibold shadow-sm">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                IEEE ICESCS 2025 Conference
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>Hindusthan Institute of Technology, Coimbatore</span>
            </div>
          </div>

          {/* Paper Title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3 leading-snug">
            GreenMark: A Reward-Based Urban Greening System with Plant Monitoring and Carbon Credit Certification
          </h3>

          {/* Author attribution / role */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-cyan-400 mb-6">
            <span className="text-white font-semibold">Author & Presenter:</span>
            <span>Rithiha U</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">Published in IEEE Xplore</span>
            <span className="text-slate-600">·</span>
            <a
              href="https://ieeexplore.ieee.org/document/11212334"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4 flex items-center gap-1"
            >
              <span>ieeexplore.ieee.org/document/11212334</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Abstract / Problem & Solution narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-8 space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Research Abstract: </strong>
                Urban afforestation drives frequently suffer from high early-mortality rates due to inadequate post-planting monitoring and transparent incentive models. <strong className="text-cyan-300 font-medium">GreenMark</strong> addresses this challenge by deploying a hybrid computational framework combining computer vision, QR-based IoT tracking, and GPS geofencing.
              </p>
              <p>
                The system enables community caretakers to log longitudinal photo updates. An AI model evaluates plant vitality and foliage health, feeding verified growth metrics into biomass equations to estimate carbon sequestration. Quantified absorption feeds into a transparent eco-reward protocol, issuing certified, auditable carbon credits.
              </p>

              {/* Action Buttons: Official IEEE Paper and GitHub Repo */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="https://ieeexplore.ieee.org/document/11212334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 border border-blue-400/40 transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-blue-100" />
                  <span>Read Official IEEE Paper</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-100 ml-0.5" />
                </a>

                <a
                  href="https://github.com/Rithi-20/Greenmark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-500/40 transition-all cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Key research areas */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2.5 text-xs font-mono">
              <div className="text-cyan-400 font-semibold mb-2 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Methodology Pillars:</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>AI Computer Vision Plant Health (96.4% Accuracy)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>QR-Enabled Unique Sapling Tracking</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>GPS Geofenced Audit & Telemetry</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Biomass Carbon Sequestration Equations</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Auditable Carbon Credit Rewards Protocol</span>
              </div>
            </div>
          </div>

          {/* Visual Research Flow Pipeline */}
          <div className="pt-6 border-t border-white/[0.08]">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>End-to-End System Architecture Pipeline</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
              {pipelineFlow.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0e1424] border border-white/[0.06] hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] flex flex-col justify-between cursor-default group"
                >
                  <div className="text-[10px] font-mono text-cyan-400 mb-1">
                    0{idx + 1}
                  </div>
                  <div className="text-xs font-bold text-white mb-1">
                    {step.title}
                  </div>
                  <div className="text-[10px] text-slate-400 leading-tight">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
