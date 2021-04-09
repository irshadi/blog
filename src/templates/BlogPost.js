import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { BlogPost } from "../views/BlogPost";
import { graphql } from "gatsby";

const ComponentName = data => {
  return <PageWrapper Views={BlogPost} query={data} />;
};

export const query = graphql`
  query PostBySlug($slug: String!, $category: String!) {
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
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      limit: 5
      sort: { order: ASC, fields: frontmatter___createdAt }
    ) {
      nodes {
        excerpt(truncate: true)
        frontmatter {
          author
          createdAt(formatString: "DD MMMM YYYY")
          title
        }
        timeToRead
        slug
      }
    }
  }
`;
export default ComponentName;
