/** @type {import('tailwindcss').Config} */
export default {
  content: [
  'index.html',
  './*.js'], // this path needs to be changed to have more file types
  theme: {
    colors: {
      lightblue: '#9082B5',
      darkblue: '#262FA5',
      white: '#FFFFFF',
    },
    screens: {

      'maxsize': '1440px',
    },
    extend: {},
  },
  plugins: [],
}

