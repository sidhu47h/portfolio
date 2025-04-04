import { motion } from 'framer-motion';
import type { Award } from '../types/portfolio';

interface AwardCardProps {
  award: Award;
  index: number;
}

const AwardCard = ({ award, index }: AwardCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{award.title}</h3>
        <p className="text-lg text-black dark:text-white mt-1">{award.organization}</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300">{award.description}</p>
  </motion.div>
);

interface AwardsSectionProps {
  title: string;
  list: Award[];
}

const Awards = ({ title, list }: AwardsSectionProps) => {
  return (
    <section id="awards" className="w-full py-20 dark:bg-[#121212] transition-colors">
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
          {list.map((award, index) => (
            <AwardCard
              key={`${award.title}-${award.organization}-${index}`}
              award={award}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards; 