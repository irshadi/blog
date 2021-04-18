import React from "react";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { CompactPost, FooterPost } from "./AdditionalPostComponent";
import isEmpty from "lodash/isEmpty";
import { useColorMode } from "@chakra-ui/core";
import { TEXT_COLOR_MODE } from "../../constants/theme";

export const FooterPostSuggestion = ({ data, category }) => {
  const { nodes } = data;
  const [next, previous = {}, ...similiarPost] = nodes;
  const { colorMode } = useColorMode();
  const gradient = useColorModeValue(
    "linear(to-b, gray.100, white)",
    "linear(to-b, gray.600, gray.800)"
  );

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
        <Text w={["100%", "30%"]} fontWeight="bold" textTransform="capitalize">
          More Article from Me
        </Text>
        <Divider visibility={["hidden", "visible"]} w="70%" ml=".5em" />
      </Flex>
      <HStack
        w="100%"
        spacing={[0, 8]}
        align="start"
        h={["100%", "27.5em"]}
        overflowY="hidden"
        display={["flex"]}
        flexDir={["column", "row"]}
      >
        <Flex
          w={["100%", "35%"]}
          my={["1em", 0]}
          align="center"
          flexDir="column"
          justify="space-between"
        >
          {next && <FooterPost {...next} />}
        </Flex>
        <Flex
          w={["100%", "35%"]}
          my={["1em", 0]}
          align="center"
          flexDir="column"
          justify="space-between"
        >
          {!isEmpty(previous) && <FooterPost {...previous} />}
        </Flex>
        <Flex w={["100%", "35%"]} flexDirection="column">
          <Box
            my={["1em", 0]}
            rounded="md"
            boxShadow={colorMode === TEXT_COLOR_MODE.DARK ? "lg" : "md"}
            h={["100%", "22.5em"]}
            bgGradient={gradient}
          >
            {!similiarPost.length ? (
              <Flex
                p="2em"
                h="100%"
                align="center"
                justify="center"
                flexDir="column"
              >
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
              <Box px="2em" pb="2em" pt="1.5em">
                <Text
                  fontSize="small"
                  fontWeight="bold"
                  textTransform="uppercase"
                  pb=".5em"
                >
                  Article in {category}
                </Text>
                <SimiliarPost />
              </Box>
            )}
          </Box>
        </Flex>
      </HStack>
    </Flex>
  );
};
