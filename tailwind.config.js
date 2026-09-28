/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        codxr: {
          green: "#B8FF00",
          light: "#FFFFFF",
          lightSoft: "#F5F5F2",
          dark: "#121212",
          darkSoft: "#181818",
          darkCard: "#1E1E1E",
          lightText: "#0A0A0A",
          lightMuted: "#5F5F5F",
          lightBorder: "#E5E5E5",
          darkText: "#F5F5F5",
          darkMuted: "#B5B5B5",
          darkBorder: "#2D2D2D",
        },
      },
      maxWidth: {
        codxr: "1280px",
      },
    },
  },
  plugins: [],
};
