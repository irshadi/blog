import React from "react";
import { TextHero } from "./Fragments/TextHero";
// import { PostSortHeader } from "./section/PostSortHeader";
// import { Posts } from "../../components/PostComponent";
import { Box, Flex } from "@chakra-ui/react";
// import { PostPaginations } from "./section/PostPaginations";
// import { PostCategory } from "./section/PostCategory";
import { TabTitle } from "src/components/TabTitle";

export const HomeView = ({ data }) => {
  return (
    <Box py="2em">
      <TabTitle />
      <Flex h={["100vh", "40vh"]}>
        <TextHero />
      </Flex>
      {/* <PostSortHeader /> */}
      {/* <PostCategory /> */}
      {/* <Posts nodes={nodes} />
      <PostPaginations pageInfo={pageInfo} pageContext={pageContext} /> */}
    </Box>
  );
};
