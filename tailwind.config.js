/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js}"],
  theme: {
    extend: {
      colors: {
        primary: "#063436",
        secondary: "#C6E51A",
        tertiary: "#B0D9D4",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
