/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vibe': {
          // Updated 5-color palette - keeping dark theme structure
          'sienna': '#A0522D',      // Sienna Brown - Brand, headings, accents
          'blue': '#3B82F6',        // Vivid Blue - Buttons, links, CTAs  
          'white': '#F9FAFB',       // Soft White - Card backgrounds
          'gray': '#1F2937',        // Dark Gray - Text
          'purple': '#C084FC',      // Light Purple - Highlights, decoration
          
          // Dark theme mappings for existing components
          'dark': '#2C1810',        // Rich dark coffee brown
          'darker': '#1F0F08',      // Deeper espresso brown
          'accent': '#A0522D',      // Map to Sienna Brown
          'coral': '#3B82F6',       // Map to Vivid Blue
          'amber': '#C084FC',       // Map to Light Purple
          'teal': '#3B82F6',        // Map to Vivid Blue
          'magenta': '#C084FC',     // Map to Light Purple
          'cyan': '#3B82F6',        // Map to Vivid Blue
          'text': '#F9FAFB',        // Light text for dark theme
          'text-dim': '#D2B48C'     // Tan text for dark theme
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'coffee-gradient': 'linear-gradient(135deg, #2C1810 0%, #1F0F08 25%, #2C1810 50%, #3D2817 75%, #2C1810 100%)',
        'coffee-radial': 'radial-gradient(ellipse at center, #3D2817 0%, #2C1810 50%, #1F0F08 100%)',
        'wood-grain': 'linear-gradient(90deg, rgba(160, 82, 45, 0.1) 0%, transparent 50%, rgba(160, 82, 45, 0.1) 100%)',
        'coffee-steam': 'linear-gradient(180deg, rgba(249, 250, 251, 0.1) 0%, rgba(210, 180, 140, 0.05) 50%, transparent 100%)'
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'coffee-steam': 'coffee-steam 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(160, 82, 45, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(160, 82, 45, 0.6)' }
        },
        'coffee-steam': {
          '0%': { boxShadow: '0 0 20px rgba(160, 82, 45, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(160, 82, 45, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)' }
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(160, 82, 45, 0.3)',
        'glow-lg': '0 0 40px rgba(160, 82, 45, 0.4)',
        'coffee': '0 0 30px rgba(160, 82, 45, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)',
        'coffee-lg': '0 0 50px rgba(160, 82, 45, 0.6), 0 0 80px rgba(59, 130, 246, 0.4)',
        'warm': '0 4px 20px rgba(160, 82, 45, 0.2), 0 8px 40px rgba(160, 82, 45, 0.1)',
        'warm-lg': '0 8px 30px rgba(160, 82, 45, 0.3), 0 16px 60px rgba(160, 82, 45, 0.2)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
};