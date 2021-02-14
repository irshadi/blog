import React from "react";
import { Flex } from "@chakra-ui/react";
import { AuthorCard } from "../../../../components/AuthorCard";
import { SortSelections } from "../../../../components/SortSelections";

export const PostSortHeader = () => {
  return (
    <Flex w="100%" justify="space-between">
      <Flex w="50%">
        <AuthorCard
          name="Irshadi Bagasputro"
          url="https://avatars2.githubusercontent.com/u/45032138?s=460&u=c489ba890ad0e185abb0b799066fe9cffd5826b9&v=4"
        />
      </Flex>
      <Flex w="50%">
        <SortSelections />
      </Flex>
    </Flex>
  );
};
