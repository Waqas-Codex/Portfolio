'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BlogPostItem } from '@/types/portfolio';
import { BlogModal } from '@/components/modal/BlogModal';
import { fadeIn, staggerContainer } from '@/animations/variants';
import { BookOpen, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';

interface BlogProps {
  posts: BlogPostItem[];
}

export const BlogSection: React.FC<BlogProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPostItem | null>(null);

  return (
    <section id="blog" className="py-24 px-6 relative bg-[#0B0B0B] border-t border-b border-white/5">
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
            <BookOpen className="w-3.5 h-3.5" />
            <span>08. TECHNICAL WRITING</span>
          </motion.div>
          <motion.h2 variants={fadeIn('up', 0.2)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering <span className="text-gradient-red">Blog & RFCs</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.3)} className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Deep-dive technical essays on distributed consensus, database tuning, and Linux kernel networking.
          </motion.p>
        </motion.div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 glass-panel-hover flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div>
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#050505]/90 text-red-400 border border-red-500/30 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-red-500" />
                      {post.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-red-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs font-mono text-gray-400">
                  <Tag className="w-3 h-3 text-red-500" />
                  <span>{post.tags[0]}</span>
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-red-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
};
