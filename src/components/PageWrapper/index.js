import { Flex } from "@chakra-ui/core";
import React from "react";
import { PostModeContextProvider } from "../../contexts/postMode";
import { ThemeContextProvider } from "../../contexts/theme";
import { Footer } from "../Footer";
import { NavigationBar } from "../NavigationBar";

// eslint-disable-next-line react/prop-types
export const PageWrapper = ({ Views }) => {
  return (
    <Flex p="5em" minH="100vh">
      <NavigationBar />
      {/* <PostModeContextProvider>
          <Views />
        </PostModeContextProvider>
        */}
      <Footer />
    </Flex>
  );
};
