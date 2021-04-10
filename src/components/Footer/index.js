import React from "react";
import { SiBehance, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { Divider, Flex, Heading } from "@chakra-ui/react";
import { IconButton } from "../Button";
import { navigate } from "@reach/router";

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
    <Flex
      w="100%"
      as="footer"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading w="15%" fontSize="1em" fontWeight="semibold">
        © {new Date().getFullYear()} irshadi.id
      </Heading>
      <Divider w="70%" />
      <Flex w="15%" justify="flex-end">
        {externalSocialMediaLinks.map(({ name, icon, link }, id) => (
          <IconButton
            key={`${id}-${name}`}
            Icon={icon}
            onClick={() => navigate(link)}
          />
        ))}
      </Flex>
    </Flex>
  );
};
