import React from "react";
import { useThemeModeContext } from "../../contexts/theme";
import { IconWrapper } from "../Icons";
import { Rows } from "../Icons/Rows";
import { Tiles } from "../Icons/Tiles";

export const SortSelections = selections => {
  const { isUsingDarkMode } = useThemeModeContext();
  const fill = isUsingDarkMode ? "#718096" : "#a0aec0";

  return (
    <div className="flex items-center justify-end w-full h-full">
      <IconWrapper>
        <Rows fill={fill} />
      </IconWrapper>
      <IconWrapper>
        <Tiles fill={fill} />
      </IconWrapper>
    </div>
  );
};
