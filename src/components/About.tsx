'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

interface AboutProps {
  name?: string;
  title?: string;
  description?: string;
  image?: string;
  stats?: Stat[];
}

const About = ({ 
  name = "Pankaj Kulsange",
  title = "QA Automation Engineer | Tester | Problem Solver",
  description = "I'm Pankaj Kulsange, a QA Automation Engineer with over 3+ years of experience delivering robust, scalable, and efficient testing solutions. I specialize in functional testing, API automation, visual regression, and performance testing.\n\nMy toolkit includes Selenium, Cucumber, TestNG, Carina, Zebrunner, and BrowserStack — combined with CI/CD integration via Jenkins for fast, reliable deployments.\n\nI'm passionate about creating automation frameworks that save time, reduce errors, and ensure the highest quality user experience.",
  image = "/photo_aboutme.png",
  stats = [
    { label: "Years of QA Experience", value: "3", suffix: "+" },
    { label: "Automation Projects", value: "15", suffix: "+" },
    { label: "Testing Time Saved", value: "60", suffix: "%" },
    { label: "Cross-browser Expertise", value: "100", suffix: "%" }
  ]
}: AboutProps = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [countedStats, setCountedStats] = useState(stats.map(() => 0));

  // Count-up animation for stats
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        setCountedStats(prev => 
          prev.map((current, index) => {
            const target = parseInt(stats[index].value);
            const increment = target / steps;
            const newValue = Math.min(current + increment, target);
            return newValue;
          })
        );
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, stats]);

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
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const shimmerVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: "100%",
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section id="about" className="min-h-screen bg-dark-bg py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Image */}
          <motion.div variants={imageVariants} className="order-2 lg:order-1">
            <div className="relative group">
                             {/* Image container */}
               <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-black/50 border border-dark-border">
                 <img
                   src={image}
                   alt={name}
                   className="w-full h-auto rounded-xl object-cover aspect-square"
                 />
               </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={textVariants} className="order-1 lg:order-2">
            {/* Section Title */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white font-inter mb-4">
                About Me
              </h2>
                             <div className="w-20 h-1 bg-purple-primary rounded-full" />
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-300 font-inter">
                {title}
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="space-y-4 text-gray-300 font-inter leading-relaxed text-lg">
                {description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                                     {/* Background with glow */}
                   <div className="relative rounded-xl p-6 bg-purple-primary overflow-hidden">
                     {/* Content */}
                     <div className="relative z-10 text-center">
                       <div className="text-3xl lg:text-4xl font-bold text-white font-inter mb-2">
                         {Math.round(countedStats[index])}{stat.suffix}
                       </div>
                       <div className="text-sm text-white/80 font-inter">
                         {stat.label}
                       </div>
                     </div>
                   </div>
                   
                   {/* Glow effect */}
                   <div className="absolute inset-0 rounded-xl bg-purple-primary blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
