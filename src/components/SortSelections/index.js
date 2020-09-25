import React from "react";
import { useThemeModeContext } from "../../contexts/theme";
import { usePostModeContext } from "../../contexts/postMode";
import { IconWrapper } from "../Icons";
import { Tiles } from "../Icons/Tiles";
import { Rows } from "../Icons/Rows";
import { POST_MODE } from "../../constants/postMode";
import { POST_ACTION } from "../../hooks/usePostSelection";

// Define Fill Color
const getFillColor = (isUsingDarkMode, selectedMode) => {
  if (selectedMode) {
    return isUsingDarkMode ? "#f7fafc" : "#2d3748";
  }

  return isUsingDarkMode ? "#718096" : "#a0aec0";
};

export const SortSelections = () => {
  const { isUsingDarkMode } = useThemeModeContext();
  const {
    state: { postMode: selectedPostMode },
    dispatch
  } = usePostModeContext();

  return (
    <div className="flex items-center justify-end w-full h-full">
      <IconWrapper
        onClick={() =>
          dispatch({
            type: POST_ACTION.SET_POST_MODE,
            postMode: POST_MODE.ROWS
          })
        }
      >
        <Rows
          fill={getFillColor(
            isUsingDarkMode,
            selectedPostMode === POST_MODE.ROWS
          )}
        />
      </IconWrapper>
      <IconWrapper
        onClick={() =>
          dispatch({
            type: POST_ACTION.SET_POST_MODE,
            postMode: POST_MODE.TILES
          })
        }
      >
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
