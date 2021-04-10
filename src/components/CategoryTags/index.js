import React from "react";
import { Tag } from "@chakra-ui/react";

export const CategoryTags = ({ children, ...props }) => (
  <Tag
    my="1.5em"
    py=".25em"
    px="1em"
    borderRadius="full"
    textTransform="uppercase"
    fontWeight="bold"
    letterSpacing="wider"
    {...props}
  >
    {children}
  </Tag>
);
