/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'proyect-green': '#2fcc87',
      }, boxShadow: {
        '3xl': '0 40px 72px -0px rgba(0, 0, 0, 0.3)',
      }, backgroundImage: {
        'website-bg': "url('../img/back.jpg')",
      },padding: {
        '100': '600px',
        '102': '850px',
      }
    },
  },
  plugins: [],
}

