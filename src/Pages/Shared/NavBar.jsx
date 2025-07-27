import React, { useState, useEffect } from "react";
import logo from "../../assets/logopng.png";
import { FaHome, FaBriefcase, FaEnvelope, FaUserAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import HireMeModal from "../HireMe/HireMe";

const GITHUB_URL = "https://github.com/MRS028";
const LINKEDIN_URL = "https://www.linkedin.com/in/mdrifatsheikh";
const RESUME_URL = "/resume.pdf"; 

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY === 0) {
        setActiveLink("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "home", text: "Home", icon: <FaHome  /> },
    { to: "about", text: "About", icon: <FaUserAlt /> },
    { to: "project", text: "Projects", icon: <FaBriefcase /> },
    { to: "contact", text: "Contact", icon: <FaEnvelope  /> },
  ];

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <li key={link.to} className="relative">
        <Link
          to={link.to}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          onSetActive={() => setActiveLink(link.to)}
          onClick={() => {
            if (isMobile) setMenuOpen(false);
            if (link.to === "home") setActiveLink("home"); 
          }}
          className={`flex items-center cursor-pointer px-2 py-1 transition-all duration-300 font-medium
            ${activeLink === link.to
              ? "text-green-500"
              : "text-gray-100 hover:text-green-400"}
          `}
        >
          {link.icon}
          {link.text}
          {/* Underline effect */}
          <span
            className={`absolute left-0 -bottom-1 h-[2.5px] w-full rounded bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300
            ${activeLink === link.to ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
          `}
          style={{ transformOrigin: "left" }}
        />
        </Link>
      </li>
    ));

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-gray-900/80 backdrop-blur-lg shadow-lg border-gray-800"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="navbar md:pt-4  max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-3">
            <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
              <img src={logo} alt="Logo" className="w-10 h-10 mr-2 rounded-full border-2 border-green-400 shadow" />
              <span className="flex flex-col leading-tight">
                <span className="text-xl font-extrabold tracking-wide text-white">
                  R<span className="text-green-400">i</span>F
                  <span className="text-green-400">A</span>T
                </span>
                <span className="text-xs text-gray-400 font-medium tracking-wider mt-[-2px]">
                  MERN Stack Developer
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="menu menu-horizontal px-1 text-lg  space-x-2">{renderLinks()}</ul>
          </div>

          {/* Right: Only Hire Me and Menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:inline-flex btn border-none bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold transform hover:scale-105 transition-transform duration-300 mx-1"
            >
              Hire Me
            </button>
            <button
              className="lg:hidden btn btn-ghost text-2xl text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open Menu"
              style={{ position: "relative", zIndex: 60 }}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-lg shadow-2xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <span className="text-lg font-bold text-white">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-white text-2xl" aria-label="Close Menu">
            <HiX />
          </button>
        </div>
        <ul className="menu p-4 space-y-4">{renderLinks(true)}</ul>
        <div className="flex justify-center space-x-4 px-4 mb-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          {/* <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline border-green-400 text-green-400 hover:bg-green-500 hover:text-white font-semibold text-xs px-3 py-1"
          >
            Resume
          </a> */}
        </div>
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