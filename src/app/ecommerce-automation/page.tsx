import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EcommerceAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            E-commerce QA Automation Framework
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Building a Scalable QA Automation Suite with Git, Jenkins, Docker & Selenium
          </p>
          <div className="flex justify-center space-x-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
              Selenium
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              Jenkins
            </span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
              Docker
            </span>
            <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
              TestNG
            </span>
          </div>
        </motion.div>

        {/* Back to Portfolio Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-12"
        >
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            ← Back to Portfolio
          </Link>
        </motion.div>

        {/* Case Study Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Background Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">1. Background</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
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
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">2. Tools We Chose</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-200">Git & GitHub → Store and manage test scripts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-200">Java, Selenium, TestNG, Cucumber → Write automation scripts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-200">Docker → Provide isolated, consistent test environments</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-200">Selenium Standalone Chrome (Docker image) → Browser automation inside containers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-200">Jenkins → CI/CD tool to trigger and manage test runs</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Problems Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">3. Problems We Faced Before This Project</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-red-400 mb-2">Problem 1 – Environment Inconsistency</h3>
                <p className="text-gray-200 mb-2">Tests worked on one machine but failed on another due to different Java, Maven, or browser driver versions.</p>
                <p className="text-green-400"><strong>Solution:</strong> We used Docker containers so the test environment is identical everywhere.</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-red-400 mb-2">Problem 2 – Manual Execution Took Too Long</h3>
                <p className="text-gray-200 mb-2">QA engineers manually ran test suites, blocking their machines and wasting time.</p>
                <p className="text-green-400"><strong>Solution:</strong> We integrated tests into Jenkins pipelines to run automatically on a central server.</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-red-400 mb-2">Problem 3 – No Centralized Reporting</h3>
                <p className="text-gray-200 mb-2">Logs and reports were scattered, making it hard for managers to track test results.</p>
                <p className="text-green-400"><strong>Solution:</strong> Jenkins collects all results and displays them in one dashboard.</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-red-400 mb-2">Problem 4 – Limited Scalability</h3>
                <p className="text-gray-200 mb-2">Sequential test execution took hours, slowing down releases.</p>
                <p className="text-green-400"><strong>Solution:</strong> We enabled TestNG parallel execution and Jenkins parameters to run faster.</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-red-400 mb-2">Problem 5 – Lack of Flexibility</h3>
                <p className="text-gray-200 mb-2">QA had to depend on DevOps to run tests for different branches/releases.</p>
                <p className="text-green-400"><strong>Solution:</strong> We designed Jenkins jobs with parameters (branch, tag, threads) giving QA full control.</p>
              </div>
            </div>
          </motion.section>

          {/* Process Flow Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">4. Process Flow (Layman's Terms)</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <p className="text-gray-200">QA writes automation scripts and pushes them to GitHub.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <p className="text-gray-200">Jenkins pulls the latest code and allows QA to choose branch, tag, and threads.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <p className="text-gray-200">Jenkins spins up Docker containers for Selenium and test execution.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <p className="text-gray-200">Selenium runs the tests inside Chrome browser containers.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <p className="text-gray-200">TestNG + Cucumber frameworks handle execution and reporting.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">6</div>
                <p className="text-gray-200">Jenkins collects reports and shows them on the dashboard.</p>
              </div>
            </div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">5. Benefits After Implementation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-gray-200"><strong>Consistency</strong> – Same results everywhere</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-gray-200"><strong>Time-saving</strong> – Automated execution from Jenkins</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-gray-200"><strong>Visibility</strong> – Central reports for managers</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-gray-200"><strong>Scalability</strong> – Parallel execution reduced run time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-gray-200"><strong>Flexibility</strong> – QA can test any branch/release on demand</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Analogy Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">6. Analogy</h2>
            <p className="text-gray-200 text-lg mb-6">
              Imagine a car factory quality check:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-200"><strong>GitHub</strong> = checklist warehouse</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-200"><strong>Jenkins</strong> = supervisor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-200"><strong>Docker</strong> = standard inspection stations</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-200"><strong>Selenium</strong> = robot arms testing buttons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-200"><strong>TestNG + Cucumber</strong> = quality checklist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-200"><strong>Jenkins Dashboard</strong> = final inspection report</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Summary Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Summary</h2>
            <p className="text-white text-lg leading-relaxed">
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
          className="text-center mt-16"
        >
          <Link 
            href="/"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold"
          >
            View More Case Studies
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
