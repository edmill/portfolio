import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Type, Contrast, Volume2, VolumeX, Settings } from 'lucide-react';

const AccessibilityFeatures: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    soundEnabled: true,
    focusIndicators: true
  });

  useEffect(() => {
    // Apply accessibility settings to document
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    if (settings.focusIndicators) {
      root.classList.add('enhanced-focus');
    } else {
      root.classList.remove('enhanced-focus');
    }
  }, [settings]);

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const accessibilityOptions = [
    {
      key: 'highContrast' as const,
      icon: Contrast,
      label: 'High Contrast',
      description: 'Increase color contrast for better visibility'
    },
    {
      key: 'largeText' as const,
      icon: Type,
      label: 'Large Text',
      description: 'Increase font size for better readability'
    },
    {
      key: 'reducedMotion' as const,
      icon: settings.reducedMotion ? EyeOff : Eye,
      label: 'Reduce Motion',
      description: 'Minimize animations and transitions'
    },
    {
      key: 'soundEnabled' as const,
      icon: settings.soundEnabled ? Volume2 : VolumeX,
      label: 'Sound Effects',
      description: 'Enable audio feedback for interactions'
    }
  ];

  return (
    <>
      {/* Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full border-2 border-gray-200 flex items-center justify-center text-vibe-gray hover:text-vibe-blue hover:border-vibe-blue transition-colors shadow-lg focus:outline-none focus:ring-4 focus:ring-vibe-blue/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Settings"
      >
        <Settings className="w-5 h-5" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-22 right-8 z-50 w-80 bg-white/95 backdrop-blur-xl rounded-2xl border-2 border-gray-200 shadow-2xl p-6"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-vibe-gray mb-4">
              Accessibility Settings
            </h3>

            <div className="space-y-4">
              {accessibilityOptions.map((option) => (
                <div key={option.key} className="flex items-start gap-3">
                  <button
                    onClick={() => toggleSetting(option.key)}
                    className={`flex-shrink-0 w-12 h-6 rounded-full transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-vibe-blue/50 ${
                      settings[option.key]
                        ? 'bg-vibe-blue'
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Toggle ${option.label}`}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full shadow-sm"
                      animate={{
                        x: settings[option.key] ? 26 : 2
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </button>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <option.icon className="w-4 h-4 text-vibe-blue" />
                      <span className="font-medium text-vibe-gray">
                        {option.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Keyboard Shortcuts Info */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-vibe-gray mb-2">
                Keyboard Shortcuts
              </h4>
              <div className="space-y-1 text-xs text-gray-600">
                <div>Tab - Navigate elements</div>
                <div>Space/Enter - Activate buttons</div>
                <div>Esc - Close modals</div>
                <div>Arrow keys - Navigate sections</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-vibe-blue focus:text-white focus:rounded-lg focus:font-medium"
      >
        Skip to main content
      </a>
    </>
  );
};

export default AccessibilityFeatures;