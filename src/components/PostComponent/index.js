import { Flex } from "@chakra-ui/core";
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
    <Flex flexWrap={["wrap"]} flexDir={["column", "row"]}>
      {posts.map(({ node: { id, frontmatter, fields } }) => (
        <PostWrapper key={id} link={fields.slug} mx="1em" w="30%">
          <PostComponent {...frontmatter} />
        </PostWrapper>
      ))}
    </Flex>
  );
};
