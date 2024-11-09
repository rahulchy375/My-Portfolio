/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        josefin: ["Josefin Sans", "sans-serif"],
        sail:[ "Sail", "system-ui"]
      },
      boxShadow:{
        "dark" : "0px 0px 15px 0px #0ef",
        'light' : '0px 0px 15px 0px tomato',
        "serviceLight": "tomato 0px 5px 15px 0px",
        "serviceDark": "#0ef 0px 5px 15px 0px"
      },
      keyframes: {
        light: {
          '0%': { boxShadow: '0px 0px 15px 0px rgb(11, 11, 11)' },
          '20%': { boxShadow: '0px 0px 15px 0px rgb(74, 55, 52)' },
          '40%': { boxShadow: '0px 0px 15px 0px rgb(220, 121, 106)' },
          '50%': { boxShadow: 'rgb(254, 57, 22) 0px 0px 15px 0px' },
          '60%': { boxShadow: '0px 0px 15px 0px rgb(220, 121, 106)' },
          '80%': { boxShadow: '0px 0px 15px 0px rgb(74, 55, 52)' },
          '100%': { boxShadow: '0px 0px 15px 0px rgb(11, 11, 11)' },

        },
        dark:{
          '0%': { boxShadow: 'rgb(14, 17, 17) 0px 0px 15px 0px ' },
          '20%': { boxShadow: 'rgb(81, 148, 153) 0px 0px 15px 0px ' },
          '40%': { boxShadow: 'rgb(109, 237, 246) 0px 0px 15px 0px' },
          '50%': { boxShadow: '#0ef 0px 0px 15px 0px' },
          '60%': { boxShadow: 'rgb(109, 237, 246) 0px 0px 15px 0px' },
          '80%': { boxShadow: 'rgb(81, 148, 153) 0px 0px 15px 0px' },
          '100%': { boxShadow: 'rgb(14, 17, 17) 0px 0px 15px 0px' },
        },
        skill:{
          '0%':{width:'0%'},
          '100%':{width:'100%'}
        }
      },
      animation: {
        'box-glow': 'light 5s ease-in-out infinite', // Customize duration and timing
        'box-dark-glow': 'dark 5s ease-in-out infinite', // Customize duration and timing
        'skill':'skill 3s ease-in-out',
      },
    },
  },
  darkMode:"class",
  plugins: [],
}