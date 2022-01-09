module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      keyframes: {
        move: {
          "100%": { transform: "translateY(-50px)" },
        },
      },
      animation: {
        move: "move 3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
