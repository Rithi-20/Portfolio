import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, School, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-[#0d0918]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-aos="fade-up" className="flex flex-col mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Where I Studied
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded mt-3" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">
          {/* Main Undergraduate Degree Card (7 cols) */}
          <div
            data-aos="fade-right"
            data-aos-duration="750"
            className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-[#140e24] border border-purple-500/30 hover:border-violet-400/70 shadow-xl hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] flex flex-col justify-between relative overflow-hidden group cursor-default"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-violet-950/60 border border-violet-800/40 text-xs font-mono text-violet-200 font-semibold">
                  <GraduationCap className="w-4 h-4 text-violet-400" />
                  Undergraduate Degree
                </span>
                <span className="text-xs font-mono text-purple-300/70 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-purple-400/60" />
                  {PERSONAL_INFO.education.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {PERSONAL_INFO.education.degree}
              </h3>

              <div className="text-base text-violet-400 font-medium mb-4">
                {PERSONAL_INFO.education.institution}
              </div>

              <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed mb-6">
                Comprehensive four-year engineering curriculum focused on core Computer Science foundations, algorithm engineering, database design, computer networks, and systems architecture.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Data Structures & Algorithms', 'Database Systems', 'Operating Systems', 'Computer Networks', 'Object-Oriented Programming', 'Software Engineering'].map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-purple-500/15 text-purple-200 hover:border-violet-500/40 hover:text-violet-200 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between">
              <span className="text-xs font-mono text-purple-300/70">Cumulative Academic Standing</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold font-mono text-violet-300">8.42</span>
                <span className="text-xs font-mono text-purple-300/70">/ 10 CGPA</span>
              </div>
            </div>
          </div>

          {/* Schooling Foundation Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            {/* HSC Card */}
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="p-6 rounded-2xl bg-[#140e24] border border-purple-500/15 hover:border-violet-400/60 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] shadow-lg hover:shadow-2xl hover:shadow-violet-500/20 flex-1 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-violet-950/50 border border-violet-800/40 text-violet-400 group-hover:scale-110 transition-transform">
                      <School className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-purple-100">
                      Higher Secondary Certificate (HSC)
                    </span>
                  </div>
                  <span className="text-lg font-bold font-mono text-violet-200 px-2.5 py-0.5 rounded-full bg-violet-950/60 border border-violet-800/40">
                    90.5%
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                  Venkatalakshmi Matriculation Higher Secondary School
                </h4>

                <div className="text-xs text-purple-300/70 flex items-center gap-1.5 mb-2">
                  <MapPin className="w-3 h-3 text-purple-400/60" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>

                <p className="text-xs text-purple-200/90 leading-relaxed">
                  Specialized in Science & Mathematics with academic distinction in Mathematics, Physics, Chemistry, and Computer Science.
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-purple-500/15 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Distinction Score · 90.5%</span>
              </div>
            </div>

            {/* SSLC Card */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="p-6 rounded-2xl bg-[#140e24] border border-purple-500/15 hover:border-purple-400/60 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 flex-1 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-purple-950/50 border border-purple-800/40 text-purple-300">
                      <School className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-purple-100">
                      Secondary School Leaving Certificate (SSLC)
                    </span>
                  </div>
                  <span className="text-lg font-bold font-mono text-purple-200 px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-800/40">
                    79.6%
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                  Venkatalakshmi Matriculation Higher Secondary School
                </h4>

                <div className="text-xs text-purple-300/70 flex items-center gap-1.5 mb-2">
                  <MapPin className="w-3 h-3 text-purple-400/60" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>

                <p className="text-xs text-purple-200/90 leading-relaxed">
                  Core secondary school curriculum establishing foundational analytical, computational, and scientific reasoning skills.
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-purple-500/15 text-[11px] font-mono text-purple-300/80 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Completed · 79.6%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
