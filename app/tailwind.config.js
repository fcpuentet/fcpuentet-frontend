const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Staatliches', 'Noto Sans JP', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
