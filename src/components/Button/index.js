import React from "react";
import { Box, Button } from "@chakra-ui/react";

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

export const IconButton = ({ Icon, onClick, opacity = "100%" }) => {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      w="2.5em"
      px="0em"
      rounded="full"
      opacity={opacity}
    >
      <Box as={Icon} />
    </Button>
  );
};
