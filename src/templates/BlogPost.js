import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { BlogPost } from "../views/BlogPost";
import { graphql } from "gatsby";

const PostPage = data => {
  return <PageWrapper Views={BlogPost} query={data} />;
};

export const query = graphql`
  query PostBySlug($slug: String!, $category: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        createdAt(formatString: "DD MMMM YYYY")
        img
        author
        category
      }
      body
      fields {
        slug
        readingTime {
          text
        }
      }
    }
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      limit: 6
      sort: { order: ASC, fields: frontmatter___createdAt }
    ) {
      nodes {
        excerpt(truncate: true, pruneLength: 150)
        frontmatter {
          img
          author
          createdAt(formatString: "DD MMMM YYYY")
          category
          title
        }
        fields {
          slug
          readingTime {
            text
          }
        }
      }
    }
  }
`;
export default PostPage;
