/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        '-90': '-90deg',
      },
      colors: {
        "comp-blue": "#44EFEF",
      },
    },
  },
  plugins: [],
};

