import React from "react";
import { Flex, Text, Link, Icon, AspectRatio } from "@chakra-ui/react";
import { RxExternalLink } from "react-icons/rx";
import { Image } from "../Image";
import AuthorAvatar from "../../../public/images/avatar/irshadi.png";

export const AuthorCard = ({ ...props }) => {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justify="space-between"
      gap={2}
      bg="gray.100"
      p="1.5em"
      borderRadius="md"
    >
      <AspectRatio w="25%" ratio={1}>
        <Image
          w="100px"
          rounded="full"
          src={AuthorAvatar}
          alt="Author Image: Irshadi Bagasputro"
        />
      </AspectRatio>
      <Flex w="75%" flexDir="column" justify="center">
        <Text pb="0.75em" fontWeight="semibold">
          Irshadi Bagasputro
        </Text>

        <Text fontSize={["small", "medium"]}>
          Software Engineer from Jakarta, Indonesia. Currently working for
          <Link href="https://delman.io" color="blue.300" isExternal px="4px">
            delman.io <Icon as={RxExternalLink} />
          </Link>
          . I have a love-hate relationship with Javascript.
        </Text>
      </Flex>
    </Flex>
  );
};
