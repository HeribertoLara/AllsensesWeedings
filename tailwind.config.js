/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}', 
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',         
        lightGray: '#b2b2b2',     
        rose: '#B7656E',          
        grayDark: '#707070',       
        grayMedium: '#747474',     
      },
      fontFamily: {
        garamond: ['Garamond Premier Pro', 'serif'],
        lato: ['Lato', 'sans-serif'],
        sfPro: ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
