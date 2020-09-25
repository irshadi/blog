import React from "react";
import { POST_MODE } from "../constants/postMode";
import { useStaticQuery, graphql } from "gatsby";

const samplePost = [
  {
    title: "Advance React Hooks",
    img:
      "https://novela.narative.co/static/5f8eac72cc66a0e5148406174d0cda0e/0acdf/hero-2.webp",
    content:
      "With the growing community interest in Gatsby, we hope to create more resources that make it easier for anyone to grasp the power of",
    createdAt: new Date(),
    metadata: "6 min read",
    category: "engineering"
  },
  {
    title: "Introduction to React Hooks",
    img:
      "https://novela.narative.co/static/5f8eac72cc66a0e5148406174d0cda0e/0acdf/hero-2.webp",
    content:
      "With the growing community interest in Gatsby, we hope to create more resources that make it easier for anyone to grasp the power of",
    createdAt: new Date(),
    metadata: "3 min read",
    category: "engineering"
  },
  {
    title: "A quiet evening",
    img:
      "https://novela.narative.co/static/5f8eac72cc66a0e5148406174d0cda0e/0acdf/hero-2.webp",
    content:
      "With the growing community interest in Gatsby, we hope to create more resources that make it easier for anyone to grasp the power of",
    createdAt: new Date(),
    metadata: "3 min read",
    category: "blog"
  },
  {
    title: "Memoized Computation Value",
    img:
      "https://novela.narative.co/static/5f8eac72cc66a0e5148406174d0cda0e/0acdf/hero-2.webp",
    content:
      "With the growing community interest in Gatsby, we hope to create more resources that make it easier for anyone to grasp the power of",
    createdAt: new Date(),
    metadata: "3 min read",
    category: "engineering"
  },
  {
    title: "React Side Effect",
    img:
      "https://novela.narative.co/static/5f8eac72cc66a0e5148406174d0cda0e/0acdf/hero-2.webp",
    content:
      "With the growing community interest in Gatsby, we hope to create more resources that make it easier for anyone to grasp the power of",
    createdAt: new Date(),
    metadata: "3 min read",
    category: "engineering"
  }
];

const defaultPageConfig = {
  currentPage: 1,
  hasPreviousPage: false,
  hasNextPage: false
};

export const POST_ACTION = {
  SET_POST_MODE: "SET_POST_MODE",
  SET_POST_CONFIG: "SET_POST_CONFIG"
};

const postsReducer = (state, { type, postMode, postConfig }) => {
  switch (type) {
    case POST_ACTION.SET_POST_MODE:
      return {
        ...state,
        postMode
      };

    case POST_ACTION.SET_POST_CONFIG:
      return {
        ...state,
        postConfig
      };

    default:
      throw new Error(`usePostSelections Error ${type} Not Found`);
  }
};

export const usePostSelection = () => {
  const [state, dispatch] = React.useReducer(postsReducer, {
    postMode: POST_MODE.ROWS,
    pageConfig: { ...defaultPageConfig }
  });

  const { allMdx: posts = [] } = useStaticQuery(
    graphql`
      query TEST {
        allMdx {
          nodes {
            id
            frontmatter {
              title
              createdAt
              category
            }
          }
        }
      }
    `
  );

  return {
    state,
    dispatch,
    posts
  };
};
