import { TEXT_COLOR_MODE } from "../constants/theme";
import { useColorMode as _useColorMode } from "@chakra-ui/core";

export const useColorMode = () => {
  const { colorMode } = _useColorMode();
  const isUsingDarkMode = colorMode === TEXT_COLOR_MODE.DARK;
  // const [theme, _setTheme] = React.useState(TEXT_COLOR_MODE.LIGHT);
  // const isUsingDarkMode = theme === TEXT_COLOR_MODE.DARK;

  // const setTheme = () => {
  //   const preferredTheme =
  //     theme === TEXT_COLOR_MODE.LIGHT
  //       ? TEXT_COLOR_MODE.DARK
  //       : TEXT_COLOR_MODE.LIGHT;
  //   _setTheme(preferredTheme);
  // };

  // const setDocumentSelectorTheme = React.useCallback(
  //   theme => {
  //     const root = window.document.documentElement;
  //     root.classList.remove(
  //       isUsingDarkMode ? TEXT_COLOR_MODE.LIGHT : TEXT_COLOR_MODE.DARK
  //     );
  //     root.classList.add(theme);
  //     localStorage.setItem(STORAGE_VALUE.THEME, theme);
  //   },
  //   [isUsingDarkMode]
  // );

  // const _getUserPredefinedTheme = React.useCallback(() => {
  //   // Check User Preffered Media Color
  //   const { matches: prefferedUserColor } = window.matchMedia(
  //     `(prefers-color-scheme: light)`
  //   );

  //   const hasPredefinedColor = localStorage.getItem(STORAGE_VALUE.THEME);
  //   const prefferedUserMediaColor = prefferedUserColor
  //     ? TEXT_COLOR_MODE.LIGHT
  //     : TEXT_COLOR_MODE.DARK;

  //   // Assign Theme Mode based on User Prefferend Media Color
  //   const defaultThemeValue =
  //     hasPredefinedColor in TEXT_COLOR_MODE
  //       ? hasPredefinedColor
  //       : prefferedUserMediaColor;

  //   _setTheme(defaultThemeValue);
  //   setDocumentSelectorTheme(defaultThemeValue);
  // }, [_setTheme]);

  // React.useEffect(() => {
  //   _getUserPredefinedTheme();
  // }, [_getUserPredefinedTheme]);

  // React.useLayoutEffect(() => {
  //   setDocumentSelectorTheme(theme);
  // }, [setDocumentSelectorTheme, theme]);

  return {
    colorMode,
    isUsingDarkMode
  };
};
