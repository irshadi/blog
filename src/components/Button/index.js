import React from "react";
import { Box, Button } from "@chakra-ui/core";

export const IconWrapper = ({ onClick, children, ...props }) => {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      w="2.5em"
      px="0em"
      rounded="full"
      {...props}
    >
      {children}
    </Button>
  );
};

export const IconButton = ({ Icon, onClick }) => {
  return (
    <Button onClick={onClick} variant="ghost" w="2.5em" px="0em" rounded="full">
      <Box as={Icon} />
    </Button>
  );
};
