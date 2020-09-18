import React from "react";
import { useThemeMode } from "../hooks/useThemeMode";

const ThemeContext = React.createContext({});

// eslint-disable-next-line react/prop-types
const ThemeContextProvider = ({ children }) => {
  const value = useThemeMode();
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
