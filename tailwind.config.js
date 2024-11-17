/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      height: {
        '50vh': '50vh', // 50% de la altura de la viewport
        '70vh': '70vh', // 75% de la altura de la viewport
      },
      animation: {
        gradient: 'gradientBG 2s ease infinite',
      },
      keyframes: {
        gradientBG: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    }
  }
};
