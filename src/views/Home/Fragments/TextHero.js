import React from "react";
import { Box, Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react";
import HeroImageLight from "../../../../public/images/hero/hero_image_light.png";
import HeroImageDark from "../../../../public/images/hero/hero_image_dark.png";
import { THEME_COLOR_MODE } from "src/constants/theme";
import { AuthorCard } from "src/components/AuthorCard";
import { Image } from "src/components/Image";

export const TextHero = () => {
  const { colorMode } = useColorMode();
  const HeroImage =
    colorMode === THEME_COLOR_MODE.DARK ? HeroImageDark : HeroImageLight;

  return (
    <Flex w="100%" h="100%" align="end" py="1em" flexDir={["column", "row"]}>
      <Flex
        w={["100%", "50%"]}
        height={["50%", "100%"]}
        justify={["start", "end"]}
        flexDir="column"
        overflow="hidden"
        borderRadius="md"
      >
        <Heading fontSize={["4xl", "6xl"]}>
          I write, <br /> to taste life twice.
        </Heading>

        <Spacer />
        <AuthorCard height="50%" />
      </Flex>

      <Image
        w={["100%", "50%"]}
        height={"auto"}
        src={HeroImage}
        alt="Welcome to irshadibagas.com"
      />
    </Flex>
  );
};
