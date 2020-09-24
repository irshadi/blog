import React from "react";

export const IconWrapper = ({ children }) => {
  return (
    <div className="p-1 flex items-center justify-center hover:bg-card rounded-full transition duration-500 cursor-pointer">
      {children}
    </div>
  );
};
