'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Copy, Check } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contactDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B0B0B] rounded-3xl border border-red-500/40 shadow-2xl shadow-red-950/50 overflow-hidden z-10 flex flex-col my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111111]/90 backdrop-blur-md">
            <div className="flex items-center gap-2 text-white font-mono text-sm font-bold">
              <FileText className="w-4 h-4 text-red-500" />
              <span>WAQAS_AHMED_RESUME.pdf</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-red-950 text-xs font-mono text-gray-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Email' : 'Copy Email'}</span>
              </button>

              <a
                href="#download-resume"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Resume download initiated (Waqas_Ahmed_Resume.pdf export).');
                }}
                className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-xs font-mono text-white flex items-center gap-1.5 border border-red-500/50 shadow-md shadow-red-600/30 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/5 hover:bg-red-950 text-gray-400 hover:text-white transition-colors border border-white/10 ml-2"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Styled Resume Preview Body */}
          <div className="flex-1 overflow-y-auto p-8 sm:p-12 space-y-8 bg-[#070707] font-sans text-gray-300">
            {/* Header section */}
            <div className="border-b border-red-500/30 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">{portfolioData.about.name}</h1>
                <p className="text-base font-bold text-red-500 font-mono mt-1">{portfolioData.about.role}</p>
                <p className="text-xs font-mono text-gray-400 mt-1">{portfolioData.contactDetails.phone} | {portfolioData.contactDetails.email}</p>
              </div>

              <div className="text-xs font-mono text-gray-400 space-y-1 text-left sm:text-right">
                <div>github.com/Waqas-Codex</div>
                <div>linkedin.com/in/waqas-codex</div>
                <div>{portfolioData.contactDetails.location}</div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold mb-2">Professional Summary</h2>
              <p className="text-sm leading-relaxed text-gray-300">{portfolioData.about.bio[0]}</p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold mb-3">Technical Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-gray-300">
                <div className="p-3 rounded bg-[#111111] border border-white/5">
                  <strong className="text-white">Languages:</strong> JavaScript (ES6+), TypeScript
                </div>
                <div className="p-3 rounded bg-[#111111] border border-white/5">
                  <strong className="text-white">Frontend:</strong> React.js, Next.js, Tailwind CSS
                </div>
                <div className="p-3 rounded bg-[#111111] border border-white/5">
                  <strong className="text-white">Backend:</strong> Node.js, Express.js
                </div>
                <div className="p-3 rounded bg-[#111111] border border-white/5">
                  <strong className="text-white">Databases:</strong> PostgreSQL, MongoDB, MySQL, Redis
                </div>
                <div className="p-3 rounded bg-[#111111] border border-white/5">
                  <strong className="text-white">Developer Tools:</strong> Git, GitHub, Docker, Postman, Linux, VS Code
                </div>
                <div className="p-3 rounded bg-[#111111] border border-white/5">
                  <strong className="text-white">Cloud:</strong> AWS (Basic)
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-6">
              <h2 className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">Featured Projects</h2>
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} className="space-y-2 border-l border-red-500/30 pl-4 py-1">
                  <div className="flex flex-wrap items-center justify-between text-sm font-bold text-white">
                    <span>{proj.title}</span>
                    <span className="text-xs font-mono text-red-400">{proj.techStack.join(' • ')}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-gray-400">
                    {proj.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold mb-3">Education</h2>
              <div className="space-y-3 text-xs text-gray-300 font-mono">
                {portfolioData.education.map((edu) => (
                  <div key={edu.id} className="p-3 rounded bg-[#111111] border border-white/5 flex justify-between items-center">
                    <div>
                      <div className="text-sm font-bold text-white">{edu.degree} {edu.grade ? `(${edu.grade})` : ''}</div>
                      <div className="text-gray-400">{edu.institution}</div>
                    </div>
                    <div className="text-red-400 font-semibold">{edu.startDate} – {edu.isCurrent ? 'Present' : edu.endDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
