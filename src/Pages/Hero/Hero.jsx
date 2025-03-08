import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../../assets/mypic.jpg";
import { FaDiagramProject, FaDownload } from "react-icons/fa6";
import myCv from '../../assets/CV/myCv.pdf'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { Element, Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="pt-20 lg:pt-44 px-6 lg:px-24 mb-5 lg:mb-10 overflow-hidden">
      
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center pt-5 lg:text-left lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-green-500">MD. RIFAT SHEIKH</span>
          </h1>
          <h2 className="text-xl lg:text-3xl font-medium mt-4 text-blue-500">
            <Typewriter
              words={[
                "A Junior MERN Stack Developer...",
                "A Problem Solver...",
                "A Tech Enthusiast...",
                "An Innovator...",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="mt-4 text-gray-400">
            I specialize in building dynamic web applications using modern
            technologies like React, Node.js, Express.js, and MongoDB.
          </p>
          {/* Social Link */}
          <div className="flex gap-4 mt-6 mx-2 justify-center lg:justify-start">
            <a
              href="https://www.facebook.com/sheikh.rifat.28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-400 hover:text-blue-600 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/md-rifat-sheikh-426ab0294"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MRS028"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 hover:text-gray-900 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-pink-500 hover:text-pink-700 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="mt-6 flex justify-center lg:justify-start gap-3 lg:gap-5">
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = myCv; // URL of your CV file
                link.download = "Md_Rifat_Sheikh's_Resume.pdf"; // File name for download
                link.click();
              }}
              className="btn bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
             
              <FaDownload  size={12}/> Download My CV
            </button>
            <Link to="project" smooth={true} duration={500}>
            <button className="btn  bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-2 rounded-lg transition duration-300">
            {/* Need to fix this issues */}
              <FaDiagramProject size={12} />
             View My Projects
            </button>
            
            
            </Link>
            
          </div>
        </div>

        {/* Profile Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-full shadow-lg w-64 h-64 lg:w-80 lg:h-80 object-cover"
          />
        </div>
      </div>
      <Element name="about"></Element>
    </section>
  );
};

export default Hero;
