/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {  
    themes: ["light"]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}