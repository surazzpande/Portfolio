import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg ${
          darkMode 
            ? 'bg-slate-900/90 border-slate-700' 
            : 'bg-white/90 border-slate-200'
        } border-b`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={scrollToTop}
              className="group relative overflow-hidden"
            >
              <div className="relative">
                <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 drop-shadow-lg">
                  Suraj Pandey
                </span>
                {/* 3D Shadow Effect */}
                <span className="absolute top-0 left-0 text-2xl font-black text-gray-400/30 dark:text-gray-600/30 transform translate-x-0.5 translate-y-0.5 -z-10">
                  Suraj Pandey
                </span>
                {/* Animated Underline */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                  activeClass="text-primary-600 dark:text-primary-400 font-semibold"
                >
                  {item.name}
                </Link>
              ))}
              <IconButton onClick={toggleDarkMode} className="ml-4">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </IconButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <IconButton onClick={toggleDarkMode}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </IconButton>
              <IconButton onClick={handleDrawerToggle}>
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </IconButton>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 256,
            backgroundColor: darkMode ? '#1e293b' : '#ffffff',
          },
        }}
      >
        <List className="pt-16">
          {navItems.map((item) => (
            <ListItem key={item.name}>
              <Link 
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleDrawerToggle}
                className="w-full cursor-pointer"
              >
                <ListItemText 
                  primary={item.name}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: darkMode ? '#f1f5f9' : '#0f172a'
                    }
                  }}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;