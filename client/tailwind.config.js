/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*{jsx,js,html,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        "Dblue":"#01427A",
        "Dbblue":"#02427acf",
        "Lblue":"#6dcefb40",
      },
    },
  },
  plugins: [],
}

