import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showCharacter, setShowCharacter] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true);
  
  const { scrollY } = useScroll();
  
  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const characterY = useTransform(scrollY, [0, 1000], [0, -100]);
  const textY = useTransform(scrollY, [0, 1000], [0, -150]);

  // Updated carousel content with only existing images
  const slides = [
    {
      title: "Welcome",
      content: "I'm Ed Miller, an experience designer based in the greater Seattle area with a background that spans user interface development, immersive 3D design, and most recently, AI-integrated UX for enterprise tools.",
      avatar: import.meta.env.BASE_URL + 'standing001.png'
    },
    {
      title: "My Journey",
      content: "I began my career as a UI developer and quickly found myself drawn to the broader world of user experience. Over the years, I've had the opportunity to work across the UX spectrum, building test automation systems, designing 3D environments for IT security, and creating tools that empower users through intelligent systems.",
      avatar: import.meta.env.BASE_URL + 'working001.png'
    },
    {
      title: "Current Focus",
      content: "Today, I focus on AI innovation and storytelling through interaction. I'm deeply curious by nature and thrive on solving complex challenges for real users. Much of my work revolves around exploring how AI can accelerate human potential, simplify complexity, and enrich everyday workflows.",
      avatar: import.meta.env.BASE_URL + 'marker001.png'
    },
    {
      title: "Let's Connect",
      content: "I love prototyping, whether it's a browser extension, Figma plugin, or a full-stack app. I believe that building is the fastest path to learning. Collaboration is at the heart of my process, and I enjoy partnering with people from all disciplines.",
      avatar: import.meta.env.BASE_URL + 'yay001.png',
      showEmail: true
    }
  ];

  // Auto-advance carousel with pause functionality
  useEffect(() => {
    if (!isAutoAdvancing) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length, isAutoAdvancing]);

  // Auto-play video when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log('Auto-play prevented:', error);
      });
    }
  }, []);

  // Handle window resize and character visibility
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      const textPanelWidth = Math.min(Math.max(450, width * 0.38), 550);
      const rightMargin = 120;
      const leftEdge = 60;
      const availableCharacterSpace = width - textPanelWidth - rightMargin - leftEdge;
      const characterMinWidth = 280;
      
      const shouldShowCharacter = availableCharacterSpace >= characterMinWidth;
      setShowCharacter(shouldShowCharacter);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCharacterStyles = () => {
    const textPanelWidth = Math.min(Math.max(450, windowWidth * 0.38), 550);
    const rightMargin = 120;
    const leftEdge = 60;
    const availableCharacterSpace = windowWidth - textPanelWidth - rightMargin - leftEdge;
    
    const characterWidth = Math.min(Math.max(280, availableCharacterSpace * 0.8), 420);
    const characterLeft = leftEdge + (availableCharacterSpace - characterWidth) / 2;
    
    return {
      left: `${characterLeft}px`,
      width: `${characterWidth}px`,
    };
  };

  const getTextPanelStyles = () => {
    const textPanelWidth = Math.min(Math.max(450, windowWidth * 0.38), 550);
    const rightMargin = 120;
    
    return {
      width: `${textPanelWidth}px`,
      right: `${rightMargin}px`,
    };
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoAdvancing(false);
    setTimeout(() => setIsAutoAdvancing(true), 15000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoAdvancing(false);
    setTimeout(() => setIsAutoAdvancing(true), 15000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoAdvancing(false);
    setTimeout(() => setIsAutoAdvancing(true), 15000);
  };

  const toggleAutoAdvance = () => {
    setIsAutoAdvancing(!isAutoAdvancing);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Animated Video Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={() => {
            console.log('Video failed to load, showing fallback');
          }}
        >
          <source src={import.meta.env.BASE_URL + 'cafe-ani.mp4'} type="video/mp4" />
        </video>
        {/* Fallback background if video fails */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center opacity-0 peer-[video]:opacity-100">
          <div className="text-center text-gray-600">
            <div className="text-6xl mb-4">☕</div>
            <p>Coffee Shop Background</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content Container */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full flex items-start justify-center pt-[140px]">
          
          {/* Text Panel - Carousel Design */}
          <motion.div
            className="absolute z-20"
            style={{ 
              y: textY,
              height: 'clamp(500px, 65vh, 700px)',
              top: '100px',
              ...getTextPanelStyles()
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Carousel Container */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl h-full flex flex-col overflow-hidden shadow-2xl border-2 border-gray-200">
              
              {/* Carousel Header */}
              <div className="p-6 border-b border-gray-200 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <motion.h2 
                    key={`title-${currentSlide}`}
                    className="text-2xl font-bold text-vibe-gray text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h2>
                  <div className="text-sm text-gray-500">
                    {currentSlide + 1} / {slides.length}
                  </div>
                </div>
              </div>

              {/* Carousel Content */}
              <div className="flex-1 relative overflow-hidden min-h-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${currentSlide}`}
                    className="absolute inset-0 p-6 flex flex-col justify-start h-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-normal text-left mb-6 flex-shrink-0">
                      {slides[currentSlide].content}
                    </p>
                    
                    {/* Email Section - Only show on last slide */}
                    {slides[currentSlide].showEmail && (
                      <motion.div
                        className="mt-auto flex-shrink-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <div className="bg-gray-100 rounded-2xl p-4 border-2 border-gray-200">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-vibe-blue to-vibe-purple rounded-full flex items-center justify-center flex-shrink-0">
                              <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm text-gray-600 mb-1">Get in touch</p>
                              <a 
                                href="mailto:edmill@outlook.com"
                                className="text-vibe-gray font-medium hover:text-vibe-blue transition-colors duration-300 text-lg break-all"
                              >
                                edmill@outlook.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Controls */}
              <div className="p-6 border-t border-gray-200 flex-shrink-0">
                <div className="flex items-center justify-between">
                  {/* Dot Indicators */}
                  <div className="flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-vibe-blue/50 ${
                          index === currentSlide 
                            ? 'bg-vibe-blue scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Auto-advance toggle */}
                  <button
                    onClick={toggleAutoAdvance}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-vibe-blue/50"
                  >
                    {isAutoAdvancing ? (
                      <Pause className="w-3 h-3 text-gray-600" />
                    ) : (
                      <Play className="w-3 h-3 text-gray-600" />
                    )}
                    <span className="text-xs text-gray-600">
                      {isAutoAdvancing ? 'Pause' : 'Play'}
                    </span>
                  </button>

                  {/* Navigation Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-vibe-blue/50"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-vibe-blue/50"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Character Container */}
          {showCharacter && (
            <motion.div
              className="absolute z-30"
              style={{ 
                y: characterY,
                filter: 'drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.7)) drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.5)) drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.4))',
                ...getCharacterStyles(),
                top: '50px',
                height: 'calc(100vh - 100px)',
                transform: 'translateZ(0)',
                overflow: 'visible'
              }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={`avatar-${currentSlide}`}
                  src={slides[currentSlide].avatar}
                  alt={`Ed Miller - ${slides[currentSlide].title}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center bottom',
                    filter: 'brightness(0.95) contrast(1.05)',
                    display: 'block'
                  }}
                  onError={(e) => {
                    // Fallback if image fails to load - hide the image gracefully
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    console.log(`Failed to load image: ${target.src}`);
                    
                    // Create a fallback placeholder
                    const placeholder = document.createElement('div');
                    placeholder.className = 'w-full h-full flex items-center justify-center text-gray-400';
                    placeholder.innerHTML = `
                      <div class="text-center">
                        <div class="text-6xl mb-4">👤</div>
                        <p class="text-lg">Character Image</p>
                      </div>
                    `;
                    target.parentElement?.appendChild(placeholder);
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded: ${slides[currentSlide].avatar}`);
                  }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.9,
                    rotateY: -15 
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotateY: 0 
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.9,
                    rotateY: 15 
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut",
                    scale: { duration: 0.6 },
                    rotateY: { duration: 0.8 }
                  }}
                />
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;