import React from "react";
import { TextHero } from "./Fragments/TextHero";
import { Box } from "@chakra-ui/react";
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
        <ArticleDisplayModeSection />

        <ListOfArticles articles={data.data} />
        {/* <PostCategory /> */}
        {/* <Posts nodes={nodes} />
      <PostPaginations pageInfo={pageInfo} pageContext={pageContext} /> */}
      </Box>
    </ArticleDisplayModeContextProvider>
  );
};
