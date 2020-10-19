import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/core";

export const RowPost = ({
  title,
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu justo ac massa molestie ornare quis id elit. Suspendisse auctor orci urna, et pretium dolor efficitur sed. Nullam vitae quam vel velit commodo fringilla. Quisque ex risus, porttitor in felis quis, congue ullamcorper mi. Suspendisse sem eros, vestibulum at finibus ac, vehicula quis sem.",
  img,
  metadata = "",
  createdAt,
  ...props
}) => {
  return (
    <Box w="100%" borderRadius="0.5em" {...props}>
      <Image roundedTop="0.5em" src={img} />
      <Box p="2em">
        <Heading fontSize="xl">{title}</Heading>
        <Text py="1em">{content}</Text>
        <Flex>
          <Text>{createdAt}</Text>
        </Flex>
      </Box>
    </Box>
  );
};
