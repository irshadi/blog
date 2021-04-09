import React from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { PostLinkWrapper } from ".";

export const FooterPostSuggestion = ({ data, category, morePost }) => {
  const { nodes } = data;

  return (
    <Flex w="100%" mt="3em" align="center">
      <Box w="30%">
        <Flex align="center" justify="space-between">
          <Text w="70%" fontWeight="bold" textTransform="capitalize">
            More Article in {category}
          </Text>
          <Divider w="30%" ml=".5em" />
        </Flex>
        <Box>
          {nodes.map(({ excerpt, frontmatter, timeToRead, slug }, id) => {
            return (
              <PostLinkWrapper key={id} link={slug} replace={true}>
                <Flex flexDir="column" py=".5em">
                  <Text fontWeight="bold" py=".25em">
                    {frontmatter.title}
                  </Text>
                  <Flex>
                    <Text color="gray" fontSize="smaller" fontWeight="medium">
                      {frontmatter.createdAt} · {timeToRead} Minutes
                    </Text>
                  </Flex>
                </Flex>
              </PostLinkWrapper>
            );
          })}
        </Box>
      </Box>
      <Flex w="60%" align="center" flexDir="column" justify="space-between">
        <Text py="2em" fontWeight="bold" w="25%" pr="1em">
          Post
        </Text>
      </Flex>
    </Flex>
  );
};
