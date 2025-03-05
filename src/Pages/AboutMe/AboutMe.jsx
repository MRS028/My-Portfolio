import React from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import { Element } from "react-scroll";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const AboutMe = () => {
  return (
   <>
   
    <section className="py-10 bg-gray-800 text-white">
        
        <div className="container  mx-auto px-6">
          <div className="text-center mb-12">
            <SectionTitle title={"About Me"}/>
          {/* <h2 className="text-4xl font-bold text-green-500">About Me </h2> */}
              
            
            <p className="text-lg mt-4 text-gray-400">
              I am a passionate and results-driven web developer specializing in
              building dynamic and scalable web applications. With a strong
              foundation in front-end and back-end technologies, I strive to create
              seamless, user-centric experiences.
            </p>
          </div>
  
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Left Section: About Me Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-semibold mb-4">Who I Am</h3>
              <p className="text-lg text-gray-400 leading-8 text-justify">
                I am MD. Rifat Sheikh, a Junior MERN Stack Developer with a deep
                interest in creating web applications using React, Node.js, Express,
                and MongoDB. I am passionate about writing clean, efficient code that
                solves real-world problems and enhances the user experience. I'm always
                eager to learn new technologies and continuously improve my skills.
              </p>
              <p className="mt-4 text-lg text-gray-400 leading-8 text-justify">
                Currently, I am expanding my expertise in full-stack development,
                focusing on building more advanced applications with modern tools and
                frameworks.
              </p>
            </div>
  
            {/* Right Section: Skills */}
            <div className="w-full md:w-1/2 border rounded-lg  border-green-500">
            {/* <img src={code} alt="" /> */}
            <div className=" bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="text-white font-mono ">
              <p>
                <span className="text-pink-500">const</span> coder = {"{"}
              </p>
              <p className="ml-4">
                name: <span className="text-yellow-500">'Md. Rifat Sheikh'</span>,
              </p>
              <p className="ml-4">
                skills: [
                <span className="text-green-400">
                  'HTML ','CSS ','Javascript ','C ','C++ ', 'React ', 'NextJS ', 'Node ', 'Express ', 'Firebse ', 'MySql ', 'MongoDB', 'Docker','GitHub', 'JWT'
                </span>
                ],
              </p>
              <p className="ml-4">hardWorker: <span className="text-blue-400">true</span>,</p>
              <p className="ml-4">quickLearner: <span className="text-blue-400">true</span>,</p>
              <p className="ml-4">problemSolver: <span className="text-blue-400">true</span>,</p>
              <p className="ml-4">
                hireable: <span className="text-blue-400">function</span>() {"{"}
              </p>
              <p className="ml-4">
                <span className="text-pink-500">return</span> (
              </p>
              <p className="ml-12">
                this.hardWorker && this.problemSolver && this.skills.length {'>'}= 5
              </p>
              <p className="ml-8">);</p>
              <p className="ml-4">{"},"}</p>
              <p>{"};"}</p>
            </div>
          </div>
           
              
             
            </div>
          </div>
        </div>
      </section>
   </>
  );
};

export default AboutMe;
