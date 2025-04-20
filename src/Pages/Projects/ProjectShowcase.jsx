import React, { useState, useEffect } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TechTag from "../../Components/SectionTitle/TechTag";

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Medical Camp Management System",
      image: "https://i.ibb.co.com/ZR9JcM0p/Screenshot-2025-02-16-153538.png",
      link: "https://medical-camp-management-b10a12.web.app",
      github: "https://github.com/MRS028/Medical-Camp-Management-System-Client-Side",
      description: "A MERN stack application for managing medical camps with participant registration and organizer tools.",
      techStack: ["React", "Firebase", "CSS", "MongoDB", "Node", "Express", "JWT","Tailwind","Daisyi"],
      detailedDescription: "MCMS offers a seamless way to manage medical camps, ensuring smooth registration, participant tracking, and efficient camp coordination. The platform provides analytics, user management, and an intuitive UI for both organizers and participants.",
      features: [
        "User authentication and authorization",
        "Camp registration and management",
        "Participant tracking",
        "Responsive design",
        "Secure payment integration"
      ]
    },
    {
      title: "Game Review Platform",
      image: "https://i.ibb.co.com/RzMzWLN/Screenshot-2025-01-05-014948.png",
      link: "https://chill-gamer-b10a10.firebaseapp.com/",
      github: "https://github.com/MRS028/Chill-Gamer-Reviewer-Client",
      description: "A platform for gamers to explore, share, and discover game reviews with community engagement.",
      techStack: ["React", "Firebase", "CSS", "MongoDB", "Node", "Express","Tailwind","Daisyi"],
      detailedDescription: "This project involved working with Firebase for the backend, which required dealing with authentication and real-time data. The biggest challenge was handling the large volume of user-generated content efficiently.",
      features: [
        "User-generated reviews",
        "Rating system",
        "Search and filtering",
        "User profiles",
        "Responsive design"
      ]
    },
    {
      title: "Car Rental System",
      image: "https://i.ibb.co.com/tMtkPRP/Screenshot-2025-01-05-015231.png",
      link: "https://car-rental-system-b10a11.web.app/",
      github: "https://github.com/MRS028/Car-Rental-System-Client",
      description: "A feature-rich, user-centric car rental platform allowing users to book cars, manage profiles, and check availability.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Firebase", "JWT","Tailwind","Daisyi"],
      detailedDescription: "The major challenge was implementing dynamic pricing and availability based on different locations. I used Node.js and MongoDB for the backend and had to ensure scalability. Future improvements include adding a review system and location-based filtering.",
      features: [
        "Car booking system",
        "User profile management",
        "Real-time availability",
        "Dynamic pricing",
        "Secure authentication"
      ]
    },
    {
      title: "Discount Pro",
      image: "https://i.ibb.co.com/zFT0PqD/Screenshot-2025-01-05-015350.png",
      link: "https://discount-pro-coupon-generator.netlify.app/",
      github: "https://github.com/MRS028/Discount-Pro",
      description: "A platform for users to get discounts and explore ongoing sales across multiple categories.",
      techStack: ["React", "Firebase", "CSS","Tailwind","Daisyi"],
      detailedDescription: "The primary challenge was integrating multiple APIs to fetch real-time discount information. There are some API limitations, but I plan to implement my own backend in the future to allow for better control and customization.",
      features: [
        "Discount listings",
        "Category filtering",
        "User notifications",
        "Responsive design"
      ]
    },
    {
      title: "Gadget Heaven",
      image: "https://i.ibb.co.com/x3Pj1TH/Screenshot-2025-01-05-015414.png",
      link: "https://dream-gadget-bd.netlify.app/",
      github: "https://github.com/MRS028/Dream-Gadget-BD",
      description: "A product showcase website featuring mobile phones, laptops, and other gadgets with cart functionality.",
      techStack: ["React", "TailwindCSS", "Firebase","Tailwind","Daisyi"],
      detailedDescription: "The biggest challenge was ensuring responsive design across multiple device types. I used TailwindCSS for the frontend, which helped a lot with responsiveness. In the future, I plan to implement a full e-commerce functionality.",
      features: [
        "Product showcase",
        "Shopping cart",
        "Wishlist functionality",
        "Responsive design"
      ]
    },
    {
      title: "Dragon News Portal",
      image: "https://i.ibb.co.com/T1MjspY/Screenshot-2025-01-05-015200.png",
      link: "https://dragon-news-126cd.firebaseapp.com/category/08",
      github: "https://github.com/MRS028/Dragon-News",
      description: "A dynamic news portal where users can explore news articles by category.",
      techStack: ["React", "API", "CSS","Tailwind","Daisyi"],
      detailedDescription: "Handling dynamic content from an API was the biggest challenge. I had to ensure that the news articles were loaded efficiently. The project is still in progress, and I plan to add features like user preferences and a comment system.",
      features: [
        "News categorization",
        "Live news feeds",
        "Category filtering",
        "Responsive design"
      ]
    }
  ];

  const handleViewMore = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const navigateProjects = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % projects.length;
    } else {
      newIndex = (currentIndex - 1 + projects.length) % projects.length;
    }
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        navigateProjects('next');
      } else if (e.key === 'ArrowLeft') {
        navigateProjects('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentIndex]);

  return (
    <section id="projects" className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="My Projects" subtitle="Some of my recent work" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <TechTag key={i} tech={tech} />
                  ))}
                </div>
                
                <button
                  onClick={() => handleViewMore(project, index)}
                  className="text-green-600 dark:text-green-400 font-medium hover:underline flex items-center"
                >
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>

                <div className="p-6">
                  <div className="relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 sm:h-80 object-cover rounded-lg mb-6"
                      loading="lazy"
                    />
                    
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateProjects('prev');
                        }}
                        className="p-2 rounded-full bg-white/80 dark:bg-gray-700/80 shadow-md hover:bg-white dark:hover:bg-gray-600 transition-colors"
                        aria-label="Previous project"
                      >
                        <FiChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
                      </button>
                    </div>
                    
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateProjects('next');
                        }}
                        className="p-2 rounded-full bg-white/80 dark:bg-gray-700/80 shadow-md hover:bg-white dark:hover:bg-gray-600 transition-colors"
                        aria-label="Next project"
                      >
                        <FiChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.detailedDescription}
                  </p>
                  
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject?.features?.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <TechTag key={i} tech={tech} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-8">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                      >
                        <FiExternalLink className="mr-2" />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
                      >
                        <FiGithub className="mr-2" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;