import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Updated sections to match new structure
  const sections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'case-studies', label: 'Case Studies', icon: '💼' },
    { id: 'impact', label: 'Impact', icon: '📊' },
    { id: 'history', label: 'History', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine active section
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      const currentSection = sectionElements.find(element => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
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
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-vibe-sienna to-vibe-blue rounded-full"
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
                ? 'text-vibe-sienna' 
                : 'text-gray-500 hover:text-vibe-sienna'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
          >
            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-vibe-sienna border-vibe-sienna scale-125'
                : 'border-gray-400 hover:border-vibe-sienna/70 bg-white'
            }`} />
          </motion.button>
        ))}
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="mt-8 flex flex-col items-center"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-xs text-gray-600 text-center">
          Scroll
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-vibe-sienna to-transparent mt-2" />
      </motion.div>
    </div>
  );
};

export default ScrollProgressIndicator;