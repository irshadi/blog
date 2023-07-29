import React from "react";
import {
  Flex,
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
import { Image } from "src/components/Image";

export const BlogPost = ({ data: { data } }) => {
  // console.log(data);
  // return null;
  // return null;
  const {
    data: { attributes, id }
  } = data;

  const {
    // articleContent,
    articleContentMDX,
    articleDescription,
    articleHeroImage: {
      data: { attributes: articleHeroImageAttribute }
    },
    categories,
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

      <Image
        fill={true}
        imageProps={{
          width: articleHeroImageAttribute.width,
          height: articleHeroImageAttribute.height
        }}
        src={`http://127.0.0.1:1337${articleHeroImageAttribute.url}`}
        alt={articleTitle}
        style={{ objectFit: "cover" }}
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

      <MDXRenderer source={articleContentMDX} />
      {/* 
      <FooterPostSuggestion
        category={pageContext.category}
        data={allMdx}
        morePost={[previous, next]}
      /> */}
    </Flex>
  );
};
