import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiFirebase, SiExpress, SiJsonwebtokens, SiJenkins } from "react-icons/si";
import { Element } from "react-scroll";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const technologies = [
  {
    icon: <FaHtml5 className="text-orange-600 text-5xl mb-4" />,
    title: "HTML",
    description: "HTML is the standard markup language for creating web pages and web applications. It forms the backbone of any web project."
  },
  {
    icon: <FaCss3Alt className="text-blue-500 text-5xl mb-4" />,
    title: "CSS",
    description: "CSS is used to style and design web pages. It controls the layout, colors, fonts, and more to make the web page visually appealing."
  },
  {
    icon: <SiTailwindcss className="text-teal-400 text-5xl mb-4" />,
    title: "Tailwind CSS",
    description: "Tailwind CSS is a utility-first CSS framework that enables developers to create custom designs without writing custom CSS."
  },
  {
    icon: <SiDaisyui className="text-pink-500 text-5xl mb-4" />,
    title: "daisyUI",
    description: "daisyUI is a component library built on top of Tailwind CSS, providing pre-designed components for faster development."
  },
  {
    icon: <FaJsSquare className="text-yellow-500 text-5xl mb-4" />,
    title: "JavaScript",
    description: "JavaScript is a versatile, high-level programming language used to make web pages interactive and dynamic."
  },
  {
    icon: <FaReact className="text-blue-500 text-5xl mb-4" />,
    title: "React.js",
    description: "React.js is a JavaScript library used to build user interfaces. It is component-based and widely used for developing single-page applications."
  },
  {
    icon: <FaReact className="text-indigo-600 text-5xl mb-4" />,
    title: "React Router",
    description: "React Router is a standard library for routing in React. It allows navigation between views or pages in a React application."
  },
  {
    icon: <SiFirebase className="text-yellow-500 text-5xl mb-4" />,
    title: "Firebase",
    description: "Firebase is a platform for developing mobile and web applications. It offers backend services such as authentication, real-time databases, and hosting."
  },
  {
    icon: <SiExpress className="text-black text-5xl mb-4" />,
    title: "Express.js",
    description: "Express.js is a minimal and flexible Node.js web application framework that simplifies backend development with routing and middleware."
  },
  {
    icon: <FaNodeJs className="text-green-500 text-5xl mb-4" />,
    title: "Node.js",
    description: "Node.js is a runtime environment that lets developers use JavaScript for server-side programming, providing asynchronous I/O operations."
  },
  {
    icon: <SiJsonwebtokens className="text-yellow-400 text-5xl mb-4" />,
    title: "JWT",
    description: "JWT (JSON Web Tokens) is an open standard for securely transmitting information between parties as a JSON object, often used for authentication."
  },
  {
    icon: <SiJenkins className="text-yellow-500 text-5xl mb-4" />,
    title: "Pipeline",
    description: "Pipeline refers to the process of automating the steps involved in building, testing, and deploying code using tools like Jenkins."
  }
];

const Technologies = () => {
  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionTitle title={"Skill Details"}/>
        {/* <h2 className="text-4xl font-bold text-center mb-12 text-green-500">Skill Details</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-700 border hover:border-white border-green-500 text-white rounded-lg p-8 text-center shadow-xl transform transition duration-400 hover:scale-110 hover:shadow-2xl"
            >
              <div className="mb-6 flex justify-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
              <p className="text-gray-300">{tech.description}</p>
            </div>
          ))}
        </div>
        
      </div>
      <Element name="project"></Element>
      
    </section>
  );
};

export default Technologies;
