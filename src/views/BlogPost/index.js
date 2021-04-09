import React from "react";
import { Flex, Image, Text, useColorMode, Progress } from "@chakra-ui/react";
import { TEXT_COLOR_MODE_STYLE } from "../../constants/theme";
import { useWindowScrollPosition } from "../../hooks/useWindowScrollPosition";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FooterPostSuggestion } from "../../components/PostComponent/FooterPostSuggestion";

export const BlogPost = ({ query: { data, pageContext } }) => {
  const {
    mdx: {
      frontmatter: { createdAt, category },
      body,
      fields: {
        readingTime: { text: readingTime }
      },
      excerpt
    },
    allMdx
  } = data;
  const { previous, next } = pageContext;
  const { colorMode } = useColorMode();
  const { scrollPosition } = useWindowScrollPosition();

  return (
    <Flex justify="center" flexDirection="column" w="100%">
      <Flex justify="center" w="100%">
        <Progress value={scrollPosition * 100} size="xs" colorScheme="pink" />
        <Text fontSize={["6xl"]} fontWeight="700">
          {data.title}
        </Text>
      </Flex>
      <Flex
        justify="center"
        w="100%"
        color={TEXT_COLOR_MODE_STYLE.TEXT.SECONDARY[colorMode]}
      >
        <Flex maxW="75%">
          <Image
            h="1.75em"
            alignSelf="center"
            rounded="full"
            src="https://avatars2.githubusercontent.com/u/45032138?s=460&u=c489ba890ad0e185abb0b799066fe9cffd5826b9&v=4"
          />
          <Text fontSize={["xl"]} fontWeight="700" paddingX="0.5em">
            {data.author}
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Text fontSize={["lg"]} paddingX="0.5em">
            {createdAt} · {readingTime}
          </Text>
        </Flex>
      </Flex>

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
