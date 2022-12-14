/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  themes: [
    {
      mytheme: {
      
"primary": "#3bd3ce",
    
"secondary": "#dbba67",
      
"accent": "#860fc6",
      
"neutral": "#cccccc",
      
"base-100": "#37393E",
      
"info": "#A0C0F3",
      
"success": "#73DEB5",
      
"warning": "#F7AC4A",
      
"error": "#EF1A3A",
      },
    },
  ],

    
 
  plugins: [require("daisyui")],
}
 