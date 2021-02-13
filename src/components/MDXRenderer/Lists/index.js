import React from "react";
import { ListItem, Text } from "@chakra-ui/core";

export const List = ({ children }) => {
  return (
    <ListItem mx="1.25em" py="0.75em" px="1.5em">
      <Text>{children}</Text>
    </ListItem>
  );
};
