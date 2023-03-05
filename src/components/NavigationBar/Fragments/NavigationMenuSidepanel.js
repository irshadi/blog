import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Box,
  Flex
} from "@chakra-ui/react";
import { LinkWrapper } from "../../Link";
import { Footer } from "../../Footer";

export const NavigationMenuSidepanel = ({ ...props }) => {
  return (
    <Drawer {...props} size="full" isFullHeight placement="top">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>

        <DrawerBody py="1em" w="100%" as={Box}>
          <LinkWrapper to="/" title="home" py=".5em" />
          <LinkWrapper to="/about" title="about me" py=".5em" />
        </DrawerBody>

        <DrawerFooter>
          <Flex w="100%" justify="center">
            <Footer />
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
