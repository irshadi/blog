import React from "react";
import { STORAGE_VALUE } from "../constants/storageValue";

export const useThemeMode = ({ defaultTheme }) => {
  const [theme, _setTheme] = React.useState(defaultTheme);

  const setTheme = preferredTheme => {
    _setTheme(preferredTheme);
    localStorage.setItem(STORAGE_VALUE.THEME, theme);
  };

  React.useEffect(() => {
    localStorage.setItem(STORAGE_VALUE.THEME, theme);
  }, [defaultTheme]);

  return {
    theme,
    setTheme
  };
};
