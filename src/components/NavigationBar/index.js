import React from "react";
import { Link } from "gatsby";
import { IoMdMoon } from "react-icons/io";
import { ImSun } from "react-icons/im";
import { useThemeModeContext } from "../../contexts/theme";
import { THEME_MODE } from "../../constants/theme";

export const NavigationBar = () => {
  const { theme, setTheme, isUsingDarkMode } = useThemeModeContext();
  const THEME_ICON_MAP = {
    [THEME_MODE.LIGHT]: IoMdMoon,
    [THEME_MODE.DARK]: ImSun
  };
  const ThemeIcon = THEME_ICON_MAP[theme];

  return (
    <nav className="w-full pt-12 flex justify-between">
      <Link to="/" replace className="text-xl font-semibold text-primary">
        irshadi.id
      </Link>
      <div className="flex justify-end w-3/12 px-2">
        <ThemeIcon
          onClick={setTheme}
          className="text-2xl font-semibold cursor-pointer text-gray-500 transition duration-500 dark:text-white"
        />
      </div>
    </nav>
  );
};
