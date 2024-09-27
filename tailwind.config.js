/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      sans: ['Roboto', 'sans-serif'], // Use Roboto as your global sans-serif font
    }},
  },
  plugins: [],
}