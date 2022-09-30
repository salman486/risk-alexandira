const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

const fontName = 'Roboto';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '7rem',
        '2xl': '10rem',
      },
    },
    extend: {
      fontFamily: {
        sans: [fontName, ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('every-child', '& *');
    }),
  ],
};
