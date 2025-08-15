'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
  link: string;
}

interface BlogsProps {
  blogs?: Blog[];
}

const Blogs = ({ 
  blogs = [
    {
      id: '1',
      title: 'Mastering Selenium with Cucumber: A Complete Guide',
      excerpt: 'Learn how to create robust BDD automation frameworks that scale with your testing needs. From setup to advanced patterns.',
      date: '2024-01-15',
      tags: ['Automation', 'Selenium', 'Cucumber'],
      image: '/case-studies/framework.svg',
      link: '#'
    },
    {
      id: '2',
      title: 'Visual Regression Testing with Percy and Selenium',
      excerpt: 'Ensure UI consistency across browsers and devices with automated visual testing. Complete implementation guide.',
      date: '2024-01-10',
      tags: ['Visual Testing', 'Percy', 'UI'],
      image: '/case-studies/visual-regression.svg',
      link: '#'
    },
    {
      id: '3',
      title: 'API Automation with Rest Assured',
      excerpt: 'Writing efficient API tests with Java. From basic CRUD operations to complex authentication flows.',
      date: '2024-01-05',
      tags: ['API Testing', 'Rest Assured', 'Java'],
      image: '/case-studies/api-testing.svg',
      link: '#'
    },
    {
      id: '4',
      title: 'Jenkins + Zebrunner for Live Test Reports',
      excerpt: 'CI/CD integration for QA teams. Set up automated reporting and real-time test monitoring.',
      date: '2023-12-28',
      tags: ['CI/CD', 'Jenkins', 'Reporting'],
      image: '/case-studies/performance.svg',
      link: '#'
    },
    {
      id: '5',
      title: 'Top 10 QA Automation Best Practices',
      excerpt: 'How to write maintainable test scripts that your team will love. Proven strategies from real projects.',
      date: '2023-12-20',
      tags: ['Best Practices', 'Automation', 'Quality'],
      image: '/case-studies/mobile-automation.svg',
      link: '#'
    },
    {
      id: '6',
      title: 'Cross-Browser Testing with BrowserStack',
      excerpt: 'Comprehensive guide to testing across multiple browsers and devices. Setup, execution, and reporting.',
      date: '2023-12-15',
      tags: ['Cross-Browser', 'BrowserStack', 'Testing'],
      image: '/case-studies/api-regression.svg',
      link: '#'
    }
  ]
}: BlogsProps = {}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blogs" className="min-h-screen bg-dark-bg py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-inter mb-4">
            Latest Blogs
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-2xl mx-auto mb-6">
            Insights, tips, and tutorials from my QA automation journey
          </p>
                     <div className="w-20 h-1 bg-purple-primary rounded-full mx-auto" />
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              className="group relative"
              onHoverStart={() => setHoveredCard(blog.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
                             {/* Card Container */}
               <div className="relative rounded-xl overflow-hidden border border-dark-border">
                 {/* Card Content */}
                 <div className="relative bg-dark-bg rounded-xl overflow-hidden h-full">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      variants={imageVariants}
                      className="absolute inset-0"
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <p className="text-sm text-gray-400 font-inter mb-3">
                      {formatDate(blog.date)}
                    </p>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white font-inter mb-3 group-hover:text-purple-primary transition-colors duration-300 overflow-hidden">
                      <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
                        {blog.title}
                      </span>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-300 font-inter text-sm leading-relaxed mb-4 overflow-hidden">
                      <span className="block overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                        {blog.excerpt}
                      </span>
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {blog.tags.map((tag, index) => (
                                                 <motion.span
                           key={tag}
                           variants={tagVariants}
                           className="px-3 py-1 text-xs font-semibold text-white bg-purple-primary rounded-full"
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.2 }}
                         >
                           #{tag}
                         </motion.span>
                      ))}
                    </div>

                    {/* Read More Button */}
                                         <motion.button
                       className="w-full px-6 py-3 bg-purple-primary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-primary/25 transition-all duration-300 font-inter group/btn"
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                     >
                      <span className="flex items-center justify-center">
                        Read More
                        <svg 
                          className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </motion.button>
                  </div>
                </div>

                                 {/* Hover Glow Effect */}
                 <motion.div
                   className="absolute inset-0 rounded-xl bg-purple-primary opacity-0 blur-lg"
                   animate={{
                     opacity: hoveredCard === blog.id ? 0.15 : 0,
                   }}
                   transition={{ duration: 0.3 }}
                 />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-purple-primary text-purple-primary hover:bg-purple-primary hover:text-white font-semibold rounded-full transition-all duration-300 font-inter group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center">
              View All Blogs
              <svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
