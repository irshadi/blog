import React from "react";
import { POST_MODE } from "../constants/postMode";

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

export const usePostSelection = () => {
  const [posts, setPosts] = React.useState(samplePost);
  const [postMode, setPostMode] = React.useState(POST_MODE.ROWS);
  const [pageConfig, setPageConfig] = React.useState(defaultPageConfig);

  return {
    postMode,
    setPostMode,
    pageConfig,
    setPageConfig,
    posts,
    setPosts
  };
};
