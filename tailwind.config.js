// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...existing code...
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}", // Adicione esta linha se usar src/
    "./src/app/**/*.{js,ts,jsx,tsx}",        // E esta também
  ],
  // ...existing code...
  theme: {
    extend: {
      colors: {
        brand: "#FF6262",
        "brand-secondary": "#FFB5B5",
        "brand-accent": "#10B981",
        "brand-neutral": "#374151",
        "brand-base-100": "#FFFFFF",
      },
    },
  },
  plugins: [],
}