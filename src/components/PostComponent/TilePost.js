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
      <Flex w="100%" h={["100%", "15em"]} mb="2em" flexDir={["column", "row"]}>
        <Skeleton w={["100%", "40%"]} h={["7.5em", "auto"]} rounded="0.5em" />
        <Flex
          w={["100%", "60%"]}
          px={["1em", "2.5em"]}
          justify={["center", "space-between"]}
          h="100%"
          pb="1em"
          flexDir="column"
        >
          <Skeleton
            alignSelf={["center", "start"]}
            w="5em"
            mt={["1.5em", "2em"]}
            mb={[".5em", "2em"]}
            h="1.5em"
          />
          <Skeleton pb={[0, ".5em"]} h="1.5em" />
          <SkeletonText noOfLines={3} />
          <Skeleton my="2em" w="50%" h="1em" />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      w="100%"
      h={["100%", "15em"]}
      mb="2em"
      flexDir={["column", "row"]}
      {...props}
    >
      <Image w={["100%", "40%"]} h={["auto"]} rounded="0.5em" src={img} />
      <Flex
        w={["100%", "60%"]}
        h="100%"
        pb="1em"
        px={["1em", "2.5em"]}
        flexDir="column"
        alignItems="center"
        justify={["center", "space-around"]}
      >
        <CategoryTags
          alignSelf={["center", "start"]}
          mt={["1.5em", 0]}
          px="1em"
          borderRadius="full"
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="wider"
          fontSize="small"
        >
          {category}
        </CategoryTags>
        <Heading w="100%" fontSize="xl" pb={[0, ".5em"]} noOfLines={1}>
          {title}
        </Heading>
        <Flex w="100%" flexDir="column" justify="space-between" h="100%">
          <Text w="100%" noOfLines={3}>
            {excerpt}
          </Text>
          <Text
            color="gray"
            my={[".5em", 0]}
            fontSize="smaller"
            fontWeight="medium"
          >
            {createdAt} · {timeToRead}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
