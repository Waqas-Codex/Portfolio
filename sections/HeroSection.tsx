'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroData } from '@/types/portfolio';
import { DynamicIcon } from '@/components/common/IconHelper';
import { ChevronDown, FileText, Send, Sparkles, Terminal, Activity } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/animations/variants';

interface HeroProps {
  data: HeroData;
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ data, onOpenResumeModal }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src={data.videoBgUrl.startsWith('/') ? data.videoBgUrl : `/${data.videoBgUrl}`}
          className={`absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-center transition-opacity duration-1000 ${videoLoaded ? 'opacity-40' : 'opacity-20'}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          aria-hidden="true"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />

        <div className="absolute inset-0 bg-red-950/10 mix-blend-overlay" />


        {/* Grid and Vignette */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="absolute inset-0 vignette-overlay" />
      </div>

      {/* Hero Overlay Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-24 text-center flex flex-col items-center justify-center"
      >
        {/* Status Badge */}
        <motion.div
          variants={fadeIn('down', 0.1)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-[10px] sm:text-xs font-mono mb-4 sm:mb-6 backdrop-blur-md shadow-lg shadow-red-950/40"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="tracking-wide uppercase font-semibold">{data.statusBadge}</span>
        </motion.div>

        {/* Greeting / Pre-heading */}
        <motion.div variants={fadeIn('up', 0.2)} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm md:text-base font-mono tracking-widest uppercase mb-2 sm:mb-3">
          <Terminal className="w-4 h-4 text-red-500" />
          <span>{data.greeting}</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeIn('up', 0.3)}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-3 sm:mb-4"
        >
          <span className="block">{data.name}</span>
        </motion.h1>

        {/* Role Title */}
        <motion.h2
          variants={fadeIn('up', 0.4)}
          className="text-lg sm:text-2xl md:text-3xl font-bold text-gradient-red mb-4 sm:mb-6"
        >
          {data.role}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={fadeIn('up', 0.5)}
          className="max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10 font-normal"
        >
          {data.tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <button
            onClick={onOpenResumeModal}
            className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 border border-red-500/50 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 rounded-full bg-[#111111] hover:bg-[#1a1a1a] text-gray-200 hover:text-white font-medium text-sm transition-all duration-300 flex items-center gap-2 border border-white/10 hover:border-red-500/40 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            <Send className="w-4 h-4 text-red-500" />
            <span>Contact Me</span>
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-2 ml-0 sm:ml-2">
            {data.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#111111] hover:bg-red-950/60 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-red-500/50 shadow-md hover:scale-110"
                aria-label={social.platform}
              >
                <DynamicIcon name={social.iconName} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-500 hover:text-red-400 transition-colors cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll to explore</span>

        {/* Mouse Graphic */}
        <div className="w-5 h-8 rounded-full border-2 border-gray-600 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-red-500"
          />
        </div>

        <ChevronDown className="w-4 h-4 animate-bounce text-red-500" />
      </motion.div>
    </section>
  );
};
