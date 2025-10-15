import React, { useState } from 'react';
import { Globe, Mail, Home, Info, BookOpen } from 'lucide-react';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'about':
                return <AboutSection />;
            case 'portfolio':
                return <PortfolioSection />;
            case 'home':
            default:
                return <HeroSection />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
            <Header onNavClick={handleNavClick} activeSection={activeSection} />

            <main className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
                {/* The content is rendered based on the active state */}
                <div className="transition-opacity duration-500 ease-in-out">
                    {renderContent()}
                </div>
            </main>

            <Footer />
        </div>
    );
};

// TODO: fix this styling so it actually uses css (is this using tailwind.css?)
const Header = ({ onNavClick, activeSection }) => (
    <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
            <h1 className="text-2xl font-extrabold text-indigo-700 tracking-tight cursor-pointer" onClick={() => onNavClick('home')}>
                Chris<span className="text-slate-900">'</span> Portfolio
            </h1>
            <nav className="flex space-x-6">
                <NavLink icon={Home} label="Home" section="home" current={activeSection} onClick={onNavClick} />
                <NavLink icon={Info} label="About" section="about" current={activeSection} onClick={onNavClick} />
                <NavLink icon={BookOpen} label="Projects" section="portfolio" current={activeSection} onClick={onNavClick} />
            </nav>
        </div>
    </header>
);

const NavLink = ({ icon: Icon, label, section, current, onClick }) => {
    const isActive = current === section;
    return (
        <button onClick={() => onClick(section)} className={`
                flex items-center space-x-1 p-2 rounded-lg transition duration-200 
                ${isActive ? 'text-indigo-700 bg-indigo-50 font-semibold' : 'text-slate-600 hover:text-indigo-700 hover:bg-slate-100'}
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}>
            <Icon className="w-5 h-5" />
            <span className="hidden sm:inline">{label}</span>
        </button>
    );
};

const HeroSection = () => (
    <section className="text-center py-20 bg-white rounded-2xl shadow-xl border border-indigo-100">
        <div className="p-8 md:p-12">
            <img
                src="https://placehold.co/150x150/5B6EED/ffffff?text=C"
                alt="Chris's Profile Picture Placeholder"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-indigo-200 shadow-inner"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/5B6EED/ffffff?text=C" }}
            />
            <h2 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-slate-900">
                Hello, I'm <span className="text-indigo-600">Chris</span>.
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
               Welcome to my reactive website.
            </p>
            <a href="#contact"
               className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium
               rounded-xl shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]
                focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
                Get in Touch
            </a>
        </div>
    </section>
);

// 3. About Section
const AboutSection = () => (
    <section className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
        <h3 className="text-4xl font-bold mb-8 text-slate-900 border-b pb-3 border-indigo-200">About Me</h3>

        <div className="space-y-6 text-lg text-slate-700">
            <p>
                I am a passionate developer with five years of experience focused primarily on **frontend engineering** and **user experience design**. My goal is to transform complex challenges into intuitive, high-performance web applications.
            </p>
            <p>
                I specialize in the modern web stack, particularly **React**, **TypeScript**, and **Tailwind CSS**, ensuring that every project is not just functional, but also beautiful and accessible across all devices.
            </p>
        </div>

        <div className="mt-10">
            <h4 className="text-2xl font-semibold mb-4 text-slate-800">Key Expertise</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma', 'Cloud Services', 'REST APIs', 'Unit Testing'].map((skill, index) => (
                    <span
                        key={index}
                        className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium text-center shadow-sm hover:shadow-md transition duration-200 cursor-default"
                    >
            {skill}
          </span>
                ))}
            </div>
        </div>
    </section>
);

// 4. Portfolio Section
const PortfolioSection = () => (
    <section className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
        <h3 className="text-4xl font-bold mb-8 text-slate-900 border-b pb-3 border-indigo-200">Recent Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
                title="E-Commerce Analytics Dashboard"
                description="A comprehensive dashboard built with React and D3.js for real-time sales visualization."
                tech={['React', 'D3.js', 'Tailwind']}
            />
            <ProjectCard
                title="Serverless Microservice API"
                description="A scalable, low-latency API designed for handling millions of requests per day."
                tech={['Node.js', 'AWS Lambda', 'DynamoDB']}
            />
        </div>

        <div className="text-center mt-12">
            <a
                href="#projects-full"
                className="text-indigo-600 hover:text-indigo-800 font-medium text-lg border-b-2 border-indigo-200 hover:border-indigo-600 transition duration-200"
            >
                View All 8 Projects &rarr;
            </a>
        </div>

    </section>
);

// Project Card Component
const ProjectCard = ({ title, description, tech }) => (
    <div className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-slate-200">
        <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
                <span key={i} className="text-xs font-semibold px-3 py-1 bg-indigo-200 text-indigo-900 rounded-full">
                    {t}
                </span>
            ))}
        </div>
    </div>
);


// 5. Footer
const Footer = () => (
    <footer className="bg-slate-900 text-white mt-16 py-8" id="contact">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Chris' Portfolio. Built with React and Tailwind CSS.
            </p>
            <div className="flex space-x-6">
                <SocialLink
                    icon={Mail}
                    href="mailto:chrisrossell1999@gmail.com"
                    label="Email Chris"
                    color="hover:text-red-400"
                />
                <SocialLink
                    icon={Globe}
                    href="https://linkedin.com/in/christopher-rossell-ab1a93196"
                    label="Chris on LinkedIn"
                    color="hover:text-blue-400"
                />
                <SocialLinkOther
                    href="https://github.com/CrisCrosse"
                    label="Chris on GitHub"
                    color="hover:text-purple-400"
                />
            </div>
        </div>
    </footer>
);

const SocialLink = ({ icon: Icon, href, label, color }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`text-slate-400 transition duration-200 ${color}`}
    >
        <Icon className="w-6 h-6" />
    </a>
);

const SocialLinkOther = ({ href, label, color }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`text-slate-400 transition duration-200 ${color}`}
    >
        <svg height="32" width="32" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    </a>
);

export default App;
