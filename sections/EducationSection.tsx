'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EducationItem } from '@/types/portfolio';
import { fadeIn, staggerContainer } from '@/animations/variants';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';

interface EducationProps {
  education: EducationItem[];
}

export const EducationSection: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-24 px-6 relative bg-[#050505] overflow-hidden">
      {/* Ambient Background Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-950/15 rounded-full blur-3xl pointer-events-none" />

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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>03. ACADEMIC FOUNDATION</span>
          </motion.div>
          <motion.h2 variants={fadeIn('up', 0.2)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-red">Academic Journey</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.3)} className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Solid theoretical principles in Computer Science, software engineering fundamentals, and academic distinctions.
          </motion.p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-red-950/80 sm:ml-6 space-y-10 pl-6 sm:pl-10">
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Badge */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#050505] border-2 border-red-600 flex items-center justify-center group-hover:scale-110 group-hover:border-red-400 transition-all shadow-lg shadow-red-600/30">
                <GraduationCap className="w-3.5 h-3.5 text-red-400 group-hover:text-white transition-colors" />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 glass-panel-hover space-y-4">
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {item.degree}
                    </h3>
                    <div className="text-sm font-semibold text-red-500 mt-1">
                      {item.institution}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {item.grade && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-950 text-red-400 border border-red-500/40 shadow-sm">
                        {item.grade}
                      </span>
                    )}

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                      <Calendar className="w-3.5 h-3.5 text-red-400" />
                      <span>
                        {item.startDate} – {item.isCurrent ? <span className="text-emerald-400 font-bold">Present</span> : item.endDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Courses */}
                {item.courses && item.courses.length > 0 && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Key Focus Areas & Subjects:</div>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#171717] text-gray-300 border border-white/5 hover:border-red-500/30 transition-colors flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-red-500" />
                          <span>{course}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
