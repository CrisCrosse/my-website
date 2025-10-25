import React, {useState} from 'react';
import { Globe, Mail, Home, Info, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa'

enum Sections {
    ABOUT,
    PORTFOLIO,
    HOME
}

const App = () => {
    const [activeSection, setActiveSection] = useState(Sections.HOME);

    const handleNavClick = (section: Sections) => {
        setActiveSection(section);
    };

    const renderContent = () => {
        switch (activeSection) {
            case Sections.ABOUT:
                return <AboutSection />;
            case Sections.PORTFOLIO:
                return <PortfolioSection />;
            case Sections.HOME:
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

interface IHeaderProps {
    onNavClick: (section: Sections) => void;
    activeSection: Sections;
}

const Header = ({ onNavClick, activeSection}: IHeaderProps) => (
    <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
            <h1 className="text-2xl font-extrabold text-indigo-700 tracking-tight cursor-pointer"
                onClick={() => onNavClick(Sections.HOME)}>
                Chris<span className="text-slate-900">'</span> Portfolio
            </h1>
            <nav className="flex space-x-6">
                <NavLink icon={<Home/>} label="Home" section={Sections.HOME} current={activeSection} onClick={onNavClick} />
                <NavLink icon={<Info/>} label="About" section={Sections.ABOUT} current={activeSection} onClick={onNavClick} />
                <NavLink icon={<BookOpen/>} label="Projects" section={Sections.PORTFOLIO} current={activeSection} onClick={onNavClick} />
            </nav>
        </div>
    </header>
);

interface NavLinkProps {
    icon: React.ReactNode;
    label: string;
    section: Sections;
    current: Sections
    onClick: (section: Sections) => void;
}

const NavLink = ( {icon, label, section, current, onClick }: NavLinkProps ) => {
    const isActive = current === section;
    return (
        <button onClick={() => onClick(section)} className={`
                flex items-center space-x-1 p-2 rounded-lg transition duration-200 
                ${isActive ? 'text-indigo-700 bg-indigo-50 font-semibold' : 'text-slate-600 hover:text-indigo-700 hover:bg-slate-100'}
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}>
            {icon}
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
                Hi, I'm <span className="text-indigo-600">Chris</span>.
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
               Welcome to my portfolio website.
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

const AboutSection = () => (
    <section className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
        <h3 className="text-4xl font-bold mb-8 text-slate-900 border-b pb-3 border-indigo-200">About Me</h3>

        <div className="space-y-6 text-lg text-slate-700">
            <p>
                I am a passionate developer with 2 years of experience of data engineering and full stack developing. My goal is to create high-performance web applications for complex challenges.
            </p>
            <p>
                I have experience with a variety of technologies and love learning new
            </p>
        </div>

        <div className="mt-10">
            <h4 className="text-2xl font-semibold mb-4 text-slate-800">Key Expertise</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["React", "NextJs", "Typescript", "Javascript", "HTML", "CSS", "Java", "SpringBoot", "Python", "Pyspark", "C#", ".NET", ".NET ASP", ".NET MVC", ".NET Razor", 'Tailwind CSS', 'REST APIs', 'Unit Testing', 'Integration Testing', 'Test Driven Development', 'Gathering user requirements'].map((skill, index) => (
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

const PortfolioSection = () => (
    <section className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
        <h3 className="text-4xl font-bold mb-8 text-slate-900 border-b pb-3 border-indigo-200">Recent Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
                title="Placeholder"
                description="A comprehensive dashboard built with React and D3.js for real-time sales visualization."
                tech={['React', 'D3.js', 'Tailwind']}
            />
            <ProjectCard
                title="Placeholder 2"
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

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
}

const ProjectCard = ({ title, description, tech }: ProjectCardProps) => (
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


const Footer = () => (
    <footer className="bg-slate-900 text-white mt-16 py-8" id="contact">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Chris' Portfolio. Built with React and Tailwind CSS.
            </p>
            <div className="flex space-x-6">
                <SocialLink
                    icon={<Mail className="w-6 h-6"/>}
                    href="mailto:chrisrossell1999@gmail.com"
                    label="Email Chris"
                    colour="hover:text-red-400"
                />
                <SocialLink
                    icon={<Globe className="w-6 h-6"/>}
                    href="https://linkedin.com/in/christopher-rossell-ab1a93196"
                    label="Chris on LinkedIn"
                    colour="hover:text-blue-400"
                />
                <SocialLink
                    icon={<FaGithub className="w-6 h-6"/>}
                    href="https://github.com/CrisCrosse"
                    label="Chris on GitHub"
                    colour="hover:text-purple-400"
                />
            </div>
        </div>
    </footer>
);

interface SocialLinkProps {
    icon: React.ReactNode;
    href: string;
    label: string;
    colour: string;
}
const SocialLink = ({ icon, href, label, colour }: SocialLinkProps) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`text-slate-400 transition duration-200 ${colour}`}
    >
        {icon}
    </a>
);
export default App;
