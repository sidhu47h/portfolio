import { motion } from 'framer-motion';
import type { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ 
      y: -5,
      transition: { duration: 0.2 }
    }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
  >
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
      <div>
        <motion.h3 
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          whileHover={{ color: "#2563eb" }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-lg text-black dark:text-white mt-1">{project.description}</p>
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <motion.a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </motion.a>
        <motion.a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </motion.a>
      </div>
    </div>
    <div className="mb-4">
      <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <motion.span
            key={idx}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#e5e7eb",
              color: "#1d4ed8"
            }}
            transition={{ duration: 0.2 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

interface ProjectsProps {
  title: string;
  projects: Project[];
}

const Projects = ({ title, projects }: ProjectsProps) => {
  return (
    <section id="projects" className="w-full py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-black dark:text-white"
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 