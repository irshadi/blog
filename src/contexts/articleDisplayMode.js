import React from "react";
import { useArticlesConfig } from "../hooks/useArticlesConfig";

const ArticleDisplayModeContext = React.createContext({});

export const ArticleDisplayModeContextProvider = ({ children }) => {
  const value = useArticlesConfig();

  return (
    <ArticleDisplayModeContext.Provider value={{ ...value }}>
      {children}
    </ArticleDisplayModeContext.Provider>
  );
};

export const useArticleDisplayModeContext = () => {
  return React.useContext(ArticleDisplayModeContext);
};
