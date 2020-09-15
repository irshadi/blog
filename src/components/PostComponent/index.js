import React from "react";

const POST_TYPE = {
  ROWS: "ROWS",
  TILES: "TILES"
};

export const Post = ({ rows, tiles }) => {
  const POST_COMPONENT_MAP = {
    [POST_TYPE.ROWS]: () => {},
    [POST_TYPE.TILES]: () => {}
  };
  // const PostsComponent = POST_COMPONENT_MAP  
  return <div className="text-primary font-semibold">Post Component</div>;
};
