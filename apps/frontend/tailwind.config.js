const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Staatliches', 'Noto Sans JP', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        // TODO: テーマカラー追加
        theme: {},
        // メインカラー
        primary: {
          DEFAULT: '#86B0DE',
        },
        // TODO: サブカラー追加
        secondary: {
          DEFAULT: '#1A2F63',
        },
        // TODO: サードカラー追加
        tertiary: {},
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
