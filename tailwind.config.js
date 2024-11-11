/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}"  // Added line to target the components folder
  ],
    theme: {
    extend: {
      colors: {
        primary: "#393737",
        secondary: "#1F2937",
        accent: "#888787",
      },
      fontFamily: {
        main: ["Inter", "sans-serif"],
      },
      spacing: {
        whitespacex: "1.5rem",
        whitespacey: "2.5rem",
        whitespace: "1.5rem 2.5rem",
      },
    },
  },
  plugins: [],
};
