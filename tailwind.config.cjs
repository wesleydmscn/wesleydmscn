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
        'dark': '#111010',
        'dark-gray': '#262626',
        'gray': '#A3A3A3',
        'white': '#FFF',
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
