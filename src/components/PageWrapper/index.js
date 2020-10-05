import React from "react";
import { Box } from "@chakra-ui/core";
import { PostModeContextProvider } from "../../contexts/postMode";
import { Footer } from "../Footer";
import { NavigationBar } from "../NavigationBar";

// eslint-disable-next-line react/prop-types
export const PageWrapper = ({ Views }) => {
  return (
    <Box p="5em">
      <NavigationBar />
      <PostModeContextProvider>
        <Views />
      </PostModeContextProvider>
      <Footer />
    </Box>
  );
};
