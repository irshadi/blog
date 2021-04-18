import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { HomeView } from "../views/Home";
import { graphql } from "gatsby";

const HomePage = data => {
  return <PageWrapper Views={HomeView} query={data} />;
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___articleDateCreatedAt, order: DESC }
      filter: { frontmatter: { articlePublishedStatus: { eq: true } } }
    ) {
      nodes {
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
        excerpt(pruneLength: 200)
        fields {
          readingTime {
            text
          }
          slug
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        itemCount
        pageCount
        perPage
        totalCount
        currentPage
      }
    }
  }
`;

export default HomePage;
