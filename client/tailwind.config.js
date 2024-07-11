/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*", "index.html"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#b0b0b0",
          500: "#b0b0b0",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#101010",
        },
        primary: "#c52323",
        secondary: "#1115d5",
      },
      backgroundImage: {
        accent: "linear-gradient(120deg, rgb(197, 35, 35), rgb(17, 25, 213))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
