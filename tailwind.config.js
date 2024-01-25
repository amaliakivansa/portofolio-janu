/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      display: ["Josefin Sans", "sans-serif"],
      body: ["Product Sans"],
    },
    colors: {
      "gray-3": "#828282",
      "gray-5": "#E0E0E0",
      black: "#1A1A1A",
      teal: "#007080",
      "light-teal": "#C4ECF2",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
