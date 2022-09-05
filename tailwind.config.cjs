// eslint-disable-next-line
const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
