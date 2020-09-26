import React from "react";
import { POST_MODE } from "../constants/postMode";
import { useStaticQuery, graphql } from "gatsby";

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
      query GET_POSTS {
        allMdx {
          nodes {
            id
            frontmatter {
              title
              createdAt
              category
              img
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
