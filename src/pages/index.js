import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { HomeView } from "../views/Home";

const HomePage = data => {
  return <PageWrapper Views={HomeView} query={data} />;
};

export default HomePage;
