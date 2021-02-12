import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { BlogPost } from "../views/BlogPost";
import { graphql } from "gatsby";

const ComponentName = data => {
  return <PageWrapper Views={BlogPost} query={data} />;
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        createdAt(formatString: "YYYY MMMM Do")
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;
export default ComponentName;
