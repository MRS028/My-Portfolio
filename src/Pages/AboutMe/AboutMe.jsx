import React, { useState, useEffect, useRef } from "react";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";
import { Element } from "react-scroll";

// --- Replicated SectionTitle for self-containment ---
const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-gray-400">{subtitle}</p>}
        <div className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
    </div>
);

// --- Code Snippet with Typing Animation, Sound, Pause on Hover ---
const CodeSnippet = () => {
    const fullCode = [
        `const coder = {`,
        `  name: 'Md. Rifat Sheikh',`,
        `  skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'JWT'],`,
        `  hardWorker: true,`,
        `  quickLearner: true,`,
        `  problemSolver: true,`,
        `  hireable: function() {`,
        `    return (`,
        `      this.hardWorker && this.problemSolver && this.skills.length >= 5`,
        `    );`,
        `  }`,
        `};`
    ];

    const [typedCode, setTypedCode] = useState("");
    const [isPaused, setIsPaused] = useState(false);
    const typingAudio = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        typingAudio.current = new Audio("/typing.mp3");
        typingAudio.current.volume = 0.2;
        typingAudio.current.loop = false;

        let currentIndex = 0;
        let currentLine = 0;

        const startTyping = () => {
            intervalRef.current = setInterval(() => {
                if (!isPaused) {
                    if (currentLine < fullCode.length) {
                        const line = fullCode[currentLine];
                        setTypedCode(prev => prev + line[currentIndex]);

                        if (line[currentIndex] !== " " && line[currentIndex] !== undefined) {
                            typingAudio.current.currentTime = 0;
                            typingAudio.current.play();
                        }

                        currentIndex++;

                        if (currentIndex === line.length) {
                            currentIndex = 0;
                            currentLine++;
                            setTypedCode(prev => prev + '\n');
                        }
                    } else {
                        clearInterval(intervalRef.current);
                        setTimeout(() => {
                            setTypedCode("");
                            currentLine = 0;
                            currentIndex = 0;
                            startTyping(); // restart loop
                        }, 2000);
                    }
                }
            }, 50);
        };

        startTyping();
        return () => clearInterval(intervalRef.current);
    }, [isPaused]);

    const highlightSyntax = (line) => {
        let highlightedLine = line.replace(/const|return|function/g, '<span class="text-pink-400">$&</span>');
        highlightedLine = highlightedLine.replace(/'[^']*'/g, '<span class="text-yellow-300">$&</span>');
        highlightedLine = highlightedLine.replace(/true|false/g, '<span class="text-blue-400">$&</span>');
        highlightedLine = highlightedLine.replace(/coder|name|skills|hardWorker|quickLearner|problemSolver|hireable|this/g, '<span class="text-sky-300">$&</span>');
        return <span dangerouslySetInnerHTML={{ __html: highlightedLine }} />;
    };

    return (
        <div
            className="group relative bg-gray-800/50 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="absolute -inset-px bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-lg"></div>
            <div className="relative p-4">
                <div className="flex items-center pb-3 border-b border-gray-700">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-white font-mono text-sm sm:text-base p-4 whitespace-pre-wrap">
                    {typedCode.split('\n').map((line, i) => (
                        <div key={i}>
                            <span className="text-gray-500 select-none mr-4">{i + 1}</span>
                            {highlightSyntax(line)}
                        </div>
                    ))}
                    <span className="bg-green-400 h-4 w-0.5 inline-block animate-pulse"></span>
                </pre>
            </div>
        </div>
    );
};

// --- Main AboutMe Component ---
const AboutMe = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-gray-900 text-white">
            <Element name="about"></Element>
            <AnimatedBackground />
            <div className="relative z-10 container mx-auto px-6">
                <SectionTitle title="About Me" subtitle="A passionate developer on a mission to build great things." />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-white/10 p-8 rounded-xl">
                        <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400">Who I Am</h3>
                        <p className="text-lg text-gray-300 leading-relaxed text-justify">
                            I am MD. Rifat Sheikh, a Junior MERN Stack Developer with a deep interest in creating web applications using <span className="text-cyan-300">React</span>, <span className="text-green-400">Node.js</span>, <span className="text-gray-300">Express</span>, and <span className="text-green-300">MongoDB</span>. I am passionate about writing clean, efficient code that solves real-world problems and enhances the user experience. I'm always eager to learn new technologies and continuously improve my skills.
                        </p>
                        <p className="mt-4 text-lg text-gray-300 leading-relaxed text-justify">
                            Currently, I am expanding my expertise in full-stack development, focusing on building more advanced applications with modern tools and frameworks.
                        </p>
                    </div>

                    <div>
                        <CodeSnippet />
                    </div>
                </div>
            </div>

            <div id="about"></div>
        </section>
    );
};

export default AboutMe;
