import React from "react";
import { ThemeContextProvider } from "../../contexts/theme";
import { NavigationBar } from "../NavigationBar";

// eslint-disable-next-line react/prop-types
export const PageWrapper = ({ Views }) => {
  return (
    <ThemeContextProvider>
      <div className="px-24 bg-primary min-h-screen">
        <NavigationBar />
        <Views />
      </div>
    </ThemeContextProvider>
  );
};
