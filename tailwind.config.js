module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/layouts/**/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF6464",
        secondary: "#00A8CC",
        dark: "#21243D",
        light: "#8695A4",
        lightCyan: "#EDF7FA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
