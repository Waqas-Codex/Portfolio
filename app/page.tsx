'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { EducationSection } from '@/sections/EducationSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { BlogSection } from '@/sections/BlogSection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { ResumeModal } from '@/components/modal/ResumeModal';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Floating Glass Header Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        data={portfolioData.hero}
        onOpenResumeModal={() => setIsResumeOpen(true)}
      />

      {/* About Section */}
      <AboutSection data={portfolioData.about} />

      {/* Skills Section */}
      <SkillsSection categories={portfolioData.skillCategories} />

      {/* Education & Academic Foundation Section */}
      <EducationSection education={portfolioData.education} />

      {/* Featured Projects Section */}
      <ProjectsSection projects={portfolioData.projects} />

      {/* Services Section */}
      <ServicesSection services={portfolioData.services} />

      {/* Testimonials Review Section */}
      <TestimonialsSection testimonials={portfolioData.testimonials} />

      {/* Technical Blog Section */}
      <BlogSection posts={portfolioData.blogPosts} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
