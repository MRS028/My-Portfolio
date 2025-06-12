import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiUsers } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const features = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing clean, maintainable, and efficient code is my top priority.',
    },
    {
      icon: <FiLayout className="w-6 h-6" />,
      title: 'Responsive Design',
      description: 'Creating beautiful interfaces that work seamlessly across all devices.',
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: 'Backend Integration',
      description: 'Seamlessly connecting frontend applications with robust backend services.',
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'User-Centric',
      description: 'Focusing on creating intuitive and engaging user experiences.',
    },
  ];

  return (
    <section id="about" className={`py-2 transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900/5 to-gray-900'
        : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50'
    }`}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text section-title mb-6">About Me</h2>
          <motion.p 
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm a passionate developer with a keen eye for design and a strong foundation in modern web technologies.
            My goal is to build applications that not only look great but also provide exceptional user experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className={`p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-br from-gray-800 to-gray-800/50 hover:shadow-blue-500/10'
                  : 'bg-gradient-to-br from-white to-blue-50/50 hover:shadow-blue-500/20'
              }`}
            >
              <motion.div 
                className="text-blue-600 dark:text-blue-400 mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 gradient-text">My Journey</h3>
          <motion.p 
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            With several years of experience in web development, I've worked on various projects
            ranging from small business websites to large-scale applications. I'm constantly
            learning and adapting to new technologies to deliver the best possible solutions.
          </motion.p>
          
          <motion.div
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 