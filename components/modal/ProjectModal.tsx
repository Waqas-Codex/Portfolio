'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectData } from '@/types/portfolio';
import { X, ExternalLink, Cpu, Activity, AlertTriangle, Lightbulb, CheckCircle2, ArrowRight, Layers, Database, Shield, Server } from 'lucide-react';
import { GithubIcon } from '@/components/common/SocialIcons';
import Image from 'next/image';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'challenges' | 'metrics'>('overview');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl">
        {/* Modal Backdrop Click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B0B0B] rounded-3xl border border-red-500/30 shadow-2xl shadow-red-950/40 overflow-hidden z-10 flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111111]/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-red-950 text-red-400 border border-red-500/30">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-white truncate max-w-md">{project.title}</h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-red-950 text-gray-400 hover:text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Banner Image */}
            <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src={project.bannerUrl || project.thumbnailUrl}
                alt={project.title}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{project.title}</h2>
                  <p className="text-sm text-red-400 font-mono">{project.subtitle}</p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#111111] hover:bg-red-950 text-white text-xs font-mono flex items-center gap-2 border border-white/10 hover:border-red-500/40 transition-all shadow-md"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Repository</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-mono flex items-center gap-2 border border-red-500/50 shadow-lg shadow-red-600/30 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Internal Navigation Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-3">
              {[
                { id: 'overview', label: 'Overview & Solution' },
                { id: 'architecture', label: 'Architecture Diagram' },
                { id: 'challenges', label: 'Challenges & Trade-offs' },
                { id: 'metrics', label: 'Performance & Benchmarks' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                    activeTab === tab.id
                      ? 'bg-red-950/80 text-white font-bold border border-red-500/40'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB CONTENT: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-2">Project Overview</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.fullDescription}</p>
                </div>

                {/* Problem vs Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Problem Statement</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{project.problemStatement}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <Lightbulb className="w-4 h-4" />
                      <span>Architectural Solution</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{project.solutionDetails}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-3">Key Systems Capabilities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111111] border border-white/5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-md text-xs font-mono bg-red-950/40 text-red-300 border border-red-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: Architecture */}
            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-2">Data Flow & System Topography</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.architectureSummary}</p>
                </div>

                {/* Interactive Node Layout */}
                {project.architectureDiagramNodes && (
                  <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-4">
                    <h5 className="text-xs font-mono text-red-400 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      <span>Pipeline Topology Flow</span>
                    </h5>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
                      {project.architectureDiagramNodes.map((node, nIdx) => (
                        <React.Fragment key={nIdx}>
                          <div className="flex-1 w-full p-4 rounded-xl bg-[#0B0B0B] border border-red-500/30 flex flex-col items-center text-center shadow-md hover:border-red-500 transition-colors">
                            <div className="w-8 h-8 rounded-lg bg-red-950 flex items-center justify-center text-red-400 mb-2">
                              {node.type === 'client' && <Cpu className="w-4 h-4" />}
                              {node.type === 'gateway' && <Shield className="w-4 h-4" />}
                              {node.type === 'service' && <Server className="w-4 h-4" />}
                              {node.type === 'database' && <Database className="w-4 h-4" />}
                              {node.type === 'cache' && <Layers className="w-4 h-4" />}
                              {node.type === 'queue' && <Activity className="w-4 h-4" />}
                            </div>
                            <span className="text-xs font-bold text-white">{node.title}</span>
                            <span className="text-[10px] text-gray-400 font-mono mt-1">{node.description}</span>
                          </div>

                          {project.architectureDiagramNodes && nIdx < project.architectureDiagramNodes.length - 1 && (
                            <div className="text-red-500 shrink-0 rotate-90 md:rotate-0 my-1 md:my-0">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: Challenges */}
            {activeTab === 'challenges' && (
              <div className="space-y-4">
                <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-2">Engineering Trade-offs & Solutions</h4>
                {project.technicalChallenges.map((item, cIdx) => (
                  <div key={cIdx} className="p-5 rounded-2xl bg-[#111111] border border-white/10 space-y-2">
                    <div className="text-sm font-bold text-red-400 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Challenge #{cIdx + 1}: {item.challenge}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-6">
                      <strong className="text-white">Engineering Resolution: </strong>
                      {item.resolution}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT: Metrics */}
            {activeTab === 'metrics' && (
              <div className="space-y-6">
                <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-2">Verified Benchmarks & Impact</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.performanceMetrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-5 rounded-2xl bg-[#111111] border border-red-500/30 text-center">
                      <div className="text-2xl font-extrabold text-gradient-red mb-1">{m.value}</div>
                      <div className="text-xs font-bold text-white">{m.metric}</div>
                      <div className="text-[11px] text-gray-400 mt-2 font-mono">{m.impact}</div>
                    </div>
                  ))}
                </div>

                {project.futureImprovements && project.futureImprovements.length > 0 && (
                  <div>
                    <h5 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">Future Roadmap</h5>
                    <div className="space-y-2">
                      {project.futureImprovements.map((imp, iIdx) => (
                        <div key={iIdx} className="flex items-center gap-2 text-xs text-gray-300">
                          <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                          <span>{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
