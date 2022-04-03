import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HomePageAvatar } from "./Fragments/HomePageAvatar";

export const AuthorCard = () => {
  return (
    <Flex w={["100%"]} alignItems="center" justify="space-between">
      <Flex w={["auto"]}>
        <HomePageAvatar />
      </Flex>
      <Flex w={["80%"]} flexDir="column" pl={["1.5em", 0]}>
        <Text pb="0.75em" fontWeight="semibold">
          Irshadi Bagasputro
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
