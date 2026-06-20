import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
} from "react-icons/fa";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";

const services = [
  "Full Stack Web Development (MERN Stack)",
  "Modern Frontend Development (React, Next.js, Tailwind CSS)",
  "Backend API Development (Node.js, Express.js, MongoDB)",
  "Authentication & Authorization (Firebase, JWT)",
  "Machine Learning & Prediction Systems",
  "Natural Language Processing (NLP) Applications",
  "Deep Learning Models (BiLSTM, TensorFlow, Keras)",
  "Custom AI-powered Web Applications",
  "Python Automation & CLI Tools",
  "REST API Integration & Database Design",
  "Deployment, Optimization & Performance Tuning",
];

const HireMe = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <AnimatedBackground />

      <div className="relative z-10 bg-gray-900/95 backdrop-blur-md shadow-2xl rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-red-400 text-xl hover:text-red-300 duration-300"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-400">
          Let's Build Something Amazing 🚀
        </h2>

        <p className="text-gray-400 text-center mt-3">
          Looking for a Full Stack Developer or AI/ML Engineer? Let's turn your
          ideas into scalable products and intelligent solutions.
        </p>

        {/* Tags */}
        <div className="flex justify-center gap-3 flex-wrap mt-6">
          <span className="badge badge-outline badge-success">
            Full Stack
          </span>
          <span className="badge badge-outline badge-info">AI/ML</span>
          <span className="badge badge-outline badge-secondary">NLP</span>
          <span className="badge badge-outline badge-warning">Python</span>
          <span className="badge badge-outline badge-accent">Next.js</span>
        </div>

        {/* Services */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-white mb-5">
            What I Can Help You With
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-white/10 rounded-xl p-4 hover:border-green-400 duration-300"
              >
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-300">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-5">
            Send a Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-gray-800/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              rows="5"
              placeholder="Tell me about your project, idea, or requirements..."
              className="w-full bg-gray-800/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 py-4 rounded-xl text-white font-semibold text-lg hover:scale-[1.02] duration-300"
            >
              Let's Work Together 🚀
            </button>
          </form>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-200">
            Connect With Me
          </h3>

          <p className="text-gray-500 mt-2">
            Available for freelance projects, internships, remote jobs, and
            AI/ML collaborations.
          </p>

          <div className="flex justify-center gap-8 mt-8">

            <a
              href="mailto:skrifat483@gmail.com"
              className="text-red-400 text-3xl hover:scale-110 duration-300"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.linkedin.com/in/md-rifat-sheikh-426ab0294"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 text-3xl hover:scale-110 duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/MRS028"
              target="_blank"
              rel="noreferrer"
              className="text-white text-3xl hover:scale-110 duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="tel:+8801521704690"
              className="text-green-400 text-3xl hover:scale-110 duration-300"
            >
              <FaPhone />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Md. Rifat Sheikh · Full Stack Developer ·
          AI/ML Enthusiast · NLP Explorer
        </div>
      </div>
    </div>
  );
};

export default HireMe;