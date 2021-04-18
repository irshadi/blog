/* eslint-disable no-undef */
const tailwindcss = require("tailwindcss");

module.exports = {
  purge: [],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        card: "var(--color-bg-card)"
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        icon: "var(--color-text-icon)",
        hover: "var(--color-text-hover)"
      }
    }
  },
  variants: {},
  plugins: [tailwindcss]
};
