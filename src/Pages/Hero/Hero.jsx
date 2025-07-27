import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaDiagramProject, FaDownload } from "react-icons/fa6";
import myCv from "../../assets/CV/myCv.pdf";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { Element, Link } from "react-scroll";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const canvasRef = useRef(null);
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Add scroll position tracking
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      setShowScrollArrow(currentPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add smooth scroll function
  const scrollToSection = () => {
    const scrollOptions = {
      behavior: 'smooth',
      block: 'start'
    };

    if (scrollPosition > window.innerHeight) {
      // If scrolled past hero section, scroll to top
      window.scrollTo({ top: 0, ...scrollOptions });
    } else {
      // If in hero section, scroll to about
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView(scrollOptions);
      }
    }
  };

  // Canvas animation logic is now inside the Hero component's useEffect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    const mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 120) * (canvas.width / 120)
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(150, 200, 255, 0.2)';
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 5;
          if (mouse.x > this.x && this.x > this.size * 10) this.x -= 5;
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 5;
          if (mouse.y > this.y && this.y > this.size * 10) this.y -= 5;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = '#8C9EFF';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    let animationFrameId;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }
    
    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                             + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = `rgba(140, 175, 255, ${opacityValue})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        mouse.radius = (canvas.height / 120) * (canvas.width / 120);
        init();
    };
    window.addEventListener('resize', handleResize);

    const handleMouseOut = () => {
        mouse.x = undefined;
        mouse.y = undefined;
    };
    window.addEventListener('mouseout', handleMouseOut);

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section id="home" className="relative text-white pt-40 lg:pt-52 px-6 md:min-h-screen pb-16 lg:px-24  lg:mb-0 overflow-hidden flex items-center">
      <AnimatedBackground />
      {/* Canvas Element for the background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          background: 'linear-gradient(to bottom right, #0a0c10, #1a1f2e, #0a0c10)',
        }}
      />
      {/* Main Content Container */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center pt-5 lg:text-left lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
            Hi, I'm <br className="lg:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-400">
              MD. RIFAT SHEIKH
            </span>
          </h1>
          <h2 className="text-xl lg:text-3xl font-medium mt-4 text-blue-200 drop-shadow-md">
            <Typewriter
              words={[
                "A MERN Stack Developer...",
                "A Problem Solver...",
                "A Tech Enthusiast...",
                "An Innovator...",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="mt-4 text-gray-300 max-w-lg mx-auto lg:mx-0">
            I specialize in building dynamic and responsive web applications with a focus on a seamless user experience.
          </p>
          {/* Social Links */}
          <div className="flex gap-5 mt-8 justify-center lg:justify-start">
            <a
              href="https://www.facebook.com/sheikh.rifat.28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaFacebook />
            </a>
            {/* ... other social links ... */}
             <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/md-rifat-sheikh-426ab0294"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MRS028"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <button
              id="download-cv-button"
              onClick={() => {
                const link = document.createElement("a");
                link.href = myCv;
                link.download = "Md_Rifat_Sheikh's_Resume.pdf";
                link.click();
              }}
              className="btn bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              <FaDownload size={14} /> Download CV
            </button>
            <Link to="project" smooth={true} duration={500}>
              <button className="btn bg-gray-700/50 backdrop-blur-sm border border-gray-600 hover:bg-gray-700/80 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <FaDiagramProject size={14} />
                View Projects
              </button>
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src="/meDp.JPG"
              alt="Profile"
              className="relative rounded-full shadow-2xl w-64 h-64 lg:w-80 lg:h-80 object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Add scroll arrow */}
      {showScrollArrow && (
        <button 
          onClick={scrollToSection}
          className="fixed right-8 bottom-8 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-white/10 hover:bg-gray-700/50 transition-all duration-300 z-50 group"
          aria-label="Scroll"
        >
          <svg 
            className={`w-6 h-6 text-white transform transition-transform duration-300 ${scrollPosition > window.innerHeight ? 'rotate-180' : ''} group-hover:scale-110`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      )}
    </section>
  );
};

export default Hero;