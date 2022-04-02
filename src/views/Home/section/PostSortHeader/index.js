import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { AuthorCard } from "../../../../components/AuthorCard";
import { SortSelections } from "../../../../components/SortSelections";

export const PostSortHeader = () => {
  return (
    <Box w="100%" py="2em">
      <Flex w={["100%", "75%"]}>
        <AuthorCard />
      </Flex>
      <Flex
        w="100%"
        mt={["2em"]}
        justify="space-between"
        align={["center"]}
        display={["none", "flex"]}
      >
        <Text w={"50%"} opacity={"75%"} fontSize="small" fontWeight="semibold">
          View Mode
        </Text>
        <SortSelections />
      </Flex>
    </Box>
  );
};
