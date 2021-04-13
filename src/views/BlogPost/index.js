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
      frontmatter: { createdAt, category, img, author, title },
      body,
      fields: {
        readingTime: { text: readingTime }
      }
    },
    allMdx
  } = data;
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
      <Heading textAlign={["center"]} fontSize={["x-large", "xx-large"]}>
        {title}
      </Heading>
      <Flex justify="center">
        <CategoryTags mt="2em" mb=".5em">
          {category}
        </CategoryTags>
      </Flex>
      <Flex justify="center" w="100%">
        <Text fontSize={["6xl"]} fontWeight="700">
          {data.title}
        </Text>
      </Flex>
      <Flex
        py="2.5em"
        justify="center"
        alignItems="center"
        w="100%"
        color={TEXT_COLOR_MODE_STYLE.TEXT.SECONDARY[colorMode]}
      >
        <Avatar
          name={author}
          src={"/avatar/irshadi.png"}
          mr=".5em"
          colorScheme="gray"
        />
        <Flex flexDir={["column", "row"]} alignItems={["center"]}>
          <Text fontSize={["xl"]} fontWeight="bold" px="1em">
            {author}
          </Text>
          <Text fontSize={["lg"]} paddingX="0.5em">
            {createdAt} · {readingTime}
          </Text>
        </Flex>
      </Flex>

      <Image my="1em" src={img} borderRadius=".5em" />

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
