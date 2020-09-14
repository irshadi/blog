import React from "react";
import { IconWrapper } from "../Icons";
import { Rows } from "../Icons/Rows";
import { Tiles } from "../Icons/Tiles";

export const SortSelections = selections => {
  return (
    <div className="flex items-center justify-end w-full h-full">
      <IconWrapper>
        <Rows className="text-secondary" />
      </IconWrapper>
      <IconWrapper>
        <Tiles className="text-secondary" />
      </IconWrapper>
    </div>
  );
};
