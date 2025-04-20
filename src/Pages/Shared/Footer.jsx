import React from "react";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaPhone,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaGraduationCap,
  FaFileAlt
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/sheikh.rifat.28", name: "Facebook" },
    { icon: <FaTwitter />, url: "https://twitter.com", name: "Twitter" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mdrifatsheikh", name: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/MRS028", name: "GitHub" }
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: "skrifat483@gmail.com", url: "mailto:skrifat483@gmail.com" },
    { icon: <FaPhone />, text: "+8801521704690", url: "tel:+8801521704690" }
  ];

  const quickLinks = [
    { icon: <FaHome />, text: "Home", url: "#home" },
    { icon: <FaUser />, text: "About", url: "#about" },
    { icon: <FaProjectDiagram />, text: "Projects", url: "#projects" },
    { icon: <FaGraduationCap />, text: "Education", url: "#education" },
    { icon: <FaFileAlt />, text: "Resume", url: "#resume" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <h3 className="text-2xl font-bold text-green-500 mb-4">About My Portfolio</h3>
          <p className="text-gray-400 mb-4">
            A showcase of my skills, projects, and professional journey as a full-stack developer.
            I'm passionate about creating innovative solutions and collaborating on meaningful projects.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-green-500 mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a 
                  href={link.url} 
                  className="flex items-center text-gray-400 hover:text-green-500 transition-colors"
                >
                  <span className="text-green-500 mr-3">{link.icon}</span>
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-green-500 mb-4">Contact Me</h3>
          <ul className="space-y-3">
            {contactInfo.map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center"
              >
                <span className="text-green-500 mr-3">{item.icon}</span>
                <a 
                  href={item.url} 
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  {item.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <motion.div
        className="mt-16 pt-8 border-t border-gray-800 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-500 text-sm">
          © {currentYear} All rights reserved by{" "}
          <a
            href="https://www.linkedin.com/in/mdrifatsheikh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            MD. Rifat Sheikh
          </a>
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with React, Tailwind CSS, and Framer Motion
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;