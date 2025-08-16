'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Social {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface ContactProps {
  email?: string;
  phone?: string;
  location?: string;
  socials?: Social[];
}

const Contact = ({ 
  email = "heypankaj01@gmail.com",
  phone = "https://www.linkedin.com/in/pankaj-kulsange/",
  location = "Pune, India",
  socials = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/pankaj-kulsange/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      platform: "GitHub",
      url: "https://github.com/pankajkulsange",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ]
}: ContactProps = {}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual EmailJS or FormSubmit integration)
    try {
      // Example with FormSubmit (no backend needed)
      const response = await fetch('https://formsubmit.co/your-email@domain.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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

  const formVariants = {
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

  const contactVariants = {
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

  return (
    <section id="contact" className="min-h-screen bg-dark-bg py-20 px-6">
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
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-2xl mx-auto mb-6">
            Have a project, idea, or opportunity? I'd love to hear from you!
          </p>
                     <div className="w-20 h-1 bg-purple-primary rounded-full mx-auto" />
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={contactVariants} className="order-2 lg:order-1">
            {/* Intro */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-white font-inter mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed text-lg">
                I'm always open to discussing new opportunities, interesting projects, 
                and innovative ideas. Whether you have a question or just want to say hi, 
                feel free to reach out!
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                                 <div className="w-12 h-12 bg-purple-primary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold font-inter">Email</p>
                  <a href={`mailto:${email}`} className="text-gray-300 hover:text-purple-primary transition-colors duration-300 font-inter">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                                 <div className="w-12 h-12 bg-purple-primary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold font-inter">LinkedIn</p>
                  <a href={phone} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-primary transition-colors duration-300 font-inter">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                                 <div className="w-12 h-12 bg-purple-primary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold font-inter">Location</p>
                  <p className="text-gray-300 font-inter">{location}</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-white font-inter mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                                         className="w-12 h-12 bg-dark-border hover:bg-purple-primary rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 group"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                                             boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={formVariants} className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-white font-semibold mb-2 font-inter">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-border border border-dark-border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-primary transition-all duration-300 font-inter"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-white font-semibold mb-2 font-inter">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-border border border-dark-border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-primary transition-all duration-300 font-inter"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-white font-semibold mb-2 font-inter">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-border border border-dark-border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-primary transition-all duration-300 font-inter"
                  placeholder="What's this about?"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-white font-semibold mb-2 font-inter">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-border border border-dark-border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-primary transition-all duration-300 font-inter resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                                     className="w-full px-8 py-4 bg-purple-primary text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-primary/25 transition-all duration-300 font-inter disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>

        {/* Success Toast */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
                         className="fixed bottom-8 right-8 bg-purple-primary text-white px-6 py-4 rounded-xl shadow-lg font-inter z-50"
          >
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Message sent successfully!</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
