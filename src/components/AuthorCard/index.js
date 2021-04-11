import React from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";

const defaultInfo =
  "Written by You. This is where your author bio lives. Share your work, your joys and of course, your Twitter handle.";

export const AuthorCard = ({ name = "John Doe", info = defaultInfo }) => {
  return (
    <Flex w={["100%"]} alignItems="center" justify="space-between">
      <Flex w={["20%"]}>
        <Avatar
          name={name}
          size="lg"
          src={"/avatar/irshadi.png"}
          colorScheme="gray"
        />
      </Flex>
      <Flex w={["80%"]} flexDir="column" pl={["1.5em"]}>
        <Text pb="0.75em" fontWeight="semibold">
          {name}
        </Text>
        <Text fontSize={["small", "medium"]}>{info}</Text>
      </Flex>
    </Flex>
  );
};
