import React from "react";
import { Grid, GridItem, Flex, Heading, useColorMode } from "@chakra-ui/react";
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
    <Grid
      w="100%"
      py="1em"
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
      templateRows={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
      gap={["2.5em", 0]}
      {...props}
    >
      <GridItem rowSpan={1}>
        <Heading fontSize={["4xl", "6xl"]}>
          I write, <br /> to taste life twice.
        </Heading>
      </GridItem>

      <GridItem rowSpan={2} colSpan={1} order={[-1, 0]}>
        <Image
          w="100%"
          height="100%"
          src={HeroImage}
          imageStyle={{
            objectFit: "cover"
          }}
          alt="Welcome to irshadibagas.com"
        />
      </GridItem>

      <GridItem as={Flex} rowSpan={1} align="flex-end">
        <AuthorCard h="7.5em" />
      </GridItem>
    </Grid>
  );
};
