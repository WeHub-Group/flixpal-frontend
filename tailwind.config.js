/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#800080',
        black: '#16161c',
        white: '#ffffff',
        grey: '#D9D9D9'
      },
      backgroundImage: {
        loadingPattern: "url('/src/assets/images/welcome.png')",
        linearGradient: "linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(15, 16, 16, 0.80) 34.9%, #0F1010 100%)"
      },
      fontFamily: {
        kanit: 'Kanit'
      }
    },
  },
  plugins: [],
}