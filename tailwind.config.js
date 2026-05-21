/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#040D1A',
          900: '#0A1628',
          800: '#112240',
          700: '#1E3A5F',
          600: '#2A5080',
        },
        accent: {
          DEFAULT: '#4A90D9',
          light: '#7BB3E8',
          dark: '#2B6CB0',
        },
        gold: '#C9A84C',
      },
    },
  },
  plugins: [],
}
