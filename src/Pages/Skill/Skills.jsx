import React from "react";

// --- Inline SVG Icons (Replaces react-icons for compatibility) ---
const Html5Icon = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M1.999 0l1.822 20.423 8.179 3.577 8.179-3.577 1.821-20.423h-20zm16.141 6h-10.223l.192 2.155h9.839l-.473 5.309-3.475 1.228-3.474-1.228-.24-2.686h-2.16l.416 4.654 5.464 1.912 5.465-1.912.729-8.156h-11.859l-.192-2.155h12.243l-.307 3.464z"></path></svg>;
const Css3Icon = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M1.999 0l1.822 20.423 8.179 3.577 8.179-3.577 1.821-20.423h-20zm16.141 6h-10.223l.192 2.155h9.839l-.473 5.309-3.475 1.228-3.474-1.228-.24-2.686h-2.16l.416 4.654 5.464 1.912 5.465-1.912.729-8.156h-11.859l-.192-2.155h12.243l-.307 3.464z"></path></svg>;
const TailwindIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.334,6.182,14.973,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.334,13.382,14.973,12,12.001,12C9.027,12,7.666,10.618,6.001,12z"></path></svg>;
const JsIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24h-24v-24zm21.577 21.577h-19.154v-19.154h19.154v19.154zm-11.362-6.522c.038.351.088.703.124 1.054.212 2.055 1.945 3.328 3.864 3.328.188 0 .375-.013.56-.038 1.956-.237 3.271-1.849 3.037-3.799-.2-1.688-1.608-2.951-3.257-2.951-.831 0-1.594.33-2.176.901-.025-.013-.05-.025-.075-.025-.262 0-.525.013-.787.013-.213-2.105-.025-4.21.038-6.315h3.949v-1.8h-6.198c-.15 2.229-.075 4.457-.025 6.685.013.25-.012.5-.012.762zm3.325 2.118c-.687.126-1.336-.326-1.462-1.013-.125-.688.325-1.338 1.012-1.463.688-.125 1.338.325 1.463 1.012.125.688-.325 1.338-1.013 1.464z"></path></svg>;
const ReactIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2.2"></circle><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM12,20a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path><path d="M19.07,4.93a1,1,0,0,0-1.41,0L12,10.59,6.34,4.93a1,1,0,0,0-1.41,1.41L10.59,12,4.93,17.66a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L12,13.41l5.66,5.66a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L13.41,12,5.66-5.66A1,1,0,0,0,19.07,4.93Z"></path></svg>;
const FirebaseIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M3.763 21.35l6.444-18.35h3.585l-9.15 21.025-0.879-2.675zM19.742 18.664l-5.077-3.951-2.484 6.787h3.456l4.105-2.836zM18.106 13.01l-9.221-6.953-2.618 6.273 8.35 4.162 3.489-3.482zM8.312 3l-1.439 3.424 12.35 7.643 2.129-4.314-13.04-6.753z"></path></svg>;
const NodeIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M11.755 22.035c-1.397 1.288-3.566 2.05-5.555.856-1.996-1.191-2.332-3.842-.768-5.633.913-1.045 2.234-1.637 3.568-1.745l2.766 5.511.986 1.011zm-6.19-15.034c-.212-3.149 2.13-5.001 4.549-5.001 2.39 0 4.114 1.838 4.326 4.979l-4.492.011-.383.011zm8.887 13.352c1.789-.855 2.768-3.058 2.336-5.015-.435-1.956-2.123-3.237-4.004-3.237-1.15 0-2.274.453-3.13 1.258l2.408 4.896 2.39 2.1z"></path></svg>;
const MongoIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M13,19.953V14h3.193 C16.621,14.5,17,15.178,17,16C17,17.654,15.654,19,14,19H13z M12,12c-0.493,0-0.957,0.049-1.401,0.13C10.057,11.52,10,10.822,10,10 c0-1.654,1.346-3,3-3h1v5H12z M10.6,14H10c-1.103,0-2-0.897-2-2c0-1.103,0.897-2,2-2c0.01,0,0.02,0,0.03,0 C9.43,10.5,9,11.178,9,12C9,12.822,9.43,13.5,10.03,14z M11,4.047V10h-1c-1.654,0-3,1.346-3,3c0,1.654,1.346,3,3,3h1v4.953 C6.833,18.948,4.052,15.833,4.052,12C4.052,7.607,7.607,4.052,12,4.052c0.33,0,0.655,0.02,0.975,0.052C12.33,4.05,11.668,4,11,4.047z"></path></svg>;

