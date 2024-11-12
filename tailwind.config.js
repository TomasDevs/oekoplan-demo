/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js}"],
  theme: {
    extend: {
      colors: {
        primary: "#063436",
        secondary: "#C6E51A",
        tertiary: "#B0D9D4",
        line: "#285556",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1625px",
        },
      },
    },
  },
  plugins: [],
};
