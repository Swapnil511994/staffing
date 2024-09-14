/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greyOpaque: "rgb(230 230 230 / .6)",
        gray: "rgb(230 230 230 / 1)",
      },
      opacity: {},
    },
  },
  plugins: [],
};
