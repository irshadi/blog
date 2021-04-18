import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { BlogPost } from "../views/BlogPost";
import { graphql } from "gatsby";

const PostPage = data => {
  return <PageWrapper Views={BlogPost} query={data} />;
};

export const query = graphql`
  query PostBySlug($slug: String!, $articleCategory: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        articleTitle
        articleSummary
        articleIcon
        articleHeroImg
        articleCategory
        articleAuthor
        articlePublishedStatus
        articleDateCreatedAt(formatString: "DD MMMM YYYY")
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
      filter: {
        frontmatter: {
          articleCategory: { eq: $articleCategory }
          articlePublishedStatus: { eq: true }
        }
      }
      limit: 6
      sort: { order: ASC, fields: frontmatter___articleDateCreatedAt }
    ) {
      nodes {
        excerpt(truncate: true, pruneLength: 150)
        frontmatter {
          articleTitle
          articleSummary
          articleIcon
          articleHeroImg
          articleCategory
          articleAuthor
          articlePublishedStatus
          articleDateCreatedAt(formatString: "DD MMMM YYYY")
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
