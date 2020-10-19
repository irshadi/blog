import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { BlogPost } from "../views/BlogPost";

export default data => {
  return <PageWrapper Views={BlogPost} query={data} />;
};
