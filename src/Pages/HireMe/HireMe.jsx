import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaTrash } from "react-icons/fa";

const HireMe = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full relative lg:w-8/12 lg:h-[38rem] overflow-auto ">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-xl text-red-500 hover:text-red-700">
          ✖
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-green-600">Hire Me 🚀</h2>
        <p className="text-gray-600 text-center mt-2">
          Need a skilled MERN Stack Developer? Let's build something great together!
        </p>

        {/* Services */}
        <h3 className="text-xl font-semibold mt-6 text-gray-800">What I Offer:</h3>
        <ul className="list-disc text-gray-700 ml-6 mt-2 space-y-1">
          <li>Full-Stack Web Development (MERN)</li>
          <li>Frontend Development (React, Tailwind)</li>
          <li>Backend Development (Node.js, Express.js, MongoDB)</li>
          <li>SEO Optimization for Websites</li>
          <li>Custom Web Application Development</li>
        </ul>

        {/* Contact Form */}
        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full bg-white p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
          <textarea placeholder="Project Details" rows="4" className="w-full p-3 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
          <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">Send Request 🚀</button>
        </form>

        {/* Contact Options */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-600">Or Contact Me Directly:</h3>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="mailto:skrifat483@gmail.com" className="text-red-500 text-2xl hover:text-red-700"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/md-rifat-sheikh-426ab0294" className="text-blue-600 text-2xl hover:text-blue-800"><FaLinkedin /></a>
            <a href="https://github.com/MRS028" className="text-gray-900 text-2xl hover:text-gray-700"><FaGithub /></a>
            <a href="tel:8801521704690" className="text-green-600 text-2xl hover:text-green-800"><FaPhone /></a>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
        <button
          onClick={onClose}
          className=" text-red-500 text-xl py-2 px-4 rounded-xl"
        >
         ✖
        </button>
      </div>
      </div>
    </div>
  );
};

export default HireMe;
