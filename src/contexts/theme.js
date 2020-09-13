import React from "react";
import { STORAGE_VALUE } from "../constants/storageValue";
import { THEME_MODE } from "../constants/theme";
import { useThemeMode } from "../hooks/useThemeMode";

const ThemeContext = React.createContext({});

// eslint-disable-next-line react/prop-types
const ThemeContextProvider = ({ children }) => {
  const defaultThemeValue =
    localStorage.getItem(STORAGE_VALUE.THEME) || THEME_MODE.LIGHT;
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
