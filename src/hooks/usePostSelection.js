import React from "react";
import { POST_MODE } from "../constants/postMode";
import { STORAGE_VALUE } from "../constants/storageValue";

export const CATEGORY_MAP = {
  ALL: "ALL",
  ENGINEERING: "ENGINEERING",
  TECHNOLOGY: "TECHNOLOGY",
  DESIGN: "DESIGN",
  "PERSONAL LIFE": "PERSONAL LIFE"
};

export const POST_ACTION = {
  SET_POST_MODE: "SET_POST_MODE",
  SET_SELECTED_CATEGORY: "SET_SELECTED_CATEGORY",

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

export const usePostSelection = () => {
  const [state, dispatch] = React.useReducer(postsReducer, {
    isLoading: true,
    selectedCategory: CATEGORY_MAP.ALL,
    postMode:
      typeof window !== undefined
        ? JSON.parse(localStorage.getItem(STORAGE_VALUE.POST_MODE))
        : POST_MODE.ROWS
  });

  const setPostMode = postMode => {
    localStorage.setItem(STORAGE_VALUE.POST_MODE, JSON.stringify(postMode));
    dispatch({
      type: POST_ACTION.SET_POST_MODE,
      postMode
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
    setPostMode,
    setSelectedCategory
  };
};
