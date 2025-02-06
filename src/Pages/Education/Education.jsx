import React from "react";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";
import animationData from "../../assets/Lotties/lottie1.json"; 
import Lottie from "react-lottie";
import { Element } from "react-scroll";

const Education = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData, // Lottie animation data
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <section id="education" className="py-5   pb-10 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="">
        {/* <Lottie options={defaultOptions} height={120} width={130} /> */}
        <h2 className="lg:text-5xl text-4xl  font-extrabold text-center text-green-500 mb-12">
          My Educational Background 
        </h2>
        

        </div>

        <div className="space-y-12">
          {/* Southeast University */}
          <div className="flex flex-col md:flex-row items-center space-x-6 md:space-x-12 mb-12">
            <div className="p-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300">
              <FaUniversity className="text-5xl text-white" />
            </div>
            <div className="pt-5 lg:pt-0">
              <h3 className="text-3xl font-semibold text-white">Southeast University, Bangladesh</h3>
              <p className="text-lg mt-2 text-gray-300">
                Currently pursuing a degree in Computer Science and Engineering (CSE), focusing on innovative technology, coding competitions, and practical applications of my knowledge.
              </p>
              <p className="mt-2 text-gray-400">Year: 2022 - Present</p>
            </div>
          </div>

          {/* Notre Dame College */}
          <div className="flex flex-col md:flex-row items-center space-x-6 md:space-x-12 mb-12">
            <div className="p-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300">
              <FaGraduationCap className="text-5xl text-white" />
            </div>
            <div className="pt-5 lg:pt-0">
              <h3 className="text-3xl font-semibold text-white">Notre Dame College, Dhaka</h3>
              <p className="text-lg mt-2 text-gray-300">
                Completed Higher Secondary Certificate (HSC) with a strong foundation in science and mathematics, which shaped my passion for technology and computer science.
              </p>
              <p className="mt-2 text-gray-400">Year: 2018 - 2020</p>
            </div>
          </div>

          {/* Govt. Islampur Nekjahan Pilot High School */}
          <div className="flex flex-col md:flex-row items-center space-x-6 md:space-x-12">
            <div className="p-6 bg-gradient-to-r  from-green-400 to-teal-500 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300">
              <FaSchool className="text-5xl  text-white" />
            </div>
            <div className="pt-5 lg:pt-0">
              <h3 className="text-3xl font-semibold text-white">Govt. Islampur Nekjahan Pilot High School</h3>
              <p className="text-lg mt-2 text-gray-300">
                Completed Secondary School Certificate (SSC), where I developed a strong academic foundation in science, laying the groundwork for my future career in computer science.
              </p>
              <p className="mt-2 text-gray-400">Year: 2016 - 2018</p>
            </div>
          </div>
        </div>
        <Element name="contact"></Element>
      </div>
      
   
    </section>
  );
};

export default Education;
