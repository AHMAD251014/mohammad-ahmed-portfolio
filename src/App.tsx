import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { GitHubSection } from './components/GitHubSection';
import { QuickAnswersSection } from './components/QuickAnswersSection';
import { BlogSection } from './components/BlogSection';
import { BlogReaderModal } from './components/BlogReaderModal';
import { ContactSection } from './components/ContactSection';
import { ContentGuideModal } from './components/ContentGuideModal';
import { CommandPalette } from './components/CommandPalette';
import { Footer } from './components/Footer';

// Local Static Data Imports
import profileData from './data/profile.json';
import projectsData from './data/projects.json';
import skillsData from './data/skills.json';
import certificationsData from './data/certifications.json';
import experienceData from './data/experience.json';
import faqData from './data/faq.json';
import blogData from './data/blog.json';

import { Profile, Project, SkillCategory, Certification, Experience, FAQItem, BlogPost } from './types';

export default function App() {
  const profile = profileData as Profile;
  const projects = projectsData as Project[];
  const skills = skillsData as SkillCategory[];
  const certifications = certificationsData as Certification[];
  const experiences = experienceData as Experience[];
  const faqs = faqData as FAQItem[];
  const blogPosts = blogData as BlogPost[];

  // Modal & Palette States
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [contentGuideOpen, setContentGuideOpen] = useState<boolean>(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Header */}
      <Header
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenContentGuide={() => setContentGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          profile={profile}
          onOpenContentGuide={() => setContentGuideOpen(true)}
        />

        {/* About Section */}
        <AboutSection
          profile={profile}
          experiences={experiences}
        />

        {/* Projects Section */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Skills Section */}
        <SkillsSection
          skillCategories={skills}
        />

        {/* Certifications Section */}
        <CertificationsSection
          certifications={certifications}
        />

        {/* GitHub Section */}
        <GitHubSection />

        {/* Quick Answers / FAQ Section */}
        <QuickAnswersSection
          faqItems={faqs}
        />

        {/* Blog / Writeups Section */}
        <BlogSection
          posts={blogPosts}
          onSelectPost={(post) => setSelectedBlogPost(post)}
        />

        {/* Contact Form Section */}
        <ContactSection
          profile={profile}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenContentGuide={() => setContentGuideOpen(true)}
      />

      {/* Modals & Command Search Palette */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <BlogReaderModal
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
      />

      <ContentGuideModal
        isOpen={contentGuideOpen}
        onClose={() => setContentGuideOpen(false)}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        projects={projects}
        skills={skills}
        faqs={faqs}
        onSelectProject={(project) => setSelectedProject(project)}
      />

    </div>
  );
}
