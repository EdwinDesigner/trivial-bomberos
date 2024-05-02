/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        'bombero': {
          50: '#FFF9E5',
          400: '#F94848',
          800: '#BF2121',
          950: '#5E0E0E'
        },
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif']
      }
    },
  },
  plugins: [],
}

