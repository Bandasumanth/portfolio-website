import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { NAV_LINKS } from '../utils/constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-2">Sumanth Manu</h3>
            <p className="text-gray-400">Frontend Developer | React.js Developer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={`#${link.href}`} className="text-gray-400 hover:text-primary transition">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Bandasumanth" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-primary/20 transition">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/sumanth-manu" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-primary/20 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:your-email@gmail.com" className="p-2 rounded-lg bg-white/10 hover:bg-primary/20 transition">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex md:flex-row flex-col justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © 2024 Sumanth Manu. All rights reserved. | Designed & Developed with ❤️
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 rounded-lg bg-primary/20 hover:bg-primary/30 transition"
          >
            <FaArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
