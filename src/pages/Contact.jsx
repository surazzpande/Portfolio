import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, Button, Card, CardContent, Snackbar, Alert } from '@mui/material';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all fields');
      }

      // Import EmailJS dynamically
      const emailjs = await import('@emailjs/browser');
      
      // Initialize EmailJS
      emailjs.default.init('O77b2fjbblXBJNi-8');
      
      console.log('Sending email with data:', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Suraj Pandey'
      });

      // Send email using EmailJS
      const result = await emailjs.default.send(
        'service_3b65knx',
        'template_mk3hyk5',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Suraj Pandey',
          reply_to: formData.email
        },
        'O77b2fjbblXBJNi-8'
      );

      console.log('EmailJS Response:', result);

      setSnackbarMessage('Message sent successfully! I\'ll get back to you soon.');
      setSnackbarSeverity('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Detailed Error:', error);
      
      let errorMessage = 'Failed to send message. ';
      
      if (error.text && error.text.includes('Gmail_API: Invalid grant')) {
        errorMessage = 'Email service needs reconnection. Please contact me directly at surajpande20554@gmail.com while I fix this issue.';
      } else if (error.text) {
        errorMessage += `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please try again or contact me directly at surajpande20554@gmail.com';
      }
      
      setSnackbarMessage(errorMessage);
      setSnackbarSeverity('error');
    } finally {
      setIsSubmitting(false);
      setOpenSnackbar(true);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'surajpande20554@gmail.com',
      link: 'mailto:surajpande20554@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+44 7587546294',
      link: 'tel:+447587546294'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: '43 Hughenden Garderns, UB5 6LB, London, United Kingdom',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/surazzpande',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/suraj-pandey-7841b4191/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Mail size={24} />,
      name: 'Email',
      url: 'mailto:surajpande20554@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          Get In Touch
        </motion.h1>

        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card sx={{ boxShadow: 3 }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
                    Send Me a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<Send />}
                      disabled={isSubmitting}
                      sx={{ mt: 3 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      whileHover={{ x: 5 }}
                      className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-slate-800 dark:text-slate-100"
                    >
                      <div className="text-primary-600 dark:text-primary-400 mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          {item.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${social.color}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-100">
                  Let's Work Together!
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I'm always interested in new opportunities and exciting projects. 
                  Feel free to reach out if you'd like to discuss potential collaborations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity={snackbarSeverity} onClose={() => setOpenSnackbar(false)}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;