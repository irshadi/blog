import React from "react";
import { NavigationBar } from "../NavigationBar";

// eslint-disable-next-line react/prop-types
export const PageWrapper = ({ Views }) => {
  return (
    <div className="px-24">
      <NavigationBar />
      <Views />
    </div>
  );
};
