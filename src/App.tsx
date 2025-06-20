import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import SkillsSummary from './components/SkillsSummary';
import AboutPage from './components/AboutPage';
import TimelineSection from './components/TimelineSection';
import CaseStudyPreview from './components/CaseStudyPreview';
import InteractiveMetrics from './components/InteractiveMetrics';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import AccessibilityFeatures from './components/AccessibilityFeatures';
import ParallaxSection from './components/ParallaxSection';
import CopilotCaseStudy from './components/CopilotCaseStudy';
import DataActivatorCaseStudy from './components/DataActivatorCaseStudy';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'about', 'copilot-case-study', 'data-activator-case-study'

  // Show Copilot Case Study Page
  if (currentPage === 'copilot-case-study') {
    return (
      <HelmetProvider>
        <div className="min-h-screen bg-vibe-dark text-vibe-text">
          <Helmet>
            <title>Microsoft Copilot Integration Case Study - Ed Miller</title>
            <meta name="description" content="Deep dive into the Microsoft Copilot integration for SQL Server Management Studio, reaching 9+ million users with AI-powered design solutions." />
          </Helmet>
          
          <AccessibilityFeatures />
          <CopilotCaseStudy onNavigate={setCurrentPage} />
          
          {/* Back Button */}
          <motion.button
            onClick={() => setCurrentPage('home')}
            className="fixed top-8 left-8 z-50 px-6 py-3 bg-vibe-dark/90 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-vibe-accent hover:border-vibe-accent transition-all duration-300 flex items-center gap-2"
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
        <div className="min-h-screen bg-vibe-dark text-vibe-text">
          <Helmet>
            <title>Data Activator Experience Case Study - Ed Miller</title>
            <meta name="description" content="Comprehensive case study on designing Data Activator creation experience for real-time data processing and enterprise analytics." />
          </Helmet>
          
          <AccessibilityFeatures />
          <DataActivatorCaseStudy onNavigate={setCurrentPage} />
          
          {/* Back Button */}
          <motion.button
            onClick={() => setCurrentPage('home')}
            className="fixed top-8 left-8 z-50 px-6 py-3 bg-vibe-dark/90 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-vibe-accent hover:border-vibe-accent transition-all duration-300 flex items-center gap-2"
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
        <div className="min-h-screen bg-vibe-dark text-vibe-text">
          <Helmet>
            <title>About Ed Miller - Principal Product Designer</title>
            <meta name="description" content="Learn more about Ed Miller's journey as a Principal Product Designer at Microsoft, specializing in AI-powered user experiences and data visualization." />
          </Helmet>
          
          <AccessibilityFeatures />
          <AboutPage />
          
          {/* Back Button */}
          <motion.button
            onClick={() => setCurrentPage('home')}
            className="fixed top-8 left-8 z-50 px-6 py-3 bg-vibe-dark/90 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-vibe-accent hover:border-vibe-accent transition-all duration-300 flex items-center gap-2"
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
      <div className="min-h-screen bg-vibe-dark text-vibe-text relative overflow-x-hidden">
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
        <AccessibilityFeatures />

        {/* Background Elements */}
        <ParticleBackground />
        
        {/* Navigation */}
        <motion.nav 
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-vibe-dark/80 border-b border-white/10 w-full"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut", 
            delay: 0.2 
          }}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6 flex justify-between items-center">
            <motion.a 
              href="#hero"
              onClick={handleLogoClick}
              className="flex items-center gap-3 text-vibe-text-dim hover:text-vibe-text transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="/avatar.png" 
                  alt="Ed Miller Avatar" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if avatar fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-8 h-8 bg-vibe-sienna rounded-lg flex items-center justify-center text-white font-bold">EM</div>';
                  }}
                />
              </div>
              <span className="text-sm sm:text-base font-medium bg-gradient-to-r from-vibe-accent to-vibe-blue bg-clip-text text-transparent">
                AI Integration & Design Innovation
              </span>
            </motion.a>
            <motion.div 
              className="flex gap-4 sm:gap-6 lg:gap-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <NavLink href="#hero">Home</NavLink>
              <NavLink href="#case-studies">Case Studies</NavLink>
              <NavLink href="#impact">Impact</NavLink>
              <NavLink href="#history">History</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button
                onClick={() => setCurrentPage('about')}
                className="text-vibe-text-dim hover:text-vibe-text transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                About
              </button>
            </motion.div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <main id="main-content">
          {/* Skills Summary - New front page */}
          <section id="hero">
            <SkillsSummary onNavigate={setCurrentPage} />
          </section>

          {/* Case Studies Section */}
          <section id="case-studies">
            <CaseStudyPreview onNavigate={setCurrentPage} />
          </section>

          {/* Impact Section */}
          <section id="impact">
            <ParallaxSection speed={0.2}>
              <InteractiveMetrics />
            </ParallaxSection>
          </section>

          {/* History Section (Timeline) */}
          <section id="history">
            <TimelineSection />
          </section>
        </main>

        {/* Contact Section */}
        <section id="contact">
          <Footer />
        </section>

        {/* Interactive Elements */}
        <ScrollProgressIndicator />
      </div>
    </HelmetProvider>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
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
      className="text-vibe-text-dim hover:text-vibe-text transition-colors duration-300 font-medium text-sm sm:text-base"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

export default App;