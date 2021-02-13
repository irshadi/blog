import React from "react";
import { Box } from "@chakra-ui/react";
import { PostModeContextProvider } from "../../contexts/postMode";
import { Footer } from "../Footer";
import { NavigationBar } from "../NavigationBar";

// eslint-disable-next-line react/prop-types
export const PageWrapper = ({ Views, query }) => {
  return (
    <Box p="5em">
      <NavigationBar />
      <PostModeContextProvider>
        <Views query={query} />
      </PostModeContextProvider>
      <Footer />
    </Box>
  );
};
