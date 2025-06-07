import React, { useEffect, useState } from "react";

// --- Inline SVG Icons (Replaces react-icons for compatibility) ---

const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.501 0 1.554.79 2.923 2 3.721-.734-.023-1.423-.226-2.033-.56v.052c0 2.18 1.555 4 3.6 4.42-.376.102-.774.156-1.19.156-.29 0-.57-.028-.84-.08 1.558 2.34 3.033 2.85 4.533 2.85-1.541 1.21-3.484 1.922-5.592 1.922-.365 0-.722-.021-1.076-.064 2 1.282 4.373 2.024 6.916 2.024 8.284 0 12.828-6.85 12.828-12.828v-.581c.881-.636 1.649-1.425 2.257-2.34z"></path></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.002 1.808-2.002 1.808 0v8.396h4.98v-10.396c0-3.453-2.924-4.214-4.98-1.802v-3.802z"></path></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>;
const EnvelopeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-3.473-5.712-5.713.041-.09.997-2.053 1.01-2.061l-6.794-3.522-4.66 8.875c.669 3.941 5.11 8.385 9.051 9.051l8.87-4.66z"/></svg>;
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>;
const ProjectIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 6v15h-14v-15h14zm8-2v17h-6v-17h6zm-10-2h-10v13h10v-13z"/></svg>;
const EducationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l-12 5 12 5 12-5-12-5zm0 7.084l-10-4.167 10-4.167 10 4.167-10 4.167zm0 2.916l12 5v-5l-12-5-12 5v5l12 5z"/></svg>;
const ResumeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2h-10v20h16v-14l-6-6zm-2 16h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6v-2h6v2z"/></svg>;

// Animated Div component to replicate framer-motion's whileInView
const AnimatedDiv = ({ children, className, delay = 0 }) => {
    const [isInView, setIsInView] = useState(false);
    
    // Simple effect to trigger animation on mount with a delay
    useEffect(() => {
        const timer = setTimeout(() => setIsInView(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`${className} transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {children}
        </div>
    );
}

const Footer = () => {
    const socialLinks = [
        { icon: <FacebookIcon />, url: "https://www.facebook.com/sheikh.rifat.28", name: "Facebook" },
        { icon: <TwitterIcon />, url: "https://twitter.com", name: "Twitter" },
        { icon: <LinkedinIcon />, url: "https://www.linkedin.com/in/mdrifatsheikh", name: "LinkedIn" },
        { icon: <GithubIcon />, url: "https://github.com/MRS028", name: "GitHub" }
    ];

    const contactInfo = [
        { icon: <EnvelopeIcon />, text: "skrifat483@gmail.com", url: "mailto:skrifat483@gmail.com" },
        { icon: <PhoneIcon />, text: "+8801521704690", url: "tel:+8801521704690" }
    ];

    const quickLinks = [
        { icon: <HomeIcon />, text: "Home", url: "#home" },
        { icon: <UserIcon />, text: "About", url: "#about" },
        { icon: <ProjectIcon />, text: "Projects", url: "#projects" },
        { icon: <EducationIcon />, text: "Education", url: "#education" },
        { icon: <ResumeIcon />, text: "Resume", url: "#resume" }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black text-gray-300 pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* About Section */}
                <AnimatedDiv className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        <span className="text-green-400">MD. Rifat</span> Sheikh
                    </h3>
                    <p className="text-gray-400 mb-6">
                        A full-stack developer passionate about building modern web applications and creating meaningful digital experiences. This portfolio is a showcase of my journey and skills.
                    </p>
                    <div className="flex space-x-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 p-3 bg-gray-800/50 rounded-full hover:bg-green-500/20 hover:text-green-400 transform hover:scale-110 transition-all duration-300"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </AnimatedDiv>

                {/* Quick Links Section */}
                <AnimatedDiv delay={200}>
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        {quickLinks.map((link, index) => (
                            <li key={index} className="transition-transform duration-300 hover:translate-x-1.5">
                                <a
                                    href={link.url}
                                    className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300"
                                >
                                    <span className="mr-3">{link.icon}</span>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </AnimatedDiv>

                {/* Contact Info */}
                <AnimatedDiv delay={400}>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Me</h3>
                    <ul className="space-y-4">
                        {contactInfo.map((item, index) => (
                            <li key={index} className="flex items-center transition-transform duration-300 hover:translate-x-1.5">
                                <span className="text-green-400 mr-4">{item.icon}</span>
                                <a
                                    href={item.url}
                                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </AnimatedDiv>
            </div>

            {/* Copyright Section */}
            <AnimatedDiv className="mt-16 pt-8 border-t border-gray-800/50 text-center" delay={600}>
                <p className="text-gray-500 text-sm">
                    © {currentYear} All rights reserved by{" "}
                    <a
                        href="https://www.linkedin.com/in/mdrifatsheikh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline font-semibold"
                    >
                        MD. Rifat Sheikh
                    </a>
                </p>
                <p className="text-gray-600 text-xs mt-2">
                    Made with ❤️ using React & Tailwind CSS
                </p>
            </AnimatedDiv>
        </footer>
    );
};

export default Footer;