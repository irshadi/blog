export const THEME_MODE = {
  LIGHT: "light",
  DARK: "dark"
};

export const THEME_MODE_STYLE = {
  BACKGROUND: {
    [THEME_MODE.LIGHT]: "gray.100",
    [THEME_MODE.DARK]: "gray.700"
  },
  COLOR: {
    [THEME_MODE.LIGHT]: "gray.100",
    [THEME_MODE.DARK]: "gray.700"
  },
  TEXT: {
    PRIMARY: {
      [THEME_MODE.LIGHT]: "gray.500",
      [THEME_MODE.DARK]: "gray.600"
    },
    SECONDARY: {
      [THEME_MODE.LIGHT]: "gray.600",
      [THEME_MODE.DARK]: "gray.500"
    }
  }
};

export const isUsingDarkMode = colorMode => colorMode === THEME_MODE.DARK;
