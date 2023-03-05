import React from "react";
import { TextHero } from "./Fragments/TextHero";
// import { PostSortHeader } from "./section/PostSortHeader";
// import { Posts } from "../../components/PostComponent";
import { Box } from "@chakra-ui/react";
// import { PostPaginations } from "./section/PostPaginations";
// import { PostCategory } from "./section/PostCategory";
import { TabTitle } from "src/components/TabTitle";

export const HomeView = ({ data }) => {
  return (
    <Box py="2em">
      <TabTitle />
      <TextHero />
      {/* <PostSortHeader /> */}
      {/* <PostCategory /> */}
      {/* <Posts nodes={nodes} />
      <PostPaginations pageInfo={pageInfo} pageContext={pageContext} /> */}
    </Box>
  );
};
