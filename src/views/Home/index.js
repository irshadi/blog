/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../../css/index.css";
import { TextHero } from "../../components/TextHero";
import { AuthorCard } from "../../components/AuthorCard";
import { SortSelections } from "../../components/SortSelections";

export const HomeView = () => {
  return (
    <div className="flex flex-col">
      <TextHero />
      <div className="flex w-full">
        <div className="flex w-6/12">
          <AuthorCard />
        </div>
        <div className="flex w-6/12">
          <SortSelections />
        </div>
      </div>
    </div>
  );
};
