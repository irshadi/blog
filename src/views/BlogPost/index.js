import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Flex, Image, Text, useColorMode } from "@chakra-ui/core";
import { THEME_MODE_STYLE } from "../../constants/theme";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const BlogPost = ({ query: { data } }) => {
  const {
    mdx: { frontmatter, body, fields, excerpt }
  } = data;
  const { colorMode } = useColorMode();

  return (
    <Flex justify="center" flexDirection="column" w="100%">
      <Flex justify="center" w="100%">
        <Text fontSize={["6xl"]} fontWeight="700">
          {data.title}
        </Text>
      </Flex>
      <Flex
        justify="center"
        w="100%"
        color={THEME_MODE_STYLE.TEXT.SECONDARY[colorMode]}
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
            {data.createdAt} · {data.metadata || "XX min read"}
          </Text>
        </Flex>
      </Flex>
      <MDXRenderer>{body}</MDXRenderer>
    </Flex>
  );
};