// --- Component Data ---
const marqueeSkills = [
    { name: "HTML", icon: <Html5Icon className="h-10 w-10 text-orange-500" /> }, { name: "CSS", icon: <Css3Icon className="h-10 w-10 text-blue-500" /> }, { name: "Tailwind", icon: <TailwindIcon className="h-10 w-10 text-teal-400" /> },
    { name: "JavaScript", icon: <JsIcon className="h-10 w-10 text-yellow-400" /> }, { name: "React", icon: <ReactIcon className="h-10 w-10 text-cyan-400" /> }, { name: "Firebase", icon: <FirebaseIcon className="h-10 w-10 text-yellow-500" /> },
    { name: "Node.js", icon: <NodeIcon className="h-10 w-10 text-green-500" /> }, { name: "MongoDB", icon: <MongoIcon className="h-10 w-10 text-green-400" /> }
];

const detailedTechnologies = [
  { icon: <Html5Icon className="text-orange-500 text-5xl mb-4" />, title: "HTML", description: "The standard markup language for creating the structure of web pages and applications." },
  { icon: <Css3Icon className="text-blue-500 text-5xl mb-4" />, title: "CSS", description: "Used to style and design web pages, controlling layout, colors, and fonts for visual appeal." },
  { icon: <TailwindIcon className="text-teal-400 text-5xl mb-4" />, title: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development without writing custom CSS." },
  { icon: <JsIcon className="text-yellow-500 text-5xl mb-4" />, title: "JavaScript", description: "A versatile programming language that makes web pages interactive and dynamic." },
  { icon: <ReactIcon className="text-blue-500 text-5xl mb-4" />, title: "React.js", description: "A JavaScript library for building component-based user interfaces and single-page applications." },
  { icon: <FirebaseIcon className="text-yellow-500 text-5xl mb-4" />, title: "Firebase", description: "A platform offering backend services like authentication, real-time databases, and hosting." },
  { icon: <NodeIcon className="text-green-500 text-5xl mb-4" />, title: "Node.js", description: "A runtime environment for server-side JavaScript programming with asynchronous I/O." },
  { icon: <MongoIcon className="text-green-400 text-5xl mb-4" />, title: "MongoDB", description: "A NoSQL database program, using JSON-like documents with optional schemas." }
];

// Replicated SectionTitle to keep component self-contained
const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-gray-400">{subtitle}</p>}
        <div className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
    </div>
);

// --- Main Skills Component ---
const Skills = () => {
    // Duplicate the skills array to create a seamless loop for the marquee
    const skillsForMarquee = [...marqueeSkills, ...marqueeSkills];

    return (
        <section className="relative py-20 overflow-hidden bg-gray-900">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
                <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute w-full h-full bg-gradient-to-br from-green-500/20 via-blue-500/0 to-purple-500/20 blur-3xl animate-pulse-slow"></div>
                </div>
            </div>

            <div className="relative z-10 px-4">
                {/* Part 1: Marquee */}
                <SectionTitle title="Core Technologies" subtitle="My toolkit for building modern web applications." />
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
                        {skillsForMarquee.map((skill, index) => (
                            <li key={index}>
                                <div className="group relative flex flex-col items-center justify-center w-36 h-36 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                                    <div className="relative z-10 flex flex-col items-center">
                                        {skill.icon}
                                        <span className="mt-3 text-white font-medium text-sm">{skill.name}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Part 2: Detailed Grid */}
                <div className="max-w-6xl mx-auto mt-24">
                     <SectionTitle title="Skill Details" subtitle="A closer look at what I can do with each technology."/>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                         {detailedTechnologies.map((tech, index) => (
                             <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm p-8 text-center rounded-2xl border border-white/10 shadow-lg transition-all duration-300 hover:border-white/20 hover:-translate-y-2 hover:shadow-green-500/10">
                                <div className="absolute -inset-px bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-lg"></div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="mb-6 flex justify-center">{tech.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                                    <p className="text-gray-400 text-sm">{tech.description}</p>
                                </div>
                             </div>
                         ))}
                     </div>
                </div>
            </div>
            {/* Element for react-scroll navigation */}
            <div id="project"></div>
        </section>
    );
};

export default Skills;
