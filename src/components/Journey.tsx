'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const milestones: Milestone[] = [
    {
      year: '2021',
      title: 'Joined Cognizant',
      description: 'Began career in manual testing, requirement analysis, and defect reporting.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      ),
    },
    {
      year: '2022',
      title: 'Automation QA Skills',
      description: 'Gained expertise in Java, Selenium, TestNG, Cucumber, POM, Robot Framework and SQL.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
    },
    {
      year: '2023',
      title: 'Implement CI/CD tools',
      description: 'Implemented CI/CD with Jenkins.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
    },
    {
      year: '2024',
      title: 'Advanced QA Skills',
      description: 'RestAssured and Postman for API testing, BrowserStack cross-browser testing.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
    },
    {
      year: '2025',
      title: 'AI in Testing',
      description: 'Created AI-powered automation tools for UI change detection using Percy visual regression testing.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="journey" className="min-h-screen bg-dark-bg py-20 px-6">
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
            My Career Journey
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-2xl mx-auto">
            From manual testing to AI-powered automation - my evolution in QA engineering
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <motion.div
            variants={lineVariants}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-primary to-transparent h-full hidden lg:block"
          />

          {/* Timeline Items */}
          <div className="space-y-16 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:mb-20`}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
              >
                                 {/* Timeline Dot */}
                 <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-primary rounded-full border-4 border-dark-bg z-10 hidden lg:block" style={{ marginTop: '2rem' }}>
                   <motion.div
                     animate={{
                       scale: activeIndex === index ? 1.2 : 1,
                       boxShadow: activeIndex === index ? '0 0 20px rgba(127, 59, 255, 0.5)' : 'none',
                     }}
                     transition={{ duration: 0.3 }}
                     className="w-full h-full bg-purple-primary rounded-full"
                   />
                 </div>

                {/* Content Card */}
                <motion.div
                  className={`w-full lg:w-6/12 ${
                    index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-dark-border/50 backdrop-blur-sm border border-dark-border rounded-xl p-8 hover:border-purple-primary transition-all duration-300 group"
                    animate={{
                      boxShadow: activeIndex === index ? '0 0 30px rgba(127, 59, 255, 0.2)' : 'none',
                    }}
                  >
                    {/* Year Badge */}
                    <div className="inline-block bg-purple-primary/20 text-purple-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {milestone.year}
                    </div>

                    {/* Icon */}
                    <motion.div
                      className="text-purple-primary mb-6"
                      animate={{
                        scale: activeIndex === index ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {milestone.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-white font-inter mb-4">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 font-inter leading-relaxed text-lg">
                      {milestone.description}
                    </p>
                  </motion.div>
                </motion.div>

                                 {/* Mobile Timeline Line - Hidden on mobile/tablet */}
                 <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-primary to-transparent hidden" />
                 
                 {/* Mobile Timeline Dot - Hidden on mobile/tablet */}
                 <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-purple-primary rounded-full border-4 border-dark-bg z-10 hidden">
                   <motion.div
                     animate={{
                       scale: activeIndex === index ? 1.2 : 1,
                       boxShadow: activeIndex === index ? '0 0 20px rgba(127, 59, 255, 0.5)' : 'none',
                     }}
                     transition={{ duration: 0.3 }}
                     className="w-full h-full bg-purple-primary rounded-full"
                   />
                 </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
