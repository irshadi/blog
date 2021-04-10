import React from "react";
import { usePostSelection } from "../hooks/usePostSelection";
import { POST_MODE } from "../constants/postMode";

const PostModeContext = React.createContext({});

// eslint-disable-next-line react/prop-types
export const PostModeContextProvider = ({ children }) => {
  const value = usePostSelection(
    JSON.parse(localStorage.getItem(STORAGE_VALUE.POST_MODE)) ?? POST_MODE.ROWS
  );
  return (
    <PostModeContext.Provider value={{ ...value }}>
      {children}
    </PostModeContext.Provider>
  );
};

export const usePostModeContext = () => {
  return React.useContext(PostModeContext);
};
