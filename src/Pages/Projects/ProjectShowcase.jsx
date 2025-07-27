import React, { useState, useEffect } from "react";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";
import { Element } from "react-scroll";

// --- Mock Components (to remove external dependencies) ---

// A styled component for the main section title
const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 tracking-tight">
            {title}
        </h2>
        <p className="mt-4 text-lg text-gray-400">
            {subtitle}
        </p>
        <div className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
    </div>
);

// A styled tag for displaying technologies
const TechTag = ({ tech }) => {
    const colors = {
        React: "bg-blue-500/20 text-blue-300",
        Firebase: "bg-yellow-500/20 text-yellow-300",
        MongoDB: "bg-green-500/20 text-green-300",
        Node: "bg-green-600/20 text-green-400",
        Express: "bg-gray-500/20 text-gray-300",
        JWT: "bg-pink-500/20 text-pink-300",
        Tailwind: "bg-cyan-500/20 text-cyan-300",
        CSS: "bg-indigo-500/20 text-indigo-300",
        API: "bg-purple-500/20 text-purple-300",
        Daisyi: "bg-lime-500/20 text-lime-300",
    };
    const colorClass = colors[tech] || "bg-gray-600/50 text-gray-200";
    return (
        <span className={`px-3 py-1 text-sm font-medium rounded-full ${colorClass}`}>
            {tech}
        </span>
    );
};

// --- Inline SVG Icons (replaces react-icons) ---
const GithubIcon = () => <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>;
const ExternalLinkIcon = () => <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>;
const CloseIcon = () => <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>;
const ChevronLeftIcon = () => <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>;
const ChevronRightIcon = () => <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>;

