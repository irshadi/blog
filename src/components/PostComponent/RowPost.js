import { Box, Flex, Heading, Image, Text } from "@chakra-ui/core";
/* eslint-disable react/prop-types */
import React from "react";

export const RowPost = ({
  title,
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu justo ac massa molestie ornare quis id elit. Suspendisse auctor orci urna, et pretium dolor efficitur sed. Nullam vitae quam vel velit commodo fringilla. Quisque ex risus, porttitor in felis quis, congue ullamcorper mi. Suspendisse sem eros, vestibulum at finibus ac, vehicula quis sem.",
  img,
  metadata = "",
  createdAt,
  ...rest
}) => {
  return (
    <Box
      bg="gray.700"
      maxW="50%"
      borderRadius="0.5em"
      opacity="75%"
      _hover={{ opacity: "100%" }}
    >
      <Image roundedTop="0.5em" src={img} />
      <Box p="2em">
        <Heading fontSize="xl">{title}</Heading>
        <Text py="1em">{content}</Text>
        <Flex>
          <Text>{createdAt}</Text>
          {/* <Text>{metadata}</Text> */}
        </Flex>
      </Box>
    </Box>
    // <div className="mx-2 flex flex-col bg-card rounded-lg shadow-xl opacity-75 hover:opacity-100 duration-200 cursor-pointer">
    //   <img className="rounded-t-lg rounded-b-none overflow-hidden" src={img} />
    //   <div className="p-6 flex flex-col">
    //     <span className="text-primary font-semibold text-xl truncate">
    //       {title}
    //     </span>
    //     <span className="text-secondary pt-2">{content}</span>
    //     <div className="flex justify-between pt-4">
    //       <span className="text-secondary">{createdAt}</span>
    //       <span className="text-secondary font-semibold">{metadata}</span>
    //     </div>
    //   </div>
    // </div>
  );
};
