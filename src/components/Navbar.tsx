import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';
import type { PortfolioData } from '../types/portfolio';

const Navbar = () => {
  const data: PortfolioData = portfolioData;
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    // Check if system prefers dark mode
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
  });

  useEffect(() => {
    // Apply the theme when component mounts and when isDarkMode changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Initialize theme on component mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Apply initial theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }

    // Handle system theme changes
    const handleChange = () => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Add effect to handle body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDownloadResume = () => {
    // Get the base URL of the site
    const baseURL = window.location.origin;
    // Open the PDF file in a new tab, accounting for the base path in vite.config.ts
    window.open(`${baseURL}/portfolio/Sidhartha_resume_2025.pdf`, '_blank');
    
    // Close the mobile menu if it's open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 py-4 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/" className="text-2xl md:text-3xl font-bold text-black dark:text-white no-underline tracking-tight">
                {data.personalInfo.logoName}
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {data.navigation.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-110 text-base font-medium no-underline"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right side icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={handleDownloadResume}
                className="transition-all duration-300 transform hover:scale-110 flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                aria-label="Download Resume"
              >
                <FaDownload className="w-4 h-4" />
                <span>Resume</span>
              </button>
              <a
                href={data.socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={data.socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#contact"
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 no-underline hover:text-white dark:hover:text-black"
              >
                Contact Me
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
                aria-label="Menu"
                style={{ color: isDarkMode ? 'white' : 'black' }}
              >
                {isOpen ? (
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible hidden'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 h-full w-64 ${
            isDarkMode ? 'bg-[#121212]' : 'bg-white'
          } shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full py-6 px-6">
            <div className="flex flex-col space-y-6 flex-grow">
              {data.navigation.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 text-lg font-medium no-underline"
                  style={{ color: isDarkMode ? 'white' : 'black' }}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={handleDownloadResume}
                className="flex items-center space-x-2 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 text-lg font-medium text-left"
                style={{ color: 'white'}}
              >
                <FaDownload className="w-5 h-5" style={{ color: 'inherit' }} />
                <span>Download Resume</span>
              </button>
            </div>
            <div className="flex space-x-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a
                href={data.socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300"
                style={{ color: isDarkMode ? 'white' : 'black' }}
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={data.socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300"
                style={{ color: isDarkMode ? 'white' : 'black' }}
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 