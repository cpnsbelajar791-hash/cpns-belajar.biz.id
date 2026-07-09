/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#071725',
          soft: '#132434',
        },
        cream: {
          warm: '#f4efe5',
          surface: '#fffcf6',
        },
        gold: {
          DEFAULT: '#ddaf45',
          hover: '#c99c35',
        },
        text: {
          main: '#071522',
          muted: '#66747e',
        },
        border: {
          DEFAULT: '#e3ddd2',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}