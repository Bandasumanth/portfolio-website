import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { NAV_LINKS } from '../utils/constants';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 glass-effect border-b border-white/20"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gradient"
          >
            SM
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={`#${link.href}`}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/Bandasumanth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/sumanth-manu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary"
            >
              <FaLinkedin size={20} />
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={`#${link.href}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
