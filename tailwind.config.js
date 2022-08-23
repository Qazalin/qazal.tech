/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Numans", "sans-serif"],
        body: ["Cabin", "sans-serif"],
        handWriting: ["Handlee", "cursive"],
      },
    },
  },

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
          neutral: "#292524",
          "base-100": "#0000",
          "base-200": "#27272a",
          "base-300": "#3f3f46",
          info: "#60a5fa",
          success: "#36D399",
          warning: "#fef08a",
          error: "#f87171",
        },
        light: {
          primary: "#6366f1",
          secondary: "#2563eb",
          accent: "#6ee7b7",
          neutral: "#d6d3d1",
          info: "#60a5fa",
          "base-100": "#fff",
          "base-200": "#27272a",
          "base-300": "#3f3f46",
          success: "#36D399",

          warning: "#fef08a",

          error: "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
