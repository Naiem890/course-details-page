/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ginto", "sans-serif"],
        /* "ginto-medium": ["Ginto-medium", "sans-serif"],
        "ginto-semibold": ["Ginto-semibold", "sans-serif"],
        "ginto-bold": ["Ginto-bold", "sans-serif"], */
      },
    },
    colors: {
      primary: "#4B01D4",
      primaryDark: "#380596",
      gray: "#808080",
      white: "#F0F3FF",
      // ...
    },
  },
  plugins: [],
};
