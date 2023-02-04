/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Robot':['Roboto', 'sans-serif'],
        'Satoshi':['Satoshi', 'sans-serif'],
        'frank':['Libre Franklin', 'sans-serif'],
        
      },
      colors:{
        'zain':['#f472b6'],
        'whity':['#ffff'],
        'blacky':['#232323'],
        'pinkish':['#ff4847'],
        'graywhite':['#565656'],
      },
    },
  },
  plugins: [],
}
