module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#0d0d0d",
      darkpurple: "#730255",
      green: "#418200",
      orange: "#F8F0E7",
      purple: "#8c0368",
      white: "#fbfbfb",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      great: ["Great Vibes", "cursive"],
      heebo: ["Heebo", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      paris: ["Parisienne", "cursive"],
    },
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1681px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
