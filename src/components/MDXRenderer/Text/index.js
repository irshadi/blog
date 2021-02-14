import React from "react";
import { Text, Code as _Code, Alert as BoxQuote, Kbd } from "@chakra-ui/react";

export const P = ({ children }) => <Text py="0.25em">{children}</Text>;

export const Code = ({ children }) => {
  return <_Code bg="gray.100">{children}</_Code>;
};

export const BlockQuote = ({ children }) => {
  return (
    <BoxQuote
      variant="left-accent"
      bg="gray.100"
      borderColor="gray.400"
      py="0.5em"
    >
      <Text>{children}</Text>
    </BoxQuote>
  );
};

export const Keyboard = ({ children }) => {
  return <Kbd>{children}</Kbd>;
};
