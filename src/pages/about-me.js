import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { AboutView } from "../views/About";

const AboutPage = data => {
  return <PageWrapper Views={AboutView} query={data} />;
};

export default AboutPage;
