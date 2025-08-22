import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImg from '../assests/profile.jpg';
import resumePdf from '../assests/Suraj Pandey.pdf';
const Home = () => {
  const [displayText, setDisplayText] = useState('Hi, I am Suraj Pandey — ');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  
  const titles = [
    'Frontend Developer',
    'Software Engineer', 
    'React.js Developer',
    'Azure Cloud Developer',
    'Python Developer',
    'Full Stack Developer',
    'JavaScript Expert'
  ];
  
  const baseText = 'Hi, I am Suraj Pandey — ';

  useEffect(() => {
    let timeout;
    const currentTitle = titles[currentTitleIndex];
    
    const typeTitle = async () => {
      setIsTyping(true);
      setShowCursor(true);
      
      // Type the title character by character
      for (let i = 0; i <= currentTitle.length; i++) {
        setDisplayText(baseText + currentTitle.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Hide cursor and show complete title for 3 seconds
      setShowCursor(false);
      setIsTyping(false);
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Show cursor and delete the title
      setShowCursor(true);
      for (let i = currentTitle.length; i >= 0; i--) {
        setDisplayText(baseText + currentTitle.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      // Move to next title
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    };
    
    timeout = setTimeout(typeTitle, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentTitleIndex]);

  const highlights = [
    {
      title: 'MSc Software Engineering',
      description: 'Distinction from University of West London',
      icon: '🎓'
    },
    {
      title: '2+ Years Experience',
      description: 'Frontend Developer at Pragmatic Technology',
      icon: '💼'
    },
    {
      title: 'Azure Certified',
      description: 'AZ-900 Azure Fundamentals Certified',
      icon: '☁️'
    },
    {
      title: 'AI Enthusiast',
      description: 'Built AI-driven e-commerce chatbot',
      icon: '🤖'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributions on GitHub',
      icon: '💻'
    },
    {
      title: 'Tech Stack',
      description: 'React, Python, Django, Firebase, Azure',
      icon: '🛠️'
    }
  ];

  return (
    <div id="home" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-secondary-600/10 to-pink-600/10 dark:from-primary-600/20 dark:via-secondary-600/20 dark:to-pink-600/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="row align-items-center min-h-screen">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-slate-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{ minHeight: '1.2em' }}
                >
                  {displayText}
                  {showCursor && (
                    <motion.span 
                      className="inline-block w-1 h-[0.9em] ml-1 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                      animate={{ 
                        opacity: [1, 0, 1]
                      }}
                      transition={{ 
                        duration: 0.8, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      |
                    </motion.span>
                  )}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-xl text-slate-600 dark:text-slate-300 mb-8"
                >
                  Passionate about creating exceptional digital experiences with modern technologies
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
                >
                  <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                    <Button variant="contained" size="large" color="primary">
                      View Projects
                    </Button>
                  </Link>
                  <Button
                      variant="outlined"
                      size="large"
                      startIcon={<Download />}
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = resumePdf;        // ✅ just the variable, no {}
                        link.download = "Suraj Pandey.pdf"; // ✅ filename string
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                     >
                  Download CV
                </Button>
                 
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="flex gap-4 justify-center lg:justify-start"
                >
                  <a href="https://github.com/surazzpande" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/suraj-pandey-7841b4191/" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:surajpande20554@gmail.com" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <Mail size={24} />
                  </a>
                </motion.div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative"
              >
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img 
                      src={profileImg} 
                      alt="Suraj Pandey - Frontend Developer" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/30 to-secondary-600/30 rounded-full blur-xl animate-pulse"></div>
                
                {/* Tech Icons Floating Around */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    transition: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="absolute inset-0"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">JS</span>
                  </div>
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">⚛️</span>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">PY</span>
                  </div>
                  <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">☁️</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <ChevronDown size={32} className="text-primary-600" />
          </motion.div>
        </Link>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16 text-slate-800 dark:text-slate-100"
          >
            Professional Highlights
          </motion.h2>

          <div className="row g-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {highlight.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;