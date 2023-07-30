import { Flex } from "@chakra-ui/react";
import NextImage from "next/image";
import {
  generateSVGImageShimmer,
  toBase64
} from "./utils/generateSVGImageShimmer";

export const Image = ({ src, alt, imageStyle, ...props }) => (
  <NextImage
    placeholder="blur"
    blurDataURL={`data:image/svg+xml;base64,${toBase64(
      generateSVGImageShimmer(props.width, props.height)
    )}`}
    src={src}
    alt={alt}
    {...props}
  />
);
