import { motion } from 'framer-motion';
import type { Contact } from '../types/portfolio';

interface ContactProps {
  title: string;
  formFields: Contact['formFields'];
}

const Contact = ({ title, formFields }: ContactProps) => {
  return (
    <section id="contact" className="w-full py-20 bg-gray-50 dark:bg-[#121212] transition-colors">
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
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <form className="space-y-6">
              {formFields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      required={field.required}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-black dark:focus:border-white focus:ring-black dark:focus:ring-white dark:bg-gray-700 dark:text-white"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-black dark:focus:border-white focus:ring-black dark:focus:ring-white dark:bg-gray-700 dark:text-white"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 