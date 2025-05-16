import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'UI/UX Designer', 'Full Stack Developer'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300">
            I'm a <span className="text-blue-600 dark:text-blue-400">{text}</span>
            <Cursor cursorStyle="|" />
          </h2>

          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Passionate about creating beautiful and functional web experiences. 
            I specialize in building modern web applications with cutting-edge technologies.
          </p>

          <div className="flex space-x-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#projects"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              View Work
            </motion.a>
          </div>

          <div className="flex space-x-6 mt-8">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <FiMail className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 