import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { CategoryTags } from "../CategoryTags";

export const RowPost = ({ frontmatter, excerpt, fields, ...props }) => {
  const { title, img, createdAt, category } = frontmatter;
  const {
    readingTime: { text: timeToRead }
  } = fields;

  return (
    <Box w="100%" borderRadius="0.5em" {...props}>
      <CategoryTags pos="absolute" boxShadow="md" ml="1.5em" fontSize="small">
        {category}
      </CategoryTags>
      <Image roundedTop="0.5em" src={img} />
      <Box p="2em">
        <Heading fontSize="xl" pb=".75em">
          {title}
        </Heading>
        <Text noOfLines={3}>{excerpt}</Text>
        <Flex alignItems="center" pt=".75em">
          <Text color="gray" fontSize="smaller" fontWeight="medium">
            {createdAt} · {timeToRead}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
