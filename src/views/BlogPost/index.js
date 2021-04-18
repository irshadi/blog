import React from "react";
import {
  Flex,
  Image,
  Avatar,
  Text,
  useColorMode,
  Progress,
  Heading
} from "@chakra-ui/react";
import { TEXT_COLOR_MODE_STYLE } from "../../constants/theme";
import { useWindowScrollPosition } from "../../hooks/useWindowScrollPosition";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FooterPostSuggestion } from "../../components/PostComponent/FooterPostSuggestion";
import { CategoryTags } from "../../components/CategoryTags";

export const BlogPost = ({ query: { data, pageContext } }) => {
  const {
    mdx: {
      frontmatter,
      body,
      fields: {
        readingTime: { text: readingTime }
      }
    },
    allMdx
  } = data;
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
  const { previous, next } = pageContext;
  const { colorMode } = useColorMode();
  const { scrollPosition } = useWindowScrollPosition();

  return (
    <Flex
      justify="center"
      flexDirection="column"
      w="100%"
      mt={["2.5em", "3.5em"]}
    >
      <Flex justify="center">
        <CategoryTags my="2em">{articleCategory}</CategoryTags>
      </Flex>
      <Heading textAlign={["center"]} fontSize={["x-large", "xx-large"]}>
        {articleTitle}
      </Heading>
      <Flex
        py="2.5em"
        justify="center"
        alignItems="center"
        w="100%"
        color={TEXT_COLOR_MODE_STYLE.TEXT.SECONDARY[colorMode]}
      >
        <Avatar
          name={articleAuthor}
          src={"/avatar/irshadi.png"}
          mr=".5em"
          colorScheme="gray"
        />
        <Flex flexDir={["column", "row"]} alignItems={["center"]}>
          <Text fontSize={["xl"]} fontWeight="bold" px="1em">
            {articleAuthor}
          </Text>
          <Text fontSize={["lg"]} paddingX="0.5em">
            {articleDateCreatedAt} · {readingTime}
          </Text>
        </Flex>
      </Flex>

      <Image
        my="1em"
        src={articleHeroImg}
        borderRadius=".5em"
        alt={articleTitle}
      />

      <Progress
        pos="fixed"
        top="0"
        left="0"
        width="100vw"
        zIndex={5}
        boxShadow="2xl"
        value={scrollPosition * 100}
        size="xs"
        colorScheme={"gray"}
      />

      <MDXRenderer>{body}</MDXRenderer>

      <FooterPostSuggestion
        category={pageContext.category}
        data={allMdx}
        morePost={[previous, next]}
      />
    </Flex>
  );
};
