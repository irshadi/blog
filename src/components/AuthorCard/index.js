import React from "react";
import { Flex, Avatar, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const AuthorCard = ({ name = "John Doe" }) => {
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
      <Flex w={["80%"]} flexDir="column" pl={["1.5em", 0]}>
        <Text pb="0.75em" fontWeight="semibold">
          {name}
        </Text>
        <Text fontSize={["small", "medium"]}>
          Software Engineer from Jakarta, Indonesia. Currently working for
          <Link href="https://delman.io" color="blue.300" isExternal px="4px">
            delman.io <ExternalLinkIcon fontSize="small" mt="-2px" />
          </Link>
          . I have a love-hate relationship with Javascript.
        </Text>
      </Flex>
    </Flex>
  );
};
