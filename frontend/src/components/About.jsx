import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">Get to know me better</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 rounded-2xl glass-effect p-1">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-8xl">
                  📚
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                I am a passionate Frontend Developer with <strong>3+ years of professional experience</strong> building scalable, responsive, and user-friendly web applications using React.js, JavaScript, HTML, CSS, Node.js, Express.js, and MySQL.
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                I specialize in developing high-performance web applications, optimizing UI performance, integrating REST APIs, developing reusable components, and collaborating with cross-functional teams.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">🎯 What I Love</h4>
                  <p className="text-gray-600 dark:text-gray-400">Creating clean, elegant UI, solving real-world problems, and continuously learning new technologies.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">💡 Current Focus</h4>
                  <p className="text-gray-600 dark:text-gray-400">Expanding expertise into AI Engineering while building scalable frontend applications.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
