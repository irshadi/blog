import React from "react";
import { SiBehance, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { Divider, Flex, Heading, Box, IconButton } from "@chakra-ui/react";

const externalSocialMediaLinks = [
  { name: "GitHub", icon: SiGithub, link: "https://github.com/irshadi" },
  { name: "Behance", icon: SiBehance, link: "https://www.behance.net/irshadi" },
  { name: "Twitter", icon: SiTwitter, link: "https://twitter.com/irshadi" },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/irshadi/"
  }
];

export const Footer = () => {
  return (
    <Box w="100%">
      <Divider w="100%" />

      <Flex
        w="100%"
        mt="1.5em"
        as="footer"
        flexDir={["column", "row"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
      >
        <Flex w={["100%", "50%"]}>
          <Heading
            w="100%"
            fontSize="1em"
            fontWeight="semibold"
            textAlign={["center", "start"]}
          >
            © {new Date().getFullYear()} irshadibagas.com
          </Heading>
        </Flex>

        <Flex
          w={["100%", "50%"]}
          justify={["center", "flex-end"]}
          pt={["1em", "0em"]}
        >
          {externalSocialMediaLinks.map(({ name, icon, link }, id) => (
            <IconButton key={`${id}-${name}`} Icon={icon} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
