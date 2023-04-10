import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { ArticlesDisplayMode } from "src/components/Articles/ArticlesDisplayMode";

export const ArticleDisplayModeSection = () => {
  return (
    <Flex
      w="100%"
      height="10em"
      justify="space-between"
      align={["center"]}
      display={["none", "flex"]}
    >
      <Text w={"50%"} opacity={"75%"} fontSize="small" fontWeight="semibold">
        View Mode
      </Text>
      <ArticlesDisplayMode />
    </Flex>
  );
};
