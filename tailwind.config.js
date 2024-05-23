/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInDown: "fadeInDown 1s ease-in 0.25s 1",
      },
      colors: {
        primary: "#0A1428",
        secondary: "#091428",
        tertiary: "#005A82",
        hover: "#0397AB",
        text: "#CDFAFA",
      },
      fontFamily: {
        rubik: ["rubik", "sans-serif"],
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            z: 0,
            opacity: 0,
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      screens: {
        xs: "500px",
        md: "800px",
      },
    },
  },
  plugins: [],
};
