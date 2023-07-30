import React from "react";
import {
  Flex,
  Avatar,
  Text,
  useColorMode,
  Progress,
  Heading,
  Spacer
} from "@chakra-ui/react";
import { TEXT_COLOR_MODE_STYLE } from "src/constants/theme";
import { useWindowScrollPosition } from "src/hooks/useWindowScrollPosition";
import { CategoryTag } from "src/components/CategoryTag";
import { TabTitle } from "src/components/TabTitle";
import { MDXRenderer } from "src/components/MDXRenderer";
import { Image } from "src/components/Image";
import { getArticleReadingTimeDuration } from "src/utils/getArticleReadingTimeDuration";
import { formatDate } from "src/utils/formatDate";

export const BlogPost = ({ data }) => {
  const { attributes, id } = data;

  const {
    articleContent,
    articleContentMDX,
    articleDescription,
    articleHeroImage: {
      data: { attributes: articleHeroImageAttribute }
    },
    categories,
    articleTitle,
    createdAt
    // slug,
    // updatedAt: articleDateUpdatedAt
  } = attributes;

  const { colorMode } = useColorMode();
  const { scrollPosition } = useWindowScrollPosition();

  const articleReadDuration = `${getArticleReadingTimeDuration(
    articleContent
  )} min read`;
  const articleDateCreatedAt = formatDate(createdAt);
  const articleCategories = categories.data.map(
    ({ id, attributes: { category } }) => ({ id, category })
  );

  return (
    <Flex
      justify="center"
      flexDirection="column"
      w="100%"
      mt={["2.5em", "3.5em"]}
    >
      <TabTitle title={`Irshadi Bagas - ${articleTitle}`} />
      <Flex justify="center" gap=".75em">
        {articleCategories.map(({ id, category }) => (
          <CategoryTag key={id} my="2em">
            {category}
          </CategoryTag>
        ))}
      </Flex>
      <Heading textAlign={["center"]} fontSize={["x-large", "xx-large"]}>
        {articleDescription}
      </Heading>
      <Flex
        py="2.5em"
        justify="center"
        alignItems="center"
        w="100%"
        color={TEXT_COLOR_MODE_STYLE.TEXT.SECONDARY[colorMode]}
      >
        <Avatar
          name="Irshadi Bagasputro"
          src={"/images/avatar/irshadi.png"}
          mr=".5em"
          colorScheme="gray"
        />
        <Flex flexDir={["column", "row"]} alignItems={["center"]}>
          <Text fontSize={["xl"]} fontWeight="bold" px="1em">
            Irshadi Bagasputro
          </Text>
          <Text paddingX="0.5em" fontSize={["small", "lg"]}>
            {articleDateCreatedAt} · {articleReadDuration}
          </Text>
        </Flex>
      </Flex>

      <Flex
        w="100%"
        h="100%"
        overflow="hidden"
        justify="center"
        align="center"
        borderRadius="lg"
        mb="2.5em"
      >
        <Image
          width={articleHeroImageAttribute.width}
          height={articleHeroImageAttribute.height}
          imageProps={{
            width: articleHeroImageAttribute.width,
            height: articleHeroImageAttribute.height
          }}
          src={`http://127.0.0.1:1337${articleHeroImageAttribute.url}`}
          alt={articleTitle}
          style={{ objectFit: "cover", borderRadius: ".25em" }}
          mt="1em"
          mb="3em"
        />
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

      <MDXRenderer source={articleContentMDX} />

      <Spacer pt="5em" />
      {/* 
      <FooterPostSuggestion
        category={pageContext.category}
        data={allMdx}
        morePost={[previous, next]}
      /> */}
    </Flex>
  );
};
