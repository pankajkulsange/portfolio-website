'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Journey from '@/components/Journey';

export default function Home() {
  const sections = [
    { id: 'case-studies', title: 'Case Studies', content: 'Real projects and results' },
    { id: 'tools', title: 'Tools', content: 'Technologies and tools I use' },
    { id: 'about', title: 'About', content: 'Learn more about me' },
    { id: 'skills', title: 'Skills', content: 'My technical expertise' },
    { id: 'projects', title: 'Projects', content: 'Featured work and projects' },
    { id: 'blogs', title: 'Blogs', content: 'Thoughts and insights' },
    { id: 'contact', title: 'Contact', content: 'Get in touch with me' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header/Hero Section */}
      <Header />
      
      {/* Journey Section */}
      <Journey />
      
      {/* Other Sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 py-12"
      >
        {sections.map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            variants={sectionVariants}
            className="min-h-screen flex flex-col justify-center items-center text-center mb-20"
          >
            <h1 className="text-6xl font-bold text-white mb-8 font-inter">
              {section.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-inter">
              {section.content}
            </p>
            
            {/* Add some visual elements to make sections more interesting */}
            <div className="mt-12 flex space-x-4">
              <div className="w-4 h-4 bg-purple-primary rounded-full animate-pulse" />
              <div className="w-4 h-4 bg-purple-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-4 h-4 bg-purple-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </motion.section>
        ))}
      </motion.div>
    </div>
  );
}
