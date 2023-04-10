import React from "react";
import { Box, Flex, Heading, useColorMode } from "@chakra-ui/react";
import HeroImageLight from "../../../../public/images/hero/hero_image_light.png";
import HeroImageDark from "../../../../public/images/hero/hero_image_dark.png";
import { THEME_COLOR_MODE } from "src/constants/theme";
import { AuthorCard } from "src/components/AuthorCard";
import { Image } from "src/components/Image";

export const TextHero = ({ ...props }) => {
  const { colorMode } = useColorMode();
  const HeroImage =
    colorMode === THEME_COLOR_MODE.DARK ? HeroImageDark : HeroImageLight;

  return (
    <Flex
      w="100%"
      h={"25em"}
      align={["start", "end"]}
      py="1em"
      flexDir={["column", "row"]}
      {...props}
    >
      <Flex
        w={["100%", "50%"]}
        h="100%"
        justify={["start", "end"]}
        flexDir="column"
        borderRadius="md"
      >
        <Flex align="center" flexGrow={1}>
          <Heading fontSize={["4xl", "6xl"]}>
            I write, <br /> to taste life twice.
          </Heading>
        </Flex>

        <AuthorCard maxH="7.5em" />
      </Flex>

      <Image
        w={["100%", "50%"]}
        height={"100%"}
        src={HeroImage}
        imageStyle={{
          objectFit: "cover"
        }}
        alt="Welcome to irshadibagas.com"
      />
    </Flex>
  );
};
