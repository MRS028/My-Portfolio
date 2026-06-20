import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiFirebase, SiExpress, SiJsonwebtokens, SiJenkins } from "react-icons/si";
import { Element } from "react-scroll";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const technologies = [
  {
    title: "JavaScript",
    description:
      "Building interactive web applications using modern ES6+ JavaScript.",
  },
  {
    title: "TypeScript",
    description:
      "Developing scalable applications with static typing and maintainable code.",
  },
  {
    title: "React.js",
    description:
      "Creating component-based and responsive user interfaces with React.",
  },
  {
    title: "Next.js",
    description:
      "Building modern full-stack applications with SSR, API routes, and App Router.",
  },
  {
    title: "Tailwind CSS",
    description:
      "Designing responsive and beautiful user interfaces with utility-first CSS.",
  },
  {
    title: "Redux Toolkit & RTK Query",
    description:
      "Managing state and handling API interactions efficiently.",
  },
  {
    title: "Node.js & Express.js",
    description:
      "Developing RESTful APIs and scalable backend applications.",
  },
  {
    title: "MongoDB",
    description:
      "Working with NoSQL databases and designing efficient schemas.",
  },
  {
    title: "Firebase & JWT",
    description:
      "Implementing authentication, authorization, and cloud services.",
  },
  {
    title: "Python",
    description:
      "Building automation tools, data processing pipelines, and AI applications.",
  },
  {
    title: "Pandas & NumPy",
    description:
      "Data cleaning, preprocessing, and numerical computing for machine learning.",
  },
  {
    title: "Scikit-Learn",
    description:
      "Developing machine learning models for classification, regression, and prediction tasks.",
  },
  {
    title: "Machine Learning",
    description:
      "Building predictive models using Random Forest, Logistic Regression, and feature engineering.",
  },
  {
    title: "Deep Learning",
    description:
      "Exploring neural networks, TensorFlow, Keras, and PyTorch for advanced AI applications.",
  },
  {
    title: "NLP",
    description:
      "Working with Natural Language Processing techniques including tokenization, embeddings, and text classification.",
  },
  {
    title: "BiLSTM",
    description:
      "Building sequence models for sentiment analysis, text classification, and NLP tasks using Bidirectional LSTM networks.",
  },
  {
    title: "Transformers & LLMs",
    description:
      "Exploring BERT, Hugging Face Transformers, embeddings, and large language models.",
  },
  {
    title: "TensorFlow & Keras",
    description:
      "Developing deep learning models for computer vision and NLP applications.",
  },
  {
    title: "Three.js",
    description:
      "Creating interactive 3D graphics and immersive web experiences.",
  },
  {
    title: "Git & GitHub",
    description:
      "Version control, collaboration, and maintaining software development workflows.",
  },
  {
    title: "Docker",
    description:
      "Containerizing applications and creating reproducible development environments.",
  },
  {
    title: "REST API",
    description:
      "Designing secure and scalable APIs with proper authentication and documentation.",
  },
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
