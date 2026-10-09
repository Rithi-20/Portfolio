import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, Send, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto query so message actually opens in user's default client with pre-filled content
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Rithiha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How to Reach Me
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels and Fast actions */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Action Card */}
            <div className="p-6 rounded-2xl bg-[#140e24] border border-purple-500/25 hover:border-violet-400/60 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] cursor-default">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-violet-300 uppercase tracking-wider font-semibold">
                  Primary Email
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Fast Response
                </span>
              </div>

              <div className="text-sm sm:text-base font-mono text-white mb-4 break-all font-semibold">
                {PERSONAL_INFO.email}
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-violet-300 to-purple-300 hover:from-violet-200 hover:to-purple-200 transition-all cursor-pointer shadow-sm shadow-violet-500/20"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-950" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Directly</span>
                </a>
              </div>
            </div>

            {/* Social channels card */}
            <div className="p-6 rounded-2xl bg-[#140e24] border border-purple-500/15 hover:border-violet-400/50 shadow-lg hover:shadow-xl hover:shadow-violet-500/15 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] space-y-3 cursor-default">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Professional Networks
              </div>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    LinkedIn Profile
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">rithiha-u</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-slate-200" />
                  <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    GitHub Profile
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">Rithi-20</span>
              </a>

              <div className="flex items-center gap-2 p-3 text-xs font-mono text-slate-400">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#140e24] border border-purple-500/20 hover:border-violet-400/50 shadow-2xl hover:shadow-violet-500/15 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.005]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-300 uppercase tracking-wider font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>Send a Direct Message</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e091b] border border-purple-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e091b] border border-purple-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject / Inquiring About *
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Enter any subject..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e091b] border border-purple-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the role, project requirements, or opportunity..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e091b] border border-purple-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-slate-950 bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 hover:from-violet-200 hover:to-purple-200 transition-all cursor-pointer shadow-lg shadow-violet-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </div>

              {formSubmitted && (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Email draft created. You can also copy the email directly on the left.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
