/* eslint-disable react/prop-types */
import React from "react";

export const RowPost = ({ title, content, img, metadata, createdAt }) => {
  return (
    <div className="flex flex-col w-1/3">
      <img src={img} />
      <span className="text-primary font-semibold">{title}</span>
      <span className="text-secondary pt-4">{content}</span>
      <div className="flex justify-between pt-4">
        <span className="text-secondary">{createdAt.toDateString()}</span>
        <span className="text-secondary font-semibold">{metadata}</span>
      </div>
    </div>
  );
};
