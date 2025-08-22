import React from 'react';
import { motion } from 'framer-motion';
import { LinearProgress } from '@mui/material';

const Skills = () => {
  const technicalSkills = [
    { name: 'React.js', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'HTML5/CSS3', level: 95, color: '#E34F26' },
    { name: 'Python', level: 80, color: '#3776AB' },
    { name: 'Django', level: 75, color: '#092E20' },
    { name: 'Bootstrap', level: 90, color: '#7952B3' },
    { name: 'Material-UI', level: 85, color: '#007FFF' },
    { name: 'Git/GitHub', level: 85, color: '#F05032' },
    { name: 'RESTful APIs', level: 80, color: '#25D366' },
    { name: 'Azure', level: 70, color: '#0078D4' },
  ];

  const softSkills = [
    'Communication',
    'Problem Solving',
    'Adaptability',
    'Teamwork',
    'Time Management',
    'Critical Thinking',
    'Customer Support',
    'Project Management'
  ];

  return (
    <section id="skills" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Skills & Expertise
        </motion.h1>

        <div className="row g-5">
          {/* Technical Skills */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">
                Technical Skills
              </h2>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        className="h-2 rounded-full"
                        sx={{
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: skill.color,
                          },
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Soft Skills */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">
                Soft Skills
              </h2>
              <div className="grid gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg text-center font-medium shadow-lg cursor-pointer"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;