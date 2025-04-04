import { motion } from 'framer-motion';
import type { Project } from '../types/portfolio';
import { AiOutlineLink } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

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
    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
  >
    <div className="flex justify-between items-start mb-2">
      <h3 
        className="text-2xl font-bold text-blue-600"
      >
        {project.title}
      </h3>
    </div>
    
    <p className="text-sm sm:text-base text-black mt-3 mb-4 px-1 py-1 text-justify">{project.description}</p>
    
    <div className="flex justify-between items-center mb-4">
      {project.links.live && (
        <a
          href={project.links.live}
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          <div className="flex items-center space-x-1">
            <AiOutlineLink className="text-lg" />
            <span>Demo</span>
          </div>
        </a>
      )}
      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          <div className="flex items-center space-x-1">
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </div>
        </a>
      )}
    </div>
    
    <div>
      <h4 className="text-lg font-semibold text-black mb-2">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {tech}
          </span>
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
    <section id="projects" className="w-full py-20 bg-gray-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-black"
        >
          {title}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
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