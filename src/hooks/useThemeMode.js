import React from "react";
import { STORAGE_VALUE } from "../constants/storageValue";
import { THEME_MODE } from "../constants/theme";

export const useThemeMode = ({ defaultTheme }) => {
  const [theme, _setTheme] = React.useState(defaultTheme);
  const isUsingDarkMode = theme === THEME_MODE.DARK;

  const setTheme = () => {
    const preferredTheme =
      theme === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT;
    _setTheme(preferredTheme);
  };

  const setDocumentSelectorTheme = React.useCallback(
    (theme) => {
      const root = window.document.documentElement;
      root.classList.remove(
        isUsingDarkMode ? THEME_MODE.LIGHT : THEME_MODE.DARK
      );
      root.classList.add(theme);
      localStorage.setItem(STORAGE_VALUE.THEME, theme);
    },
    [isUsingDarkMode]
  );

  React.useEffect(() => {
    setDocumentSelectorTheme(theme);
  }, [setDocumentSelectorTheme, theme]);

  return {
    theme,
    setTheme,
    isUsingDarkMode,
  };
};
