import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="z-10">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-semibold text-primary mb-4">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Sumanth Manu</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-400 mb-4">
              Frontend Developer | React.js Developer
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Building fast, responsive & modern web applications with React.js, JavaScript, and modern web technologies. 3+ years of professional experience in crafting scalable solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <a href="https://github.com/Bandasumanth" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass-effect hover:bg-blue-500/20 transition">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/sumanth-manu" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass-effect hover:bg-blue-500/20 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:your-email@gmail.com" className="p-3 rounded-lg glass-effect hover:bg-blue-500/20 transition">
                <FaEnvelope size={24} />
              </a>
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div variants={itemVariants} className="relative flex justify-center items-center">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative w-80 h-80 rounded-full glass-effect p-1 flex items-center justify-center"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-50 blur-lg"></div>
              <div className="absolute inset-0 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                  👨‍💻
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <FaArrowDown className="text-primary" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
