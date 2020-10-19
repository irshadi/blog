import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/core";

export const TilePost = ({
  title,
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu justo ac massa molestie ornare quis id elit. Suspendisse auctor orci urna, et pretium dolor efficitur sed. Nullam vitae quam vel velit commodo fringilla. Quisque ex risus, porttitor in felis quis, congue ullamcorper mi. Suspendisse sem eros, vestibulum at finibus ac, vehicula quis sem.",
  img,
  metadata = "",
  createdAt,
  ...props
}) => {
  return (
    <Flex w="100%" rounded="0.5em" mb="2em" {...props}>
      <Image w="40%" roundedLeft="0.5em" src={img} />
      <Box w="60%" p="2em">
        <Heading fontSize="xl">{title}</Heading>
        <Text py="1em">{content}</Text>
        <Flex>
          <Text>{createdAt}</Text>
          {/* <Text>{metadata}</Text> */}
        </Flex>
      </Box>
    </Flex>
  );
};
