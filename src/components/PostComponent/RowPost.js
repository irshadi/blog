/* eslint-disable react/prop-types */
import React from "react";

export const RowPost = ({
  title,
  content = "",
  img = "",
  metadata = "",
  createdAt
}) => {
  return (
    <div className="mx-2 flex flex-col bg-card rounded-lg shadow-xl opacity-75 hover:opacity-100 duration-200 cursor-pointer">
      <img className="rounded-t-lg rounded-b-none overflow-hidden" src={img} />
      <div className="p-6 flex flex-col">
        <span className="text-primary font-semibold text-xl truncate">
          {title}
        </span>
        <span className="text-secondary pt-2">{content}</span>
        <div className="flex justify-between pt-4">
          <span className="text-secondary">{createdAt}</span>
          <span className="text-secondary font-semibold">{metadata}</span>
        </div>
      </div>
    </div>
  );
};
