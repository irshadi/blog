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
  console.log({ selectedPostMode, c: selectedPostMode === POST_MODE.ROWS });
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
      />
      <IconButton
        onClick={() =>
          dispatch({
            type: POST_ACTION.SET_POST_MODE,
            postMode: POST_MODE.TILES
          })
        }
        Icon={MdViewList}
      />
    </Flex>
    // <div className="flex items-center justify-end w-full h-full">
    //   <IconWrapper
    //     onClick={() =>
    //       dispatch({
    //         type: POST_ACTION.SET_POST_MODE,
    //         postMode: POST_MODE.ROWS
    //       })
    //     }
    //   >
    //     <Rows
    //       fill={getFillColor(
    //         isUsingDarkMode,
    //         selectedPostMode === POST_MODE.ROWS
    //       )}
    //     />
    //   </IconWrapper>
    //   <IconWrapper
    //     onClick={() =>
    //       dispatch({
    //         type: POST_ACTION.SET_POST_MODE,
    //         postMode: POST_MODE.TILES
    //       })
    //     }
    //   >
    //     <Tiles
    //       fill={getFillColor(
    //         isUsingDarkMode,
    //         selectedPostMode === POST_MODE.TILES
    //       )}
    //     />
    //   </IconWrapper>
    // </div>
  );
};
