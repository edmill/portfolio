import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Updated sections to match new structure
  const sections = [
    { id: 'hero', label: 'About', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'impact', label: 'Impact', icon: '📊' },
    { id: 'history', label: 'History', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine the section whose center is closest to the viewport center
      const viewportCenter = window.innerHeight / 2;
      let closestSectionId = sections[0].id;
      let minDistance = Infinity;
      sections.forEach(section => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestSectionId = section.id;
          }
        }
      });
      setActiveSection(closestSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      {/* Progress Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-1 h-64 bg-gray-300 rounded-full overflow-hidden border border-gray-400">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-accent to-indigo-800 rounded-full"
            style={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Section Navigation */}
      <div className="flex flex-col items-center space-y-4">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group relative flex items-center justify-center transition-all duration-300 ${
              activeSection === section.id 
                ? 'text-primary-accent' 
                : 'text-gray-500 hover:text-primary-accent'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
          >
            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-primary-accent border-primary-accent scale-125'
                : 'border-gray-400 hover:border-primary-accent/70 bg-white'
            }`} />
          </motion.button>
        ))}
      </div>

      {/* Scroll Hint with Animated Arrow */}
      <div className="mt-8 flex flex-col items-center">
        <div className="text-xs text-gray-600 text-center mb-2">Scroll</div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-6 h-6 text-primary-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollProgressIndicator;