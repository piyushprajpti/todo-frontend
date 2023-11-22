/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "primary-blue": "#2563eb",
            "primary-blue-hover": "#457aed",
        }
    },
  },
  plugins: [],
}