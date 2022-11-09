/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleType: {
        square: "square",
        circle: "circle",
      },
    },
  },
  plugins: [],
};
