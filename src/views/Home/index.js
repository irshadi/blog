import React from "react";
import "../../css/index.css";

export const HomeView = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-from-gray-200 from-white">
        <span className="text-4xl font-semibold leading-none">
          Hello,
          <br />
          Most of the time it's just gibberish.
        </span>
      </section>
    </div>
  );
};
