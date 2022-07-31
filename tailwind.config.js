/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      phone: "640px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      primary: ["Montserrat-Medium", "sans-serif"],
      secondary: ["Catalina-Rayden", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#333333",
        tertiary: "#005ECD",
        secondary: "#FF8A00",
        footer: "rgba(0,94,205,0.03)",
        bgNav: "rgba(255, 138, 0, 0.07)",
        financeHover: "rgba(255, 195, 129, 0.2)",
        forwardHover: "rgba(217, 231, 248, 0.3)",
      },
    },
  },
  plugins: [],
};
