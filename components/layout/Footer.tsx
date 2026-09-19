'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { DynamicIcon } from '@/components/common/IconHelper';
import { ArrowUp, Activity } from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 pt-16 pb-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo className="justify-start" />

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Developing modern, responsive, and scalable web applications with React.js, Next.js, Node.js, PostgreSQL, MongoDB, and Docker.
            </p>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Status: Available for Full-Time Roles</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">Navigation Matrix</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-gray-400">
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-white transition-colors">01. About</a>
              <a href="#skills" onClick={(e) => scrollToSection(e, '#skills')} className="hover:text-white transition-colors">02. Skills</a>
              <a href="#education" onClick={(e) => scrollToSection(e, '#education')} className="hover:text-white transition-colors">03. Education</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-white transition-colors">04. Projects</a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">05. Services</a>
              <a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')} className="hover:text-white transition-colors">06. Reviews</a>
              <a href="#blog" onClick={(e) => scrollToSection(e, '#blog')} className="hover:text-white transition-colors">07. Blog</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition-colors">08. Contact</a>
            </div>
          </div>

          {/* Socials & Back To Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-start md:items-end">
            <h4 className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">Connect</h4>
            <div className="flex items-center gap-2">
              {portfolioData.hero.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#111111] hover:bg-red-950 text-gray-400 hover:text-white flex items-center justify-center transition-colors border border-white/10 hover:border-red-500/50"
                  aria-label={s.platform}
                >
                  <DynamicIcon name={s.iconName} className="w-4 h-4" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-full bg-[#111111] hover:bg-red-950 text-gray-300 hover:text-white text-xs font-mono flex items-center gap-2 border border-white/10 hover:border-red-500/50 transition-all cursor-pointer shadow-md"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-red-500" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} Waqas Ahmed. Built with Next.js, React, Tailwind CSS & Framer Motion.
          </div>
          <div className="text-gray-500">
            Naudero, Pakistan • +92422378822
          </div>
        </div>
      </div>
    </footer>
  );
};
