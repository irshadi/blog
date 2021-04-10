import React from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { CategoryTags } from "../CategoryTags";

export const TilePost = ({
  frontmatter,
  excerpt,
  fields,
  bg: _bg,
  ...props
}) => {
  const { title, img, createdAt, category } = frontmatter;
  const {
    readingTime: { text: timeToRead }
  } = fields;

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
