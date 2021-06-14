module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // borderWidth: ['hover'],
      cursor: ['hover', 'focus'],
      opacity: ['active'],
      boxShadow: ['active'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
};
