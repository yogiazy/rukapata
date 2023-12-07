/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/app.js'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: 'rgb(20 184 166)',
        dark: 'rgb(15 23 42)',
        dark2: 'rgb(100 116 139)',
        dark3: 'rgb(148 163 184)'
      }
    },
  },
  plugins: [],
}

