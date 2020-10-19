import { Box, Flex, Grid, useColorMode } from "@chakra-ui/core";
/* eslint-disable react/prop-types */
import { Link } from "gatsby";
import React from "react";
import { POST_MODE } from "../../constants/postMode";
import { THEME_MODE_STYLE } from "../../constants/theme";
import { usePostModeContext } from "../../contexts/postMode";
import { RowPost } from "./RowPost";
import { TilePost } from "./TilePost";

const PostLinkWrapper = ({ link, children, ...props }) => {
  return (
    <Link to={link} {...props}>
      {children}
    </Link>
  );
};

export const Posts = ({ posts }) => {
  const { colorMode } = useColorMode();
  const {
    state: { postMode }
  } = usePostModeContext();

  const POST_MODE_COMPONENT_MAP = {
    [POST_MODE.ROWS]: RowPost,
    [POST_MODE.TILES]: TilePost
  };

  const POST_WRAPPER_MAP = {
    [POST_MODE.ROWS]: ({ children }) => (
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {children}
      </Grid>
    ),
    [POST_MODE.TILES]: ({ children }) => <Box>{children}</Box>
  };

  const PostWrapper = POST_WRAPPER_MAP[postMode];
  const PostComponent = POST_MODE_COMPONENT_MAP[postMode];

  return (
    <PostWrapper>
      {posts.map(({ node: { id, frontmatter, fields } }) => (
        <PostLinkWrapper key={id} link={fields.slug}>
          <PostComponent
            {...frontmatter}
            bg={THEME_MODE_STYLE.BACKGROUND[colorMode]}
            opacity="75%"
            _hover={{ opacity: "100%" }}
          />
        </PostLinkWrapper>
      ))}
    </PostWrapper>
  );
};
