import { Flex } from "@chakra-ui/react";
import NextImage from "next/image";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = str =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

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
        shimmer(imageProps.width, imageProps.height)
      )}`}
      {...imageProps}
      src={src}
      alt={alt}
    />
  </Flex>
);
