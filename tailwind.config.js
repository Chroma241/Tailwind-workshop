/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js}','./**/*.{html,js}'], 
  theme: {
    extend: {
      "spacing":{
        "icon":"0.7rem"
      },
      "colors":{
        "header-bg": "rgba(24, 24, 24, .8)",
        "footer-bg": "#f7f7f7", 
      },
      "borderWidth":{
        "thin":"1px"
      }
    },
  },
  plugins: [],
}

