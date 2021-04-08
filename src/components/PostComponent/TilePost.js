import React from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export const TilePost = ({ frontmatter, excerpt, ...props }) => {
  const { title, img, createdAt } = frontmatter;
  return (
    <Flex w="100%" h="17.5em" rounded="0.5em" mb="2em" {...props}>
      <Image w="40%" roundedLeft="0.5em" src={img} />
      <Flex
        w="60%"
        h="100%"
        p="2.5em"
        flexDir="column"
        align="center"
        justify="start"
      >
        <Heading w="100%" fontSize="xl">
          {title}
        </Heading>
        <Flex w="100%" flexDir="column" justify="space-between" h="100%">
          <Text w="100%" py="1em">
            {excerpt}
          </Text>
          <Text>{createdAt}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
