'use client';

import { motion } from 'framer-motion';

const WhatDrivesMe = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="what-drives-me" className="min-h-screen bg-dark-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-white font-inter mb-6"
          >
            What Drives Me
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-300 font-inter max-w-4xl mx-auto leading-relaxed"
          >
            I'm passionate about creating robust, scalable testing solutions that help businesses deliver high-quality software faster. My expertise spans from traditional manual testing to cutting-edge AI-powered automation, ensuring comprehensive coverage and reliable results for every project.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Problem Solving */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-800 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="relative bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8 hover:border-purple-500 transition-all duration-300 shadow-lg shadow-black/40">
              <div className="text-purple-400 mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white font-inter mb-4">
                Problem Solving
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                I thrive on identifying and solving complex testing challenges. Every bug is an opportunity to improve the system, and every failure is a step toward better quality.
              </p>
            </div>
          </motion.div>

          {/* Innovation */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-800 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="relative bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8 hover:border-purple-500 transition-all duration-300 shadow-lg shadow-black/40">
              <div className="text-purple-400 mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white font-inter mb-4">
                Innovation
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                Embracing cutting-edge technologies like AI-powered testing and visual regression tools to push the boundaries of what's possible in QA automation.
              </p>
            </div>
          </motion.div>

          {/* Quality Excellence */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-800 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="relative bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8 hover:border-purple-500 transition-all duration-300 shadow-lg shadow-black/40">
              <div className="text-purple-400 mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white font-inter mb-4">
                Quality Excellence
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                Delivering software that not only works but exceeds expectations. Every test case, every automation script, every report contributes to building trust and reliability.
              </p>
            </div>
          </motion.div>

          {/* Continuous Learning */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-800 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="relative bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8 hover:border-purple-500 transition-all duration-300 shadow-lg shadow-black/40">
              <div className="text-purple-400 mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white font-inter mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                Staying ahead of the curve by constantly exploring new tools, methodologies, and best practices in the ever-evolving world of software testing.
              </p>
            </div>
          </motion.div>

          {/* Team Collaboration */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-800 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="relative bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8 hover:border-purple-500 transition-all duration-300 shadow-lg shadow-black/40">
              <div className="text-purple-400 mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white font-inter mb-4">
                Team Collaboration
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                Working seamlessly with developers, designers, and stakeholders to ensure quality is built into every stage of the development process.
              </p>
            </div>
          </motion.div>

          {/* Impact-Driven */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-800 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="relative bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8 hover:border-purple-500 transition-all duration-300 shadow-lg shadow-black/40">
              <div className="text-purple-400 mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white font-inter mb-4">
                Impact-Driven
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                Every automation script I write, every test I design, every bug I find contributes to delivering better software that makes a real difference for users.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-800 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-inter"
          >
            Hire Me
          </motion.button>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-inter group"
          >
            View My Work
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatDrivesMe;
