import React from "react";
import { POST_MODE } from "../constants/postMode";

const defaultPageConfig = {
  currentPage: 1,
  hasPreviousPage: false,
  hasNextPage: false
};

export const usePostSelection = () => {
  const [postMode, setPostMode] = React.useState(POST_MODE.ROWS);
  const [pageConfig, setPageConfig] = React.useState(defaultPageConfig);

  return {
    postMode,
    setPostMode,
    pageConfig,
    setPageConfig
  };
};
