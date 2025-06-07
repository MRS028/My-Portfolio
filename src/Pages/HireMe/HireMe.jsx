import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";

const HireMe = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <AnimatedBackground />
      <div className="relative z-10 bg-gray-900/95 backdrop-blur-md shadow-2xl rounded-2xl p-8 max-w-2xl w-full lg:w-8/12 lg:h-[38rem] overflow-auto border border-white/10">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-xl text-red-400 hover:text-red-300 transition-colors duration-300"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-400">
          Hire Me 🚀
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Need a skilled MERN Stack Developer? Let's build something great together!
        </p>

        {/* Services */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">What I Offer:</h3>
          <ul className="mt-4 space-y-3">
            {[
              "Full-Stack Web Development (MERN)",
              "Frontend Development (React, Tailwind)",
              "Backend Development (Node.js, Express.js, MongoDB)",
              "SEO Optimization for Websites",
              "Custom Web Application Development"
            ].map((service, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <form className="mt-8 space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full bg-gray-800/50 text-white p-3 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent transition-all duration-300" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full bg-gray-800/50 text-white p-3 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent transition-all duration-300" 
          />
          <textarea 
            placeholder="Project Details" 
            rows="4" 
            className="w-full bg-gray-800/50 text-white p-3 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-transparent transition-all duration-300"
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Send Request 🚀
          </button>
        </form>

        {/* Contact Options */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-gray-300">Or Contact Me Directly:</h3>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href="mailto:skrifat483@gmail.com" 
              className="text-red-400 text-2xl hover:text-red-300 transition-colors duration-300 transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://www.linkedin.com/in/md-rifat-sheikh-426ab0294" 
              className="text-blue-400 text-2xl hover:text-blue-300 transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/MRS028" 
              className="text-gray-300 text-2xl hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a 
              href="tel:8801521704690" 
              className="text-green-400 text-2xl hover:text-green-300 transition-colors duration-300 transform hover:scale-110"
            >
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
