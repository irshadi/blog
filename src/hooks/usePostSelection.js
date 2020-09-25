import React from "react";
import { POST_MODE } from "../constants/postMode";

export const usePostSelection = () => {
  const [postMode, setPostMode] = React.useState(POST_MODE.ROWS);

  return {
    postMode,
    setPostMode
  };
};
