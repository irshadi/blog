import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const _404 = () => (
  <Flex w="100%" h={["30em"]} flexDir="column" align="center" justify="center">
    <Heading fontSize="10em">404</Heading>
    <Text>Page not Found</Text>
  </Flex>
);
