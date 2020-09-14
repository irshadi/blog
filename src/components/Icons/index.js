import React from "react";

export const IconWrapper = ({ children }) => {
  return (
    <div className="p-1 flex items-center justify-center hover:bg-gray-300 rounded-full transition duration-500 cursor-pointer">
      {children}
    </div>
  );
};
