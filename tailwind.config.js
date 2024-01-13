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
        }
      }
    },
  },
  plugins: [],
}

