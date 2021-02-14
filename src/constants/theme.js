export const TEXT_COLOR_MODE = {
  LIGHT: "light",
  DARK: "dark"
};

export const TEXT_COLOR_MODE_STYLE = {
  BACKGROUND: {
    [TEXT_COLOR_MODE.LIGHT]: "gray.100",
    [TEXT_COLOR_MODE.DARK]: "gray.700"
  },
  COLOR: {
    [TEXT_COLOR_MODE.LIGHT]: "gray.100",
    [TEXT_COLOR_MODE.DARK]: "gray.700"
  },
  TEXT: {
    PRIMARY: {
      [TEXT_COLOR_MODE.LIGHT]: "gray.500",
      [TEXT_COLOR_MODE.DARK]: "gray.600"
    },
    SECONDARY: {
      [TEXT_COLOR_MODE.LIGHT]: "gray.600",
      [TEXT_COLOR_MODE.DARK]: "gray.500"
    }
  }
};

export const isUsingDarkMode = colorMode => colorMode === TEXT_COLOR_MODE.LIGHT;
