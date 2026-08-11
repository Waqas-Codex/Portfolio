'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '@/types/portfolio';
import { DynamicIcon } from '@/components/common/IconHelper';
import { fadeIn, staggerContainer } from '@/animations/variants';
import { Cpu, Terminal, CheckCircle2, Sparkles } from 'lucide-react';

interface SkillsProps {
  categories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsProps> = ({ categories }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories = activeTab === 'all'
    ? categories
    : categories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-24 px-6 relative bg-[#0B0B0B] border-t border-b border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-14 text-center"
        >
          <motion.div variants={fadeIn('up', 0.1)} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02. TECHNICAL MATRIX</span>
          </motion.div>
          <motion.h2 variants={fadeIn('up', 0.2)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering <span className="text-gradient-red">Skills & Stack</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.3)} className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Categorized technical capabilities, languages, database engines, cloud runtimes, and developer tooling.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-red-600 text-white font-semibold shadow-lg shadow-red-600/30 border border-red-500/50'
                : 'glass-panel text-gray-400 hover:text-white hover:border-red-500/30'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-red-600 text-white font-semibold shadow-lg shadow-red-600/30 border border-red-500/50'
                  : 'glass-panel text-gray-400 hover:text-white hover:border-red-500/30'
              }`}
            >
              <DynamicIcon name={cat.iconName} className="w-3.5 h-3.5" />
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 glass-panel-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-950 flex items-center justify-center text-white border border-red-500/40 shadow-md">
                  <DynamicIcon name={category.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-xs text-gray-400">{category.description}</p>
                </div>
              </div>

              {/* Skill Items */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <div className="flex items-center gap-2 text-gray-200 font-semibold">
                        <DynamicIcon name={skill.iconName} className="w-4 h-4 text-red-500" />
                        <span>{skill.name}</span>
                        {skill.highlight && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] bg-red-950 text-red-400 border border-red-500/30">
                            Core
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500">{skill.experience}</span>
                        <span className="text-red-400 font-bold">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-2 rounded-full bg-[#1A1A1A] overflow-hidden border border-white/5 p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIdx * 0.05 + 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-red-800 via-red-600 to-red-500 shadow-sm shadow-red-600/50"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
