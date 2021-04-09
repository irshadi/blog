import React from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { PostLinkWrapper } from ".";

export const FooterPostSuggestion = ({ data, morePost }) => {
  const { nodes } = data;
  console.log(nodes);

  return (
    <Flex w="100%" mt="3em" align="center">
      <Box w="30%">
        <Flex align="center" justify="space-between">
          <Text w="30%" fontWeight="bold">
            More Article
          </Text>
          <Divider w="70%" ml=".5em" />
        </Flex>
        <Box>
          {nodes.map(({ excerpt, frontmatter, timeToRead, slug }, id) => {
            return (
              <PostLinkWrapper key={id} link={slug} replace={true}>
                <Flex flexDir="column" py="1em">
                  <Text>{frontmatter.title}</Text>
                  <Flex>
                    <Text size="s" fontWeight="medium">
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
