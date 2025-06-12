import React, { useState, useEffect } from "react";
import logo from "../../assets/logopng.png";
import { FaHome, FaBriefcase, FaEnvelope, FaUserAlt } from "react-icons/fa";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import HireMeModal from "../HireMe/HireMe";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Handle scroll to add background blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "home", text: "Home", icon: <FaHome className="mr-2" /> },
    { to: "about", text: "About", icon: <FaUserAlt className="mr-2" /> },
    { to: "project", text: "Projects", icon: <FaBriefcase className="mr-2" /> },
    { to: "contact", text: "Contact", icon: <FaEnvelope className="mr-2" /> },
  ];

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <li key={link.to}>
        <Link
          to={link.to}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80} // Adjust offset for better scroll position
          onSetActive={() => setActiveLink(link.to)}
          onClick={() => isMobile && setMenuOpen(false)} // Close mobile menu on click
          className={`flex items-center cursor-pointer p-3 rounded-lg transition-all duration-300 ${
            activeLink === link.to
              ? "bg-green-500/20 text-green-300 font-semibold"
              : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
          }`}
        >
          {link.icon} {link.text}
        </Link>
      </li>
    ));

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/70 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="navbar container mx-auto px-4">
          {/* Logo Section */}
          <div className="navbar-start">
            <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
              <img src={logo} alt="Logo" className="w-10 h-10 mr-2 rounded-full" />
              <span className="text-xl font-extrabold tracking-wide text-white">
                R<span className="text-green-400">i</span>F
                <span className="text-green-400">A</span>T
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">{renderLinks()}</ul>
          </div>

          {/* "Hire Me" Button and Mobile Menu Toggle */}
          <div className="navbar-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:flex btn border-none bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold transform hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </button>
            <button
              className="lg:hidden btn btn-ghost text-2xl text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/80 backdrop-blur-lg shadow-2xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-40`}
      >
        <div className="flex justify-end p-4">
           <button onClick={() => setMenuOpen(false)} className="text-white text-2xl">
              {/* <HiX /> */}
           </button>
        </div>
        <ul className="menu p-4 space-y-4">{renderLinks(true)}</ul>
         <div className="p-4">
            <button
              onClick={() => {
                setIsModalOpen(true);
                setMenuOpen(false);
              }}
              className="w-full btn border-none bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold"
            >
              Hire Me
            </button>
         </div>
      </div>

      <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default NavBar;