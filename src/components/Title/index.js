import React from "react";
import { Helmet } from "react-helmet";

export const Title = ({ title = "Irshadi Bagas" }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
