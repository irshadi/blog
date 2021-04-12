import React from "react";
import { Box } from "@chakra-ui/react";
import { PostModeContextProvider } from "../../contexts/postMode";
import { Footer } from "../Footer";
import { NavigationBar } from "../NavigationBar";

// eslint-disable-next-line react/prop-types
export const PageWrapper = ({ Views, query }) => {
  return (
    <Box
      pt={["2.5em", "6.5em"]}
      pb={["5em", "6.5em"]}
      px={["10vw", "12.5vw", "17.5vw"]}
    >
      <NavigationBar />
      <PostModeContextProvider>
        <Views query={query} />
      </PostModeContextProvider>
      <Footer />
    </Box>
  );
};
