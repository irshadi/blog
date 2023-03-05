import { Flex } from "@chakra-ui/react";
import NextImage from "next/image";

export const Image = ({ src, alt, imageStyle, ...props }) => (
  <Flex w="100%" h="100%" overflow="hidden" {...props}>
    <NextImage src={src} alt={alt} placeholder="blur" />
  </Flex>
);
