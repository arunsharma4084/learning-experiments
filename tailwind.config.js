/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        tilt: "tilt 10s infinite linear"
      },

      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-1eg)",
          },
          "75%": {
            transform: "rotate(1deg)",
          }
        }
      }
    },
  },
  plugins: [],
}
