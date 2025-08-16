'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Tool {
  name: string;
  category: 'automation' | 'testing' | 'development' | 'ci-cd';
  icon: string;
  proficiency: number; // 1-5
  description: string;
}

interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'methodology';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description: string;
}

const ToolsAndSkills = () => {
  const [activeTab, setActiveTab] = useState<'tools' | 'skills'>('tools');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const tools: Tool[] = [
    {
      name: 'Selenium',
      category: 'automation',
      icon: '/tools logo/selenium_logo.png',
      proficiency: 5,
      description: 'Web automation framework for cross-browser testing and UI automation'
    },
    {
      name: 'Java',
      category: 'development',
      icon: '/tools logo/java_logo.png',
      proficiency: 4,
      description: 'Primary programming language for test automation frameworks and API testing'
    },
         {
       name: 'TestNG',
       category: 'testing',
       icon: '/tools logo/TestNG_Icon.png',
       proficiency: 5,
       description: 'Advanced testing framework for Java applications and test automation'
     },
     {
       name: 'Cucumber',
       category: 'testing',
       icon: '/tools logo/Cucumber_icon.png',
       proficiency: 4,
       description: 'BDD framework for behavior-driven development and test automation'
     },
    {
      name: 'RestAssured',
      category: 'testing',
      icon: '/tools logo/restassured_logo.png',
      proficiency: 4,
      description: 'Java library for automated REST API testing and validation'
    },
    {
      name: 'Postman',
      category: 'testing',
      icon: '/tools logo/postman_logo.png',
      proficiency: 4,
      description: 'API testing and development platform for automated API testing workflows'
    },
    {
      name: 'Jenkins',
      category: 'ci-cd',
      icon: '/tools logo/jenkins-logo.png',
      proficiency: 3,
      description: 'Continuous integration and deployment tool for test automation pipelines'
    },
    {
      name: 'SQL',
      category: 'development',
      icon: '/tools logo/sql_logo.png',
      proficiency: 4,
      description: 'Database querying and management'
    },
    {
      name: 'Percy',
      category: 'testing',
      icon: '/tools logo/Percy_logo.png',
      proficiency: 3,
      description: 'Visual regression testing platform for automated UI testing'
    }
  ];

  const skills: Skill[] = [
    {
      name: 'Test Automation',
      category: 'technical',
      level: 'expert',
      description: 'Comprehensive knowledge of automated testing frameworks, tools, and QA automation best practices'
    },
    {
      name: 'API Testing',
      category: 'technical',
      level: 'advanced',
      description: 'Proficient in REST API testing, validation, and automated API testing workflows'
    },
    {
      name: 'Performance Testing',
      category: 'technical',
      level: 'intermediate',
      description: 'Experience with load testing and performance optimization'
    },
    {
      name: 'Mobile Testing',
      category: 'technical',
      level: 'intermediate',
      description: 'Cross-platform mobile application testing'
    },
    {
      name: 'Agile Methodology',
      category: 'methodology',
      level: 'advanced',
      description: 'Experience with Scrum, Kanban, and agile development practices'
    },
    {
      name: 'Test Planning',
      category: 'methodology',
      level: 'advanced',
      description: 'Strategic test planning and risk assessment'
    },
    {
      name: 'Problem Solving',
      category: 'soft',
      level: 'expert',
      description: 'Analytical thinking and creative problem-solving approaches'
    },
    {
      name: 'Communication',
      category: 'soft',
      level: 'advanced',
      description: 'Effective communication with stakeholders and team members'
    },
    {
      name: 'Team Collaboration',
      category: 'soft',
      level: 'advanced',
      description: 'Working effectively in cross-functional teams'
    }
  ];

  const getProficiencyColor = (level: number) => {
    if (level >= 4) return 'text-green-400';
    if (level >= 3) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSkillLevelColor = (level: Skill['level']) => {
    switch (level) {
      case 'expert': return 'text-green-400';
      case 'advanced': return 'text-blue-400';
      case 'intermediate': return 'text-yellow-400';
      case 'beginner': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="tools-skills" className="min-h-screen bg-dark-bg py-20 px-6">
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
            QA Automation Tools & Skills
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-2xl mx-auto">
            Comprehensive QA automation tools, testing frameworks, and expertise I bring to every automation project
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-dark-border/30 rounded-lg p-1 backdrop-blur-sm">
            {[
              { key: 'tools', label: 'Tools & Technologies' },
              { key: 'skills', label: 'Skills & Expertise' }
            ].map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as 'tools' | 'skills')}
                className={`px-8 py-3 rounded-md font-semibold font-inter transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-purple-primary text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-dark-border/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'tools' ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  className="group relative"
                  onHoverStart={() => setHoveredItem(tool.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <motion.div
                    className="bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-xl p-6 hover:border-purple-primary transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 10px 30px rgba(127, 59, 255, 0.15)'
                    }}
                  >
                    {/* Tool Icon */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-primary/20 rounded-lg flex items-center justify-center mr-4">
                        <img 
                          src={tool.icon} 
                          alt={tool.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white font-inter">
                          {tool.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-4 h-4 ${
                                star <= tool.proficiency ? getProficiencyColor(tool.proficiency) : 'text-gray-600'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm font-inter leading-relaxed">
                      {tool.description}
                    </p>

                    {/* Category Badge */}
                    <div className="mt-4">
                      <span className="px-3 py-1 text-xs font-medium text-purple-primary bg-purple-primary/10 border border-purple-primary/20 rounded-full">
                        {tool.category.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group relative"
                  onHoverStart={() => setHoveredItem(skill.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <motion.div
                    className="bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-xl p-6 hover:border-purple-primary transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 10px 30px rgba(127, 59, 255, 0.15)'
                    }}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white font-inter">
                        {skill.name}
                      </h3>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getSkillLevelColor(skill.level)} bg-opacity-20 border border-current`}>
                        {skill.level.toUpperCase()}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm font-inter leading-relaxed mb-4">
                      {skill.description}
                    </p>

                    {/* Category Badge */}
                    <div className="mt-4">
                      <span className="px-3 py-1 text-xs font-medium text-purple-primary bg-purple-primary/10 border border-purple-primary/20 rounded-full">
                        {skill.category.toUpperCase()}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
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
            Ready to collaborate on your next project?
          </p>
          <motion.button
            className="bg-transparent border-2 border-purple-primary text-purple-primary hover:bg-purple-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 font-inter"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 20px rgba(127, 59, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsAndSkills;
