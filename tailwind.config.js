/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    
    colors: {
      navy: "#16215B",
      orange1: "#F25929",
      white: "#FFFFFF",
      "light-gray": "#F5F5F7",
      "b-green": "#22C55E",
      "b-grey": "#6B7280",
      "b-yellow": "#EAB308",
      "b2-yellow": "#FFCD1B",
      "b2-red": "#C80404",
      "b-red": "#EF4444",
      "b-blue": "#3B82F6",
      "b-gr": "#3B82F6",
      "m-gr": "#C5C5C5",
    },
    extend: {},
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
