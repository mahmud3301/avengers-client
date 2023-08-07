/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        darkTheme: {
          primary: "#dc2626",

          secondary: "#8b5cf6",

          accent: "#4f46e5",

          neutral: "#ffff",

          "base-100": "#000",
          "base-200": "#101010",
          "base-300": "#101010",

          info: "#0284c7",

          success: "#16a34a",

          warning: "#eab308",

          error: "#dc2626"
        }
      },
      {
        whiteTheme: {
          primary: "#dc2626",

          secondary: "#8b5cf6",

          accent: "#4f46e5",

          neutral: "#ffff",

          "base-100": "#f2ebeb",

          info: "#0284c7",

          success: "#16a34a",

          warning: "#eab308",

          error: "#dc2626"
        }
      }
    ]
  },
  plugins: [require("daisyui")]
};
