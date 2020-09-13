import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { ThemeContextProvider } from "../contexts/theme";
import { HomeView } from "../views/Home";

const HomePage = () => {
  return (
    <ThemeContextProvider>
      <PageWrapper Views={HomeView} />
    </ThemeContextProvider>
  );
};

export default HomePage;
