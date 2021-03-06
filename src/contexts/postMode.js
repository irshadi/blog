import React from "react";
import { usePostSelection } from "../hooks/usePostSelection";
import { POST_MODE } from "../constants/postMode";
import { STORAGE_VALUE } from "../constants/storageValue";

const PostModeContext = React.createContext({});

// eslint-disable-next-line react/prop-types
export const PostModeContextProvider = ({ children }) => {
  const value = usePostSelection();
  return (
    <PostModeContext.Provider value={{ ...value }}>
      {children}
    </PostModeContext.Provider>
  );
};

export const usePostModeContext = () => {
  return React.useContext(PostModeContext);
};
