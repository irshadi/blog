import React from "react";
import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { NavigationMenuSidepanel } from "./NavigationMenuSidepanel";

export const NavigationMenuButton = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex {...props}>
      <IconButton icon={<HiOutlineMenuAlt2 />} onClick={onOpen} />
      {isOpen && <NavigationMenuSidepanel isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};
