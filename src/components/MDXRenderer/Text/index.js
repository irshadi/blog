import React from "react";
import { Text, Code as _Code, Alert as BoxQuote, Kbd } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { TEXT_COLOR_MODE } from "../../../constants/theme";

export const P = ({ children }) => <Text py="0.25em">{children}</Text>;

export const Code = ({ children }) => {
  const backgroundColor = useColorModeValue("gray.200", "gray.600");
  const color = useColorModeValue("gray.700", "gray.200");

  return (
    <_Code bg={backgroundColor} color={color}>
      {children}
    </_Code>
  );
};

export const BlockQuote = ({ children }) => {
  const backgroundColor = useColorModeValue("gray.200", "gray.700");
  const borderColor = useColorModeValue("gray.700", "gray.200");

  return (
    <BoxQuote
      variant="left-accent"
      bg={backgroundColor}
      borderColor={borderColor}
      py="0.5em"
    >
      <Text color={borderColor}>{children}</Text>
    </BoxQuote>
  );
};

export const Keyboard = ({ children }) => {
  return <Kbd>{children}</Kbd>;
};
