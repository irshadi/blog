import React from "react";
import { PostModeContextProvider } from "../../contexts/postMode";
import { ThemeContextProvider } from "../../contexts/theme";
import { NavigationBar } from "../NavigationBar";

// eslint-disable-next-line react/prop-types
export const PageWrapper = ({ Views }) => {
  return (
    <ThemeContextProvider>
      <div className="px-24 bg-primary min-h-screen">
        <NavigationBar />
        <PostModeContextProvider>
          <Views />
        </PostModeContextProvider>
      </div>
    </ThemeContextProvider>
  );
};
