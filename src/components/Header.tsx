'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingIconVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-dark-bg flex items-center justify-center px-6 py-20 pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
                     {/* Left Column - Text Content */}
           <motion.div variants={itemVariants} className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold text-white font-inter leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-primary to-blue-500">
                Pankaj Kulsange
              </span>
            </motion.h1>

                         {/* Subheading */}
             <motion.h2 
               variants={itemVariants}
               className="text-xl lg:text-2xl font-medium text-gray-300 font-inter text-center lg:text-left"
             >
               QA Automation Engineer | Manual & Automation Testing Expert
             </motion.h2>

                         {/* Tagline */}
             <motion.p 
               variants={itemVariants}
               className="text-lg text-gray-400 font-inter leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
             >
               Turning ideas into bug-free, scalable, and automated experiences.
             </motion.p>

                         {/* Buttons */}
             <motion.div 
               variants={itemVariants}
               className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
             >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-purple-primary text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-primary/25 font-inter"
              >
                Hire Me
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('journey')}
                className="px-8 py-4 border-2 border-purple-primary text-purple-primary font-semibold rounded-lg hover:bg-purple-primary hover:text-white transition-all duration-300 font-inter group"
              >
                View My Journey
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

                     {/* Right Column - Profile Image */}
           <motion.div 
             variants={imageVariants}
             className="relative flex justify-center lg:justify-end"
           >
                           {/* Main Profile Image */}
              <div className="relative">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-purple-primary/20 blur-3xl scale-125"></div>
                
                                 <div className="relative">
                   <Image
                     src="/portfolio_picture.png"
                     alt="Pankaj Kulsange"
                     width={400}
                     height={600}
                     className="shadow-2xl z-5 relative"
                     priority
                   />
                 </div>
              </div>

                           
           </motion.div>
        </motion.div>

                 {/* Scroll Indicator - Hidden on mobile */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5, duration: 1 }}
           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
         >
           <motion.div
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
           >
             <motion.div
               animate={{ y: [0, 12, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-1 h-3 bg-gray-400 rounded-full mt-2"
             />
           </motion.div>
         </motion.div>
      </div>
    </section>
  );
};

export default Header;
