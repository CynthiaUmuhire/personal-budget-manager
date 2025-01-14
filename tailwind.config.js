/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-white': '#FFFFFF',
        'primary-anthracite': '#403F40',
        'primary-dark': '#121212',
        'primary-eggWhite': '#fffde8',
        'secondary-darkGrey1': '#B1B1B1',
        'secondary-darkGrey2': '#737373',
        'secondary-lightGrey': '#EBEBEA',
        'tertiary-errorRed': '#FF0000',
        'tertiary-successGreen': '#2CD0A8',
        'tertiary-errorLightRed': '#FEF1F1',
        'tertiary-successLightGreen': '#E9F7F2',
        'tertiary-transparent': '#ffffff00'
      }
    },
  },
  plugins: [],
}