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
        darkGrey: '#272828',
        borderColor: '#474747',
        green: '#00AE5B'
      },
      backgroundImage: {
        loadingPattern: "url('/src/assets/images/welcome.png')",
        loginPattern: "url('/src/assets/images/login.jpg')",
        signupPattern: "url('/src/assets/images/signup.jpg')",
        loading4Pattern: "url('/src/assets/images/landing4.png')",
        linearGradient: "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 1) 100%)",
        userImageLinearGradient: "linear-gradient(300deg,rgba(25, 161, 190, 1) 0%, rgba(125, 65, 146, 1) 100%)"
      }
    },
  },
  plugins: [],
}