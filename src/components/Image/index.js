import { Flex } from "@chakra-ui/react";
import NextImage from "next/image";

export const Image = ({ src, alt, imageStyle, imageProps = {}, ...props }) => (
  <Flex
    w="100%"
    h="100%"
    overflow="hidden"
    justify="center"
    align="center"
    {...props}
  >
    <NextImage
      maxHeight="100%"
      width="auto"
      placeholder="blur"
      {...imageProps}
      src={src}
      alt={alt}
    />
  </Flex>
);
