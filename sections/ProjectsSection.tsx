'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectData } from '@/types/portfolio';
import { ProjectModal } from '@/components/modal/ProjectModal';
import { fadeIn, staggerContainer } from '@/animations/variants';
import { Code2, ExternalLink, ArrowRight, Layers, Terminal } from 'lucide-react';
import { GithubIcon } from '@/components/common/SocialIcons';
import Image from 'next/image';

interface ProjectsProps {
  projects: ProjectData[];
}

export const ProjectsSection: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative bg-[#0B0B0B] border-t border-b border-white/5">
      {/* Ambient Radial Background Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-950/15 rounded-full blur-3xl pointer-events-none" />

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
            <Code2 className="w-3.5 h-3.5" />
            <span>04. FEATURED ARCHITECTURE</span>
          </motion.div>
          <motion.h2 variants={fadeIn('up', 0.2)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flagship <span className="text-gradient-red">Systems Projects</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.3)} className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            High-throughput backend engines, fault-tolerant consensus systems, and ultra-low latency infrastructure.
          </motion.p>
        </motion.div>

        {/* 6 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 glass-panel-hover flex flex-col group relative"
            >
              {/* Thumbnail Area */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.thumbnailUrl}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#050505]/90 text-red-400 border border-red-500/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-red-500 mb-3">{project.subtitle}</p>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Architecture Snippet */}
                  <div className="p-2.5 rounded-lg bg-[#0B0B0B] border border-white/5 font-mono text-[11px] text-gray-400 flex items-start gap-2 mb-4">
                    <Layers className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{project.architectureSummary}</span>
                  </div>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#171717] text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-red-950 text-red-400 border border-red-500/30">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-red-950 text-gray-400 hover:text-white transition-colors border border-white/5 hover:border-red-500/40"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-red-950 text-gray-400 hover:text-white transition-colors border border-white/5 hover:border-red-500/40"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Case Study Trigger Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-1.5 rounded-full bg-red-600/90 hover:bg-red-600 text-white text-xs font-mono flex items-center gap-1.5 transition-all shadow-md shadow-red-600/30 border border-red-500/50 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
