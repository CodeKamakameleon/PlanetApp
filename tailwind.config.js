const defaultTheme = require("tailwindcss/defaultTheme");
// const { colors: defaultColors } = require("tailwindcss.defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "400px",
      md: "1020px",
      lg: "1280px",
      // ...defaultTheme.screens,
    },

    extend: {
      // fontFamily: {
      //   leagueSpartan: ["League Spartan", "Antonio"],
      //   antonio: ["Antonio", "League Spartan"],
      // },
      colors: {
        purple: "#d8d8d833",
        mercury: "#419ebb",
        jupiter: "#6d2ed5",
        mars: "#d14c32",
        neptune: "#2d68f0",
        saturn: "#cd5120",
        uranus: "#1ec1a2",
        venus: "#eda249",
      },

      // - #419ebb - Mercury
      // - #6d2ed5 - Jupiter
      // - #d14c32 - Mars
      // - #2d68f0 - Neptune
      // - #cd5120 - Saturn
      // - #1ec1a2 - Uranus
      // - #eda249 - Venus
      // - #ffffff33 - Inactive Button-bg, Header-bg
      // - #d8d8d833 - inactive button-bg hover

      backgroundImage: {
        stars: "url('./assets/background-stars.svg')",
      },
    },
  },
  plugins: [],
};
