import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const TilePost = ({ frontmatter, excerpt, ...props }) => {
  const { title, img, createdAt } = frontmatter;
  return (
    <Flex w="100%" rounded="0.5em" mb="2em" {...props}>
      <Image w="40%" roundedLeft="0.5em" src={img} />
      <Box w="60%" p="2em">
        <Heading fontSize="xl">{title}</Heading>
        <Text py="1em">{excerpt}</Text>
        <Flex>
          <Text>{createdAt}</Text>
        </Flex>
      </Box>
    </Flex>
  );
};
