import React from "react";
import {
  ARTICLE_DISPLAY_MODE_MAP,
  CATEGORY_MAP
} from "src/constants/articleDisplayMode";
import { STORAGE_VALUE } from "src/constants/storageValue";

export const POST_ACTION = {
  SET_ARTICLE_DISPLAY_MODE: "SET_ARTICLE_DISPLAY_MODE",
  SET_SELECTED_CATEGORY: "SET_SELECTED_CATEGORY",

  START_STIMULATE_LOADING: "START_STIMULATE_LOADING",
  STOP_STIMULATE_LOADING: "STOP_STIMULATE_LOADING"
};

const postsReducer = (state, { type, ...action }) => {
  switch (type) {
    case POST_ACTION.SET_ARTICLE_DISPLAY_MODE:
      const { articleDisplayMode } = action;
      return {
        ...state,
        articleDisplayMode
      };

    case POST_ACTION.SET_SELECTED_CATEGORY:
      const { selectedCategory } = action;
      return {
        ...state,
        selectedCategory
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

export const useArticlesConfig = () => {
  const [state, dispatch] = React.useReducer(postsReducer, {
    isLoading: true,
    selectedCategory: CATEGORY_MAP.ALL,
    articleDisplayMode: ARTICLE_DISPLAY_MODE_MAP.ROWS
  });

  const setArticleDisplayMode = articleDisplayMode => {
    localStorage.setItem(
      STORAGE_VALUE.ARTICLE_DISPLAY_MODE,
      JSON.stringify(articleDisplayMode)
    );

    dispatch({
      type: POST_ACTION.SET_ARTICLE_DISPLAY_MODE,
      articleDisplayMode
    });
  };

  const setSelectedCategory = selectedCategory =>
    dispatch({ type: POST_ACTION.SET_SELECTED_CATEGORY, selectedCategory });

  React.useEffect(() => {
    setTimeout(() => {
      dispatch({ type: POST_ACTION.STOP_STIMULATE_LOADING });
    }, 1500);
  }, [dispatch]);

  return {
    state,
    dispatch,

    setArticleDisplayMode,
    setSelectedCategory
  };
};
