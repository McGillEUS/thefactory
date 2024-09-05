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
        "factory-green" : "#57bf94",
        "factory-black" : "#2C3139",
        "factory-dark-black" : "#272C32"
      },
      fontFamily : {
        'outfit' : ["Outfit", "sans-serif"]
      }

    },
  },
  plugins: [],
}

