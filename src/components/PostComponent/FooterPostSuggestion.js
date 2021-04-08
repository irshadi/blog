import React from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";

export const FooterPostSuggestion = ({
  label,
  frontmatter,
  excerpt,
  ...props
}) => {
  return (
    <Flex w="100%" mt="3em" align="center">
      <Box>
        <Text fontWeight="bold" w="10em">
          More Article
        </Text>
        <Divider />
      </Box>
      <Flex w="50%" align="center" flexDir="column" {...props}>
        <Text py="2em" fontWeight="bold" w="25%" pr="1em">
          {label} Post
        </Text>
      </Flex>
    </Flex>
  );
};
