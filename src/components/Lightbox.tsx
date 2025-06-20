import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, imageSrc, imageAlt, onClose }) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          />

          {/* Content */}
          <motion.div
            className="relative max-w-[95vw] max-h-[95vh] flex flex-col"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Controls */}
            <div className="flex items-center justify-between mb-4 px-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleZoom}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                  aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                >
                  {isZoomed ? (
                    <>
                      <ZoomOut className="w-4 h-4" />
                      <span className="text-sm">Zoom Out</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-4 h-4" />
                      <span className="text-sm">Zoom In</span>
                    </>
                  )}
                </button>
              </div>
              
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Close lightbox"
              >
                <X className="w-4 h-4" />
                <span className="text-sm">Close</span>
              </button>
            </div>

            {/* Image Container */}
            <div className="relative overflow-auto max-h-[85vh] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <motion.img
                src={imageSrc}
                alt={imageAlt}
                className={`block mx-auto transition-all duration-300 ${
                  isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                style={{
                  maxWidth: isZoomed ? 'none' : '100%',
                  maxHeight: isZoomed ? 'none' : '85vh',
                  width: isZoomed ? 'auto' : 'auto',
                  height: isZoomed ? 'auto' : 'auto',
                  transform: isZoomed ? 'scale(1.5)' : 'scale(1)',
                  transformOrigin: 'center'
                }}
                onClick={toggleZoom}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Image Caption */}
            <motion.div
              className="mt-4 px-4 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className="text-white/80 text-sm leading-relaxed max-w-2xl mx-auto">
                {imageAlt}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;