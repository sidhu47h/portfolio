import { motion } from 'framer-motion';
import type { Degree } from '../types/portfolio';

interface EducationCardProps {
  degree: Degree;
  index: number;
}

const EducationCard = ({ degree, index }: EducationCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-bold text-blue-600">{degree.institution}</h3>
        <p className="text-lg text-black mt-1">{degree.degree}</p>
      </div>
      <div className="text-right mt-2 md:mt-0">
        <p className="text-gray-600">{degree.period}</p>
        <p className="text-gray-600">{degree.location}</p>
        {degree.gpa && <p className="text-gray-600">GPA: {degree.gpa}</p>}
      </div>
    </div>
    <div>
      <h4 className="text-lg font-semibold text-black mb-2">Relevant Courses:</h4>
      <div className="flex flex-wrap gap-2">
        {degree.relevantCourses.map((course, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {course}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

interface EducationProps {
  title: string;
  degrees: Degree[];
}

const Education = ({ title, degrees }: EducationProps) => {
  return (
    <section id="education" className="w-full py-20 bg-gray-50 transition-colors">
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
        <div className="space-y-6">
          {degrees.map((degree, index) => (
            <EducationCard 
              key={degree.institution}
              degree={degree}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 