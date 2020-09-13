/* eslint-disable no-undef */
const tailwindcss = require("tailwindcss");

module.exports = {
  purge: [],
  theme: {
    // darkSelector: ".mode-dark",
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)"
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)"
      }
    }
  },
  variants: {
    // backgroundColor: [
    //   "dark",
    //   "dark-hover",
    //   "dark-group-hover",
    //   "dark-even",
    //   "dark-odd"
    // ],
    // borderColor: ["dark", "dark-disabled", "dark-focus", "dark-focus-within"],
    // textColor: ["dark", "dark-hover", "dark-active", "dark-placeholder"]
  },
  plugins: [tailwindcss]
};
