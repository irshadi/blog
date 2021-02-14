import React from "react";
import { Text, Code as _Code, Alert as BoxQuote, Kbd } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { TEXT_COLOR_MODE } from "../../../constants/theme";

export const P = ({ children }) => <Text py="0.25em">{children}</Text>;

export const Code = ({ children }) => {
  const { colorMode } = useColorMode();

  const backgroundColor = useColorModeValue("gray.200", "gray.600");
  const color = useColorModeValue("gray.700", "gray.200");
  console.log({
    colorMode,
    backgroundColor,
    color
  });
  return (
    <_Code bg={backgroundColor} color={color}>
      {children}
    </_Code>
  );
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
