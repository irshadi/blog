/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../../css/index.css";
import { TextHero } from "./section/TextHero";
import { PostSortHeader } from "./section/PostSortHeader";
import { Posts } from "../../components/PostComponent";
import { Dump } from "../../components/Dump";
import { Box } from "@chakra-ui/react";

export const HomeView = () => {
  return (
    <Box py="2em">
      <TextHero />
      <PostSortHeader />
      <Posts />
      <Dump />
    </Box>
  );
};
