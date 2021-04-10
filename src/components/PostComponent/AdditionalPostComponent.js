import React from "react";
import { Box, Image, Flex, Text, Tag, Heading } from "@chakra-ui/react";
import { PostLinkWrapper } from ".";

export const FooterPost = ({
  fields: {
    slug,
    readingTime: { text: timeToRead }
  },
  excerpt,
  frontmatter: { img, title, category, createdAt },
  ...rest
}) => {
  return (
    <PostLinkWrapper link={slug} replace={true}>
      <Box>
        <Image src={img} borderRadius="md" />
        <Tag
          my="1.5em"
          py=".25em"
          px="1em"
          borderRadius="full"
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="wider"
        >
          {category}
        </Tag>

        <Heading fontSize="medium">{title}</Heading>
        <Text pt="1em" noOfLines={2}>
          {excerpt}
        </Text>
        <Flex pt="1em" flexDir="column" justify="space-between">
          <Text color="gray" fontSize="smaller" fontWeight="medium">
            {createdAt} · {timeToRead}
          </Text>
        </Flex>
      </Box>
    </PostLinkWrapper>
  );
};

export const CompactPost = ({
  id,
  frontmatter: { title, createdAt },
  fields: {
    slug,
    readingTime: { text: timeToRead }
  }
}) => {
  return (
    <PostLinkWrapper key={id} link={slug} replace={true}>
      <Flex flexDir="column" py=".5em">
        <Text fontWeight="bold" py=".25em">
          {title}
        </Text>
        <Flex>
          <Text color="gray" fontSize="smaller" fontWeight="medium">
            {createdAt} · {timeToRead}
          </Text>
        </Flex>
      </Flex>
    </PostLinkWrapper>
  );
};
