/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      darkseagreen: "#9ec97f",
      "color-black": "#000",
      "background-color-light": "#fff",
      lightsteelblue: "#bcc8f2",
      olivedrab: "#89a83f",
      mediumseagreen: "#4fb459",
      "grey-01": "#7c828a",
      gray: "#1e1e1e",
      "gray-1": "#333",
      "grey-dark": "#495d69",
      "gray-5": "#e0e0e0",
      "grey-light": "#e7eff3",
      "paper-background": "#fffffe",
      gainsboro: "#d9d9d9",
    },
    spacing: {},
    fontFamily: {
      inter: "Inter",
      "y-axis": "'Nunito Sans'",
      lato: "Lato",
    },
    borderRadius: {
      "16xl": "35px",
      "11xl": "30px",
      "81xl": "100px",
      "135xl-5": "154.5px",
      "3xs": "10px",
      "181xl": "200px",
    },
  },
  fontSize: {
    xl: "20px",
    base: "16px",
    lg: "18px",
    "13xl": "32px",
    xs: "12px",
    "3xl": "22px",
    "6xl": "25px",
    "5xl": "24px",
    "17xl": "36px",
    "7xl": "26px",
    inherit: "inherit",
  },
};
export const corePlugins = {
  preflight: false,
};
