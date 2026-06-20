import React, { useState, useEffect } from "react";

// --- Inline SVG Icons (Replaces react-icons for compatibility) ---
// Icons now have a fixed size and accept a className for color.
const Html5Icon = ({ className }) => <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M1.999 0l1.822 20.423 8.179 3.577 8.179-3.577 1.821-20.423h-20zm16.141 6h-10.223l.192 2.155h9.839l-.473 5.309-3.475 1.228-3.474-1.228-.24-2.686h-2.16l.416 4.654 5.464 1.912 5.465-1.912.729-8.156h-11.859l-.192-2.155h12.243l-.307 3.464z"></path></svg>;
const Css3Icon = ({ className }) => <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M1.999 0l1.822 20.423 8.179 3.577 8.179-3.577 1.821-20.423h-20zm16.141 6h-10.223l.192 2.155h9.839l-.473 5.309-3.475 1.228-3.474-1.228-.24-2.686h-2.16l.416 4.654 5.464 1.912 5.465-1.912.729-8.156h-11.859l-.192-2.155h12.243l-.307 3.464z"></path></svg>;
const TailwindIcon = ({ className }) => <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.334,6.182,14.973,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.334,13.382,14.973,12,12.001,12C9.027,12,7.666,10.618,6.001,12z"></path></svg>;
const JsIcon = ({ className }) => <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24h-24v-24zm21.577 21.577h-19.154v-19.154h19.154v19.154zm-11.362-6.522c.038.351.088.703.124 1.054.212 2.055 1.945 3.328 3.864 3.328.188 0 .375-.013.56-.038 1.956-.237 3.271-1.849 3.037-3.799-.2-1.688-1.608-2.951-3.257-2.951-.831 0-1.594.33-2.176.901-.025-.013-.05-.025-.075-.025-.262 0-.525.013-.787.013-.213-2.105-.025-4.21.038-6.315h3.949v-1.8h-6.198c-.15 2.229-.075 4.457-.025 6.685.013.25-.012.5-.012.762zm3.325 2.118c-.687.126-1.336-.326-1.462-1.013-.125-.688.325-1.338 1.012-1.463.688-.125 1.338.325 1.463 1.012.125.688-.325 1.338-1.013 1.464z"></path></svg>;
const ReactIcon = ({ className }) => <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2.2"></circle><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM12,20a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path><path d="M19.07,4.93a1,1,0,0,0-1.41,0L12,10.59,6.34,4.93a1,1,0,0,0-1.41,1.41L10.59,12,4.93,17.66a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L12,13.41l5.66,5.66a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L13.41,12,5.66-5.66A1,1,0,0,0,19.07,4.93Z"></path></svg>;
const FirebaseIcon = ({ className }) => <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M3.763 21.35l6.444-18.35h3.585l-9.15 21.025-0.879-2.675zM19.742 18.664l-5.077-3.951-2.484 6.787h3.456l4.105-2.836zM18.106 13.01l-9.221-6.953-2.618 6.273 8.35 4.162 3.489-3.482zM8.312 3l-1.439 3.424 12.35 7.643 2.129-4.314-13.04-6.753z"></path></svg>;
const NodeIcon = ({ className }) => <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M11.755 22.035c-1.397 1.288-3.566 2.05-5.555.856-1.996-1.191-2.332-3.842-.768-5.633.913-1.045 2.234-1.637 3.568-1.745l2.766 5.511.986 1.011zm-6.19-15.034c-.212-3.149 2.13-5.001 4.549-5.001 2.39 0 4.114 1.838 4.326 4.979l-4.492.011-.383.011zm8.887 13.352c1.789-.855 2.768-3.058 2.336-5.015-.435-1.956-2.123-3.237-4.004-3.237-1.15 0-2.274.453-3.13 1.258l2.408 4.896 2.39 2.1z"></path></svg>;
const MongoIcon = ({ className }) => <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M13,19.953V14h3.193 C16.621,14.5,17,15.178,17,16C17,17.654,15.654,19,14,19H13z M12,12c-0.493,0-0.957,0.049-1.401,0.13C10.057,11.52,10,10.822,10,10 c0-1.654,1.346-3,3-3h1v5H12z M10.6,14H10c-1.103,0-2-0.897-2-2c0-1.103,0.897-2,2-2c0.01,0,0.02,0,0.03,0 C9.43,10.5,9,11.178,9,12C9,12.822,9.43,13.5,10.03,14z M11,4.047V10h-1c-1.654,0-3,1.346-3,3c0,1.654,1.346,3,3,3h1v4.953 C6.833,18.948,4.052,15.833,4.052,12C4.052,7.607,7.607,4.052,12,4.052c0.33,0,0.655,0.02,0.975,0.052C12.33,4.05,11.668,4,11,4.047z"></path></svg>;

