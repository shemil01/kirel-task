/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(51,42,188,1) 50%, rgba(64,52,235,1) 50%)',
      },
    },
  },
  plugins: [],
}