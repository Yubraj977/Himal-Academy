/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'himalb': "url('/himalb.jpeg')",
        
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
        playwrite:["Playwrite NZ", 'cursive'],
        conden:["Roboto Condensed", 'sans-serif'],
        lato:["Lato", 'sans-serif'],
        opensans:["Open Sans", 'sans-serif']
      },
      spacing:{
        side:'80px',
        mside:'15px',
        top:'75px'
      },
      colors:{
        main:'#192A56',
        second:'#AE1438'
      }
    },
  },
  plugins: [],
}

