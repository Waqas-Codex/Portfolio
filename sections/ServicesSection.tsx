'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceItem } from '@/types/portfolio';
import { DynamicIcon } from '@/components/common/IconHelper';
import { fadeIn, staggerContainer } from '@/animations/variants';
import { Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  services: ServiceItem[];
}

export const ServicesSection: React.FC<ServicesProps> = ({ services }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 px-6 relative bg-[#050505] overflow-hidden">
      {/* Background Radial Spotlights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

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
            <Wrench className="w-3.5 h-3.5" />
            <span>05. SPECIALIZED SERVICES</span>
          </motion.div>
          <motion.h2 variants={fadeIn('up', 0.2)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering <span className="text-gradient-red">Services & Consulting</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.3)} className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Enterprise-grade backend consulting, infrastructure optimization, and technical architecture leadership.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-8 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Title */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-950 flex items-center justify-center text-white border border-red-500/40 shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <DynamicIcon name={service.iconName} className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Key Deliverables:</h4>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Pills & CTA */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#171717] text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-red-950 text-gray-300 hover:text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 border border-white/10 hover:border-red-500/40 transition-all cursor-pointer"
                >
                  <span>Inquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
