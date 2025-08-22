import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'MSc Software Engineering',
      institution: 'University of West London',
      year: '2025',
      grade: 'Distinction',
      description: 'Advanced studies in software development methodologies, system architecture, and project management.',
      achievements: [
        'AI-driven E-commerce Chatbot (Dissertation Project)',
        'Advanced Software Engineering Principles',
        'Cloud Computing and DevOps',
        'Machine Learning Applications'
      ]
    },
    {
      degree: 'BSc Computer Science & Information Technology',
      institution: 'Birendra Memorial College',
      year: '2020',
      grade: 'First Class',
      description: 'Comprehensive foundation in computer science principles, programming, and information systems.',
      achievements: [
        'Banking Network Simulation (Final Year Project)',
        'Database Management Systems',
        'Web Development Technologies',
        'Network Security Fundamentals'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Education
        </motion.h1>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-300 dark:bg-blue-600"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-600"
                >
                  <div className="flex items-center mb-3">
                    <GraduationCap className="text-blue-600 mr-2" size={24} />
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {item.degree}
                  </h3>
                  
                  <p className="text-blue-600 font-medium mb-2">{item.institution}</p>
                  
                  <div className="flex items-center mb-3">
                    <Award className="text-yellow-500 mr-2" size={20} />
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {item.grade}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;