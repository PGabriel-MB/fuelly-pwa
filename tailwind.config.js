// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6262", // Red-base
        secondary: "#FFB5B5", // Red-clean
        accent: "#10B981", // Green
        neutral: "#374151", // Gray
        "base-100": "#FFFFFF", // White
      },
    },
  },
  plugins: [],
}