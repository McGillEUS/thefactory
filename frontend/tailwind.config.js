/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "factory-blue" : "#2c3e50",
        "factory-green" : "#57bf94"
      }

    },
  },
  plugins: [],
}

