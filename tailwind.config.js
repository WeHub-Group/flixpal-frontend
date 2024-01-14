/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        min: '0.75rem'/* 14px */
      },
      colors: {
        purple: '#800080',
        black: '#16161c',
        white: '#ffffff',
        grey: '#D9D9D9',
        inputBackground: '#272828'
      },
      backgroundImage: {
        loadingPattern: "url('/src/assets/images/welcome.png')",
        loading4Pattern: "url('/src/assets/images/landing4.png')",
        linearGradient: "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 1) 100%)"
      }
    },
  },
  plugins: [],
}