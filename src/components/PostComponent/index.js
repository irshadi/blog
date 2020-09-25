import React from "react";
import { POST_MODE } from "../../constants/postMode";
import { usePostModeContext } from "../../contexts/postMode";
import { RowPost } from "./RowPost";
import { TilePost } from "./TilePost";

export const Posts = ({ posts = [] }) => {
  const { postMode } = usePostModeContext();

  return postMode === POST_MODE.ROWS ? (
    <div className="flex flex-wrap w-full justify-start transition duration-500 ease-in-out ">
      {posts.map(({ ...val }, idx) => (
        <div className="mb-6 w-1/3" key={idx}>
          <RowPost {...val} />
        </div>
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
