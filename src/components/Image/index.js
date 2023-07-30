import { Flex } from "@chakra-ui/react";
import NextImage from "next/image";
import {
  generateSVGImageShimmer,
  toBase64
} from "./utils/generateSVGImageShimmer";

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
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        generateSVGImageShimmer(imageProps.width, imageProps.height)
      )}`}
      {...imageProps}
      src={src}
      alt={alt}
    />
  </Flex>
);
