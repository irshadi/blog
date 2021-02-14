import React from "react";
import "../../css/index.css";
import { TextHero } from "./section/TextHero";
import { PostSortHeader } from "./section/PostSortHeader";
import { Posts } from "../../components/PostComponent";
import { Box } from "@chakra-ui/react";

export const HomeView = () => {
  return (
    <Box py="2em">
      <TextHero />
      <PostSortHeader />
      <Posts />
    </Box>
  );
};
