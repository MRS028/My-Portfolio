import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import lottie2 from "/src/assets/Lotties/lottie2";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaInstagram } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the fields!',
        background: '#1f2937',
        color: 'white',
        confirmButtonColor: '#10b981'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        "service_v0o8owl",
        "template_timk3vr",
        e.target,
        "2viXtbu95xN3RgeJb"
      );

      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Your message has been successfully sent!',
        background: '#1f2937',
        color: 'white',
        confirmButtonColor: '#10b981'
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong, please try again later.',
        background: '#1f2937',
        color: 'white',
        confirmButtonColor: '#10b981'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/MRS028",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/mdrifatsheikh",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      url: "mailto:skrifat483@gmail.com?subject=Contact from Portfolio&body=Hello, I have a query...",
      label: "Email"
    }
    ,
    {
      icon: <FaInstagram className="text-2xl" />,
      url: "mailto:skrifat483@gmail.com?subject=Contact from Portfolio&body=Hello, I have a query...",
      label: "Instagram"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Let's discuss your project"
          center
        />

        <motion.div
          className="flex flex-col lg:flex-row gap-12 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 pb-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Hello, I would like to talk about..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-green-400">Contact Information</h3>
                <p className="text-gray-300 mb-6">
                  Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 bg-gray-600 rounded-full">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {/* <div className="hidden lg:flex items-center w-[20px] justify-center">
                <Player
                  autoplay
                  loop
                  src={lottie2}
                  className="w-full h-auto "
                />
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;