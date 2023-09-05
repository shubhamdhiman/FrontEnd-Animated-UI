/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        width: {
          '90': '90%',
          '120':'40rem'
        },
        height:{
          '90':'90%',
          '120':'40rem'
        }
    },
  },
  plugins: [],
}