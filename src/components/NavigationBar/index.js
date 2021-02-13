import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { IoMdMoon } from "react-icons/io";
import { ImSun } from "react-icons/im";
import { Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import { isUsingDarkMode } from "../../constants/theme";
import { IconButton } from "../Button";

export const NavigationBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const ThemeIcon = isUsingDarkMode(colorMode) ? IoMdMoon : ImSun;

  return (
    <Flex as="nav" w="100%" justifyContent="space-between">
      <Link as={GatsbyLink} to="/" replace _hover={{ border: "none" }}>
        <Heading cursor="pointer" fontSize="1.75em" fontWeight="bold">
          irshadi.id
        </Heading>
      </Link>
      <IconButton Icon={ThemeIcon} onClick={toggleColorMode} />
    </Flex>
  );
};
