/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700",
        black: "900",
      },
      backgroundColor:{
        black:"#000000"
      }
    },
  },
  plugins: [],
};
