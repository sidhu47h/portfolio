import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';
import type { PortfolioData } from '../types/portfolio';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Awards from '../components/Awards';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import About from '../components/About';

const Home = () => {
  const data: PortfolioData = portfolioData;
  const characters = data.personalInfo.tagline.split("");

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex-1 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-4 whitespace-nowrap"
          >
            <span className="text-black dark:text-white">Hi, I'm </span><span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">{data.personalInfo.name}</span>
          </motion.h1>
          <div className="relative">
            <div className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 pr-4" style={{ lineHeight: '1.5' }}>
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.0001,
                    delay: index * 0.015,
                    ease: "easeIn"
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="inline-block w-[3px] h-[1.2em] bg-gray-600 dark:bg-gray-300 ml-1"
                style={{ verticalAlign: 'middle' }}
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <a href="#projects" className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 ease-in-out">
              View My Work
            </a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-110 ease-in-out">
              Get In Touch
            </a>
          </motion.div>
        </div>
        <motion.div 
          className="hidden md:block flex-1 pl-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-96 h-96 mx-auto">
            <img
              src={data.personalInfo.profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <About title={data.about.title} description={data.about.description} />

      {/* Experience Section */}
      <Experience title={data.experience.title} positions={data.experience.positions} />

      {/* Education Section */}
      <Education title={data.education.title} degrees={data.education.degrees} />

      {/* Skills Section */}
      <Skills title={data.skills.title} categories={data.skills.categories} />

      {/* Projects Section */}
      <Projects title={data.projects.title} projects={data.projects.list} />

      {/* Awards Section */}
      <Awards title={data.awards.title} list={data.awards.list} />

      {/* Contact Section */}
      <Contact title={data.contact.title} formFields={data.contact.formFields} />
    </div>
  );
};

export default Home; 