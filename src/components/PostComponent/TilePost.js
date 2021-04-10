import React from "react";
import {
  Flex,
  Heading,
  Image,
  Text,
  Skeleton,
  SkeletonText
} from "@chakra-ui/react";
import { CategoryTags } from "../CategoryTags";

export const TilePost = ({
  frontmatter,
  excerpt,
  fields,
  bg: _bg,
  isLoading,
  ...props
}) => {
  const { title, img, createdAt, category } = frontmatter;
  const {
    readingTime: { text: timeToRead }
  } = fields;

  if (isLoading) {
    return (
      <Flex w="100%" h="15em" mb="2em">
        <Skeleton w="40%" h="100%" rounded="0.5em" />
        <Flex w="60%" h="100%" pb="1em" px="2.5em" flexDir="column">
          <Skeleton my="2em" h="1.5em" />
          <SkeletonText noOfLines={3} />
          <Skeleton my="2em" w="50%" h="1em" />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex w="100%" h="15em" mb="2em" {...props}>
      <Image w="40%" rounded="0.5em" src={img} />
      <Flex
        w="60%"
        h="100%"
        pb="1em"
        px="2.5em"
        flexDir="column"
        alignItems="center"
        justify="space-between"
      >
        <CategoryTags
          alignSelf="start"
          m="0"
          py=".25em"
          px="1em"
          borderRadius="full"
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="wider"
          fontSize="small"
        >
          {category}
        </CategoryTags>
        <Heading w="100%" fontSize="xl" py="1.5em" noOfLines={1}>
          {title}
        </Heading>
        <Flex w="100%" flexDir="column" justify="space-between" h="100%">
          <Text w="100%" noOfLines={3}>
            {excerpt}
          </Text>
          <Text color="gray" fontSize="smaller" fontWeight="medium">
            {createdAt} · {timeToRead}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
