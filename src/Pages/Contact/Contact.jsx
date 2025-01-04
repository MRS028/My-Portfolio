import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player"; 
import lottie2 from "/src/assets/Lotties/lottie2"
import Swal from "sweetalert2"; 
import emailjs from "emailjs-com"; 
import { Element } from "react-scroll";

function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the fields!',
      });
      return;
    }

    // Sending email via EmailJS
    emailjs.sendForm("service_v0o8owl", "template_timk3vr", e.target, "2viXtbu95xN3RgeJb")
      .then((result) => {
        // Success alert
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been successfully sent!',
        });

        // Reset form fields
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        // Error alert
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong, please try again later.',
        });
      });
  };

  return (
    <div className="container mx-auto p-8">
      <Element name="contact"></Element>
      <h2 className="text-4xl font-bold text-green-500 text-center mb-8">Contact Me</h2>

      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex lg:w-1/2 flex-col items-center">
          <p className="text-lg mb-4">
            Feel free to reach out to me via any of the platforms below:
          </p>

          {/* Contact Icons */}
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} className="hover:text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} className="hover:text-gray-700" />
            </a>
            <a href="mailto:skrifat483@gmail.com?subject=Contact from Portfolio&body=Hello, I have a query...">
              <FaEnvelope size={40} className="hover:text-gray-700" />
            </a>
          </div>

          {/* Contact Form */}
          <h2 className="p-2 mb-3 font-semibold text-2xl">Send Me Your Thoughts</h2>
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-md"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 lg:mt-24">
          <Player
            autoplay
            loop
            src={lottie2} 
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
