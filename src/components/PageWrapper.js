import React from "react";
import { Box } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";
import { ArticleDisplayModeContextProvider } from "src/contexts/articleDisplayMode";

export const PageWrapper = ({ Views, ...rest }) => {
  const hasProps = Boolean(rest);
  // Parse back the result from `getStaticProps`
  const props = { ...(hasProps && { data: JSON.parse(rest.data.json) }) };

  return (
    <Box
      pt={["2.5em", "6.5em"]}
      pb={["5em", "6.5em"]}
      px={["10vw", "12.5vw", "17.5vw"]}
    >
      <NavigationBar />
      <ArticleDisplayModeContextProvider>
        <Views {...props} />
      </ArticleDisplayModeContextProvider>
      <Footer />
    </Box>
  );
};
