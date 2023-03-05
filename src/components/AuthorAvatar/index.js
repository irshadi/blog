import React from "react";
import { Avatar } from "@chakra-ui/react";

// Fix Avatar issue on responsive sizing
export const HomePageAvatar = () => {
  return (
    <Avatar
      display={["none", "block"]}
      name="Irshadi Bagasputro"
      size="2xl"
      src="/avatar/irshadi.png"
    />
  );
};
