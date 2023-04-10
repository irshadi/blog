import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";
import { ArticleDisplayModeContextProvider } from "src/contexts/articleDisplayMode";

export const PageWrapper = ({ Views, ...rest }) => {
  const hasProps = Boolean(rest);
  // Parse back the result from `getStaticProps`
  const props = { ...(hasProps && { data: JSON.parse(rest.data.json) }) };

  return (
    <Flex
      height="100%"
      flexDir="column"
      px={["10vw", "12.5vw", "17.5vw"]}
      overflow="auto"
    >
      <NavigationBar height={["7.5em"]} zIndex={2} />
      <Flex h="auto" flexDir="column">
        <Views {...props} />
      </Flex>
      <Footer height={["7.5em"]} />
    </Flex>
  );
};
