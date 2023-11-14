/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "primary-red": "#e13535",
            "primary-red-hover": "#e86464",
            "primary-blue": "#3a2b86"
        }
    },
  },
  plugins: [],
}

