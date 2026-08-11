'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AboutData } from '@/types/portfolio';
import { DynamicIcon } from '@/components/common/IconHelper';
import { fadeIn, staggerContainer } from '@/animations/variants';
import { ShieldCheck, MapPin, Activity, Terminal } from 'lucide-react';
import Image from 'next/image';

interface AboutProps {
  data: AboutData;
}

export const AboutSection: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-24 px-6 relative bg-[#050505] overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

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
            <Terminal className="w-3.5 h-3.5" />
            <span>01. ENGINEERING PROFILE</span>
          </motion.div>
          <motion.h2 variants={fadeIn('up', 0.2)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-red">The Engineer</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.3)} className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Architecting robust distributed backends, ultra-fast data pipelines, and mission-critical cloud infrastructure.
          </motion.p>
        </motion.div>

        {/* Top Grid: Bio + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Animated Outer Tech Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-600 via-red-900 to-red-600 opacity-60 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />
              
              {/* Photo Frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden glass-panel border border-red-500/30 shadow-2xl">
                <Image
                  src={data.avatarUrl}
                  alt={data.name}
                  fill
                  unoptimized
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                
                {/* Tech Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                
                {/* Location & Status Badge at bottom */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-[#0B0B0B]/90 backdrop-blur-md border border-white/10 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-gray-300 text-xs font-mono">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    <span>{data.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>{data.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                <span>Systems Architecture & Reliability</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                {data.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {data.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn('up', idx * 0.1)}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover group"
            >
              <div className="flex items-baseline gap-1 text-3xl sm:text-4xl font-extrabold text-white group-hover:text-red-400 transition-colors">
                <span>{stat.value}</span>
                {stat.suffix && <span className="text-xl font-semibold text-red-500">{stat.suffix}</span>}
              </div>
              <div className="text-sm font-bold text-gray-200 mt-2">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-1 leading-normal">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Focus Areas */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">Core Engineering Specializations</h3>
            <p className="text-gray-400 text-sm mt-1">Deep domain expertise built over a decade of production scale.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {data.focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn('up', idx * 0.1)}
                className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 shadow-lg shadow-red-950/50">
                  <DynamicIcon name={area.iconName} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{area.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
