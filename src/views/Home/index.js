/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../../css/index.css";
import { TextHero } from "./section/TextHero";
import { PostSortHeader } from "./section/PostSortHeader";
import { AuthorCard } from "../../components/AuthorCard";
import { SortSelections } from "../../components/SortSelections";
import { Posts } from "../../components/PostComponent";
import { PostPagination } from "../../components/Pagination";
import { usePostModeContext } from "../../contexts/postMode";
import { Dump } from "../../components/Dump";
import { Box } from "@chakra-ui/core";

export const HomeView = () => {
  const { posts } = usePostModeContext();

  return (
    <Box py="2em">
      <TextHero />
      <PostSortHeader />
      <Posts posts={posts.edges} />
    </Box>
  );
};
