import React, { useState } from "react";
import { BiCross } from "react-icons/bi";
import { Element } from "react-scroll";

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Game Review Platform",
      image: "https://i.ibb.co.com/RzMzWLN/Screenshot-2025-01-05-014948.png",
      link: "https://chill-gamer-b10a10.firebaseapp.com/",
      github: "https://github.com/MRS028/Chill-Gamer-Reviewer-Client",
      description:
        "Chill Gamer is a user-friendly game review platform where users can explore, share, and discover game reviews. The goal of this project is to provide a seamless experience for gamers to rate, review, and engage with other users’ reviews.",
      techStack: ["React", "Firebase", "CSS", "MongoDB", "Node", "Express"],
      detailedDescription:
        "This project involved working with Firebase for the backend, which required dealing with authentication and real-time data. The biggest challenge was handling the large volume of user-generated content efficiently. The current limitation is that the platform doesn't have real-time chat functionality, but this is something I plan to implement in the future.",
    },
    {
      title: "Car Rental System",
      image: "https://i.ibb.co.com/tMtkPRP/Screenshot-2025-01-05-015231.png",
      link: "https://car-rental-system-b10a11.web.app/",
      github: "https://github.com/MRS028/Car-Rental-System-Client",
      description:
        "A feature-rich, user-centric car rental platform allowing users to book cars, manage profiles, and check availability.Ensuring real-time car availability updates to avoid overbooking. And this page is...",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
      detailedDescription:
        "The major challenge was implementing dynamic pricing and availability based on different locations. I used Node.js and MongoDB for the backend and had to ensure scalability. Future improvements include adding a review system and location-based filtering.",
    },
    {
      title: "Discount Pro",
      image: "https://i.ibb.co.com/zFT0PqD/Screenshot-2025-01-05-015350.png",
      link: "https://discount-pro-coupon-generator.netlify.app/",
      github: "https://github.com/MRS028/Discount-Pro",
      description:
        "A platform for users to get discounts and explore ongoing sales across multiple categories.Implementing a notification system to alert users when discounts on their favorite products become available.And This project...",
      techStack: ["React", "Firebase", "CSS"],
      detailedDescription:
        "The primary challenge was integrating multiple APIs to fetch real-time discount information. There are some API limitations, but I plan to implement my own backend in the future to allow for better control and customization.",
    },
    {
      title: "Adopt Your Pet",
      image: "https://i.ibb.co.com/W0WkyCS/Screenshot-2025-01-05-015433.png",
      link: "https://mrs028.github.io/Adopt-Your-Pet/",
      github: "https://github.com/MRS028/Adopt-Your-Pet",
      description:
        "A web app to explore pets available for adoption, allowing users to view, like, and filter pets based on various criteria.Users can like their favorite pets, save them to their profile, and easily revisit them later.",
      techStack: ["HTML", "CSS", "JavaScript"],
      detailedDescription:
        "One challenge was dynamically fetching pet data from the API, ensuring the UI updates smoothly. The current limitation is the lack of user registration and login, but I am planning to add that feature soon.",
    },
    {
      title: "Gadget Heaven",
      image: "https://i.ibb.co.com/x3Pj1TH/Screenshot-2025-01-05-015414.png",
      link: "https://dream-gadget-bd.netlify.app/",
      github: "https://github.com/MRS028/Dream-Gadget-BD",
      description:
        "A product showcase website featuring mobile phones, laptops, and other gadgets, with options to add to cart or wishlist.Users can add products to their shopping cart for purchase or save them to their wishlist...",
      techStack: ["React", "TailwindCSS", "Firebase"],
      detailedDescription:
        "The biggest challenge was ensuring responsive design across multiple device types. I used TailwindCSS for the frontend, which helped a lot with responsiveness. In the future, I plan to implement a full e-commerce functionality.",
    },
    {
      title: "Dragon News Portal",
      image: "https://i.ibb.co.com/T1MjspY/Screenshot-2025-01-05-015200.png",
      link: "https://dragon-news-126cd.firebaseapp.com/category/08",
      github: "https://github.com/MRS028/Dragon-News",
      description:
        "A dynamic news portal where users can explore news articles by category.The platform pulls live news feeds, ensuring users are always up-to-date with the latest headlines.",
      techStack: ["React", "API", "CSS"],
      detailedDescription:
        "Handling dynamic content from an API was the biggest challenge. I had to ensure that the news articles were loaded efficiently. The project is still in progress, and I plan to add features like user preferences and a comment system.",
    },
  ];

  const handleViewMore = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <Element name="project"></Element>
      <h2 className="text-4xl font-semibold text-center text-green-500 mb-8">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group border rounded-lg p-6 shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:border-green-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {project.title}
            </h3>
            <p className="text-gray-600 text-justify leading-7 mt-4 opacity-85 dark:text-gray-300">
              {project.description}
            </p>
            <button
              onClick={() => handleViewMore(project)}
              className="mt-4 text-green-500 hover:underline"
            >
              View More
            </button>
          </div>
        ))}
      </div>

      {/* Modal for project details */}
      {selectedProject && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-xl w-11/12 sm:w-10/12 lg:w-8/12 lg:h-[32rem] overflow-auto relative">
    <h3 className="text-2xl text-green-600 font-bold text-center">
        {selectedProject.title}
      </h3>
     
      <button
        onClick={closeModal}
        className="absolute top-4 font-bold hidden lg:flex md:flex right-4 text-red-500 hover:text-gray-800 text-2xl"
      >
        &#x2715; 
      </button>

      <div className="mt-4 flex justify-center mb-4">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full h-auto object-cover rounded-lg sm:w-96 sm:h-96 lg:w-11/12 lg:h-[350px]"
        />
      </div>

      

      <p className="text-gray-700 mt-4">{selectedProject.detailedDescription}</p>

      <h4 className="text-lg font-semibold text-black mt-4">Tech Stack</h4>
      <ul className="list-disc text-gray-600 ml-4">
        {selectedProject.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <div className="mt-4">
        <a
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:underline"
        >
          Live Link
        </a>
        <br />
        <a
          href={selectedProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:underline"
        >
          GitHub Link
        </a>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={closeModal}
          className="bg-red-500 text-white py-2 px-4 rounded-xl"
        >
          Close &#x2715; 
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default ProjectShowcase;
