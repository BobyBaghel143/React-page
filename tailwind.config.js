/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }
    // },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "cupcake"],
  },
};
