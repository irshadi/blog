import React from "react";
import { Box, Divider, Flex, HStack, Text } from "@chakra-ui/react";
import { CompactPost, FooterPost } from "./AdditionalPostComponent";
import isEmpty from "lodash/isEmpty";

export const FooterPostSuggestion = ({ data, category }) => {
  const { nodes } = data;
  const [next, previous = {}, ...similiarPost] = nodes;

  const SimiliarPost = () =>
    similiarPost.map(({ frontmatter, fields }, id) => (
      <CompactPost key={id} frontmatter={frontmatter} fields={fields} />
    ));

  return (
    <Flex w="100%" align="center" flexDir="column" justify="start">
      <Flex
        w="100%"
        justify="start"
        align="center"
        justify="space-between"
        my="2em"
      >
        <Text w="30%" fontWeight="bold" textTransform="capitalize">
          More Article in {category}
        </Text>
        <Divider w="70%" ml=".5em" />
      </Flex>
      <HStack w="100%" spacing={8} align="start" h="27.5em" overflowY="hidden">
        <Flex w="35%" align="center" flexDir="column" justify="space-between">
          {next && <FooterPost {...next} />}
        </Flex>
        <Flex w="35%" align="center" flexDir="column" justify="space-between">
          {!isEmpty(previous) && <FooterPost {...previous} />}
        </Flex>
        <Flex w="30%" flexDirection="column">
          <Box
            p="2em"
            rounded="md"
            boxShadow="lg"
            h="22.5em"
            bgGradient="linear(to-b, gray.600, gray.800)"
          >
            {!similiarPost.length ? (
              <Flex h="100%" align="center" justify="center" flexDir="column">
                <Text
                  fontWeight="bold"
                  textTransform="capitalize"
                  textAlign="center"
                  fontSize="small"
                >
                  No article left in Category: {category}
                </Text>
                <Text pt=".75em" textAlign="center">
                  Maybe browse for Another Article ?
                </Text>
              </Flex>
            ) : (
              <SimiliarPost />
            )}
          </Box>
        </Flex>
      </HStack>
    </Flex>
  );
};