// --- Component Data ---
const marqueeSkills = [
  { name: "React", icon: <ReactIcon className="h-8 w-8 text-cyan-400" /> },
  { name: "Next.js", icon: <ReactIcon className="h-8 w-8 text-gray-200" /> },
  { name: "TypeScript", icon: <JsIcon className="h-8 w-8 text-blue-500" /> },
  { name: "Tailwind", icon: <TailwindIcon className="h-8 w-8 text-teal-400" /> },
  { name: "Node.js", icon: <NodeIcon className="h-8 w-8 text-green-500" /> },
  { name: "MongoDB", icon: <MongoIcon className="h-8 w-8 text-green-400" /> },
  { name: "Python", icon: <NodeIcon className="h-8 w-8 text-yellow-400" /> },
  { name: "Scikit-Learn", icon: <NodeIcon className="h-8 w-8 text-red-400" /> },
  { name: "TensorFlow", icon: <NodeIcon className="h-8 w-8 text-orange-500" /> },
  { name: "NLP", icon: <NodeIcon className="h-8 w-8 text-purple-400" /> },
  { name: "BiLSTM", icon: <NodeIcon className="h-8 w-8 text-pink-400" /> },
  { name: "Three.js", icon: <ReactIcon className="h-8 w-8 text-indigo-400" /> },
];

const detailedTechnologies = [
  {
    IconComponent: ReactIcon,
    colorClass: "text-cyan-400",
    title: "React.js",
    description:
      "Building modern and reusable user interfaces with hooks, components, and state management.",
  },
  {
    IconComponent: ReactIcon,
    colorClass: "text-gray-300",
    title: "Next.js",
    description:
      "Creating full-stack applications with App Router, SSR, and API routes.",
  },
  {
    IconComponent: JsIcon,
    colorClass: "text-blue-500",
    title: "TypeScript",
    description:
      "Developing scalable applications with static typing and maintainable code.",
  },
  {
    IconComponent: TailwindIcon,
    colorClass: "text-teal-400",
    title: "Tailwind CSS",
    description:
      "Building beautiful and responsive user interfaces with utility-first CSS.",
  },
  {
    IconComponent: NodeIcon,
    colorClass: "text-green-500",
    title: "Node.js & Express",
    description:
      "Building REST APIs and scalable backend applications with JavaScript.",
  },
  {
    IconComponent: MongoIcon,
    colorClass: "text-green-400",
    title: "MongoDB",
    description:
      "Designing schemas and managing data efficiently using NoSQL databases.",
  },
  {
    IconComponent: FirebaseIcon,
    colorClass: "text-yellow-500",
    title: "Firebase & JWT",
    description:
      "Authentication, authorization, and cloud services for modern applications.",
  },
  {
    IconComponent: NodeIcon,
    colorClass: "text-yellow-400",
    title: "Python",
    description:
      "Automation, data analysis, CLI applications, and machine learning development.",
  },
  {
    IconComponent: NodeIcon,
    colorClass: "text-red-400",
    title: "Machine Learning",
    description:
      "Building predictive models using Scikit-Learn, Random Forest, and feature engineering.",
  },
  {
    IconComponent: NodeIcon,
    colorClass: "text-orange-500",
    title: "Deep Learning",
    description:
      "Working with TensorFlow and Keras to build neural networks and AI applications.",
  },
  {
    IconComponent: NodeIcon,
    colorClass: "text-purple-400",
    title: "Natural Language Processing",
    description:
      "Text preprocessing, embeddings, tokenization, and sequence modeling.",
  },
  {
    IconComponent: NodeIcon,
    colorClass: "text-pink-400",
    title: "BiLSTM",
    description:
      "Building sequence models for sentiment analysis and text classification tasks.",
  },
  {
    IconComponent: NodeIcon,
    colorClass: "text-indigo-400",
    title: "Transformers & LLMs",
    description:
      "Exploring BERT, Hugging Face, embeddings, and large language models.",
  },
  {
    IconComponent: ReactIcon,
    colorClass: "text-violet-400",
    title: "Three.js",
    description:
      "Creating interactive 3D graphics and immersive web experiences.",
  },
  {
    IconComponent: NodeIcon,
    colorClass: "text-white",
    title: "Git & GitHub",
    description:
      "Version control, collaboration, CI/CD workflows, and project management.",
  },
  {
    IconComponent: NodeIcon,
    colorClass: "text-sky-400",
    title: "Docker",
    description:
      "Containerizing applications and creating reproducible environments.",
  },
];

