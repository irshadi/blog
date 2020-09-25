import React from "react";

export const OutlineButton = ({
  label,
  onClick = () => {},
  disabled,
  selected,
  ...props
}) => {
  let selectedClassName =
    "mr-4 bg-transparent text-secondary font-semibold py-2 px-4 opacity-50";
  if (selected) {
    selectedClassName =
      "mr-4 bg-transparent text-secondary font-semibold py-2 px-4";
  }
  return (
    <button
      className={selectedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
