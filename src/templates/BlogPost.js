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
        createdAt(formatString: "MMMM Do, YYYY")
      }
      body
      excerpt
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`;
export default ComponentName;
