/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greyOpaque: "rgb(230 230 230 / .6)",
        gray: "rgb(230 230 230 / 1)",
      },
      keyframes: {
        pulseBackground: {
          "0%, 100%": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
          "50%": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
        },
      },
      animation: {
        pulseBackground: "pulseBackground 3s infinite",
      },
      scrollBehavior: ["smooth"],
      boxShadow: {
        headerShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(255 255 255)",
        headerPopupShadow:
          "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(56 56 56)",
      },
    },
  },
  plugins: [],
};
