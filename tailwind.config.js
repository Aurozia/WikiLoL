/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A1428",
        secondary: "#091428",
        tertiary: "#005A82",
        hover: "#0397AB",
        text: "#CDFAFA",
        // quaternary: "#0A323C",
        // quinary: "#0AC8B9",
      },
      fontFamily: {
        rubik: ["rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
