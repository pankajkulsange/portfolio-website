'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import About from '@/components/About';
import Journey from '@/components/Journey';
import WhatDrivesMe from '@/components/WhatDrivesMe';
import CaseStudiesAndProjects from '@/components/CaseStudiesAndProjects';
import ToolsAndSkills from '@/components/ToolsAndSkills';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';

export default function Home() {

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header/Hero Section */}
      <Header />
      
      
      
      {/* Journey Section */}
      <Journey />
      
      {/* What Drives Me Section */}
      <WhatDrivesMe />
      
      {/* Case Studies & Projects Section */}
      <CaseStudiesAndProjects />
      
      {/* Tools & Skills Section */}
      <ToolsAndSkills />

      {/* About Section */}
      <About />

      {/* Blogs Section */}
      <Blogs />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
