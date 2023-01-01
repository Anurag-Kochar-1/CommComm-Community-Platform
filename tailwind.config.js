/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BrutalBlue1 : "#38dbff",
        BrutalOrange1 : "#ffb443",
        BrutalRed1 : "#ff5d5d",
        BrutalYellow1 : "#fff503",
        BrutalGreen1 : "#00ff75",
        BrutalPurple1 : "#dd7dff",
        BrutalBlack1 : "#000000"
      },

      fontFamily: {
        Overpass: "Overpass, cursive"
      }
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border)-BrutalBlue1/,    
    },
    {
      pattern: /(bg|text|border)-BrutalOrange1/,
    },
    {
      pattern: /(bg|text|border)-BrutalRed1/,
    },
    {
      pattern: /(bg|text|border)-BrutalYellow1/,
    },
    {
      pattern: /(bg|text|border)-BrutalGreen1/,
    },
    {
      pattern: /(bg|text|border)-BrutalPurple1/,
    },
    {
      pattern: /(bg|text|border)-BrutalBlack1/,
    }
    
  ],
  plugins: [],
}
