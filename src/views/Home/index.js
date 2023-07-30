import React from "react";
import { TextHero } from "./Fragments/TextHero";
import { Box, Spacer } from "@chakra-ui/react";
import { TabTitle } from "src/components/TabTitle";
import { ArticleDisplayModeSection } from "./Fragments/ArticleDisplayModeSection";
import { ArticleDisplayModeContextProvider } from "src/contexts/articleDisplayMode";
import { ListOfArticles } from "./Fragments/ListOfArticles";

export const HomeView = ({ data }) => {
  return (
    <ArticleDisplayModeContextProvider>
      <Box py="2em">
        <TabTitle />
        <TextHero />
        {/* <ArticleDisplayModeSection /> */}
        <Spacer height="10em" />

        <ListOfArticles articles={data} />
        {/* <PostCategory /> */}
        {/* <Posts nodes={nodes} />
      <PostPaginations pageInfo={pageInfo} pageContext={pageContext} /> */}
      </Box>
    </ArticleDisplayModeContextProvider>
  );
};
