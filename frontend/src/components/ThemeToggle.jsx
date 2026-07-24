import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 transition"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaSun className="text-yellow-400" size={20} />
      ) : (
        <FaMoon className="text-blue-600" size={20} />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
