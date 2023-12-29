/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'clash-display': ['Clash Display', 'sans-serif'],
        'open-sans':['Open Sans', 'sans-serif']
      },
      fontWeight:{
        bold: 700,
        'semi-bold': 600,
        'medium':500,
        light: 300,
      }
    },
  },
  plugins: [require("daisyui")],
}

