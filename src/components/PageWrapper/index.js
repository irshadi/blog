import React from "react";
import { NavigationBar } from "../NavigationBar";

export const PageWrapper = ({ Views }) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Views />
    </React.Fragment>
  );
};
