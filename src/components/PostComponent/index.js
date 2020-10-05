import { Flex, Grid } from "@chakra-ui/core";
/* eslint-disable react/prop-types */
import { Link } from "gatsby";
import React from "react";
import { POST_MODE } from "../../constants/postMode";
import { usePostModeContext } from "../../contexts/postMode";
import { RowPost } from "./RowPost";
import { TilePost } from "./TilePost";

const PostWrapper = ({ link, children, ...props }) => {
  return (
    <Link to={link} {...props}>
      {children}
    </Link>
  );
};

export const Posts = ({ posts }) => {
  const {
    state: { postMode }
  } = usePostModeContext();

  const POST_MODE_COMPONENT_MAP = {
    [POST_MODE.ROWS]: RowPost,
    [POST_MODE.TILES]: TilePost
  };

  const PostComponent = POST_MODE_COMPONENT_MAP[postMode];

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {posts.map(({ node: { id, frontmatter, fields } }) => (
        <PostWrapper key={id} link={fields.slug} mx="2em" w="33%">
          <PostComponent {...frontmatter} />
        </PostWrapper>
      ))}
    </Grid>
  );
};
