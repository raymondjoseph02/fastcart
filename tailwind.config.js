/**  @type {import("tailwindcss").config}*/
const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      current: "currentColor", // for flexibility
      white: "#FFFFFF", // white color
      black: "#000000", // black color

      primary: {
        300: "#1E2753", // dark blue for side bar
        200: "#1E5EFF", // Primary blue color
        150: "#D7DBEC", // light blue for checkbox border
        100: "#D9E4FF", // Lighter blue, used for charts
        50: "#D9E1EC", // Lightest blue, used for inputs
      },

      green: {
        200: "#06A561", // green for text color
        100: "#1FD286", // Green accent color
        50: "#C4F8E2", // Light green background shade
      },

      gray: {
        50: "#F5F6FA", // Lightest gray
        100: "#5A607F", // Light gray for background
        150: "#E6E9F4",
        200: "#E4E4E4", // Subtle gray borders
        300: "#131523", // Mid gray for text or borders
        400: "#A1A7C4", // Medium gray for secondary text
      },

      red: {
        100: "#F0142F", // Red accent color for notifications or alerts
      },

      purple: {
        100: "#8B4FFF", // Purple accent for headings or buttons
      },

      yellow: {
        100: "#FFD700", // Yellow for highlights or icons
      },
    },

    extend: {
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        8: "8px",
      },
      boxShadow: {
        "bg-auth": " 0px 1px 4px 0px #15223214",
        "top-nav": "0px 1px 4px 0px #15223214",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        // change 863 to whatever half of the max content width you want for wide screens is
        contained: "calc(50vw - 863px)",
        fullheight: "calc(var(--vh, 1vh) * 100)", // --vh var set on html tag by setDocHeight() in app.js
        gutter: "5vw",
        13: "3.125rem",
        15: "3.75rem",
        18: "4.5rem",
        19: "4.75rem",
        22: "5.5rem",
        25: "6.25rem",
        75: "18.75rem",
        114: "28.5rem",
        125: "31.25rem",
      },
    },
    zIndex: {
      "-1": "-1",
      100: 100,
      1000: 1000,
    },

    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.05rem" }],
      sm: ["0.875rem", { lineHeight: "1.225rem" }],
      base: ["1rem", { lineHeight: "1.4rem" }],
      lg: ["1.125rem", { lineHeight: "1.575rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "1.8rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.7rem" }],
      "5xl": ["3rem", { lineHeight: "3.6rem" }],
      "6xl": ["3.75rem", { lineHeight: "4.5rem" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
    },

    // amend these values to suit the chosen font
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      black: "800",
    },

    screens: {
      "2xs": "320px",
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1920px",
    },
  },
  plugins: [],
});
