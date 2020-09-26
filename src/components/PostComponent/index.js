import { Link } from "gatsby";
import React from "react";
import { POST_MODE } from "../../constants/postMode";
import { usePostModeContext } from "../../contexts/postMode";
import { RowPost } from "./RowPost";
import { TilePost } from "./TilePost";

const PostWrapper = ({ link, children }) => {
  return <Link to={link}>{children}</Link>;
};

export const Posts = ({ posts = [] }) => {
  const {
    state: { postMode }
  } = usePostModeContext();

  return postMode === POST_MODE.ROWS ? (
    <div className="flex flex-wrap w-full justify-start transition duration-500 ease-in-out ">
      {posts.map(({ id, frontmatter, fields }, idx) => (
        <PostWrapper key={id} link={frontmatter.title}>
          <div className="mb-6 w-1/3">
            <RowPost {...frontmatter} />
          </div>
        </PostWrapper>
      ))}
    </div>
  ) : (
    <div className="flex flex-col w-full justify-start">
      {posts.map(({ ...val }, idx) => (
        <div className="mb-6 w-full" key={idx}>
          <TilePost {...val} />
        </div>
      ))}
    </div>
  );
};
