/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js}"],
  theme: {
    extend: {
      colors: {
        primary: "#073436",
        secondary: "#C6E51A",
        tertiary: "#AFD9D4",
      },
    },
  },
  plugins: [],
};
