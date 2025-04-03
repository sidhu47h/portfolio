import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate frontend developer with a keen eye for design and user experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who I Am</h2>
              <p className="text-gray-600 mb-4">
                I'm a dedicated developer who loves creating beautiful and functional web applications.
                With a strong foundation in modern web technologies, I strive to build intuitive
                user interfaces that provide exceptional user experiences.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge with others.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Education</h3>
                  <p className="text-gray-600">Your Degree - University Name (Year)</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Experience</h3>
                  <p className="text-gray-600">Your Current Position - Company Name (Year-Present)</p>
                  <p className="text-gray-600">Previous Position - Company Name (Year-Year)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 