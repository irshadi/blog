import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";
// import mediaqueries from "@st";

import { IoMdMoon } from "react-icons/io";
import { ImSun } from "react-icons/im";
import {
  Flex,
  Heading,
  Link,
  Button,
  Box,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { IconButton } from "../Button";
import { TEXT_COLOR_MODE } from "../../constants/theme";
import { ThemeIconButton } from "../Button/ThemeButton";

export const NavigationBar = () => {
  const { toggleColorMode } = useColorMode();
  const ThemeIcon = useColorModeValue(ImSun, IoMdMoon);

  return (
    <Flex as="nav" w="100%" justifyContent="space-between" alignItems="center">
      <Link
        w={["50%"]}
        as={GatsbyLink}
        to="/"
        replace
        _hover={{ border: "none" }}
      >
        <Heading
          cursor="pointer"
          fontSize={["1.5em", "1.75em"]}
          fontWeight="bold"
        >
          irshadi.id
        </Heading>
      </Link>
      <Flex w={["50%"]} justify="space-between">
        {/* <Flex w="100%" flexDir="row" justify="flex-end">
          <Link as={GatsbyLink} to="/blog/" replace _hover={{ border: "none" }}>
            <Button variant="ghost">Blog</Button>
          </Link>
          <Link as={GatsbyLink} to="/about" replace _hover={{ border: "none" }}>
            <Button variant="ghost" fontSize="medium">
              About
            </Button>
          </Link>
        </Flex> */}
        <ThemeIconButton />
        {/* <IconButton Icon={ThemeIcon} onClick={toggleColorMode} /> */}
      </Flex>
    </Flex>
  );
};
