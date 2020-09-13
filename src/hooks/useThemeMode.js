import React from "react";

export const useThemeMode = ({ defaultTheme }) => {
  const [theme, _setTheme] = React.useState(defaultTheme);

  const setTheme = preferredTheme => {
    _setTheme(preferredTheme);
    localStorage.setItem("theme", theme);
  };

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [defaultTheme]);

  return {
    theme,
    setTheme
  };
};
