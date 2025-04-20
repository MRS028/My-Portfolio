import React from "react";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Education = () => {
  const educationData = [
    {
      id: 1,
      icon: <FaUniversity className="text-4xl text-white" />,
      title: "Southeast University, Bangladesh",
      description: "Currently pursuing a degree in Computer Science and Engineering (CSE), focusing on innovative technology, coding competitions, and practical applications of my knowledge.",
      duration: "2022 - Present",
      gradient: "from-green-400 to-teal-500"
    },
    {
      id: 2,
      icon: <FaGraduationCap className="text-4xl text-white" />,
      title: "Notre Dame College, Dhaka",
      description: "Completed Higher Secondary Certificate (HSC) with a strong foundation in science and mathematics, which shaped my passion for technology and computer science.",
      duration: "2018 - 2020",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      id: 3,
      icon: <FaSchool className="text-4xl text-white" />,
      title: "Govt. Islampur Nekjahan Pilot High School",
      description: "Completed Secondary School Certificate (SSC), where I developed a strong academic foundation in science, laying the groundwork for my future career in computer science.",
      duration: "2016 - 2018",
      gradient: "from-purple-400 to-pink-500"
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
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="My Educational Journey" 
          subtitle="Academic background that shaped my career"
          center
        />

        <motion.div
          className="space-y-12 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {educationData.map((education) => (
            <motion.div
              key={education.id}
              variants={itemVariants}
              className="flex flex-col lg:flex-row items-start gap-8 p-6 rounded-xl bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 hover:border-transparent hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
            >
              <div className={`p-5 bg-gradient-to-r ${education.gradient} rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
                {education.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">{education.title}</h3>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm font-medium text-gray-300">
                    {education.duration}
                  </span>
                </div>
                
                <div className="mt-4 relative">
                  <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-green-400 to-blue-500 rounded-full hidden lg:block"></div>
                  <p className="text-gray-300 leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;