/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '360px',
      },
      colors: {
        'blue': '#317BC0',
        'blue-light': '#D6E5F2',
        'blue-dark': '#26649D',
        'white': '#FFF',
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
