/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5A7B91',
        'primary-accent': '#FF7A59', // Vibrant accent for gradients and highlights
        accent: '#F4B400',
        background: '#F8FAFC',
        contrast: '#1A1A1A',
        cta: '#007ACC',
      },
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      black: '#000',
      white: '#fff',
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0,0,0,0.03)',
        md: '0 4px 6px -1px rgba(0,0,0,0.05)',
        none: 'none',
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
    },
  },
  plugins: [],
};