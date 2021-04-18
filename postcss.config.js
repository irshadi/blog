/* eslint-disable no-undef */
const tailwind = require("tailwindcss");

module.exports = () => ({
  plugins: [tailwind("./tailwind.config.js")]
});
