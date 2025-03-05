import React from "react";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiFirebase, SiExpress, SiJsonwebtokens, SiJenkins } from "react-icons/si";
import Technologies from "./Technologies";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-teal-500" /> },
  { name: "daisyUI", icon: <SiDaisyui size={40} className="text-teal-500" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-500" /> },
  { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
  { name: "React Router", icon: <FaReact size={40} className="text-blue-500" /> }, // React Router doesn't have a specific icon in react-icons
  { name: "Firebase", icon: <SiFirebase size={40} className="text-yellow-500" /> },
  { name: "Express.js", icon: <SiExpress size={40} className="text-gray-600" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "JWT", icon: <SiJsonwebtokens size={40} className="text-yellow-400" /> },
  { name: "Pipeline", icon: <SiJenkins size={40} className="text-yellow-600" /> },
];

const Skills = () => {
  return (
    <section className=" bg-gray-900  py-16">
      <SectionTitle title={"Skills"}/>
      {/* <h2 className="text-center text-5xl text-green-500 font-bold mb-8">Skills</h2> */}
      <div className="w-[70%] mx-auto gap-5 mb-12">
        <Marquee gradient={false} speed={70} className="flex items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 border border-green-500 mx-5 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-700 transition duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <span className="text-white font-medium">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
      <Technologies></Technologies>
    </section>
  );
};

export default Skills;
