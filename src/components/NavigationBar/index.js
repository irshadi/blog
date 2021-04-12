import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Flex, Heading, Link, Button, Text } from "@chakra-ui/react";
import { ThemeIconButton } from "../Button/ThemeButton";

export const NavigationBar = () => {
  return (
    <Flex as="nav" w="100%" justifyContent="space-between" alignItems="center">
      <Link
        w={["100%", "50%"]}
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

      <Flex
        w={["100%", "50%"]}
        flexDir="row"
        justify={["flex-end"]}
        align={["center"]}
      >
        <Flex w="100%" justify={["flex-end"]} flexDir="row" pr={["2em"]}>
          <Link as={GatsbyLink} to="/about" replace _hover={{ border: "none" }}>
            <Button variant="link" p={[0, "inherit"]}>
              <Text textTransform="lowercase" fontWeight="extrabold">
                About me
              </Text>
            </Button>
          </Link>
        </Flex>
        <ThemeIconButton />
      </Flex>
    </Flex>
  );
};