// Add this new component after the existing icon components
const ScrollArrow = ({ direction, onClick }) => (
    <button 
        onClick={onClick}
        className="fixed right-8 bottom-8 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-white/10 hover:bg-gray-700/50 transition-all duration-300 z-50 group"
        aria-label={`Scroll ${direction}`}
    >
        <svg 
            className={`w-6 h-6 text-white transform transition-transform duration-300 ${direction === 'up' ? 'rotate-180' : ''} group-hover:scale-110`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
    </button>
);

// --- Main Component ---

const ProjectShowcase = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showScrollArrow, setShowScrollArrow] = useState(false);
    const [atTop, setAtTop] = useState(true);

    // Using placeholder images to avoid broken links.
    const projects = [
        { title: "Medical Camp Management System", image: "https://i.ibb.co.com/ZR9JcM0p/Screenshot-2025-02-16-153538.png", link: "https://medical-camp-management-b10a12.web.app", github: "https://github.com/MRS028/Medical-Camp-Management-System-Client-Side", description: "A MERN stack application for managing medical camps with participant registration and organizer tools.", techStack: ["React", "Firebase", "CSS", "MongoDB", "Node", "Express", "JWT","Tailwind","Daisyi"], detailedDescription: "MCMS offers a seamless way to manage medical camps, ensuring smooth registration, participant tracking, and efficient camp coordination. The platform provides analytics, user management, and an intuitive UI for both organizers and participants.", features: ["User authentication and authorization", "Camp registration and management", "Participant tracking", "Responsive design", "Secure payment integration"] },
        { title: "Game Review Platform", image: "https://i.ibb.co.com/RzMzWLN/Screenshot-2025-01-05-014948.png", link: "https://chill-gamer-b10a10.firebaseapp.com/", github: "https://github.com/MRS028/Chill-Gamer-Reviewer-Client", description: "A platform for gamers to explore, share, and discover game reviews with community engagement.", techStack: ["React", "Firebase", "CSS", "MongoDB", "Node", "Express","Tailwind","Daisyi"], detailedDescription: "This project involved working with Firebase for the backend, which required dealing with authentication and real-time data. The biggest challenge was handling the large volume of user-generated content efficiently.", features: ["User-generated reviews", "Rating system", "Search and filtering", "User profiles", "Responsive design"] },
        { title: "Car Rental System", image: "https://i.ibb.co.com/tMtkPRP/Screenshot-2025-01-05-015231.png", link: "https://car-rental-system-b10a11.web.app/", github: "https://github.com/MRS028/Car-Rental-System-Client", description: "A feature-rich, user-centric car rental platform allowing users to book cars, manage profiles, and check availability.", techStack: ["React", "Node.js", "Express", "MongoDB", "Firebase", "JWT","Tailwind","Daisyi"], detailedDescription: "The major challenge was implementing dynamic pricing and availability based on different locations. I used Node.js and MongoDB for the backend and had to ensure scalability. Future improvements include adding a review system and location-based filtering.", features: ["Car booking system", "User profile management", "Real-time availability", "Dynamic pricing", "Secure authentication"] },
        { title: "Discount Pro", image: "https://i.ibb.co.com/zFT0PqD/Screenshot-2025-01-05-015350.png", link: "https://discount-pro-coupon-generator.netlify.app/", github: "https://github.com/MRS028/Discount-Pro", description: "A platform for users to get discounts and explore ongoing sales across multiple categories.", techStack: ["React", "Firebase", "CSS","Tailwind","Daisyi"], detailedDescription: "The primary challenge was integrating multiple APIs to fetch real-time discount information. There are some API limitations, but I plan to implement my own backend in the future to allow for better control and customization.", features: ["Discount listings", "Category filtering", "User notifications", "Responsive design"] },
        { title: "Gadget Heaven", image: "https://i.ibb.co.com/x3Pj1TH/Screenshot-2025-01-05-015414.png", link: "https://dream-gadget-bd.netlify.app/", github: "https://github.com/MRS028/Dream-Gadget-BD", description: "A product showcase website featuring mobile phones, laptops, and other gadgets with cart functionality.", techStack: ["React", "Tailwind", "Firebase","Daisyi"], detailedDescription: "The biggest challenge was ensuring responsive design across multiple device types. I used TailwindCSS for the frontend, which helped a lot with responsiveness. In the future, I plan to implement a full e-commerce functionality.", features: ["Product showcase", "Shopping cart", "Wishlist functionality", "Responsive design"] },
        { title: "Dragon News Portal", image: "https://i.ibb.co.com/T1MjspY/Screenshot-2025-01-05-015200.png", link: "https://dragon-news-126cd.firebaseapp.com/category/08", github: "https://github.com/MRS028/Dragon-News", description: "A dynamic news portal where users can explore news articles by category.", techStack: ["React", "API", "CSS","Tailwind","Daisyi"], detailedDescription: "Handling dynamic content from an API was the biggest challenge. I had to ensure that the news articles were loaded efficiently. The project is still in progress, and I plan to add features like user preferences and a comment system.", features: ["News categorization", "Live news feeds", "Category filtering", "Responsive design"] }
    ];

    const handleViewMore = (project, index) => {
        setCurrentIndex(index);
        setSelectedProject(project);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const navigateProjects = (direction) => {
        let newIndex = direction === 'next'
            ? (currentIndex + 1) % projects.length
            : (currentIndex - 1 + projects.length) % projects.length;
        setCurrentIndex(newIndex);
        setSelectedProject(projects[newIndex]);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isModalVisible) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') navigateProjects('next');
            if (e.key === 'ArrowLeft') navigateProjects('prev');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalVisible, currentIndex]);

    // Add scroll position tracking
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowScrollArrow(scrollPosition > 100);
            setAtTop(scrollPosition < 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initialize on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Add smooth scroll function
    const scrollToSection = (direction) => {
        if (direction === 'up') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Scroll to the next section after #projects
            const section = document.getElementById('projects');
            if (section && section.nextElementSibling) {
                section.nextElementSibling.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <section id="projects" className="relative py-5 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
            <Element id="project"></Element>
            <AnimatedBackground />
            {/* Main content wrapper with blur when modal is open */}
            <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-300 ${isModalVisible ? "blur-md pointer-events-none select-none" : ""}`}>
                <SectionTitle title="My Projects" subtitle="A selection of my recent work" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projects.map((project, index) => (
                        <div key={index} 
                             className="group relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-green-500/10 hover:border-green-500/30 hover:-translate-y-2 cursor-pointer"
                             onClick={() => handleViewMore(project, index)}
                        >
                             <div className="absolute -inset-px bg-gradient-to-r  rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-lg"></div>
                            <div className="relative">
                                <img onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1f2937/FFFFFF?text=Image+Not+Found'; }} src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 h-10">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.slice(0, 3).map((tech, i) => <TechTag key={i} tech={tech} />)}
                                    {project.techStack.length > 3 && <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-600/50 text-gray-200">+{project.techStack.length - 3}</span>}
                                </div>
                                
                                <span className="text-green-400 font-semibold cursor-pointer group-hover:underline">
                                    View Details &rarr;
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {isModalVisible && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
                <div className="fixed inset-0" onClick={closeModal}></div>
                {selectedProject && (
                  <div className="relative w-[95%] max-w-4xl bg-gray-800 border border-gray-700 rounded-xl shadow-2xl shadow-green-500/10 mx-auto mt-6 md:mt-2 mb-4 overflow-y-auto max-h-[77vh] z-[10000]" onClick={e => e.stopPropagation()}>
                    <button onClick={closeModal} className="absolute  md:top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-gray-700/50 hover:text-white transition-colors z-[10001]" aria-label="Close modal">
                        <CloseIcon />
                    </button>

                    <div className="p-6 md:p-8 md:mt-10 mt-4">
                        <div className="relative mb-6">
                            <img onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x400/1f2937/FFFFFF?text=Image+Not+Found'; }} src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 sm:h-80  rounded-lg" loading="lazy" />
                            <button onClick={(e) => {e.stopPropagation(); navigateProjects('prev')}} className="absolute top-1/2 left-2 md:-left-4 transform -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm shadow-md hover:bg-white/20 transition-colors" aria-label="Previous project">
                                <ChevronLeftIcon />
                            </button>
                            <button onClick={(e) => {e.stopPropagation(); navigateProjects('next')}} className="absolute top-1/2 right-2 md:-right-4 transform -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm shadow-md hover:bg-white/20 transition-colors" aria-label="Next project">
                                <ChevronRightIcon />
                            </button>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                        <p className="text-gray-300 mb-6">{selectedProject.detailedDescription}</p>
                        
                        {selectedProject.features?.length > 0 && (
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                                <ul className="space-y-2 text-gray-300">
                                    {selectedProject.features.map((feature, i) => (
                                        <li key={i} className="flex items-start"><span className="text-green-400 mr-2 mt-1">&#10003;</span>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.techStack.map((tech, i) => <TechTag key={i} tech={tech} />)}
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mt-8 border-t border-gray-700 pt-6">
                            {selectedProject.link && (
                                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                                    <ExternalLinkIcon /> Live Demo
                                </a>
                            )}
                            {selectedProject.github && (
                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-300">
                                    <GithubIcon /> View Code
                                </a>
                            )}
                        </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Add scroll arrow */}
            {showScrollArrow && (
                <ScrollArrow 
                    direction={atTop ? 'down' : 'up'} 
                    onClick={() => scrollToSection(atTop ? 'down' : 'up')} 
                />
            )}
        </section>
    );
};

export default ProjectShowcase;
