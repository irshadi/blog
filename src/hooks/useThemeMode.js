import React from "react";
import { STORAGE_VALUE } from "../constants/storageValue";
import { THEME_MODE } from "../constants/theme";

export const useThemeMode = () => {
  const [theme, _setTheme] = React.useState(THEME_MODE.LIGHT);
  const isUsingDarkMode = theme === THEME_MODE.DARK;

  const setTheme = () => {
    const preferredTheme =
      theme === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT;
    _setTheme(preferredTheme);
  };

  const setDocumentSelectorTheme = React.useCallback(
    theme => {
      const root = window.document.documentElement;
      root.classList.remove(
        isUsingDarkMode ? THEME_MODE.LIGHT : THEME_MODE.DARK
      );
      root.classList.add(theme);
      localStorage.setItem(STORAGE_VALUE.THEME, theme);
    },
    [isUsingDarkMode]
  );

  const _getUserPredefinedTheme = React.useCallback(() => {
    // Check User Preffered Media Color
    const { matches: prefferedUserColor } = window.matchMedia(
      `(prefers-color-scheme: light)`
    );

    const hasPredefinedColor = localStorage.getItem(STORAGE_VALUE.THEME);
    const prefferedUserMediaColor = prefferedUserColor
      ? THEME_MODE.LIGHT
      : THEME_MODE.DARK;

    // Assign Theme Mode based on User Prefferend Media Color
    const defaultThemeValue =
      hasPredefinedColor in THEME_MODE
        ? hasPredefinedColor
        : prefferedUserMediaColor;

    _setTheme(defaultThemeValue);
    setDocumentSelectorTheme(defaultThemeValue);
  }, [_setTheme]);

  React.useEffect(() => {
    _getUserPredefinedTheme();
  }, [_getUserPredefinedTheme]);

  React.useLayoutEffect(() => {
    setDocumentSelectorTheme(theme);
  }, [setDocumentSelectorTheme, theme]);

  return {
    theme,
    setTheme,
    isUsingDarkMode
  };
};
