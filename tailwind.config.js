/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#F3E5AB',
          400: '#E5C07B',
          500: '#D4AF37',
          600: '#B89025',
          700: '#997316'
        },
        stone: {
          850: '#151413',
          900: '#1C1917',
          950: '#0E0D0C',
        },
        terracotta: {
          500: '#E06A3B',
          600: '#C85324'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
