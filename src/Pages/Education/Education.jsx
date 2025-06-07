import React, { useState, useEffect } from "react";
import AnimatedBackground from '@/Components/AnimatedBackground/AnimatedBackground';

// --- Inline SVG Icons (Replaces react-icons for compatibility) ---
const UniversityIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 8.47L4.5 8 12 5l7.5 3L12 11.47zM20 19v-2.09c0-1.63-1.37-2.91-3-2.91s-3 1.28-3 2.91V19H2v2h18v-2h-2z" />
  </svg>
);
const GraduationCapIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l4 2.18v6.32L12 21l7-3.5V11.18L23 9 12 3zm0 3.84L17.53 9 12 11.16 6.47 9 12 6.84zM19 15.32l-7 3.5-7-3.5V11.18l7 3.5 7-3.5v4.14z" />
  </svg>
);
const SchoolIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L1 8v10h2V9.8l9 4.5 9-4.5V18h2V8L12 2z" />
  </svg>
);

// --- Self-contained SectionTitle component ---
const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-lg text-gray-400">{subtitle}</p>
    )}
    <div className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
  </div>
);

// --- Animated Timeline Item ---
const TimelineItem = ({ data, index }) => {
    const [isInView, setIsInView] = useState(false);

    // This is a simplified "in-view" check. For a production app, Intersection Observer is recommended.
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsInView(true);
        }, index * 200); // Staggered delay
        return () => clearTimeout(timer);
    }, [index]);

    const isEven = index % 2 === 0;

    return (
        <div className={`flex justify-between items-center w-full ${isEven ? 'flex-row-reverse' : ''}`}>
            {/* Card */}
            <div className={`w-full lg:w-5/12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-green-500/10 transition-shadow duration-300">
                     <div className="absolute -inset-px bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-lg"></div>
                    <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                            <h3 className="text-xl font-bold text-white">{data.title}</h3>
                            <span className="flex-shrink-0 px-3 py-1 bg-gray-700 rounded-full text-sm font-medium text-gray-300">{data.duration}</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">{data.description}</p>
                    </div>
                </div>
            </div>

            {/* Icon & Connector */}
            <div className={`hidden lg:flex w-1/12 items-center justify-center transition-opacity duration-700 delay-300 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`p-4 rounded-full shadow-lg bg-gradient-to-br ${data.gradient}`}>
                    {data.icon}
                </div>
            </div>

            {/* Empty spacer for the other side */}
            <div className="hidden lg:block w-5/12"></div>
        </div>
    );
};


// --- Main Education Component ---
const Education = () => {
  const educationData = [
    { id: 1, icon: <UniversityIcon className="text-4xl text-white" />, title: "Southeast University", description: "Pursuing a B.Sc. in Computer Science and Engineering (CSE), focusing on software development and practical applications.", duration: "2022 - Present", gradient: "from-green-400 to-teal-500" },
    { id: 2, icon: <GraduationCapIcon className="text-4xl text-white" />, title: "Notre Dame College, Dhaka", description: "Completed Higher Secondary Certificate (HSC) with a strong foundation in science and mathematics.", duration: "2018 - 2020", gradient: "from-blue-400 to-indigo-500" },
    { id: 3, icon: <SchoolIcon className="text-4xl text-white" />, title: "Govt. Islampur N.P. High School", description: "Completed Secondary School Certificate (SSC), laying the groundwork for my future in computer science.", duration: "2016 - 2018", gradient: "from-purple-400 to-pink-500" }
  ];

  return (
    <section id="education" className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle 
          title="My Educational Journey" 
          subtitle="The academic background that shaped my career"
        />

        <div className="relative mt-16 space-y-8 lg:space-y-0">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-gray-700/50 via-gray-600/50 to-gray-700/50 hidden lg:block"></div>
          
          {educationData.map((education, index) => (
            <TimelineItem key={education.id} data={education} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
