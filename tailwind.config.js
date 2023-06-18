/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    theme: {
      screens: {
        'tablet': '640px',  
        'laptop': '1024px',  
        'desktop': '1280px',
      }
    },
  plugins: [],
  }
}