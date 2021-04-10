import React from "react";
import { POST_MODE } from "../constants/postMode";
import { useStaticQuery, graphql } from "gatsby";
import { STORAGE_VALUE } from "../constants/storageValue";

const defaultPageConfig = {
  currentPage: 1,
  hasPreviousPage: false,
  hasNextPage: false
};

export const CATEGORY_MAP = {
  ENGINEERING: "engineering",
  BLOG: "blog",
  TECHNOLOGY: "technology",
  COMPONENT: "component",
  PERSONAL_LIFE: "personal life"
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
    postMode:
      JSON.parse(localStorage.getItem(STORAGE_VALUE.POST_MODE)) ??
      POST_MODE.ROWS,
    pageConfig: { ...defaultPageConfig }
  });

  const setPostMode = postMode => {
    localStorage.setItem(STORAGE_VALUE.POST_MODE, JSON.stringify(postMode));
    dispatch({
      type: POST_ACTION.SET_POST_MODE,
      postMode
    });
  };

  const { allMdx: posts = [] } = useStaticQuery(graphql`
    query MainPageQuery {
      allMdx(
        sort: { fields: [frontmatter___createdAt], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
        limit: 6
      ) {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            createdAt(formatString: "DD MMMM YYYY")
            category
            img
          }
          fields {
            readingTime {
              text
            }
            slug
          }
        }
        pageInfo {
          hasNextPage
          currentPage
          itemCount
          hasPreviousPage
          pageCount
          totalCount
          perPage
        }
      }
    }
  `);

  return {
    state,
    dispatch,
    setPostMode,
    posts
  };
};
