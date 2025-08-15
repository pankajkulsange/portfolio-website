/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0C10',
          border: '#1F2833',
        },
        purple: {
          primary: '#9333EA',
          400: '#A855F7',
        },
        white: '#FFFFFF',
        gray: {
          300: '#C5C6C7',
          400: '#9CA3AF',
        },
        neon: {
          green: '#39FF14',
          blue: '#00FFF7',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'underline-slide': 'underlineSlide 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        underlineSlide: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}
