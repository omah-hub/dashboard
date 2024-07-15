/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "glow-green": "0 0 20px 5px rgba(59, 130, 246, 0.75)", // Increased size and spread
      },
      fontFamily: {
        Roboto: ["Roboto-condensed", "sans-serif"],
        Cuba: ["Playwrite-CU"],
      },
    },
  },
  plugins: [],
};
