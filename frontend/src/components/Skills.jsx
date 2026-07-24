import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SKILLS } from '../utils/constants';

const SkillBar = ({ name, level, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <span className="font-semibold text-gray-700 dark:text-gray-300">{name}</span>
      <span className="text-primary font-bold">{level}%</span>
    </div>
    <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ delay: delay + 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
      ></motion.div>
    </div>
  </motion.div>
);

const Skills = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">Technologies I work with</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Frontend</h3>
              {SKILLS.frontend.map((skill, idx) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={idx * 0.05} />
              ))}
            </div>

            {/* Backend */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">Backend</h3>
              {SKILLS.backend.map((skill, idx) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={idx * 0.05} />
              ))}
            </div>

            {/* Database & Tools */}
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 text-pink-600 dark:text-pink-400">Database & Tools</h3>
              {[...SKILLS.database, ...SKILLS.tools.slice(0, 3)].map((skill, idx) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={idx * 0.05} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
