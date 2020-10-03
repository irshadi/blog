import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { IoMdMoon } from "react-icons/io";
import { ImSun } from "react-icons/im";
import { Flex, Link, Text, useColorMode } from "@chakra-ui/core";
import { isUsingDarkMode } from "../../constants/theme";
import { IconButton } from "../Button";

export const NavigationBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const ThemeIcon = isUsingDarkMode(colorMode) ? IoMdMoon : ImSun;

  return (
    <Flex as="nav" w="100%" justifyContent="space-between">
      <Link as={GatsbyLink} to="/" replace _hover={{ border: "none" }}>
        <Text cursor="pointer" fontSize="1.75em" fontWeight="bold">
          irshadi.id
        </Text>
      </Link>
      <IconButton Icon={ThemeIcon} onClick={toggleColorMode} />
    </Flex>
  );
};
