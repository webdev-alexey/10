import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    colors: {
      black: {
        base: "#000",
        light: "#374151",
      },
      blue: {
        DEFAULT: "#0046e2",
        light: "#c9d9fc",
        extralight: "#e4f3ff",
      },
      white: "#fff",
      red: "#e11d48",
    },
    extend: {},
    fontFamily: {
      default: ["Roboto", "sans-serif"],
      titles: ["Rajdhani", "sans-serif"],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        "grid-cols-ideal": (value) => {
          return {
            gridTemplateColumns: `repeat(auto-fill,minmax(${value}px,1fr))`,
          };
        },
      });
    }),
  ],
};
