import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Pragmatic Technology',
      location: 'Remote',
      duration: '2020 - 2023',
      type: 'Full-time',
      description: 'Led frontend development initiatives, creating responsive web applications and optimizing user experiences.',
      responsibilities: [
        'Developed dynamic web applications using React.js and modern JavaScript',
        'Collaborated with cross-functional teams to deliver high-quality products',
        'Implemented responsive designs using CSS3, Bootstrap, and Material-UI',
        'Optimized application performance and ensured cross-browser compatibility',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Material-UI', 'Git']
    },
    {
      title: 'Warehouse Operative',
      company: 'EVRI & Asendia (via First Call Contract Services)',
      location: 'UK',
      duration: '2024',
      type: 'Contract',
      description: 'Managed logistics operations and inventory management in fast-paced warehouse environments.',
      responsibilities: [
        'Efficiently processed and sorted packages for timely delivery',
        'Maintained accurate inventory records and quality control standards',
        'Collaborated with team members to meet daily operational targets',
        'Operated warehouse management systems and scanning equipment',
        'Ensured compliance with health and safety regulations'
      ],
      technologies: ['Warehouse Management Systems', 'Inventory Control', 'Quality Assurance']
    },
    {
      title: 'General Assistant',
      company: 'Tiffany and Co.(via First Call Contract Services)',
      location: 'London, UK',
      duration: '2023 - Present',
      type: 'Part-time',
      description: 'Maintained cleanliness and hygiene standards in one of the world\'s busiest airports.',
      responsibilities: [
        'Ensured high cleanliness standards across airport facilities',
        'Followed strict health and safety protocols',
        'Worked efficiently in a fast-paced, high-traffic environment',
        'Coordinated with team members for optimal coverage',
        'Maintained professional appearance and customer service standards'
      ],
      technologies: ['Health & Safety Protocols', 'Time Management', 'Team Coordination']
    }
  ];

  return (
    <section id="experience" className="py-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Work Experience
        </motion.h1>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-300 dark:bg-blue-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10 top-6"></div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Briefcase className="text-blue-600 mr-2" size={20} />
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={16} className="mr-1" />
                      {exp.duration}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  
                  <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <MapPin size={16} className="mr-1" />
                    {exp.location}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      Technologies & Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;