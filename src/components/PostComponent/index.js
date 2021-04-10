import { Box, Flex, Grid, useColorMode } from "@chakra-ui/react";
/* eslint-disable react/prop-types */
import { Link } from "gatsby";
import React from "react";
import { POST_MODE } from "../../constants/postMode";
import { TEXT_COLOR_MODE_STYLE } from "../../constants/theme";
import { usePostModeContext } from "../../contexts/postMode";
import { RowPost } from "./RowPost";
import { TilePost } from "./TilePost";

export const PostLinkWrapper = ({ link, children, ...props }) => {
  return (
    <Link to={link} {...props}>
      {children}
    </Link>
  );
};

export const Posts = () => {
  const { colorMode } = useColorMode();
  const {
    state: { postMode, isLoading },
    posts
  } = usePostModeContext();

  const POST_MODE_COMPONENT_MAP = {
    [POST_MODE.ROWS]: RowPost,
    [POST_MODE.TILES]: TilePost
  };

  const POST_WRAPPER_MAP = {
    [POST_MODE.ROWS]: ({ children, ...rest }) => (
      <Grid templateColumns="repeat(3, 1fr)" gap={6} {...rest}>
        {children}
      </Grid>
    ),
    [POST_MODE.TILES]: ({ children, ...rest }) => (
      <Box {...rest}>{children}</Box>
    )
  };

  const PostWrapper = POST_WRAPPER_MAP[postMode];
  const PostComponent = POST_MODE_COMPONENT_MAP[postMode];

  return (
    <PostWrapper py="2em">
      {posts.nodes.map(({ id, ...rest }, idx) => {
        return (
          <PostLinkWrapper key={id} link={rest.fields.slug}>
            <PostComponent
              bg={TEXT_COLOR_MODE_STYLE.BACKGROUND[colorMode]}
              opacity="75%"
              _hover={{ opacity: "100%" }}
              isLoading={!idx ? true : false}
              {...rest}
            />
          </PostLinkWrapper>
        );
      })}
    </PostWrapper>
  );
};