// Replicated SectionTitle to keep component self-contained
const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-gray-400">{subtitle}</p>}
        <div className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
    </div>
);

const AnimatedSkillCard = ({ tech, index }) => {
    const [isInView, setIsInView] = useState(false);
    const { IconComponent, colorClass, title, description } = tech;

    useEffect(() => {
        const timer = setTimeout(() => { setIsInView(true); }, index * 100);
        return () => clearTimeout(timer);
    }, [index]);

    return (
       <div
  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50 hover:-translate-y-2 ${
    isInView
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8"
  }`}
>
  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 duration-500"></div>

  <div className="relative z-10">
    {/* Top */}
    <div className="flex items-start justify-between mb-6">
      <div
        className={`flex items-center justify-center h-14 w-14 rounded-2xl bg-white/5 ${colorClass}`}
      >
        <IconComponent />
      </div>

      <span className="text-gray-600 group-hover:text-cyan-400 transition">
        ↗
      </span>
    </div>

    {/* Content */}
    <h3 className="text-xl font-bold text-white mb-3">
      {title}
    </h3>

    <p className="text-gray-400 text-sm leading-relaxed">
      {description}
    </p>
  </div>
</div>
    );
};

// --- Main Skills Component ---
const Skills = () => {
    const skillsForMarquee = [...marqueeSkills, ...marqueeSkills];

    return (
<div className="relative z-10 px-4 pt-10">

  <SectionTitle
    title="Skills & Technologies"
    subtitle="Full Stack Developer • AI/ML Engineer • NLP Enthusiast"
  />

  {/* Top Skills */}
  <div className="max-w-6xl mx-auto mb-20">
    <div className="grid grid-cols-2 md:flex flex-wrap justify-center gap-4">
      {marqueeSkills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:border-cyan-400 transition-all duration-300"
        >
          {skill.icon}
          <span className="text-white font-medium">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Categories */}
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-24">

  {[
    {
      title: "Frontend",
      icon: "🌐",
      color: "from-cyan-500 to-blue-500",
      skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Express", "MongoDB", "Firebase", "JWT"],
    },
    {
      title: "AI / Machine Learning",
      icon: "🤖",
      color: "from-purple-500 to-indigo-500",
      skills: [
        "Python",
        "Scikit-Learn",
        "TensorFlow",
        "Keras",
        "Random Forest",
      ],
    },
    {
      title: "NLP & Deep Learning",
      icon: "🧠",
      color: "from-pink-500 to-rose-500",
      skills: [
        "NLP",
        "BiLSTM",
        "Transformers",
        "BERT",
        "Embeddings",
      ],
    },
  ].map((category, index) => (
<div
  key={index}
  className="
    group relative overflow-hidden
    rounded-3xl
    border border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
    p-5 sm:p-6 lg:p-8
    transition-all duration-500
    hover:border-white/20
    hover:-translate-y-1
  "
>
  {/* Glow */}
  <div
    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br ${category.color}`}
  />

  <div className="relative z-10">

    {/* Header */}
    <div className="flex items-start justify-between mb-6">

      <div className="flex gap-4 items-center">

        <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl">
          {category.icon}
        </div>

        <div>
          <h3
            className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
          >
            {category.title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Core Technologies
          </p>
        </div>

      </div>

      <div className="hidden md:flex h-10 w-10 rounded-xl bg-white/5 items-center justify-center text-gray-500 group-hover:text-white">
        ↗
      </div>

    </div>

    {/* Skills */}
    <div className="flex flex-wrap gap-2">
      {category.skills.map((item) => (
        <span
          key={item}
          className="
            px-3 py-2
            rounded-xl
            bg-black/20
            border border-white/10
            text-xs sm:text-sm
            text-gray-300
            hover:bg-white/10
            transition
          "
        >
          {item}
        </span>
      ))}
    </div>

    {/* Footer */}
    <div className="mt-5 flex items-center gap-2 text-xs text-gray-500">
      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
      Currently using in production
    </div>

  </div>
</div>
  ))}
</div>

  {/* Featured Technologies */}
  <SectionTitle
    title="Featured Technologies"
    subtitle="Technologies I use the most"
  />

  <div className="max-w-7xl mx-auto grid  md:grid-cols-3 lg:grid-cols-4 gap-8">
    {detailedTechnologies.map((tech, index) => (
      <AnimatedSkillCard
        key={index}
        tech={tech}
        index={index}
      />
    ))}
  </div>
</div>
    );
};

export default Skills;
