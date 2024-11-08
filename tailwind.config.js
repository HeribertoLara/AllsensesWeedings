/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
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
        roseDark: '#9E5059', // Variante más oscura para el degradado
        grayDark: '#707070',
        grayMedium: '#747474',
      },
      fontFamily: {
        garamond: ['Garamond Premier Pro', 'serif'],
        lato: ['Lato', 'sans-serif'],
        sfPro: ['SF Pro Display', 'sans-serif'],
      },
      spacing: {
        'btn-width': '9rem',
        'btn-height': '6rem',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn-hover': {
          backgroundColor: '#B7656E', /* color de fondo base */
          color: '#ffffff',
          padding: '1rem 1.5rem',
          width: 'var(--tw-btn-width)',
          height: 'var(--tw-btn-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: 'uppercase',
          borderRadius: '0.375rem', /* rounded-md */
          position: 'relative',
          overflow: 'hidden',
          transition: 'background 0.3s ease',

          '&:hover': {
            backgroundImage: 'linear-gradient(90deg, #B7656E, #9E5059)', /* degradado en hover */
          },

          '&::before': {
            content: '""',
            position: 'absolute',
            width: '0',
            height: '2px',
            bottom: '8px',
            left: '50%',
            backgroundColor: 'white',
            transition: 'width 0.4s ease, left 0.4s ease',
          },

          '&:hover::before': {
            width: '80%',
            left: '10%',
          },
        },
      });
    },
  ],
}
