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
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
        'laptop': '1024px',
        'laptop-l': '1440px',
        // => @media (min-width: 1024px) { ... }
       'mobile':'320px',
      },
    },
  },
  plugins: [],
}