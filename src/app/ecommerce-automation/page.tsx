'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function EcommerceAutomationPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white font-inter mb-6">
              E-commerce QA Automation Framework
            </h1>
            <p className="text-xl text-gray-300 font-inter mb-8">
              Building a Scalable QA Automation Suite with Git, Jenkins, Docker & Selenium
            </p>
            <div className="flex justify-center space-x-4">
              <span className="bg-purple-primary text-white px-4 py-2 rounded-full text-sm">
                Selenium
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                Jenkins
              </span>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                Docker
              </span>
              <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
                TestNG
              </span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-12 space-x-4"
          >
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-purple-primary text-white rounded-lg hover:bg-purple-600 transition-colors duration-300"
            >
              ← Back to Portfolio
            </Link>
            <a 
              href="https://github.com/pankajkulsange/qa-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </a>
          </motion.div>

          {/* Case Study Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Background Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white font-inter mb-6">1. Background</h2>
              <p className="text-gray-300 font-inter text-lg leading-relaxed">
                Our QA team needed a reliable automation suite to test a web application across different browsers
                and environments. The challenge was that tests had to be easy to run for any team member,
                configurable (choose branch, version, number of threads, etc.), scalable (able to run many tests in
                parallel), and integrated into CI/CD so that every build could be verified before release.
              </p>
            </motion.section>

            {/* Tools Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white font-inter mb-6">2. Tools We Chose</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-primary rounded-full"></div>
                    <span className="text-gray-300 font-inter">Git & GitHub → Store and manage test scripts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter">Java, Selenium, TestNG, Cucumber → Write automation scripts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter">Docker → Provide isolated, consistent test environments</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter">Selenium Standalone Chrome (Docker image) → Browser automation inside containers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter">Jenkins → CI/CD tool to trigger and manage test runs</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Problems Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white font-inter mb-6">3. Problems We Faced Before This Project</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-red-400 font-inter mb-2">Problem 1 – Environment Inconsistency</h3>
                  <p className="text-gray-300 font-inter mb-2">Tests worked on one machine but failed on another due to different Java, Maven, or browser driver versions.</p>
                  <p className="text-green-400 font-inter"><strong>Solution:</strong> We used Docker containers so the test environment is identical everywhere.</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-red-400 font-inter mb-2">Problem 2 – Manual Execution Took Too Long</h3>
                  <p className="text-gray-300 font-inter mb-2">QA engineers manually ran test suites, blocking their machines and wasting time.</p>
                  <p className="text-green-400 font-inter"><strong>Solution:</strong> We integrated tests into Jenkins pipelines to run automatically on a central server.</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-red-400 font-inter mb-2">Problem 3 – No Centralized Reporting</h3>
                  <p className="text-gray-300 font-inter mb-2">Logs and reports were scattered, making it hard for managers to track test results.</p>
                  <p className="text-green-400 font-inter"><strong>Solution:</strong> Jenkins collects all results and displays them in one dashboard.</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-red-400 font-inter mb-2">Problem 4 – Limited Scalability</h3>
                  <p className="text-gray-300 font-inter mb-2">Sequential test execution took hours, slowing down releases.</p>
                  <p className="text-green-400 font-inter"><strong>Solution:</strong> We enabled TestNG parallel execution and Jenkins parameters to run faster.</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-red-400 font-inter mb-2">Problem 5 – Lack of Flexibility</h3>
                  <p className="text-gray-300 font-inter mb-2">QA had to depend on DevOps to run tests for different branches/releases.</p>
                  <p className="text-green-400 font-inter"><strong>Solution:</strong> We designed Jenkins jobs with parameters (branch, tag, threads) giving QA full control.</p>
                </div>
              </div>
            </motion.section>

            {/* Process Flow Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white font-inter mb-6">4. Process Flow (Layman's Terms)</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <p className="text-gray-300 font-inter">QA writes automation scripts and pushes them to GitHub.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <p className="text-gray-300 font-inter">Jenkins pulls the latest code and allows QA to choose branch, tag, and threads.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <p className="text-gray-300 font-inter">Jenkins spins up Docker containers for Selenium and test execution.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-primary text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <p className="text-gray-300 font-inter">Selenium runs the tests inside Chrome browser containers.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-primary text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                  <p className="text-gray-300 font-inter">TestNG + Cucumber frameworks handle execution and reporting.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-primary text-white rounded-full flex items-center justify-center font-bold text-sm">6</div>
                  <p className="text-gray-300 font-inter">Jenkins collects reports and shows them on the dashboard.</p>
                </div>
              </div>
            </motion.section>

            {/* Benefits Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white font-inter mb-6">5. Benefits After Implementation</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter"><strong>Consistency</strong> – Same results everywhere</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter"><strong>Time-saving</strong> – Automated execution from Jenkins</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter"><strong>Visibility</strong> – Central reports for managers</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter"><strong>Scalability</strong> – Parallel execution reduced run time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter"><strong>Flexibility</strong> – QA can test any branch/release on demand</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Analogy Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-dark-border/30 backdrop-blur-sm border border-dark-border rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white font-inter mb-6">6. Analogy</h2>
              <p className="text-gray-300 font-inter text-lg mb-6">
                Imagine a car factory quality check:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-primary rounded-full"></div>
                    <span className="text-gray-300 font-inter"><strong>GitHub</strong> = checklist warehouse</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter"><strong>Jenkins</strong> = supervisor</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter"><strong>Docker</strong> = standard inspection stations</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter"><strong>Selenium</strong> = robot arms testing buttons</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter"><strong>TestNG + Cucumber</strong> = quality checklist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300 font-inter"><strong>Jenkins Dashboard</strong> = final inspection report</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Summary Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gradient-to-r from-purple-primary to-purple-600 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white font-inter mb-6">Summary</h2>
              <p className="text-white font-inter text-lg leading-relaxed">
                This project transformed a slow, manual, inconsistent testing process into a factory-style automated
                quality check system for software — faster, reliable, and transparent.
              </p>
            </motion.section>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mt-16 space-y-4"
          >
            <div className="space-x-4">
              <Link 
                href="/"
                className="inline-flex items-center px-8 py-4 bg-purple-primary text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 text-lg font-semibold font-inter"
              >
                View More Case Studies
              </Link>
              <a 
                href="https://github.com/pankajkulsange/qa-automation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 text-lg font-semibold font-inter"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Source Code
              </a>
            </div>
            <p className="text-gray-400 font-inter text-sm">
              Explore the complete QA automation framework implementation on GitHub
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
