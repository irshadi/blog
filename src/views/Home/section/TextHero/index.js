import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const TextHero = () => {
  return (
    <Box my={["1em"]} fontSize="2.5em" fontWeight="semibold">
      <Heading>Hello,</Heading>
      <Heading>Most of the time it's just gibberish.</Heading>
    </Box>
  );
};
