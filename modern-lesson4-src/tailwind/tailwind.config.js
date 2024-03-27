import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html"],
  theme: {
    colors: {
      green: {
        light: "#6cc372",
        medium: "#51b386",
      },
      black: {
        base: "#000",
        normal: "#232324",
      },
      white: "#fff",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        "grid-cols-ideal": (value) => {
          console.log(value);

          return {
            gridTemplateColumns: `repeat(auto-fill,minmax(${value}px,1fr))`,
          };
        },
      });
    }),
  ],
  /* plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          tab: (value) => ({
            tabSize: value
          }),
        },
        { values: theme('tabSize') }
      )
    })
  ] */
};
