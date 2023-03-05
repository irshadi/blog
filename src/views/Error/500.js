import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const _500 = props => (
  <Flex w="100%" h={["30em"]} flexDir="column" align="center" justify="center">
    <Heading fontSize="10em">500</Heading>
    <Text>Internal Server Error</Text>
  </Flex>
);
