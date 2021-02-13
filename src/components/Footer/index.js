import React from "react";
import { SiBehance, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { Divider, Flex, Heading } from "@chakra-ui/react";
import { IconButton } from "../Button";

export const Footer = () => {
  return (
    <Flex as="footer" justifyContent="space-between" alignItems="center">
      <Heading fontSize="1em" fontWeight="semibold">
        © {new Date().getFullYear()} irshadi.id
      </Heading>
      <Divider />
      <Flex>
        <IconButton
          Icon={SiGithub}
          onClick={() => window.open("https://github.com/irshadi", "_blank")}
        />
        <IconButton
          Icon={SiBehance}
          onClick={() => window.open("https://github.com/irshadi", "_blank")}
        />
        <IconButton
          Icon={SiTwitter}
          onClick={() => window.open("https://github.com/irshadi", "_blank")}
        />
        <IconButton
          Icon={SiLinkedin}
          onClick={() => window.open("https://github.com/irshadi", "_blank")}
        />
      </Flex>
    </Flex>
  );
};
