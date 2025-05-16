import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import { BsSun, BsMoon } from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    })
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-white/95 via-blue-50/95 to-white/95 dark:from-gray-900/95 dark:via-blue-900/[0.96] dark:to-gray-900/95 shadow-lg backdrop-blur-md py-2 border-b border-blue-100/20 dark:border-blue-900/20' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex-shrink-0 relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:via-purple-500 hover:to-blue-600 transition-all duration-300">
              Portfolio
            </h1>
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={itemVariants}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={() => setActiveItem(item.to)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group
                      ${activeItem === item.to 
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/30'
                      }`}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {item.name}
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ 
                          opacity: activeItem === item.to ? 1 : 0,
                          x: activeItem === item.to ? 0 : -5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiChevronRight className="w-4 h-4" />
                      </motion.span>
                    </span>
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"
                      whileHover={{ scaleX: 1 }}
                    />
                  </Link>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={toggleTheme}
                className="ml-4 p-2.5 rounded-full bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-800 dark:to-blue-900/40 text-gray-700 dark:text-gray-300 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-900/20 transition-all duration-300 transform"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? 
                      <BsSun className="w-5 h-5 text-amber-500" /> : 
                      <BsMoon className="w-5 h-5 text-blue-600" />
                    }
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-800 dark:to-blue-900/40 text-gray-700 dark:text-gray-300 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-900/20 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? 
                    <BsSun className="w-5 h-5 text-amber-500" /> : 
                    <BsMoon className="w-5 h-5 text-blue-600" />
                  }
                </motion.div>
              </AnimatePresence>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-800 dark:to-blue-900/40 text-gray-700 dark:text-gray-300 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-900/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'open' : 'closed'}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? 
                    <FiX className="w-5 h-5 text-red-500 dark:text-red-400" /> : 
                    <FiMenu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  }
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gradient-to-b from-white/95 to-blue-50/95 dark:from-gray-900/95 dark:to-blue-900/[0.96] backdrop-blur-md border-t border-blue-100/20 dark:border-blue-900/20"
          >
            <motion.div 
              className="px-4 py-3 space-y-1"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        y: { stiffness: 1000, velocity: -100 }
                      }
                    },
                    closed: {
                      y: 50,
                      opacity: 0,
                      transition: {
                        y: { stiffness: 1000 }
                      }
                    }
                  }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveItem(item.to);
                    }}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      activeItem === item.to
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/30'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {item.name}
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ 
                          opacity: activeItem === item.to ? 1 : 0,
                          x: activeItem === item.to ? 0 : -5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiChevronRight className="w-4 h-4" />
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 