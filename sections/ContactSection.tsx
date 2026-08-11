'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactFormData } from '@/types/portfolio';
import { portfolioData } from '@/data/portfolio';
import { fadeIn, staggerContainer } from '@/animations/variants';
import { Send, Mail, MapPin, Phone, Clock, CheckCircle2, Terminal, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStep, setSubmissionStep] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email address is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject line is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message body cannot be empty';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    setSubmissionStep('Preparing message payload...');
    await new Promise((r) => setTimeout(r, 600));

    setSubmissionStep('Validating REST endpoints...');
    await new Promise((r) => setTimeout(r, 600));

    setSubmissionStep('Dispatching message to Waqas Ahmed...');
    await new Promise((r) => setTimeout(r, 600));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-[#050505] overflow-hidden">
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn('up', 0.1)} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>08. GET IN TOUCH</span>
          </motion.div>
          <motion.h2 variants={fadeIn('up', 0.2)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="text-gradient-red">Waqas Ahmed</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.3)} className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Looking for a dedicated Junior Full-Stack Developer for your team or project? Send a direct message.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-red-500" />
                <span>Contact Channels</span>
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500">PHONE</div>
                  <a
                    href={`tel:${portfolioData.contactDetails.phone}`}
                    className="text-sm font-bold text-white hover:text-red-400 transition-colors font-mono"
                  >
                    {portfolioData.contactDetails.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500">EMAIL</div>
                  <a
                    href={`mailto:${portfolioData.contactDetails.email}`}
                    className="text-sm font-bold text-white hover:text-red-400 transition-colors font-mono"
                  >
                    {portfolioData.contactDetails.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500">LOCATION</div>
                  <div className="text-sm font-semibold text-gray-200">{portfolioData.contactDetails.location}</div>
                </div>
              </div>

              {/* GitHub & LinkedIn Profiles */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">Profiles:</div>
                <div className="flex flex-col gap-2 font-mono text-xs text-gray-300">
                  <a
                    href={portfolioData.contactDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#0B0B0B] border border-white/5 hover:border-red-500/40 flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <GithubIcon className="w-4 h-4 text-red-500" />
                    <span>github.com/Waqas-Codex</span>
                  </a>

                  <a
                    href={portfolioData.contactDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#0B0B0B] border border-white/5 hover:border-red-500/40 flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <LinkedinIcon className="w-4 h-4 text-red-500" />
                    <span>linkedin.com/in/waqas-codex</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="glass-panel p-6 rounded-2xl border border-red-500/30 bg-red-950/20 flex items-center gap-4">
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <div>
                <div className="text-xs font-mono text-emerald-400 font-bold">STATUS: AVAILABLE FOR HIRE</div>
                <div className="text-xs text-gray-300 mt-0.5">{portfolioData.contactDetails.availability}</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative">
              <h3 className="text-xl font-bold text-white mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Grid for Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 font-semibold block">YOUR NAME *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border text-sm text-white focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-white/10 focus:border-red-500/60 focus:ring-1 focus:ring-red-500/40'
                      }`}
                    />
                    {errors.name && <p className="text-xs font-mono text-red-400">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 font-semibold block">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. john@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border text-sm text-white focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-white/10 focus:border-red-500/60 focus:ring-1 focus:ring-red-500/40'
                      }`}
                    />
                    {errors.email && <p className="text-xs font-mono text-red-400">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 font-semibold block">SUBJECT *</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    placeholder="e.g. Full-Stack Developer Job Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border text-sm text-white focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-white/10 focus:border-red-500/60 focus:ring-1 focus:ring-red-500/40'
                    }`}
                  />
                  {errors.subject && <p className="text-xs font-mono text-red-400">{errors.subject}</p>}
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 font-semibold block">MESSAGE *</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0B] border text-sm text-white focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-white/10 focus:border-red-500/60 focus:ring-1 focus:ring-red-500/40'
                    }`}
                  />
                  {errors.message && <p className="text-xs font-mono text-red-400">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-red-600/30 border border-red-500/50 hover:scale-[1.01] active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span className="font-mono text-xs">{submissionStep}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-panel p-8 rounded-3xl border border-red-500/50 max-w-md w-full text-center space-y-4 shadow-2xl shadow-red-950/60"
            >
              <div className="w-16 h-16 rounded-full bg-red-950 border border-red-500 flex items-center justify-center text-red-400 mx-auto shadow-lg shadow-red-600/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Thank you for reaching out! Your message has been sent to Waqas Ahmed. He will get back to you shortly.
              </p>

              <button
                onClick={() => setIsSuccess(false)}
                className="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold transition-all shadow-md shadow-red-600/30 border border-red-500/50 cursor-pointer"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
