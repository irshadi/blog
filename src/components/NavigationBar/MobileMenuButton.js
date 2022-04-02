import React from "react";
import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MobileDrawer } from "./Fragments/MobileDrawer";

export const MobileMenuButton = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex {...props}>
      <IconButton icon={<HiOutlineMenuAlt2 />} onClick={onOpen} />
      {isOpen && <MobileDrawer isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};
