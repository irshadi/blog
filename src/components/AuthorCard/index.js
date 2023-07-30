import React from "react";
import { Flex, Text, Link, Icon, Avatar } from "@chakra-ui/react";
import { RxExternalLink } from "react-icons/rx";

export const AuthorCard = ({ ...props }) => {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justify="space-between"
      gap={2}
      bg="gray.100"
      borderRadius="md"
      maxW="37.5em "
      height="7.5em"
      p="1em"
      {...props}
    >
      <Flex w="20%" h="100%" align="center" justify="center">
        <Avatar
          name="Irshadi Bagasputro"
          size="xl"
          src="/images/avatar/irshadi.png"
        />
      </Flex>

      <Flex minWidth="80%" h="100%" flexDir="column" justify="center" px=".5em">
        <Text pb=".5em" fontWeight="semibold">
          Irshadi Bagasputro
        </Text>

        <Text fontSize={["small"]} lineHeight="1.25" noOfLines={3}>
          Software Engineer from Jakarta, Indonesia. Specialized in Front End &
          Automated Testing. Currently working for
          <Link href="https://delman.io" color="blue.300" isExternal px="4px">
            delman.io <Icon as={RxExternalLink} />
          </Link>
          .
        </Text>
      </Flex>
    </Flex>
  );
};
