import React from "react";
import "../../css/index.css";
import { TextHero } from "./section/TextHero";
import { PostSortHeader } from "./section/PostSortHeader";
import { Posts } from "../../components/PostComponent";
import { Box } from "@chakra-ui/react";
import { PostPaginations } from "./section/PostPaginations";
import { PostCategory } from "./section/PostCategory";

export const HomeView = data => {
  const {
    query: {
      data: {
        allMdx: { nodes, pageInfo }
      },
      pageContext
    }
  } = data;

  return (
    <Box py="2em">
      <TextHero />
      <PostSortHeader />
      {/* <PostCategory /> */}
      <Posts nodes={nodes} />
      <PostPaginations pageInfo={pageInfo} pageContext={pageContext} />
    </Box>
  );
};
