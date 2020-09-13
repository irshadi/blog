import React from "react";
import { Link } from "gatsby";

export const NavigationBar = () => {
  return (
    <nav className="bg-red-100 w-full pt-12 flex">
      <Link to="/" replace className="text-xl font-semibold">
        irshadi.id
      </Link>
      <div></div>
    </nav>
  );
};
