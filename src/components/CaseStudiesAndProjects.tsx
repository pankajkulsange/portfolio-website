'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import Link from 'next/link';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  impact: string;
  type: 'case-study' | 'project';
}

const CaseStudiesAndProjects = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'case-studies' | 'projects'>('all');

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'E-commerce QA Automation Framework',
      description: 'Built a robust Selenium + Cucumber test automation framework automating login, cart, and checkout flows for a large retail client. Implemented Page Object Model (POM) design pattern for maintainable test automation.',
      tech: ['Selenium', 'TestNG', 'Cucumber', 'POM'],
      image: '/case-studies/ecommerce-automation.svg',
      link: '/ecommerce-automation',
      impact: 'Reduced manual testing time by 60%',
      type: 'case-study'
    },
    {
      id: 2,
      title: 'Cross-Browser API Testing & Automation Framework',
      description: 'Created a comprehensive Carina automation framework integrated with Zebrunner for live dashboard reporting of API and UI tests. Implemented cross-browser testing automation for comprehensive test coverage.',
      tech: ['Carina', 'Zebrunner', 'RestAssured'],
      image: '/case-studies/api-regression.svg',
      link: '/case-studies/api-regression',
      impact: 'Achieved 100% cross-browser coverage with real-time test monitoring',
      type: 'case-study'
    },
    {
      id: 3,
      title: 'Visual Regression Testing Automation',
      description: 'Integrated Percy visual regression testing into CI/CD pipeline to ensure UI consistency across 12 devices. Automated visual testing workflow for comprehensive UI quality assurance.',
      tech: ['Percy', 'Selenium Grid', 'Jenkins'],
      image: '/case-studies/visual-regression.svg',
      link: '/case-studies/visual-regression',
      impact: 'Caught 20+ UI defects before release',
      type: 'case-study'
    },
    {
      id: 4,
      title: 'Test Automation Framework Development',
      description: 'Developed a comprehensive test automation framework using Java, Selenium, and TestNG for web applications. Built scalable automation solutions for efficient QA testing workflows.',
      tech: ['Java', 'Selenium', 'TestNG', 'Maven'],
      image: '/case-studies/framework.svg',
      link: '/projects/test-framework',
      impact: 'Improved test execution speed by 40%',
      type: 'project'
    },
    {
      id: 5,
      title: 'API Testing Automation Suite',
      description: 'Created an extensive API testing automation suite using RestAssured and Postman for microservices validation. Implemented automated API testing workflows for comprehensive backend testing.',
      tech: ['RestAssured', 'Postman', 'Java', 'JSON'],
      image: '/case-studies/api-testing.svg',
      link: '/projects/api-suite',
      impact: 'Reduced API testing time by 70%',
      type: 'project'
    },
    {
      id: 6,
      title: 'Performance Testing Automation Dashboard',
      description: 'Built a custom performance testing automation dashboard using JMeter and Grafana for real-time monitoring. Implemented automated performance testing workflows for comprehensive application performance analysis.',
      tech: ['JMeter', 'Grafana', 'Docker', 'InfluxDB'],
      image: '/case-studies/performance.svg',
      link: '/projects/performance-dashboard',
      impact: 'Identified 15+ performance bottlenecks',
      type: 'project'
    }
  ];

  // Use useMemo to prevent unnecessary recalculations and ensure proper filtering
  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return caseStudies;
    if (activeFilter === 'case-studies') return caseStudies.filter(item => item.type === 'case-study');
    if (activeFilter === 'projects') return caseStudies.filter(item => item.type === 'project');
    return caseStudies;
  }, [activeFilter, caseStudies]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  const imageOverlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
  };

  return (
    <section id="case-studies-projects" className="min-h-screen bg-dark-bg py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-inter mb-4">
            QA Automation Case Studies & Projects
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-2xl mx-auto mb-8">
            Real-world QA automation solutions, test automation frameworks, and innovative projects I've delivered as an Automation Engineer
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            {[
              { key: 'all' as const, label: 'All Work' },
              { key: 'case-studies' as const, label: 'Case Studies' },
              { key: 'projects' as const, label: 'Projects' }
            ].map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-semibold font-inter transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-purple-primary text-white shadow-lg shadow-purple-primary/30'
                    : 'bg-dark-border/50 text-gray-300 hover:bg-dark-border hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid with AnimatePresence for smooth transitions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((study, index) => (
              <motion.div
                key={`${study.id}-${activeFilter}`} // Unique key to force re-render on filter change
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative h-full"
                onHoverStart={() => setHoveredCard(study.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  className="bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl overflow-hidden shadow-lg shadow-black/50 hover:border-purple-primary transition-all duration-300 h-full flex flex-col"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(127, 59, 255, 0.15)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      study.type === 'case-study' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {study.type === 'case-study' ? 'Case Study' : 'Project'}
                    </span>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-purple-800/20 flex items-center justify-center">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    
                    {/* Hover Overlay - Only shows impact statement, not title */}
                    <motion.div
                      variants={imageOverlayVariants}
                      initial="hidden"
                      animate={hoveredCard === study.id ? "visible" : "hidden"}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end"
                    >
                      <div className="p-6">
                        <p className="text-gray-300 text-sm font-inter">
                          {study.impact}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title - Always visible with hover effects */}
                    <motion.h3 
                      className="text-xl font-semibold text-white font-inter mb-3 group-hover:text-purple-300 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {study.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-gray-300 font-inter leading-relaxed mb-4 text-sm flex-grow">
                      {study.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          className="px-3 py-1 text-xs font-medium text-purple-primary bg-purple-primary/10 border border-purple-primary/20 rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Impact Statement */}
                    <div className="mb-6 p-3 bg-purple-primary/5 border border-purple-primary/20 rounded-lg">
                      <p className="text-purple-primary text-sm font-medium font-inter">
                        💡 {study.impact}
                      </p>
                    </div>

                    {/* View Details Button */}
                    <Link href={study.link} className="mt-auto">
                      <motion.button
                        className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 relative overflow-hidden group"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: '0 0 20px rgba(127, 59, 255, 0.4)'
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 font-inter">View Details</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 font-inter mb-6">
            Want to see more of my work?
          </p>
          <motion.button
            className="bg-transparent border-2 border-purple-primary text-purple-primary hover:bg-purple-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 font-inter"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 20px rgba(127, 59, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesAndProjects;
