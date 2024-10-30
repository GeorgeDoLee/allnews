/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#262626",
        "newspaper": "#eeefe9",
        "opp": "#802727",
        "center": "#ffffff",
        "gov": "#204986"
      },
      fontFamily: {
        'firago': ['"FiraGO"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}