import React from "react";
import { Text } from "@chakra-ui/react";

export const List = ({ children }) => {
  return (
    <Text as="li" mx="1.25em" py="0.75em" px="1.5em">
      {children}
    </Text>
  );
};
