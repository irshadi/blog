import { Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { LinkWrapper } from "src/components/Link";
import { formatDate } from "src/utils/formatDate";
import { getArticleReadingTimeDuration } from "src/utils/getArticleReadingTimeDuration";
import { TEXT_COLOR_MODE_STYLE } from "src/constants/theme";
import { CategoriesTag } from "src/components/CategoriesTag";
import { Image } from "src/components/Image";

export const ArticleGridItem = ({
  articleHeroImageAttribute,
  articleTitle,
  articleDescription,
  articleContent,
  createdAt,
  categories,
  slug
}) => {
  const { pathname } = useRouter();
  const { colorMode } = useColorMode();

  const articleReadDuration = `${getArticleReadingTimeDuration(
    articleContent
  )} min read`;
  const articleDateCreatedAt = formatDate(createdAt);

  const articleCategories = categories.data.map(
    ({ id, attributes: { category } }) => ({ id, category })
  );

  return (
    <LinkWrapper href={`${pathname}/article/${slug}`} _hover={{ opacity: 0.8 }}>
      <Flex
        w="100%"
        h="100%"
        flexDir="column"
        borderRadius="lg"
        border="solid 1px"
        borderColor="transparent"
        boxShadow="md"
        overflow="hidden"
      >
        <Flex
          height="60%"
          w="100%"
          position="relative"
          borderTopRadius="lg"
          overflow="hidden"
        >
          <CategoriesTag categories={articleCategories} zIndex={2} />
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
        </Flex>
        <Flex
          height="40%"
          w="100%"
          p="1em"
          flexDir="column"
          bgColor={TEXT_COLOR_MODE_STYLE.BACKGROUND[colorMode]}
        >
          <Heading fontSize="xl" pb={[0, ".5em"]} noOfLines={2} pt=".5em">
            {articleTitle}
          </Heading>
          <Text noOfLines={3} mt=".5em" fontSize="lg">
            {articleDescription}
          </Text>

          <Flex w="100%" pt="1em">
            <Text
              color="gray"
              my={[".5em", 0]}
              fontSize="smaller"
              fontWeight="medium"
              textAlign="start"
            >
              {articleDateCreatedAt} · {articleReadDuration}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </LinkWrapper>
  );
};
