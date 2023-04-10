import React from "react";
import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
// import { Image } from "src/components/Image";
import Image from "next/image";

export const ListOfArticles = ({ articles }) => {
  console.log(articles);
  return (
    <Grid templateColumns="repeat(3, 1fr)" width="100%" height="100%" gap={2}>
      {articles.map(
        (
          {
            id,
            attributes: {
              articleTitle,
              articleDescription,
              articleHeroImage: {
                data: {
                  attributes: { url, width, height }
                }
              }
            }
          },
          idx
        ) => (
          <GridItem
            key={idx}
            width="100%"
            height="30em"
            borderRadius="md"
            border="solid 1px"
            borderColor="gray.300"
            boxShadow="md"
          >
            <Flex
              w="100%"
              h="100%"
              flexDir="column"
              borderRadius="md"
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
                <Heading variant="h3" noOfLines={2}>
                  {articleTitle}
                </Heading>
                <Text noOfLines={3}>{articleDescription}</Text>
              </Flex>
            </Flex>
          </GridItem>
        )
      )}
    </Grid>
  );
};
