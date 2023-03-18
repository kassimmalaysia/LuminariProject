/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    minWidth:{
      '0':'0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'min': '6rem',
    },
    extend: {
      width: {
        '1/36':'2.7777778%',
      },
    },
  },
  plugins: [],
}
