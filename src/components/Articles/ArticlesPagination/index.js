import React from "react";
import { usePostModeContext } from "../../contexts/postMode";
import { OutlineButton } from "../Button";

export const ArticlesPagination = () => {
  const {
    state: {
      pageConfig: { currentPage, hasNextPage, hasPreviousPage }
    }
  } = usePostModeContext();

  return (
    <div className="flex w-1/3 mt-6">
      {hasPreviousPage && <OutlineButton label={currentPage - 1} />}
      <OutlineButton label={currentPage} selected />
      <OutlineButton label={currentPage + 1} disabled={hasNextPage} />
      <OutlineButton label={currentPage + 2} disabled={hasNextPage} />
      <OutlineButton label="Next" disabled={hasNextPage} />
    </div>
  );
};
