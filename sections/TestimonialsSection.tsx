'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TestimonialItem } from '@/types/portfolio';
import { fadeIn, staggerContainer } from '@/animations/variants';
import { MessageSquare, Quote, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';
import Image from 'next/image';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 px-6 relative bg-[#050505] overflow-hidden">
      {/* Background Decorative Ambient Spotlights */}
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>07. ENGINEERING REVIEWS</span>
          </motion.div>
          <motion.h2 variants={fadeIn('up', 0.2)} className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Peer & Executive <span className="text-gradient-red">Endorsements</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.3)} className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Feedback from engineering VPs, directors, and principal architects I&apos;ve collaborated with.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel Card */}
        <div className="relative glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-red-950/40 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-between space-y-8"
            >
              {/* Quote Text */}
              <p className="text-gray-200 text-base sm:text-xl font-normal leading-relaxed italic">
                &quot;{current.quote}&quot;
              </p>

              {/* Author Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-red-500/50 shrink-0">
                    <Image
                      src={current.avatarUrl}
                      alt={current.authorName}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                      <span>{current.authorName}</span>
                      <UserCheck className="w-4 h-4 text-red-500" />
                    </h4>
                    <p className="text-xs font-mono text-gray-400">
                      {current.authorRole} • <span className="text-red-400">{current.company}</span>
                    </p>
                    <p className="text-[11px] text-gray-500 font-mono mt-0.5">{current.relationship}</p>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="p-2.5 rounded-full bg-white/5 hover:bg-red-950 text-gray-300 hover:text-white border border-white/10 hover:border-red-500/40 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-1.5 px-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                          currentIndex === idx ? 'w-6 bg-red-500' : 'w-2 bg-white/20'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="p-2.5 rounded-full bg-white/5 hover:bg-red-950 text-gray-300 hover:text-white border border-white/10 hover:border-red-500/40 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
