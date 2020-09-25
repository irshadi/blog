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

export const Icons = ({ IconComponent }) => {
  return (
    <IconComponent className="mx-2 text-xl cursor-pointer transition duration-500 text-icon hover:text-hover" />
  );
};
