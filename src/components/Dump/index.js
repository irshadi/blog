import React from "react";
import { usePostModeContext } from "../../contexts/postMode";

export const Dump = () => {
  const { posts } = usePostModeContext();
  return (
    <div
      style={{
        fontSize: 20,
        border: "1px solid #efefef",
        padding: 10,
        background: "white"
      }}
    >
      {Object.entries(posts.nodes).map(([key, val]) => (
        <pre key={key} style={{ color: "black" }}>
          <strong style={{ color: "white", background: "red" }}>
            {key} 💩
          </strong>

          {JSON.stringify(val, "", " ")}
        </pre>
      ))}
    </div>
  );
};
