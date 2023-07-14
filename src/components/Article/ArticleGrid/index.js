import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { LinkWrapper } from "src/components/Link";

export const ArticleGridItem = ({
  url,
  articleTitle,
  articleDescription,
  slug
}) => {
  const { pathname } = useRouter();

  return (
    <LinkWrapper href={`${pathname}/article/${slug}`} _hover={{ opacity: 0.8 }}>
      <Flex
        w="100%"
        h="100%"
        flexDir="column"
        borderRadius="lg"
        border="solid 1px"
        borderColor="gray.300"
        boxShadow="md"
        overflow="hidden"
      >
        <Flex height="60%" w="100%" position="relative">
          <Image
            fill={true}
            src={`http://127.0.0.1:1337${url}`}
            alt={articleTitle}
            style={{ objectFit: "cover" }}
          />
        </Flex>
        <Flex height="40%" w="100%" bg="white" p="1em" flexDir="column">
          <Heading variant="h3" noOfLines={1} color="blackAlpha.800">
            {articleTitle}
          </Heading>
          <Text noOfLines={3} mt=".5em" fontSize="lg">
            {articleDescription}
          </Text>
        </Flex>
      </Flex>
    </LinkWrapper>
  );
};
