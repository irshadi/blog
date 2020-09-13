import React from "react";
import { THEME_MODE } from "../constants/theme";

export const useDarkMode = ({ defaultTheme = THEME_MODE.LIGHT }) => {
  const [theme, _setTheme] = React.useState(defaultTheme);

  const setTheme = preferredTheme => {
    _setTheme(preferredTheme);
    localStorage.setItem(theme);
  };

  return {
    theme,
    setTheme
  };
};
