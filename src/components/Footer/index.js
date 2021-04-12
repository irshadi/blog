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
      flexDir={["column", "row"]}
      justifyContent={["center", "space-between"]}
      alignItems="center"
    >
      <Heading
        w={["100%", "50%", "15%"]}
        fontSize="1em"
        fontWeight="semibold"
        textAlign={["center", "start"]}
      >
        © {new Date().getFullYear()} irshadi.id
      </Heading>
      <Divider w="70%" visibility={["hidden", "visible"]} />
      <Flex w="15%" justify={["center", "flex-end"]} pt={["1em", "0em"]}>
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
