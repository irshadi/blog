import React from "react";
import { Box, Image, Flex, Text, Heading } from "@chakra-ui/react";
import { PostLinkWrapper } from ".";
import { CategoryTags } from "../CategoryTags";

export const ArticleFooterPost = ({
  fields: {
    slug,
    readingTime: { text: timeToRead }
  },
  excerpt,
  frontmatter,
  ...rest
}) => {
  const {
    articleTitle,
    articleSummary,
    articleIcon,
    articleHeroImg,
    articleCategory,
    articleAuthor,
    articlePublishedStatus,
    articleDateCreatedAt
  } = frontmatter;
  return (
    <PostLinkWrapper link={slug} replace={true}>
      <Box>
        <Image src={articleHeroImg} borderRadius="md" alt={articleTitle} />
        <CategoryTags
          my="1.5em"
          py=".25em"
          px="1em"
          borderRadius="full"
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="wider"
        >
          {articleCategory}
        </CategoryTags>

        <Heading fontSize="medium">{articleTitle}</Heading>
        <Text pt="1em" noOfLines={2}>
          {excerpt}
        </Text>
        <Flex pt="1em" flexDir="column" justify="space-between">
          <Text color="gray" fontSize="smaller" fontWeight="medium">
            {articleDateCreatedAt} · {timeToRead}
          </Text>
        </Flex>
      </Box>
    </PostLinkWrapper>
  );
};

export const ArticleCompactPost = ({
  id,
  frontmatter: { articleTitle, articleDateCreatedAt },
  fields: {
    slug,
    readingTime: { text: timeToRead }
  }
}) => {
  return (
    <PostLinkWrapper key={id} link={slug} replace={true}>
      <Flex flexDir="column" py=".5em">
        <Text fontSize={["xs", "medium"]} fontWeight="bold" py=".25em">
          {articleTitle}
        </Text>
        <Flex>
          <Text color="gray" fontSize="smaller" fontWeight="medium">
            {articleDateCreatedAt} · {timeToRead}
          </Text>
        </Flex>
      </Flex>
    </PostLinkWrapper>
  );
};
