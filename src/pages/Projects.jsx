import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'WalkNex E-commerce Platform',
      description: 'Comprehensive e-commerce solution with automated customer support system achieving 99% uptime and enhanced customer experience.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React.js', 'python', 'Firebase', 'TensorFlow', 'chatbot','OpenAI GPT-4', 'Django','Weaviate','LangChain'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Automated Support', '99% Uptime', 'Enhanced CX', 'Real-time Analytics']
    },
    {
        title: 'IMS-Connect',
        description: 'Real-time support & messaging hub built with React, Firebase, Django, and Tailwind CSS—streamlining tickets, team comms, and ops.',
        image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=500',
        technologies: ['React', 'Firebase', 'Django', 'Tailwind CSS'],
        liveUrl: '#',
        githubUrl: '#',
        features: ['Realtime Chat', 'Ticketing & SLA Tracking', 'Role-based Access', 'Push Notifications', 'Audit Logs', 'Admin Analytics']
  },

    {
      title: 'Banking Network Simulation',
      description: 'BSc final year project simulating banking network operations with cost optimization algorithms, achieving 30% cost reduction.',
      image: 'https://images.pexels.com/photos/8919564/pexels-photo-8919564.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Python', 'NetworkX', 'Matplotlib', 'SQLite'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Network Simulation', '30% Cost Reduction', 'Algorithm Optimization', 'Data Visualization']
    },

{
  title: 'Ehaat',
  description: 'BSc final year dissertation: a Django-powered online marketplace connecting rural farmers directly with consumers—cutting out middlemen, enabling fair pricing, and empowering local communities.',
  image: 'https://img.freepik.com/free-photo/e-commerce-shop-online-homepage-sale-concept_1150-11747.jpg',
  technologies: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript'],
  liveUrl: '#',
  githubUrl: 'https://github.com/surazzpande/ehaat',
  features: [
    'Responsive Farmer-to-Consumer Marketplace',
    'Secure Payments & Order Tracking',
    'Live Product Listings & Pricing',
    'Fair-Trade Transparency',
    'Mobile-First Design'
  ]
}



  ];

  return (
    <section id="projects" className="py-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Featured Projects
        </motion.h1>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        />
                      ))}
                    </div>

                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardActions className="p-6 pt-0">
                    <Button
                      variant="contained"
                      startIcon={<ExternalLink size={16} />}
                      href={project.liveUrl}
                      className="mr-2"
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Github size={16} />}
                      href={project.githubUrl}
                    >
                      Code
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;