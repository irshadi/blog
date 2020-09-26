/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../../css/index.css";
import { TextHero } from "../../components/TextHero";
import { AuthorCard } from "../../components/AuthorCard";
import { SortSelections } from "../../components/SortSelections";
import { Posts } from "../../components/PostComponent";
import { PostPagination } from "../../components/Pagination";
import { usePostModeContext } from "../../contexts/postMode";
import { Dump } from "../../components/Dump";

export const HomeView = () => {
  const { posts } = usePostModeContext();

  return (
    <div className="flex flex-col">
      <TextHero />
      <div className="flex w-full">
        <div className="flex w-6/12">
          <AuthorCard
            name="Irshadi Bagasputro"
            url="https://avatars2.githubusercontent.com/u/45032138?s=460&u=c489ba890ad0e185abb0b799066fe9cffd5826b9&v=4"
          />
        </div>
        <div className="flex w-6/12">
          <SortSelections />
        </div>
      </div>
      <div className="flex flex-col w-full py-20">
        <Dump data={posts} />
        <Posts posts={posts.nodes} />
        <PostPagination />
      </div>
    </div>
  );
};
