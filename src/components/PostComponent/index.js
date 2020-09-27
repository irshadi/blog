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

  const isPostSetAsRows = postMode === POST_MODE.ROWS;

  // Assign Post Component Based on Selected Post Mode Type
  const className = isPostSetAsRows ? "mb-6 w-1/3" : "mb-6 w-full";
  const PostComponent = POST_MODE_COMPONENT_MAP[postMode];

  return (
    <div className="flex flex-wrap w-full justify-start">
      {posts.map(({ node: { id, frontmatter, fields } }) => (
        <PostWrapper key={id} link={fields.slug} className={className}>
          <PostComponent {...frontmatter} />
        </PostWrapper>
      ))}
    </div>
  );
};
