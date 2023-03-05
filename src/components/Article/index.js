import React from "react";
import { Box, Grid, useColorMode } from "@chakra-ui/react";
import { Link } from "gatsby";
import { POST_MODE } from "../../constants/postMode";
import { TEXT_COLOR_MODE_STYLE } from "../../constants/theme";
import { usePostModeContext } from "../../contexts/postMode";
import { RowPost } from "./RowPost";
import { TilePost } from "./TilePost";

export const ArticleLinkWrapper = ({ link, children, isLoading, ...props }) => {
  return (
    <Link aria-disabled={isLoading} to={link} {...props}>
      {children}
    </Link>
  );
};

export const Articles = ({ nodes }) => {
  const { colorMode } = useColorMode();
  const {
    state: { postMode, isLoading }
  } = usePostModeContext();

  const POST_MODE_COMPONENT_MAP = {
    [POST_MODE.ROWS]: RowPost,
    [POST_MODE.TILES]: TilePost
  };

  const POST_WRAPPER_MAP = {
    [POST_MODE.ROWS]: ({ children, ...rest }) => (
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
        {...rest}
      >
        {children}
      </Grid>
    ),
    [POST_MODE.TILES]: ({ children, ...rest }) => (
      <Box {...rest}>{children}</Box>
    )
  };

  const ArticleWrapper = POST_WRAPPER_MAP[postMode];
  const ArticleComponent = POST_MODE_COMPONENT_MAP[postMode];

  return (
    <ArticleWrapper py="2em">
      {nodes.map(({ ...rest }, idx) => {
        return (
          <ArticleLinkWrapper
            key={idx}
            link={rest.fields.slug}
            isLoading={isLoading}
          >
            <ArticleComponent
              bg={TEXT_COLOR_MODE_STYLE.BACKGROUND[colorMode]}
              opacity="75%"
              _hover={{ opacity: "100%" }}
              isLoading={isLoading}
              {...rest}
            />
          </ArticleLinkWrapper>
        );
      })}
    </ArticleWrapper>
  );
};
