/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}"  // Added line to target the components folder
  ],
    theme: {

    extend: {
      fontFamily: {
        major: "Satoshi, sans-serif",
        minor: 'Poppins, sans-serif',
     },
      colors: {
        primary: "#393737",
        secondary: "#1F2937",
        accent: "#888787",
      },
      spacing: {
        whitespace: "2rem 4.5rem",
        whitespacex: "2rem",
        whitespacey: "4.5rem",
      },
    },
    
  
  },
  
  plugins: [require('tailwindcss-motion')],
};
