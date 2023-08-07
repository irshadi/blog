import React from "react";
import { useArticleDisplayModeContext } from "src/contexts/articleDisplayMode";
import { Flex, IconButton } from "@chakra-ui/react";
import { ARTICLE_DISPLAY_MODE_MAP } from "src/constants/articleDisplayMode";
import { MdViewList, MdViewModule } from "react-icons/md";

export const ArticlesDisplayMode = ({ ...props }) => {
  const {
    state: { articleDisplayMode },
    setArticleDisplayMode
  } = useArticleDisplayModeContext();

  return (
    <Flex w="100%" justify="end" align="center" gap={2} {...props}>
      <IconButton
        rounded="full"
        onClick={() => setArticleDisplayMode(ARTICLE_DISPLAY_MODE_MAP.ROWS)}
        icon={<MdViewModule />}
        opacity={
          articleDisplayMode === ARTICLE_DISPLAY_MODE_MAP.ROWS ? "100%" : "50%"
        }
      />
      <IconButton
        rounded="full"
        onClick={() => setArticleDisplayMode(ARTICLE_DISPLAY_MODE_MAP.TILES)}
        icon={<MdViewList />}
        opacity={
          articleDisplayMode === ARTICLE_DISPLAY_MODE_MAP.TILES ? "100%" : "50%"
        }
      />
    </Flex>
  );
};
