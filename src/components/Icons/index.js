import React from "react";

export const IconWrapper = ({ IconComponent }) => {
  return (
    <div className="hover:rounded-full hover:bg-gray-400">
      <IconComponent />
    </div>
  );
};
