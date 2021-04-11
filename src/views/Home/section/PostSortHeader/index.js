import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AuthorCard } from "../../../../components/AuthorCard";
import { SortSelections } from "../../../../components/SortSelections";

export const PostSortHeader = () => {
  return (
    <Flex w="100%" flexDir={["column", "row"]} justify="space-between" py="2em">
      <Flex w={["100%", "50%"]}>
        <AuthorCard
          name="Irshadi Bagasputro"
          url="https://avatars2.githubusercontent.com/u/45032138?s=460&u=c489ba890ad0e185abb0b799066fe9cffd5826b9&v=4"
        />
      </Flex>
      <Flex w={["100%", "50%"]} pt={["1.5em", 0]}>
        <SortSelections />
      </Flex>
    </Flex>
  );
};
