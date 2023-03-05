import React from "react";
import { usePostModeContext } from "../../contexts/postMode";
import { Flex } from "@chakra-ui/react";
import { IconButton } from "../Button";
import { POST_MODE } from "../../constants/postMode";
import { MdViewList, MdViewModule } from "react-icons/md";

export const PostDisplayMode = () => {
  const {
    state: { postMode: selectedPostMode },
    setPostMode
  } = usePostModeContext();

  return (
    <Flex w="100%" justifyContent={["flex-end"]} alignItems="center">
      <IconButton
        onClick={() => setPostMode(POST_MODE.ROWS)}
        Icon={MdViewModule}
        opacity={selectedPostMode === POST_MODE.ROWS ? "100%" : "50%"}
      />
      <IconButton
        onClick={() => setPostMode(POST_MODE.TILES)}
        Icon={MdViewList}
        opacity={selectedPostMode === POST_MODE.TILES ? "100%" : "50%"}
      />
    </Flex>
  );
};
