import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PROJECTS } from '../utils/constants';
import { FaGithub, FaExternalAltLink } from 'react-icons/fa';

const ProjectCard = ({ project, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="glass-card group overflow-hidden"
  >
    {/* Project Image */}
    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
        <a href={project.links.live} className="p-3 rounded-lg bg-white/20 hover:bg-white/30 transition">
          <FaExternalAltLink size={20} className="text-white" />
        </a>
        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/20 hover:bg-white/30 transition">
          <FaGithub size={20} className="text-white" />
        </a>
      </div>
    </div>

    {/* Content */}
    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech) => (
        <span key={tech} className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary dark:bg-primary/10">
          {tech}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex gap-4">
      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
        <FaGithub /> View Code
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">Some of my recent work</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.id} project={project} delay={idx * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
