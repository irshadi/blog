/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../../css/index.css";
import { TextHero } from "../../components/TextHero";

export const HomeView = () => {
  return (
    <div className="flex flex-col">
      <TextHero />
    </div>
  );
};
