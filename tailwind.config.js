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
        loadingPattern: "url('/src/assets/images/welcome.png')"
      }
    },
  },
  plugins: [],
}