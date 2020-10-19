import React from "react";
import { usePostModeContext } from "../../contexts/postMode";
import { Flex } from "@chakra-ui/core";
import { IconButton } from "../Button";
import { POST_MODE } from "../../constants/postMode";
import { POST_ACTION } from "../../hooks/usePostSelection";
import { MdViewList, MdViewModule } from "react-icons/md";

export const SortSelections = () => {
  const {
    state: { postMode: selectedPostMode },
    dispatch
  } = usePostModeContext();

  return (
    <Flex w="100%" justifyContent="flex-end" alignItems="center">
      <IconButton
        onClick={() =>
          dispatch({
            type: POST_ACTION.SET_POST_MODE,
            postMode: POST_MODE.ROWS
          })
        }
        Icon={MdViewModule}
        opacity={selectedPostMode === POST_MODE.ROWS ? "100%" : "50%"}
      />
      <IconButton
        onClick={() =>
          dispatch({
            type: POST_ACTION.SET_POST_MODE,
            postMode: POST_MODE.TILES
          })
        }
        Icon={MdViewList}
        opacity={selectedPostMode === POST_MODE.TILES ? "100%" : "50%"}
      />
    </Flex>
  );
};
