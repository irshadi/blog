import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import { PageWrapper } from "../components/PageWrapper";
import { HomeView } from "../views/Home";

const HomePage = () => {
  return <PageWrapper Views={HomeView} />;
};

export default HomePage;
