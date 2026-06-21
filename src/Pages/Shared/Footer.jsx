import React, { useEffect, useRef, useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const FacebookIcon  = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>;
const TwitterIcon   = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.501 0 1.554.79 2.923 2 3.721-.734-.023-1.423-.226-2.033-.56v.052c0 2.18 1.555 4 3.6 4.42-.376.102-.774.156-1.19.156-.29 0-.57-.028-.84-.08 1.558 2.34 3.033 2.85 4.533 2.85-1.541 1.21-3.484 1.922-5.592 1.922-.365 0-.722-.021-1.076-.064 2 1.282 4.373 2.024 6.916 2.024 8.284 0 12.828-6.85 12.828-12.828v-.581c.881-.636 1.649-1.425 2.257-2.34z"/></svg>;
const LinkedinIcon  = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.002 1.808-2.002 1.808 0v8.396h4.98v-10.396c0-3.453-2.924-4.214-4.98-1.802v-3.802z"/></svg>;
const GithubIcon    = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const EnvelopeIcon  = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>;
const PhoneIcon     = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-3.473-5.712-5.713.041-.09.997-2.053 1.01-2.061l-6.794-3.522-4.66 8.875c.669 3.941 5.11 8.385 9.051 9.051l8.87-4.66z"/></svg>;
const HomeIcon      = () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>;
const UserIcon      = () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>;
const ProjectIcon   = () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M14 6v15h-14v-15h14zm8-2v17h-6v-17h6zm-10-2h-10v13h10v-13z"/></svg>;
const EducationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l-12 5 12 5 12-5-12-5zm0 7.084l-10-4.167 10-4.167 10 4.167-10 4.167zm0 2.916l12 5v-5l-12-5-12 5v5l12 5z"/></svg>;
const ResumeIcon    = () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2h-10v20h16v-14l-6-6zm-2 16h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6v-2h6v2z"/></svg>;
const ChevronIcon   = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>;

// ─── Animated on scroll into view ─────────────────────────────────────────────
const AnimatedDiv = ({ children, className = "", delay = 0 }) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.disconnect(); } },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
            {children}
        </div>
    );
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FacebookIcon />,  url: "https://www.facebook.com/sheikh.rifat.28",      name: "Facebook",  color: "hover:bg-blue-600/20  hover:text-blue-400  hover:border-blue-500/30" },
        { icon: <TwitterIcon />,   url: "https://twitter.com",                            name: "Twitter",   color: "hover:bg-sky-500/20   hover:text-sky-400   hover:border-sky-500/30"  },
        { icon: <LinkedinIcon />,  url: "https://www.linkedin.com/in/mdrifatsheikh",      name: "LinkedIn",  color: "hover:bg-sky-700/20   hover:text-sky-300   hover:border-sky-600/30"  },
        { icon: <GithubIcon />,    url: "https://github.com/MRS028",                      name: "GitHub",    color: "hover:bg-white/10     hover:text-white     hover:border-white/20"     },
    ];

    const contactInfo = [
        { icon: <EnvelopeIcon />, text: "skrifat483@gmail.com",  url: "mailto:skrifat483@gmail.com" },
        { icon: <PhoneIcon />,    text: "+8801521704690",         url: "tel:+8801521704690" },
    ];

    const quickLinks = [
        { icon: <HomeIcon />,      text: "Home",      url: "#home" },
        { icon: <UserIcon />,      text: "About",     url: "#about" },
        { icon: <ProjectIcon />,   text: "Projects",  url: "#projects" },
        { icon: <EducationIcon />, text: "Education", url: "#education" },
        {
            icon: <ResumeIcon />, text: "Resume", url: "#home",
            onClick: () => {
                const btn = document.querySelector("#download-cv-button");
                if (btn) btn.click();
            },
        },
    ];

    return (
        <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">

            {/* Top gradient rule */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

            {/* Subtle radial glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">

                {/* ── Main grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Brand — spans 2 cols on lg */}
                    <AnimatedDiv className="sm:col-span-2 lg:col-span-2" delay={0}>
                        {/* Name */}
                        <div className="mb-5">
                            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-400 mb-2">// portfolio</p>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                                MD.{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                                    Rifat Sheikh
                                </span>
                            </h3>
                            <p className="text-xs text-gray-500 mt-1 font-mono">Software Engineer · MERN · AI Enthusiast</p>
                        </div>

                        {/* Bio */}
                        <p className="text-sm text-gray-400 leading-7 max-w-sm mb-7">
                            A full-stack developer passionate about building modern web applications
                            and creating meaningful digital experiences. This portfolio is a showcase
                            of my journey and skills.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-2.5">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className={`flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-500 transition-all duration-200 ${link.color}`}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </AnimatedDiv>

                    {/* Quick Links */}
                    <AnimatedDiv delay={150}>
                        <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-400 mb-5">
                            // navigate
                        </p>
                        <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.text}>
                                    <a
                                        href={link.url}
                                        onClick={(e) => { if (link.onClick) { e.preventDefault(); link.onClick(); } }}
                                        className="group flex items-center gap-2.5 text-sm text-gray-500 hover:text-green-400 transition-colors duration-200"
                                    >
                                        <span className="text-gray-700 group-hover:text-green-500 transition-colors duration-200">
                                            {link.icon}
                                        </span>
                                        <span>{link.text}</span>
                                        <span className="ml-auto opacity-0 group-hover:opacity-100 text-green-500 transition-opacity duration-200">
                                            <ChevronIcon />
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </AnimatedDiv>

                    {/* Contact */}
                    <AnimatedDiv delay={300}>
                        <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-400 mb-5">
                            // reach out
                        </p>
                        <h4 className="text-sm font-semibold text-white mb-4">Contact Me</h4>
                        <ul className="space-y-3">
                            {contactInfo.map((item) => (
                                <li key={item.text}>
                                    <a
                                        href={item.url}
                                        className="group flex items-start gap-3 text-sm text-gray-500 hover:text-green-400 transition-colors duration-200"
                                    >
                                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.07] text-green-500 group-hover:bg-green-500/10 transition-colors duration-200">
                                            {item.icon}
                                        </span>
                                        <span className="break-all leading-relaxed">{item.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Availability dot */}
                        <div className="mt-6 flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            <span className="text-xs text-emerald-400 font-medium">Open to new roles</span>
                        </div>
                    </AnimatedDiv>

                </div>

                {/* ── Bottom bar ── */}
                <AnimatedDiv delay={450}>
                    <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-xs text-gray-300 text-center sm:text-left">
                            © {currentYear} All rights reserved by{" "}
                            <a
                                href="https://www.linkedin.com/in/mdrifatsheikh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:text-green-300 transition-colors font-medium"
                            >
                                MD. Rifat Sheikh
                            </a>
                        </p>
                        <p className="text-xs text-gray-400 font-mono">
                            Built with React &amp; Tailwind CSS ✦
                        </p>
                    </div>
                </AnimatedDiv>

            </div>
        </footer>
    );
};

export default Footer;