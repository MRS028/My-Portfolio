import React, { useState, useEffect } from "react";
import AnimatedBackground from '@/Components/AnimatedBackground/AnimatedBackground';

// ─── Section Title ────────────────────────────────────────────────────────────
const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 tracking-tight">
            {title}
        </h2>
        {subtitle && <p className="mt-4 text-lg text-gray-400">{subtitle}</p>}
        <div className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full" />
    </div>
);

// ─── Toast ────────────────────────────────────────────────────────────────────
const Toast = ({ message, type, onclose }) => {
    useEffect(() => {
        const timer = setTimeout(onclose, 5000);
        return () => clearTimeout(timer);
    }, [onclose]);

    const isSuccess = type === "success";

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onclose}
        >
            <div
                className={`relative max-w-sm w-full p-6 rounded-2xl border shadow-2xl text-white
                    ${isSuccess
                        ? "bg-gray-900 border-emerald-500/40"
                        : "bg-gray-900 border-red-500/40"
                    }`}
                onClick={e => e.stopPropagation()}
            >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl ${isSuccess ? "bg-gradient-to-r from-emerald-400 to-teal-400" : "bg-gradient-to-r from-red-400 to-rose-400"}`} />

                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full
                        ${isSuccess ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"}`}>
                        {isSuccess
                            ? <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            : <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        }
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-sm ${isSuccess ? "text-emerald-300" : "text-red-300"}`}>
                            {isSuccess ? "Message sent!" : "Something went wrong"}
                        </p>
                        <p className="mt-1 text-sm text-gray-400 leading-relaxed">{message}</p>
                    </div>
                    {/* Close */}
                    <button onClick={onclose} className="shrink-0 text-gray-600 hover:text-gray-300 transition-colors mt-0.5">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

// ─── Icons ────────────────────────────────────────────────────────────────────
const GithubIcon = ({ className = "", ...props }) => (
    <svg className={className} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedinIcon = ({ className = "", ...props }) => (
    <svg className={className} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.002 1.808-2.002 1.808 0v8.396h4.98v-10.396c0-3.453-2.924-4.214-4.98-1.802v-3.802z" />
    </svg>
);

const EnvelopeIcon = ({ className = "", ...props }) => (
    <svg className={className} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
    </svg>
);

const InstagramIcon = ({ className = "", ...props }) => (
    <svg className={className} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
    </svg>
);

const PaperPlaneIcon = ({ className = "", ...props }) => (
    <svg className={className} width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);

// ─── Input Field ──────────────────────────────────────────────────────────────
const Field = ({ label, id, children }) => (
    <div className="space-y-1.5">
        <label htmlFor={id} className="block text-xs font-medium tracking-widest uppercase text-gray-500">
            {label}
        </label>
        {children}
    </div>
);

// ─── Social Link Row ─────────────────────────────────────────────────────────
const SocialLink = ({ icon, url, label, desc, color }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/15 transition-all duration-200"
    >
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${color}`}>
            {icon}
        </div>
        <div className="min-w-0">
            <p className="text-sm font-semibold text-white">{label}</p>
            <p className="text-xs text-gray-500 truncate">{desc}</p>
        </div>
        <svg className="ml-auto h-4 w-4 text-gray-600 group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
    </a>
);

// ─── Main Contact Component ───────────────────────────────────────────────────
function Contact() {
    const [formData, setFormData]     = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formData.name || !formData.email || !formData.message) {
            setNotification({ message: "Please fill out all fields!", type: "error" });
            setIsSubmitting(false);
            return;
        }

        try {
            // Replace with your real emailjs.sendForm() call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setNotification({ message: "Thank you for reaching out. I'll get back to you soon!", type: "success" });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setNotification({ message: "Something went wrong. Please try again.", type: "error" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { icon: <GithubIcon    />, url: "https://github.com/MRS028",                      label: "GitHub",    desc: "github.com/MRS028",          color: "bg-gray-700/60 text-gray-200" },
        { icon: <LinkedinIcon  />, url: "https://www.linkedin.com/in/mdrifatsheikh",      label: "LinkedIn",  desc: "linkedin.com/in/mdrifatsheikh", color: "bg-sky-500/15 text-sky-400" },
        { icon: <InstagramIcon />, url: "https://www.instagram.com",                      label: "Instagram", desc: "@mdrifatsheikh",              color: "bg-pink-500/15 text-pink-400" },
        { icon: <EnvelopeIcon  />, url: "mailto:skrifat483@gmail.com",                    label: "Email",     desc: "skrifat483@gmail.com",        color: "bg-emerald-500/15 text-emerald-400" },
    ];

    const inputClass = "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder-gray-600 outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200";

    return (
        <section id="contact" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white overflow-hidden">
            <AnimatedBackground />

            <div className="relative z-10 max-w-6xl mx-auto">
                <SectionTitle title="Get In Touch" subtitle="Let's build something amazing together." />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

                    {/* ── LEFT: Form ── */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8">

                        {/* Card header */}
                        <div className="mb-7">
                            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-500 mb-2">// say hello</p>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Send me a message</h3>
                            <p className="mt-1.5 text-sm text-gray-400">I typically reply within 24 hours.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <Field label="Your Name" id="name">
                                <input
                                    type="text" id="name" name="name"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className={inputClass}
                                    placeholder="John Doe"
                                    required
                                />
                            </Field>

                            <Field label="Your Email" id="email">
                                <input
                                    type="email" id="email" name="email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className={inputClass}
                                    placeholder="john@example.com"
                                    required
                                />
                            </Field>

                            <Field label="Your Message" id="message">
                                <textarea
                                    id="message" name="message" rows="5"
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    className={`${inputClass} resize-none`}
                                    placeholder="Hello, I'd love to talk about..."
                                    required
                                />
                            </Field>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl
                                    bg-gradient-to-r from-green-500 to-teal-500
                                    hover:from-green-400 hover:to-teal-400
                                    active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
                                    text-white font-semibold text-sm tracking-wide
                                    transition-all duration-200 shadow-lg shadow-green-900/30"
                            >
                                {isSubmitting
                                    ? <>
                                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                        </svg>
                                        Sending…
                                    </>
                                    : <>
                                        <PaperPlaneIcon className="h-4 w-4" />
                                        Send Message
                                    </>
                                }
                            </button>
                        </form>
                    </div>

                    {/* ── RIGHT: Info ── */}
                    <div className="flex flex-col gap-6">

                        {/* Info card */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8">
                            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-500 mb-2">// connect</p>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Contact Information</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-7">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision. Pick a channel below.
                            </p>

                            <div className="space-y-3">
                                {socialLinks.map((link, i) => (
                                    <SocialLink key={i} {...link} />
                                ))}
                            </div>
                        </div>

                        {/* Availability card */}
                        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-5 sm:p-6 flex items-start gap-4">
                            <span className="relative flex h-3 w-3 mt-1 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                            </span>
                            <div>
                                <p className="text-sm font-semibold text-emerald-300">Available for hire</p>
                                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                                    Currently open to internship and junior software engineer roles.
                                    Remote or on-site in Bangladesh.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Toast */}
            {notification && (
                <Toast
                    message={notification.message}
                    type={notification.type}
                    onclose={() => setNotification(null)}
                />
            )}
        </section>
    );
}

export default Contact;