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
  const {
    articleTitle,
    articleSummary,
    articleHeroImg,
    articleCategory,
    articleDateCreatedAt
  } = frontmatter;
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
        {articleCategory}
      </CategoryTags>
      <Image
        roundedTop="0.5em"
        src={articleHeroImg}
        objectFit="cover"
        alt={articleTitle}
      />
      <Box p="2em">
        <Heading fontSize="xl" mb=".75em" noOfLines={1}>
          {articleTitle}
        </Heading>
        <Text noOfLines={3} fontSize={["small", "md"]}>
          {articleSummary}. {excerpt}
        </Text>
        <Flex alignItems="center" pt=".75em">
          <Text color="gray" fontSize="smaller" fontWeight="medium">
            {articleDateCreatedAt} · {timeToRead}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
