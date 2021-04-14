import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Skeleton,
  SkeletonText,
  useColorModeValue
} from "@chakra-ui/react";
import { CategoryTags } from "../CategoryTags";

export const RowPost = ({
  frontmatter,
  excerpt,
  fields,
  isLoading,
  ...props
}) => {
  const { title, img, createdAt, category } = frontmatter;
  const {
    readingTime: { text: timeToRead }
  } = fields;
  const variant = useColorModeValue("subtle", "solid");

  if (isLoading) {
    return (
      <Flex flexDir="column" justify="space-between">
        <Skeleton h="8.5em" rounded="0.5em" />
        <Skeleton my="2em" h="1.5em" />
        <SkeletonText noOfLines={3} />
        <Skeleton my="2em" w="50%" h="1em" />
      </Flex>
    );
  }

  return (
    <Box w="100%" borderRadius="0.5em" {...props}>
      <CategoryTags
        variant={variant}
        pos="absolute"
        boxShadow="md"
        ml="1.5em"
        fontSize="small"
      >
        {category}
      </CategoryTags>
      <Image roundedTop="0.5em" src={img} objectFit="cover" alt={title} />
      <Box p="2em">
        <Heading fontSize="xl" mb=".75em" noOfLines={1}>
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
