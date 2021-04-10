import React from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";
import avatar from "../../../static/avatar/irshadi.png";

const defaultInfo =
  "Written by You. This is where your author bio lives. Share your work, your joys and of course, your Twitter handle.";

export const AuthorCard = ({ name = "John Doe", info = defaultInfo }) => {
  return (
    <Flex alignItems="center" justify="space-between" py="2.5em">
      <Avatar
        name={name}
        size="lg"
        src={"/avatar/irshadi.png"}
        mr=".5em"
        colorScheme="gray"
      />
      <Flex flexDir="column" flexWrap="wrap" px="2em">
        <Text pb="0.75em" fontWeight="semibold">
          {name}
        </Text>
        <Text>{info}</Text>
      </Flex>
    </Flex>
  );
};
