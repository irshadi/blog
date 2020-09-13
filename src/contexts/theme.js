import React from "react";
import { STORAGE_VALUE } from "../constants/storageValue";
import { THEME_MODE } from "../constants/theme";
import { useThemeMode } from "../hooks/useThemeMode";

const ThemeContext = React.createContext({});

// eslint-disable-next-line react/prop-types
const ThemeContextProvider = ({ children }) => {
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
    hasPredefinedColor !== null ? hasPredefinedColor : prefferedUserMediaColor;

  console.log({ hasPredefinedColor, prefferedUserMediaColor });
  const value = useThemeMode({ defaultTheme: defaultThemeValue });
  return (
    <ThemeContext.Provider value={{ ...value }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeModeContext = () => {
  return React.useContext(ThemeContext);
};

export { ThemeContextProvider, useThemeModeContext };
