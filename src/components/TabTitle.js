import React from "react";
import Head from "next/head";

export const TabTitle = ({ title = "Irshadi Bagas" }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
