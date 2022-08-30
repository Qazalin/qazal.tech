/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Numans", "sans-serif"],
        handWriting: ["Virgil", "Handlee", "cursive"],
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
