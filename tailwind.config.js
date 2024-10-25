/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1e40af",

          secondary: "#2dd4bf",

          accent: "#86198f",

          neutral: "#1c1917",

          "base-100": "#fff6e9",

          info: "#818cf8",

          success: "#22c55e",

          warning: "#fbbf24",

          error: "#b91c1c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
