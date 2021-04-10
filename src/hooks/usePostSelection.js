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
  TECHNOLOGY: "technology",
  DESIGN: "design",
  PERSONAL_LIFE: "personal life"
};

export const POST_ACTION = {
  SET_POST_MODE: "SET_POST_MODE",
  SET_POST_CONFIG: "SET_POST_CONFIG",

  START_STIMULATE_LOADING: "START_STIMULATE_LOADING",
  STOP_STIMULATE_LOADING: "STOP_STIMULATE_LOADING"
};

const postsReducer = (state, { type, ...action }) => {
  switch (type) {
    case POST_ACTION.SET_POST_MODE:
      const { postMode } = action;
      return {
        ...state,
        postMode
      };

    case POST_ACTION.SET_POST_CONFIG:
      const { postConfig } = action;
      return {
        ...state,
        postConfig
      };

    case POST_ACTION.START_STIMULATE_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case POST_ACTION.STOP_STIMULATE_LOADING:
      return {
        ...state,
        isLoading: false
      };

    default:
      throw new Error(`usePostSelections Error ${type} Not Found`);
  }
};

export const usePostSelection = () => {
  const [state, dispatch] = React.useReducer(postsReducer, {
    isLoading: true,
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

  React.useEffect(() => {
    setTimeout(() => {
      dispatch({ type: POST_ACTION.STOP_STIMULATE_LOADING });
    }, 1500);
  }, [dispatch]);

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
