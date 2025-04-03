import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';
import type { PortfolioData } from '../types/portfolio';
import Experience from './Experience';
import Education from './Education';
import Awards from './Awards';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import About from './About';
import { useState, useEffect } from 'react';

const Home = () => {
  const data: PortfolioData = portfolioData;
  const [displayedText, setDisplayedText] = useState("");
  const fullText = data.personalInfo.tagline;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="mt-16 md:mt-0 min-h-[70vh] pt-10 pb-14 md:py-20 lg:py-24 flex flex-col md:flex-row items-start md:items-center justify-between px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="w-full md:flex-1 md:max-w-2xl space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5"
          >
            <span className="text-black dark:text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text break-words">{data.personalInfo.name}</span>
          </motion.h1>
          <div className="relative">
            <div className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 pr-4" style={{ lineHeight: '1.5' }}>
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-black dark:text-white ml-[1px] text-2xl"
              >
                |
              </motion.span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-3"
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
          className="hidden md:block md:flex-1 md:pl-8 lg:pl-12 mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto">
            <img
              src={data.personalInfo.profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section with margin top for mobile */}
      <div className="mt-12 md:mt-4">
        <About title={data.about.title} description={data.about.description} />
      </div>

      {/* Experience Section */}
      <div className="mt-12 md:mt-4">
        <Experience title={data.experience.title} positions={data.experience.positions} />
      </div>

      {/* Education Section */}
      <div className="mt-12 md:mt-4">
        <Education title={data.education.title} degrees={data.education.degrees} />
      </div>

      {/* Skills Section */}
      <div className="mt-12 md:mt-4">
        <Skills title={data.skills.title} categories={data.skills.categories} />
      </div>

      {/* Projects Section */}
      <div className="mt-12 md:mt-4">
        <Projects title={data.projects.title} projects={data.projects.list} />
      </div>

      {/* Awards Section */}
      <div className="mt-12 md:mt-4">
        <Awards title={data.awards.title} list={data.awards.list} />
      </div>

      {/* Contact Section */}
      <div className="mt-12 md:mt-4 mb-20">
        <Contact title={data.contact.title} formFields={data.contact.formFields} />
      </div>
    </div>
  );
};

export default Home; 