/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage:{
      topBackground: 'url(src/assets/beach.jpg)',
      bali: 'url(src/assets/bali.jpg)',
      italia: 'url(src/assets/italia.jpg)',
      ireland: 'url(src/assets/ireland.jpg)',
      sydney: 'url(src/assets/sydney.jpg)',
      paris: 'url(src/assets/paris.jpg)',

    },

    fontFamily: {
      fontypeRounded: 'Fontype Rounded',
      FuturaPT: 'Futura PT',
    }
  },
  plugins: [],
}
