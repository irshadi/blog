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
import { TEXT_COLOR_MODE_STYLE } from "src/constants/theme";
import { useWindowScrollPosition } from "src/hooks/useWindowScrollPosition";
import { CategoryTag } from "src/components/CategoryTag";
import { TabTitle } from "src/components/TabTitle";
import { MDXRenderer } from "src/components/MDXRenderer";

export const BlogPost = ({ data }) => {
  const {
    data: { attributes, id }
  } = data;

  const {
    articleContent,
    articleDescription,
    articleTitle,
    createdAt: articleDateCreatedAt,
    slug,
    updatedAt: articleDateUpdatedAt
  } = attributes;

  const { colorMode } = useColorMode();
  const { scrollPosition } = useWindowScrollPosition();

  return (
    <Flex
      justify="center"
      flexDirection="column"
      w="100%"
      mt={["2.5em", "3.5em"]}
    >
      <TabTitle title={`Irshadi Bagas - ${articleTitle}`} />
      <Flex justify="center">
        {/* <CategoryTag my="2em">{articleCategory}</CategoryTag> */}
      </Flex>
      <Heading textAlign={["center"]} fontSize={["x-large", "xx-large"]}>
        {articleDescription}
      </Heading>
      <Flex
        py="2.5em"
        justify="center"
        alignItems="center"
        w="100%"
        // color={TEXT_COLOR_MODE_STYLE.TEXT.SECONDARY[colorMode]}
      >
        <Avatar
          name="Irshadi Bagasputro"
          src={"/avatar/irshadi.png"}
          mr=".5em"
          colorScheme="gray"
        />
        <Flex flexDir={["column", "row"]} alignItems={["center"]}>
          <Text fontSize={["xl"]} fontWeight="bold" px="1em">
            Irshadi Bagasputro
          </Text>
          <Text paddingX="0.5em" fontSize={["small", "lg"]}>
            {articleDateCreatedAt}
            {/* · {readingTime} */}
          </Text>
        </Flex>
      </Flex>

      {/* <Image
        my="1em"
        src={articleHeroImg}
        borderRadius=".5em"
        alt={articleTitle}
      /> */}

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

      <MDXRenderer>{articleContent}</MDXRenderer>
      {/* 
      <FooterPostSuggestion
        category={pageContext.category}
        data={allMdx}
        morePost={[previous, next]}
      /> */}
    </Flex>
  );
};
