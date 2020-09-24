/* eslint-disable react/prop-types */
import React from "react";

export const RowPost = ({ title, content, img, metadata, createdAt }) => {
  return (
    <div className="flex flex-col bg-card w-1/3 rounded-lg shadow-xl opacity-50 hover:opacity-100 duration-200">
      <img className="rounded-t-lg rounded-b-none overflow-hidden" src={img} />
      <div className="p-6 flex flex-col">
        <span className="text-primary font-semibold text-xl">{title}</span>
        <span className="text-secondary pt-2">{content}</span>
        <div className="flex justify-between pt-4">
          <span className="text-secondary">{createdAt.toDateString()}</span>
          <span className="text-secondary font-semibold">{metadata}</span>
        </div>
      </div>
    </div>
  );
};
