/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          'main': "#72FF91"
        },
        blue: {
          'main': '#074CB2'
        },
        black: {
          'text': '#1E1E1E'
        }
      }
    },
  },
  plugins: [],
}

