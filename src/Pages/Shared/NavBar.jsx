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
    { to: "home",    text: "Home",     icon: <FaHome /> },
    { to: "about",   text: "About",    icon: <FaUserAlt /> },
    { to: "project", text: "Projects", icon: <FaBriefcase /> },
    { to: "contact", text: "Contact",  icon: <FaEnvelope /> },
  ];

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <li key={link.to} className="relative list-none">
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
          className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${activeLink === link.to
              ? "text-emerald-400 bg-emerald-400/10"
              : "text-gray-300 hover:text-white hover:bg-white/6"
            }
          `}
        >
          <span className={`text-xs ${activeLink === link.to ? "text-emerald-400" : "text-gray-500"}`}>
            {link.icon}
          </span>
          {link.text}
          {/* Underline indicator — desktop only */}
          {!isMobile && (
            <span
              className={`absolute left-3 -bottom-1 h-px rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 transition-all duration-300
                ${activeLink === link.to ? "opacity-100 w-[calc(100%-24px)]" : "opacity-0 w-0"}
              `}
            />
          )}
        </Link>
      </li>
    ));

  return (
    <>
      {/* ── Top Bar ── */}
      <div
        className={`fixed top-0 pt-3 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled
            ? "bg-[#0d1120]/80 backdrop-blur-xl border-b border-white/8 shadow-[0_1px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-5 h-16  flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="home" smooth={true} duration={500} className="flex items-center gap-2.5 cursor-pointer flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 blur-[6px] opacity-50" />
              <img
                src={logo}
                alt="Logo"
                className="relative w-9 h-9 rounded-full border border-emerald-400/40 object-cover"
              />
            </div>
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-widest text-white">
                R<span className="text-emerald-400">i</span>F
                <span className="text-emerald-400">A</span>T
              </span>
              <span className="text-[8px] md:text-[10px] text-gray-400 font-medium tracking-wider">
                MERN &amp; AI/ML
              </span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {renderLinks()}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Hire Me — desktop */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 transition-all duration-200 hover:-translate-y-px hover:shadow-lg hover:shadow-emerald-500/20 border-0"
            >
              Hire Me
            </button>

            {/* Hamburger — mobile */}
            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/6 border border-white/10 text-white text-lg transition-all duration-200 hover:bg-white/10 relative z-[60]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Backdrop ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── Mobile Sidebar ── */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 lg:hidden flex flex-col
          bg-[#0d1120]/95 backdrop-blur-xl border-l border-white/8 shadow-2xl
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
          <span className="text-sm font-semibold text-white tracking-wide">Navigation</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/6 border border-white/10 text-white text-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Close Menu"
          >
            <HiX />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <ul className="flex flex-col gap-1 p-4 flex-1">
          {renderLinks(true)}
        </ul>

        {/* Social Icons */}
        <div className="px-5 py-3 border-t border-white/8 flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-lg hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <FaGithub />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-lg hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-200"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Hire Me — mobile */}
        <div className="p-4 border-t border-white/8">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setMenuOpen(false);
            }}
            className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 transition-all duration-200 border-0"
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