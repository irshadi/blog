import React from "react";
import { IconWrapper, Icons } from "../Icons";
import { SiBehance, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { Box } from "@chakra-ui/core";

export const Footer = () => {
  return (
    <Box as="footer"></Box>
    // <footer className="flex flex-col w-full pb-12">
    //   <hr className="my-8 border-b-1 text-icon" />
    //   <div className="flex justify-between items-center">
    //     <div className="text-secondary text-md">
    //       © {new Date().getFullYear()} irshadi.id
    //     </div>
    //     <div className="flex">
    //       <IconWrapper
    //         onClick={() => window.open("https://github.com/irshadi", "_blank")}
    //       >
    //         <Icons IconComponent={SiGithub} />
    //       </IconWrapper>
    //       <IconWrapper>
    //         <Icons IconComponent={SiBehance} />
    //       </IconWrapper>
    //       <IconWrapper>
    //         <Icons IconComponent={SiTwitter} />
    //       </IconWrapper>
    //       <IconWrapper>
    //         <Icons IconComponent={SiLinkedin} />
    //       </IconWrapper>
    //     </div>
    //   </div>
    // </footer>
  );
};
