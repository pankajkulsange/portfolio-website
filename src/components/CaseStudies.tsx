'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  impact: string;
}

const CaseStudies = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'E-commerce Login Flow Automation',
      description: 'Built a robust Selenium + Cucumber test suite automating login, cart, and checkout flows for a large retail client.',
      tech: ['Selenium', 'TestNG', 'Cucumber', 'POM'],
      image: '/case-studies/ecommerce-automation.svg',
      link: '/case-studies/ecommerce-automation',
      impact: 'Reduced manual testing time by 60%'
    },
    {
      id: 2,
      title: 'Cross-Browser API Regression Testing',
      description: 'Created a Carina framework setup integrated with Zebrunner for live dashboard reporting of API and UI tests.',
      tech: ['Carina', 'Zebrunner', 'RestAssured'],
      image: '/case-studies/api-regression.svg',
      link: '/case-studies/api-regression',
      impact: 'Achieved 100% cross-browser coverage with real-time test monitoring'
    },
    {
      id: 3,
      title: 'Visual Regression for Multi-Device Testing',
      description: 'Integrated Percy visual regression into CI/CD pipeline to ensure UI consistency across 12 devices.',
      tech: ['Percy', 'Selenium Grid', 'Jenkins'],
      image: '/case-studies/visual-regression.svg',
      link: '/case-studies/visual-regression',
      impact: 'Caught 20+ UI defects before release'
    },

  ];

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

  const cardVariants = {
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

  const imageOverlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
  };

  return (
    <section id="case-studies" className="min-h-screen bg-dark-bg py-20 px-6">
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
            Case Studies
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-2xl mx-auto">
            Real-world QA automation solutions I've delivered
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
                     className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {caseStudies.map((study, index) => (
                         <motion.div
               key={study.id}
               variants={cardVariants}
               className="group relative"
               onHoverStart={() => setHoveredCard(study.id)}
               onHoverEnd={() => setHoveredCard(null)}
             >
              <motion.div
                className="bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl overflow-hidden shadow-lg shadow-black/50 hover:border-purple-primary transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(127, 59, 255, 0.15)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-purple-800/20 flex items-center justify-center">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    variants={imageOverlayVariants}
                    initial="hidden"
                    animate={hoveredCard === study.id ? "visible" : "hidden"}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end"
                  >
                    <div className="p-6">
                      <h3 className="text-white text-xl font-semibold font-inter mb-2">
                        {study.title}
                      </h3>
                      <p className="text-gray-300 text-sm font-inter">
                        {study.impact}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title (visible on mobile, hidden on hover for desktop) */}
                  <h3 className="text-xl font-semibold text-white font-inter mb-3 lg:hidden">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 font-inter leading-relaxed mb-4 text-sm">
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
                </div>
              </motion.div>
            </motion.div>
          ))}
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

export default CaseStudies;
