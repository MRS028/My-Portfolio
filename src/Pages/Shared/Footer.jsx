import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title text-green-500 text-3xl">About</span>
          <p>
            My Portfolio is a showcase of my projects, skills, and experiences.
            Connect with me for collaborations or inquiries.
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/sheikh.rifat.28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/md-rifat-sheikh-426ab0294"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MRS028"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <p>Email: skrifat483@gmail.com</p>
          <p>Phone: +8801521704690</p>
        </div>
        {/* Footer copyright section */}
      </footer>
      <div className="mt-6 mb-5 text-center text-sm">
        <p>
          Copyright ©{new Date().getFullYear()} - All rights reserved by
          <a
            href="https://www.linkedin.com/in/md-rifat-sheikh-426ab0294"
            className="text-green-500"
          >
            {" "}
            MD. Rifat Sheikh
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
