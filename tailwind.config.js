const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
        zIndex: {
        'neg': '-1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}