'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPostItem } from '@/types/portfolio';
import { X, Calendar, Clock, BookOpen, Tag, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface BlogModalProps {
  post: BlogPostItem | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#0B0B0B] rounded-3xl border border-red-500/30 shadow-2xl shadow-red-950/40 overflow-hidden z-10 flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111111]/80 backdrop-blur-md">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-red-950 text-red-400 border border-red-500/30">
              {post.category}
            </span>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-red-950 text-gray-400 hover:text-white transition-colors border border-white/10"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            <div className="relative w-full h-60 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={post.coverImageUrl}
                alt={post.title}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-red-500" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                {post.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{post.title}</h2>

            <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 text-gray-300 text-sm italic">
              "{post.excerpt}"
            </div>

            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>{post.contentSnippet}</p>
              <p>
                In high-throughput systems, every byte allocated on the heap introduces subtle non-deterministic Garbage Collection pauses. By utilizing arena allocations, lock-free ring buffers, and explicit kernel bypass, systems engineers can guarantee sub-millisecond p99 response times even under extreme write pressure.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#171717] text-gray-300 border border-white/5 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-red-500" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
