import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import SkillsSummary from './components/SkillsSummary';
import AboutPage from './components/AboutPage';
import TimelineSection from './components/TimelineSection';
import CaseStudyPreview from './components/CaseStudyPreview';
import InteractiveMetrics from './components/InteractiveMetrics';
import Footer from './components/Footer';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import AccessibilityFeatures from './components/AccessibilityFeatures';
import CopilotCaseStudy from './components/CopilotCaseStudy';
import DataActivatorCaseStudy from './components/DataActivatorCaseStudy';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'about', 'copilot-case-study', 'data-activator-case-study'
  const [navOpen, setNavOpen] = useState(false); // Responsive navigation state

  // Show Copilot Case Study Page
  if (currentPage === 'copilot-case-study') {
    return (
      <HelmetProvider>
        <div className="min-h-screen bg-white text-primary">
          <Helmet>
            <title>Microsoft Copilot Integration Case Study - Ed Miller</title>
            <meta name="description" content="Deep dive into the Microsoft Copilot integration for SQL Server Management Studio, reaching 9+ million users with AI-powered design solutions." />
          </Helmet>
          
          <AccessibilityFeatures />
          <CopilotCaseStudy onNavigate={setCurrentPage} />
          
          {/* Back Button */}
          <motion.button
            onClick={() => {
              setCurrentPage('home');
              setTimeout(() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="fixed top-8 left-8 z-50 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 text-primary hover:bg-primary-accent hover:text-white transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Portfolio
          </motion.button>
        </div>
      </HelmetProvider>
    );
  }

  // Show Data Activator Case Study Page
  if (currentPage === 'data-activator-case-study') {
    return (
      <HelmetProvider>
        <div className="min-h-screen bg-white text-primary">
          <Helmet>
            <title>Data Activator Experience Case Study - Ed Miller</title>
            <meta name="description" content="Comprehensive case study on designing Data Activator creation experience for real-time data processing and enterprise analytics." />
          </Helmet>
          
          <AccessibilityFeatures />
          <DataActivatorCaseStudy onNavigate={setCurrentPage} />
          
          {/* Back Button */}
          <motion.button
            onClick={() => {
              setCurrentPage('home');
              setTimeout(() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="fixed top-8 left-8 z-50 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 text-primary hover:bg-primary-accent hover:text-white transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Portfolio
          </motion.button>
        </div>
      </HelmetProvider>
    );
  }

  // Show About Page
  if (currentPage === 'about') {
    return (
      <HelmetProvider>
        <div className="min-h-screen bg-white text-primary">
          <Helmet>
            <title>About Ed Miller - Principal Product Designer</title>
            <meta name="description" content="Learn more about Ed Miller's journey as a Principal Product Designer at Microsoft, specializing in AI-powered user experiences and data visualization." />
          </Helmet>
          
          <AccessibilityFeatures />
          <AboutPage />
          
          {/* Back Button */}
          <motion.button
            onClick={() => setCurrentPage('home')}
            className="fixed top-8 left-8 z-50 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 text-primary hover:bg-primary-accent hover:text-white transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back
          </motion.button>
        </div>
      </HelmetProvider>
    );
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white text-primary relative overflow-x-hidden">
        <Helmet>
          <title>Ed Miller - Principal Product Designer | AI Portfolio</title>
          <meta name="description" content="Ed Miller's portfolio showcasing 15+ years of experience at Microsoft in UX design, AI interfaces, and design systems. Specializing in data-driven design solutions." />
          <meta name="keywords" content="UX Designer, AI Design, Design Systems, User Experience, Portfolio, Microsoft, Seattle" />
          <meta property="og:title" content="Ed Miller - Principal Product Designer" />
          <meta property="og:description" content="Principal Product Designer with 15+ years at Microsoft, specializing in AI-powered user experiences and data visualization" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://edmiller-portfolio.com" />
        </Helmet>

        {/* Accessibility Features */}
        {/* <AccessibilityFeatures /> */}

        {/* Navigation */}
        <motion.nav 
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary-accent via-primary to-primary/90 bg-white/60 backdrop-blur-md shadow-lg w-full"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-3 flex justify-between items-center">
            <motion.a 
              href="#hero"
              onClick={handleLogoClick}
              className="flex items-center gap-3 text-contrast hover:text-primary-accent transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shadow-md">
                <img 
                  src={import.meta.env.BASE_URL + 'avatar.png'}
                  alt="Avatar Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class=\"w-8 h-8 bg-primary-accent rounded-lg flex items-center justify-center text-white font-bold\">EM</div>';
                  }}
                />
              </div>
              <span className="text-sm sm:text-base font-medium text-white hover:text-primary-accent transition-colors duration-300" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.18)' }}>
                AI Integration & Design Innovation
              </span>
            </motion.a>
            {/* Hamburger for mobile */}
            <button
              className="sm:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent text-white"
              aria-label="Open navigation menu"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${navOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
            {/* Desktop nav */}
            <motion.div 
              className="hidden sm:flex gap-4 sm:gap-6 lg:gap-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <NavLink href="#hero" className="bg-background/80 backdrop-blur rounded-full text-primary font-bold px-5 py-2 mx-1 transition-all duration-200 hover:bg-primary-accent/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent">About</NavLink>
              <NavLink href="#projects" className="bg-background/80 backdrop-blur rounded-full text-primary font-bold px-5 py-2 mx-1 transition-all duration-200 hover:bg-primary-accent/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent">Projects</NavLink>
              <NavLink href="#impact" className="bg-background/80 backdrop-blur rounded-full text-primary font-bold px-5 py-2 mx-1 transition-all duration-200 hover:bg-primary-accent/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent">Impact</NavLink>
              <NavLink href="#history" className="bg-background/80 backdrop-blur rounded-full text-primary font-bold px-5 py-2 mx-1 transition-all duration-200 hover:bg-primary-accent/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent">History</NavLink>
              <NavLink href="#contact" className="bg-background/80 backdrop-blur rounded-full text-primary font-bold px-5 py-2 mx-1 transition-all duration-200 hover:bg-primary-accent/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent">Contact</NavLink>
            </motion.div>
          </div>
          {/* Mobile nav menu */}
          {navOpen && (
            <div className="sm:hidden bg-primary/90 backdrop-blur shadow-lg px-6 py-6 flex flex-col gap-6 text-lg font-semibold">
              <NavLink href="#hero" className="bg-background/80 backdrop-blur rounded-full text-primary font-bold px-5 py-2 my-1 transition-all duration-200 hover:bg-primary-accent/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent">About</NavLink>
              <NavLink href="#projects" className="bg-background/80 backdrop-blur rounded-full text-primary font-bold px-5 py-2 my-1 transition-all duration-200 hover:bg-primary-accent/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent">Projects</NavLink>
              <NavLink href="#impact" className="bg-background/80 backdrop-blur rounded-full text-primary font-bold px-5 py-2 my-1 transition-all duration-200 hover:bg-primary-accent/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent">Impact</NavLink>
              <NavLink href="#history" className="bg-background/80 backdrop-blur rounded-full text-primary font-bold px-5 py-2 my-1 transition-all duration-200 hover:bg-primary-accent/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent">History</NavLink>
              <NavLink href="#contact" className="bg-background/80 backdrop-blur rounded-full text-primary font-bold px-5 py-2 my-1 transition-all duration-200 hover:bg-primary-accent/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-accent">Contact</NavLink>
            </div>
          )}
        </motion.nav>

        {/* Main Content */}
        <main id="main-content" className="snap-y snap-mandatory">
          {/* Skills Summary - Hero Section */}
          <section id="hero" className="snap-start min-h-[calc(100vh-4rem)] flex flex-col justify-center">
            <SkillsSummary onNavigate={setCurrentPage} />
          </section>

          {/* Projects Section */}
          <section id="projects" className="snap-start min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-gray-50">
            <CaseStudyPreview onNavigate={setCurrentPage} />
          </section>

          {/* Impact Section */}
          <section id="impact" className="snap-start min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-gray-50">
            <InteractiveMetrics />
          </section>

          {/* History Section (Timeline) */}
          <section id="history" className="snap-start min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-white">
            <TimelineSection />
          </section>
        </main>

        {/* Contact Section / Footer */}
        <section id="contact" className="snap-start min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-white">
          <Footer />
        </section>

        {/* Interactive Elements */}
        <ScrollProgressIndicator />
      </div>
    </HelmetProvider>
  );
}

function NavLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={`text-indigo-800 hover:text-indigo-900 transition-colors duration-300 font-medium text-sm sm:text-base ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

export default App;