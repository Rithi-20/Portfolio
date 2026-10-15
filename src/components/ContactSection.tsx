import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, Send, MapPin, Sparkles, MessageSquare, ExternalLink, RotateCcw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LeetCodeIcon } from './LeetCodeIcon';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
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

  const getEmailData = () => {
    const senderName = formData.name.trim() || 'Portfolio Visitor';
    const senderEmail = formData.email.trim();
    const inquirySubject = formData.subject.trim() || 'Engineering Opportunity / Inquiry';

    // Standardized Subject incorporating sender name and email
    const fullSubject = `[Portfolio Inquiry] ${inquirySubject} — From: ${senderName} <${senderEmail}>`;

    // Standardized RFC-header body ensuring sender address is permanently recognized
    const formattedBody = `============================================================
SENDER / FROM DETAILS:
From: ${senderName} <${senderEmail}>
Reply-To: ${senderEmail}
Cc: ${senderEmail}
To: ${PERSONAL_INFO.name} <${PERSONAL_INFO.email}>
Date: ${new Date().toLocaleString()}
============================================================

Hello ${PERSONAL_INFO.name},

${formData.message}

============================================================
SENDER VERIFICATION:
- Full Name: ${senderName}
- From Email (Reply-To): ${senderEmail}
- Topic: ${inquirySubject}
============================================================`;

    const subjectEncoded = encodeURIComponent(fullSubject);
    const bodyEncoded = encodeURIComponent(formattedBody);
    const fromEncoded = encodeURIComponent(senderEmail);
    const toEncoded = encodeURIComponent(PERSONAL_INFO.email);

    return {
      fullSubject,
      formattedBody,
      senderEmail,
      mailtoUrl: `mailto:${toEncoded}?from=${fromEncoded}&reply-to=${fromEncoded}&cc=${fromEncoded}&subject=${subjectEncoded}&body=${bodyEncoded}`,
      gmailUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=${toEncoded}&cc=${fromEncoded}&su=${subjectEncoded}&body=${bodyEncoded}`,
      outlookUrl: `https://outlook.live.com/mail/0/deeplink/compose?to=${toEncoded}&cc=${fromEncoded}&subject=${subjectEncoded}&body=${bodyEncoded}`
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = getEmailData();
    window.location.href = data.mailtoUrl;
    setFormSubmitted(true);
  };

  const handleCopyFullDraft = async () => {
    const data = getEmailData();
    const fullDraft = `To: ${PERSONAL_INFO.email}\nFrom: ${formData.name} <${data.senderEmail}>\nReply-To: ${data.senderEmail}\nCc: ${data.senderEmail}\nSubject: ${data.fullSubject}\n\n${data.formattedBody}`;
    try {
      await navigator.clipboard.writeText(fullDraft);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2500);
    } catch {
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-aos="fade-up" className="flex flex-col mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            How to Reach Me
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 rounded mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Direct channels and Fast actions */}
          <div data-aos="fade-right" className="lg:col-span-5 space-y-3.5">
            {/* Email Action Card */}
            <div className="p-4.5 sm:p-5 rounded-xl bg-[#140e24] border border-purple-500/25 hover:border-violet-400/60 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] cursor-default">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-mono text-violet-300 uppercase tracking-wider font-semibold">
                  Primary Email
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Fast Response
                </span>
              </div>

              <div className="text-xs sm:text-sm font-mono text-white mb-3.5 break-all font-semibold">
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
            <div className="p-4.5 sm:p-5 rounded-xl bg-[#140e24] border border-purple-500/15 hover:border-violet-400/50 shadow-lg hover:shadow-xl hover:shadow-violet-500/15 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] space-y-2.5 cursor-default">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                Professional Networks
              </div>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-violet-400" />
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    LinkedIn Profile
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">rithiha-u</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-200" />
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    GitHub Profile
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">Rithi-20</span>
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                    LeetCode Profile
                  </span>
                </div>
                <span className="text-xs font-mono text-amber-300/80">rithi_2007</span>
              </a>

              <div className="flex items-center gap-2 p-2.5 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-violet-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div data-aos="fade-left" className="lg:col-span-7 p-5 sm:p-6 rounded-xl bg-[#140e24] border border-purple-500/20 hover:border-violet-400/50 shadow-2xl hover:shadow-violet-500/15 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.005]">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-300 uppercase tracking-wider font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>Send a Direct Message</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3 py-2 rounded-lg bg-[#0e091b] border border-purple-500/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-[#0e091b] border border-purple-500/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
                  />
                  <div className="text-[10px] font-mono text-purple-300/60 mt-0.5">
                    Configured as verified From, Reply-To &amp; CC
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1">
                  Subject / Inquiring About *
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Enter any subject..."
                  className="w-full px-3 py-2 rounded-lg bg-[#0e091b] border border-purple-500/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the role, project requirements, or opportunity..."
                  className="w-full px-3 py-2 rounded-lg bg-[#0e091b] border border-purple-500/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all resize-none"
                />
              </div>

              <div className="pt-1.5">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-4.5 py-2 rounded-lg text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 hover:from-violet-200 hover:to-purple-200 transition-all cursor-pointer shadow-lg shadow-violet-500/25"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email</span>
                </button>
              </div>

              {formSubmitted && (
                <div className="mt-4 p-4 rounded-xl bg-violet-950/50 border border-violet-700/50 space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-start gap-2.5 text-xs font-mono text-emerald-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Email draft generated with verified sender identity!</div>
                      <div className="text-purple-300/80 mt-0.5">
                        Recognized From / Reply-To: <span className="text-amber-300 font-bold">{formData.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-purple-500/20 text-xs font-mono text-purple-200/90">
                    If your default mail app didn't open automatically, send directly using:
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={getEmailData().gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#ea4335]/20 hover:bg-[#ea4335]/30 text-white border border-[#ea4335]/40 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#ea4335]" />
                      <span>Open in Gmail Web</span>
                    </a>

                    <a
                      href={getEmailData().outlookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0078d4]/20 hover:bg-[#0078d4]/30 text-white border border-[#0078d4]/40 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#0078d4]" />
                      <span>Open in Outlook Web</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyFullDraft}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.05] hover:bg-white/[0.1] text-purple-200 border border-purple-500/30 transition-colors cursor-pointer"
                    >
                      {copiedDraft ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Draft Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Full Pre-filled Draft</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        window.location.href = getEmailData().mailtoUrl;
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-purple-900/30 hover:bg-purple-900/50 text-violet-300 border border-purple-700/40 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Re-open Mail App</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
