import React from "react";
import { PageWrapper } from "src/components/PageWrapper";
import { HomeView } from "src/views/Home";
import { getListOfAtricles } from "./api/getListofArticles";

export const getStaticProps = async () => {
  const result = await getListOfAtricles();

  return {
    props: { data: result }
  };
};

const HomePage = props => <PageWrapper Views={HomeView} {...props} />;

export default HomePage;
