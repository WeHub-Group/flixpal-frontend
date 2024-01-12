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
<<<<<<< Updated upstream
        linearGradient: "linear-gradient(180deg, rgba(15, 16, 16, 0.80) 0%, rgba(15, 16, 16, 0.80) 34.9%, #0F1010 100%)"
=======
        loading4Pattern: "url('/src/assets/images/landing4.png')",
        linearGradient: "linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.70) 40%,rgba(0, 0, 0, 1) 100%)"
      },
      fontFamily: {
        kanit: 'Kanit'
>>>>>>> Stashed changes
      }
    },
  },
  plugins: [],
}