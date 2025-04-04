import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import type { Skills } from '../types/portfolio';

interface SkillsProps {
  title: string;
  categories: Skills['categories'];
}

const Skills = ({ title, categories }: SkillsProps) => {
  const getIcon = (iconName: string) => {
    // Check if the icon is from FaIcons
    if (iconName.startsWith('Fa')) {
      return FaIcons[iconName as keyof typeof FaIcons];
    }
    // Check if the icon is from SiIcons
    if (iconName.startsWith('Si')) {
      return SiIcons[iconName as keyof typeof SiIcons];
    }
    return null;
  };

  return (
    <section id="skills" className="w-full py-20 bg-white transition-colors">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-black">{category.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow group"
                    >
                      {Icon && (
                        <Icon 
                          className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" 
                        />
                      )}
                      <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 