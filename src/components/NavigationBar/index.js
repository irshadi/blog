import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { ThemeIconButton } from "../Button/ThemeButton";
import { MobileMenuButton } from "./MobileMenuButton";
import { LinkWrapper } from "../Link";

export const NavigationBar = () => {
  return (
    <Flex
      as="nav"
      w="100%"
      justifyContent={["flex-start", "space-between"]}
      alignItems="center"
    >
      <Flex w="50%">
        <LinkWrapper to="/" display={["none", "flex"]}>
          <Heading
            cursor="pointer"
            fontSize={["1.5em", "1.75em"]}
            fontWeight="bold"
            letterSpacing="tight"
          >
            irshadibagas.com
          </Heading>
        </LinkWrapper>

        <MobileMenuButton visibility={["visible", "hidden"]} w="100%" />
      </Flex>

      <Flex w="50%" flexDir="row" justify="flex-end" align={"center"}>
        <LinkWrapper
          to="/about"
          title="about me"
          display={["none", "flex"]}
          px="1em"
        />

        <ThemeIconButton />
      </Flex>
    </Flex>
  );
};
