module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,md,erb,liquid}',
      './frontend/**/*.{js,jsx,ts,tsx}',
      './src/_components/**/*.{html,md,erb,liquid}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
