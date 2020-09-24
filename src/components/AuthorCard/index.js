import React from "react";

const defaultInfo =
  "Written by You. This is where your author bio lives. Share your work, your joys and of course, your Twitter handle.";

export const AuthorCard = ({ name = "John Doe", info = defaultInfo, url }) => {
  return (
    <div className="flex justify-between w-full p-8">
      <div className="flex items-center">
        <div
          class="rounded-full h-16 w-16 flex items-center justify-center"
          style={{
            backgroundImage: `url(${url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        />
      </div>
      <div className="flex flex-col">
        <span className="pl-10 text-secondary font-semibold">{name}</span>
        <span className="pl-10 text-secondary flex flex-shrink">{info}</span>
      </div>
    </div>
  );
};
