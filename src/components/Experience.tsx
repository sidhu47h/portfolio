import { motion } from 'framer-motion';
import type { WorkPosition } from '../types/portfolio';

interface ExperienceCardProps {
  position: WorkPosition;
  index: number;
}

const ExperienceCard = ({ position, index }: ExperienceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{position.company}</h3>
        <p className="text-lg text-black dark:text-white mt-1">{position.role}</p>
      </div>
      <div className="text-right mt-2 md:mt-0">
        <p className="text-gray-600 dark:text-gray-300">{position.period}</p>
        <p className="text-gray-600 dark:text-gray-300">{position.location}</p>
      </div>
    </div>
    <div className="mb-4">
      <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Responsibilities:</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
        {position.responsibilities.map((responsibility, idx) => (
          <li key={idx}>{responsibility}</li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Tech Stack:</h4>
      <div className="flex flex-wrap gap-2">
        {position.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

interface ExperienceProps {
  title: string;
  positions: WorkPosition[];
}

const Experience = ({ title, positions }: ExperienceProps) => {
  return (
    <section id="experience" className="w-full py-20 dark:bg-[#121212] transition-colors">
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
        <div className="space-y-6">
          {positions.map((position, index) => (
            <ExperienceCard
              key={`${position.company}-${position.period}`}
              position={position}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 