/* eslint-disable */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      animation: {
        'bounce-left': 'bounce-h 1s infinite',
        'bounce-up': 'bounce 1s infinite',
      },
      keyframes: {
        'bounce-h': {
          '0%, 100%': {
              transform: 'translateX(-25%)',
              'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
              transform: 'none',
              'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
          }
        }
      }
    },
  },
  plugins: [],
}
