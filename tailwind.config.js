/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        dark: {
          primary: "#a5b4fc",

          secondary: "#93c5fd",

          accent: "#d1fae5",

          neutral: "#1f2937",

          "base-100": "#0000",

          info: "#60a5fa",

          success: "#36D399",

          warning: "#fef08a",

          error: "#f87171",
        },
        light: {
          primary: "#a5b4fc",

          secondary: "#93c5fd",

          accent: "#d1fae5",

          neutral: "#1f2937",

          "base-100": "#0000",

          info: "#60a5fa",

          success: "#36D399",

          warning: "#fef08a",

          error: "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
