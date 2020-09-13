import React from "react";
import { Link } from "gatsby";
import { IoMdMoon } from "react-icons/io";

export const NavigationBar = () => {
  return (
    <nav className="w-full pt-12 flex justify-between">
      <Link to="/" replace className="text-xl font-semibold">
        irshadi.id
      </Link>
      <div className="flex justify-end w-3/12 px-2">
        <IoMdMoon className="text-2xl font-semibold cursor-pointer" />
      </div>
    </nav>
  );
};
