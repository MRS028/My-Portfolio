import React, { useState, useEffect } from "react";
import AnimatedBackground from '@/Components/AnimatedBackground/AnimatedBackground';

// --- Self-contained Components (to remove dependencies) ---

// Replicated SectionTitle component
const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-gray-400">{subtitle}</p>}
        <div className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
    </div>
);

// Custom Toast/Notification component to replace SweetAlert
const Toast = ({ message, type, onclose }) => {
    useEffect(() => {
        const timer = setTimeout(onclose, 5000); // Auto-close after 5 seconds
        return () => clearTimeout(timer);
    }, [onclose]);

    // Base styles for the toast modal itself
    const baseStyle = "max-w-sm w-full p-6 rounded-xl shadow-2xl text-white";
    const typeStyles = {
        success: "bg-green-600/80 backdrop-blur-sm border border-green-500",
        error: "bg-red-600/80 backdrop-blur-sm border border-red-500",
    };

    return (
        // This outer div will act as an overlay and center the toast
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onclose} // Close when clicking the overlay
        >
            {/* This is the actual toast content, stop propagation to prevent closing when clicked */}
            <div
                className={`${baseStyle} ${typeStyles[type]}`}
                onClick={(e) => e.stopPropagation()}
            >
                <p className="font-bold text-lg">{type === 'success' ? 'Success!' : 'Error!'}</p>
                <p className="mt-2">{message}</p>
            </div>
        </div>
    );
};

// --- Inline SVG Icons (replaces react-icons) ---
const GithubIcon = ({ className = "", ...props }) => (
  <svg className={className} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
  </svg>
);

const LinkedinIcon = ({ className = "", ...props }) => (
  <svg className={className} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.002 1.808-2.002 1.808 0v8.396h4.98v-10.396c0-3.453-2.924-4.214-4.98-1.802v-3.802z"></path>
  </svg>
);

const EnvelopeIcon = ({ className = "", ...props }) => (
  <svg className={className} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
  </svg>
);

const InstagramIcon = ({ className = "", ...props }) => (
  <svg className={className} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path>
  </svg>
);

const PaperPlaneIcon = ({ className = "", ...props }) => (
  <svg className={className} width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.43,2.57,2.57,11.43a1,1,0,0,0,.08,1.9L8,15.21V21a1,1,0,0,0,1.55.83L12.4,19,16,21.55a1,1,0,0,0,1.55-.83V15.21l1.88-1.88a1,1,0,0,0,.21-1.09L22.57,3.43a1,1,0,0,0-1.14-.86Z"></path>
  </svg>
);

// --- Main Contact Component ---
function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState(null); // {message: '', type: ''}

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formData.name || !formData.email || !formData.message) {
            setNotification({ message: 'Please fill out all fields!', type: 'error' });
            setIsSubmitting(false);
            return;
        }
        
        // Mock emailjs submission
        try {
            // In a real app, you would have your emailjs.sendForm call here.
            // We'll simulate a successful submission.
            await new Promise(resolve => setTimeout(resolve, 1500)); 
            
            setNotification({ message: 'Message Sent! Thank you for reaching out.', type: 'success' });
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            setNotification({ message: 'Something went wrong. Please try again.', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { icon: <GithubIcon className="text-2xl" />, url: "https://github.com/MRS028", label: "GitHub" },
        { icon: <LinkedinIcon className="text-2xl" />, url: "https://www.linkedin.com/in/mdrifatsheikh", label: "LinkedIn" },
        { icon: <InstagramIcon className="text-2xl"/>, url: "https://www.instagram.com", label: "Instagram" },
        { icon: <EnvelopeIcon className="text-2xl" />, url: "mailto:skrifat483@gmail.com", label: "Email" },
    ];

    return (
        <section id="contact" className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white overflow-hidden">
            <AnimatedBackground />
            <div className="relative z-10 max-w-7xl mx-auto">
                <SectionTitle title="Get In Touch" subtitle="Let's build something amazing together." />

                <div className="flex flex-col lg:flex-row gap-12 mt-12">
                    {/* Contact Form */}
                    <div className="w-full lg:w-1/2 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-green-400">Send me a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Your Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Your Message</label>
                                <textarea id="message" name="message" rows="5" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="Hello, I would like to talk about..." required ></textarea>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Sending...' : <><PaperPlaneIcon className="h-5 w-5" /> Send Message</>}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Illustration */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-green-400">Contact Information</h3>
                                <p className="text-gray-300 mb-6">
                                    Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>
                                <div className="space-y-4">
                                    {socialLinks.map((link, index) => (
                                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105">
                                            <div className="p-3 bg-gray-600/50 rounded-full">{link.icon}</div>
                                            <span className="font-medium text-lg">{link.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notification Toast */}
                {notification && (
                    <Toast
                        message={notification.message}
                        type={notification.type}
                        onclose={() => setNotification(null)}
                    />
                )}
            </div>
        </section>
    );
}

export default Contact;
