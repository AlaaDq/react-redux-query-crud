/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    // override default
    // screens: {
    // 'sm': '640px',
    // // => @media (min-width: 640px) { ... }
    // 'md': '768px',
    // // => @media (min-width: 768px) { ... }
    // 'lg': '1024px',
    // // => @media (min-width: 1024px) { ... }
    // 'xl': '1280px',
    // "2xl": "1368px",
    // // => @media (min-width: 1368px) { ... }
    // "3xl": "1440px",
    // // => @media (min-width: 1440px) { ... }
    // },
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      // screens: {
      //   '3xl': '1600px',
      // }
      // SCSS
      // --------------------------------------------------------
      colors: {
        primary: {
          DEFAULT: '#fcbf28',
        },
        secondary: {
          DEFAULT: '#313131', // desc
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, addComponents }) {
      const newUtilities = {};
      const newComponents = {
        '.boundaries': {
          '@apply border border-secondary': '',
        },
      };
      addUtilities(newUtilities);
      addComponents(newComponents);
    },
  ],
};
