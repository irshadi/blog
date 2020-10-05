import { Flex, Image, Text } from "@chakra-ui/core";
import React from "react";

const defaultInfo =
  "Written by You. This is where your author bio lives. Share your work, your joys and of course, your Twitter handle.";

export const AuthorCard = ({ name = "John Doe", info = defaultInfo, url }) => {
  return (
    <Flex alignItems="center" justify="space-between" py="2.5em">
      <Image w="5em" alignSelf="center" rounded="full" src={url} />

      <Flex flexDir="column" flexWrap="wrap" px="2em">
        <Text pb="0.75em" fontWeight="semibold">
          {name}
        </Text>
        <Text>{info}</Text>
      </Flex>
    </Flex>
  );
};
