import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                About Me
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I am a highly motivated IT professional with an MSc in Software Engineering 
                (Distinction) from the University of West London. With a strong technical 
                foundation and proven customer support background, I bring a unique blend 
                of technical expertise and interpersonal skills to every project.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                During my tenure as a Frontend Developer at Pragmatic Technology (2020–2023), 
                I specialized in creating dynamic, user-friendly web applications using React.js, 
                HTML5, CSS3, and modern JavaScript frameworks. I'm passionate about delivering 
                exceptional user experiences through clean, efficient code.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm Azure Fundamentals (AZ-900) certified and continuously expanding my 
                knowledge in cloud technologies, AI integration, and modern web development 
                practices. When I'm not coding, I enjoy exploring new technologies and 
                contributing to open-source projects.
              </p>
            </motion.div>
          </div>
          
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                    <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                    <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                    <div className="text-gray-600 dark:text-gray-300">Uptime Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                    <div className="text-gray-600 dark:text-gray-300">Support Provided</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;