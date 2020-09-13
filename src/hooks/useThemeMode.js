import React from "react";
import { STORAGE_VALUE } from "../constants/storageValue";
import { THEME_MODE } from "../constants/theme";

export const useThemeMode = ({ defaultTheme }) => {
  const [theme, _setTheme] = React.useState(defaultTheme);

  const setTheme = () => {
    const preferredTheme =
      theme === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT;
    _setTheme(preferredTheme);
  };

  React.useEffect(() => {
    localStorage.setItem(STORAGE_VALUE.THEME, theme);
  }, [theme]);

  return {
    theme,
    setTheme
  };
};
