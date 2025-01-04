import React, { useState } from "react";
import logo from "../../assets/logopng.png";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll"; // Importing 'Link' from 'react-scroll'
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = <>
  <li>
    <Link
      to="home" smooth={true} duration={500}
      className={({ isActive }) =>
        isActive
          ? "text-green-400 font-semibold border-b-2 border-green-400 transition-all duration-300"
          : "text-gray-300 hover:text-white hover:border-b-2 hover:border-green-400 transition-all duration-300 px-4 py-2"
      }
    >
      <FaHome className="mr-2" /> Home
    </Link>
  </li>
  <li>
    <Link
      to="about" smooth={true} duration={500}
      className={({ isActive }) =>
        isActive
          ? "text-green-400 font-semibold border-b-2 border-green-400 transition-all duration-300"
          : "text-gray-300 hover:text-white hover:border-b-2 hover:border-green-400 transition-all duration-300 px-4 py-2"
      }
    >
      <FaUser className="mr-2" /> About
    </Link>
  </li>
  <li>
    <Link
      to="projects" smooth={true} duration={500}
      className={({ isActive }) =>
        isActive
          ? "text-green-400 font-semibold border-b-2 border-green-400 transition-all duration-300"
          : "text-gray-300 hover:text-white hover:border-b-2 hover:border-green-400 transition-all duration-300 px-4 py-2"
      }
    >
      <FaBriefcase className="mr-2" /> Projects
    </Link>
  </li>
  <li>
    <Link
      to="contact" smooth={true} duration={500}
      className={({ isActive }) =>
        isActive
          ? "text-green-400 font-semibold border-b-2 border-green-400 transition-all duration-300"
          : "text-gray-300 hover:text-white hover:border-b-2 hover:border-green-400 transition-all duration-300 px-4 py-2"
      }
    >
      <FaEnvelope className="mr-2" /> Contact
    </Link>
  </li>
</>;



  return (
    <div className="bg-gray-900 fixed top-0 z-10 text-white w-full border-b border-green-500 p-2 rounded-xl">
      <div className="navbar lg:w-11/12 mx-auto">
        {/* Logo Section */}
        <div className="navbar-start flex items-center">
          <a className="btn btn-ghost normal-case text-xl flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-3 rounded-full" />
            <span className="font-extrabold tracking-wide">RiFAT</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="navbar-end lg:hidden">
          <button
            className="btn btn-ghost text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX className="text-red-500" /> : <HiMenu />}
          </button>
        </div>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed top-0 right-0 bg-gray-900 h-full w-64 shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 lg:hidden z-50`}
        >
          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <HiX className="text-red-500" />
          </button>
          <ul className="menu mt-16 space-y-6 px-6 text-lg text-gray-200">
            {links}
          </ul>
        </div>

        {/* Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            {links}
          </ul>
        </div>

        {/* Button Section */}
        <div className="navbar-end hidden lg:flex">
          <button className="btn border-none bg-green-600 hover:bg-green-700 font-semibold text-white ">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
