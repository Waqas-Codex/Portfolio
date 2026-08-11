'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CertificationItem } from '@/types/portfolio';
import { DynamicIcon } from '@/components/common/IconHelper';
import { fadeIn, staggerContainer } from '@/animations/variants';
import { Award, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';

interface CertificationsProps {
  certifications: CertificationItem[];
}

export const CertificationsSection: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-24 px-6 relative bg-[#0B0B0B] border-t border-b border-white/5">
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
            <Award className="w-3.5 h-3.5" />
            <span>06. VERIFIED CREDENTIALS</span>
          </motion.div>
          <motion.h2 variants={fadeIn('up', 0.2)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="text-gradient-red">Certifications</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.3)} className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Professional cloud architecture, Kubernetes administration, and infrastructure as code accreditations.
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-950/80 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 shadow-lg shadow-red-950/50 group-hover:scale-105 transition-transform">
                    <DynamicIcon name={cert.badgeIcon} className="w-6 h-6" />
                  </div>

                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-red-950 text-gray-400 hover:text-white transition-colors border border-white/5 hover:border-red-500/30 flex items-center gap-1.5 text-xs font-mono"
                    title="Verify Credential"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-red-500 mb-4">{cert.issuer}</p>

                {/* Details */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-gray-400 mb-6">
                  <span>Issued: {cert.issueDate}</span>
                  {cert.expiryDate && <span>• Expires: {cert.expiryDate}</span>}
                  <span>• ID: {cert.credentialId}</span>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500 shrink-0" />
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#171717] text-gray-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
