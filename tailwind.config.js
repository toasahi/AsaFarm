module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '400px',
        lg: '550px',
        xl: '600px',
      },
      textColor: {
        primary: '#1b1b1b',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus'],
      opacity: ['active'],
      boxShadow: ['active'],
      borderWidth: ['hover', 'focus'],
      textColor: ['active'],
    },
  },
  plugins: [],
};
