import { motion } from 'framer-motion';
import type { About } from '../types/portfolio';

interface AboutProps {
  title: string;
  description: string;
}

const About = ({ title, description }: AboutProps) => {
  return (
    <section id="about" className="w-full py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-6xl mx-auto text-justify"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default About; 