import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AuthorCard } from "../../../../components/AuthorCard";
import { SortSelections } from "../../../../components/SortSelections";

export const PostSortHeader = () => {
  return (
    <Flex w="100%" flexDir={["column", "row"]} justify="space-between" py="2em">
      <Flex w={["100%", "75%"]}>
        <AuthorCard />
      </Flex>
      <Flex w={["100%", "25%"]} mt={["2em", 0]} align={["center"]}>
        <Text
          w={"50%"}
          visibility={["visible", "hidden"]}
          opacity={"75%"}
          fontSize="small"
          fontWeight="semibold"
        >
          View Mode
        </Text>
        <SortSelections />
      </Flex>
    </Flex>
  );
};
