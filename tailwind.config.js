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
      spacing:{
        side:'80px',
        mside:'5px'
      },
      colors:{
        main:'#192A56'
      }
    },
  },
  plugins: [],
}

