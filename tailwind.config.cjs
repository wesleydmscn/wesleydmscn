/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '22.5rem',
      },
      colors: {
        'blue': '#317BC0',
        'blue-dark': '#0D1117',
        'white': '#FFF',
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
