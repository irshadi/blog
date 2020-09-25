import React from "react";

export const IconWrapper = ({ children, onClick }) => {
  return (
    <div
      className="p-1 flex items-center justify-center hover:bg-card rounded-full transition duration-500 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
