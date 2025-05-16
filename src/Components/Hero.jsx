import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'UI/UX Designer', 'Full Stack Developer'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center transition-all duration-500
      ${isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900/5 to-gray-900'
        : 'bg-gradient-to-br from-white via-blue-50/20 to-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            Hi, I'm <span className="gradient-text">Your Name</span>
          </motion.h1>
          
          <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">
            I'm a <span className="gradient-text">{text}</span>
            <Cursor cursorStyle="|" />
          </h2>

          <motion.p 
            className="max-w-2xl text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Passionate about creating beautiful and functional web experiences. 
            I specialize in building modern web applications with cutting-edge technologies.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-primary w-full sm:w-auto"
            >
              Get in Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="btn-secondary w-full sm:w-auto"
            >
              View Work
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex space-x-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform transition-all duration-300 ${
                  isDark 
                    ? 'text-gray-400 hover:text-white hover:shadow-glow-blue'
                    : 'text-gray-600 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/20'
                }`}
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 