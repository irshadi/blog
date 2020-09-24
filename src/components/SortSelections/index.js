import React from "react";
import { useThemeModeContext } from "../../contexts/theme";
import { usePostModeContext } from "../../contexts/postMode";
import { IconWrapper } from "../Icons";
import { Rows } from "../Icons/Rows";
import { Tiles } from "../Icons/Tiles";
import { POST_MODE } from "../../constants/postMode";

// Define Fill Color
const getFillColor = (isUsingDarkMode, selectedMode) => {
  if (selectedMode) {
    return isUsingDarkMode ? "#f7fafc" : "#2d3748";
  }

  return isUsingDarkMode ? "#718096" : "#a0aec0";
};

export const SortSelections = () => {
  const { isUsingDarkMode } = useThemeModeContext();
  const { postMode: selectedPostMode, setPostMode } = usePostModeContext();

  return (
    <div className="flex items-center justify-end w-full h-full">
      <IconWrapper onClick={() => setPostMode(POST_MODE.ROWS)}>
        <Rows
          fill={getFillColor(
            isUsingDarkMode,
            selectedPostMode === POST_MODE.ROWS
          )}
        />
      </IconWrapper>
      <IconWrapper onClick={() => setPostMode(POST_MODE.TILES)}>
        <Tiles
          fill={getFillColor(
            isUsingDarkMode,
            selectedPostMode === POST_MODE.TILES
          )}
        />
      </IconWrapper>
    </div>
  );
};
