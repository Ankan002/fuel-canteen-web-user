module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['"Fira Code", monospace'],
        'manrope': ['"Manrope", sans-serif'],
      },
      colors: {
        'primary-orange': '#FC5A31',
        'primary-grey': '#ADB4C1',
        'primary-dark': '#10111A',
        'primary-light': '#F6F8FA',
        'dark-font': '#0A0911',
        'secondary-dark': '#08070C',
        'secondary-light': '#FFFFFF',
        'tertiary-light': '#F3F5F9',
        'primary-green': '#08CD92'
      }
    },
  },
  plugins: [],
}
