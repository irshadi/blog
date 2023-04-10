import React from "react";
import { PageWrapper } from "src/components/PageWrapper";
import { get, STATION_HOSTNAME } from "src/utils/request";
import { HomeView } from "src/views/Home";

export const getStaticProps = async context => {
  const data = await get(`${STATION_HOSTNAME}/articles?populate=*`);

  return {
    props: { data } // will be passed to the page component as props
  };
};

const HomePage = props => <PageWrapper Views={HomeView} {...props} />;

export default HomePage;
