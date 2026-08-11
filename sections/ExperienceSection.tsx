'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '@/types/portfolio';
import { fadeIn, staggerContainer } from '@/animations/variants';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-24 px-6 relative bg-[#050505] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn('up', 0.1)} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>03. CAREER TRAJECTORY</span>
          </motion.div>
          <motion.h2 variants={fadeIn('up', 0.2)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-red">Experience</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.3)} className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Track record of leading backend teams, architecting zero-downtime platforms, and scaling systems.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-red-950/80 sm:ml-6 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Badge */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#050505] border-2 border-red-600 flex items-center justify-center group-hover:scale-110 group-hover:border-red-400 transition-all shadow-lg shadow-red-600/30">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 group-hover:bg-white transition-colors animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 glass-panel-hover">
                {/* Top Row: Position & Date */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-red-950/80 text-red-400 border border-red-500/30 uppercase tracking-wider mb-2 inline-block">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-300 font-semibold mt-1">
                      <span className="text-red-500">{exp.company}</span>
                      <span className="text-gray-600">•</span>
                      <span className="flex items-center gap-1 text-gray-400 text-xs font-mono">
                        <MapPin className="w-3 h-3 text-red-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-red-400" />
                    <span>
                      {exp.startDate} — {exp.isCurrent ? <span className="text-emerald-400 font-bold">Present</span> : exp.endDate}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements List */}
                <div className="mb-6 space-y-2.5">
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">Key Impact & Technical Achievements:</h4>
                  {exp.achievements.map((achievement, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Stack */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-gray-500 mr-2">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#171717] text-gray-300 border border-white/5 hover:border-red-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
