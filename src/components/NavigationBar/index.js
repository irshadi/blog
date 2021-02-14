import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { IoMdMoon } from "react-icons/io";
import { ImSun } from "react-icons/im";
import {
  Flex,
  Heading,
  Link,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { IconButton } from "../Button";

export const NavigationBar = () => {
  const { toggleColorMode } = useColorMode();
  const ThemeIcon = useColorModeValue(ImSun, IoMdMoon);

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
