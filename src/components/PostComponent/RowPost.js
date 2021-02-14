import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const RowPost = ({ frontmatter, excerpt, ...props }) => {
  const { title, img, createdAt } = frontmatter;
  return (
    <Box w="100%" borderRadius="0.5em" {...props}>
      <Image roundedTop="0.5em" src={img} />
      <Box p="2em">
        <Heading fontSize="xl">{title}</Heading>
        <Text py="1em">{excerpt}</Text>
        <Flex>
          <Text>{createdAt}</Text>
        </Flex>
      </Box>
    </Box>
  );
};
