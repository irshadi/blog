import React from "react";

/**
 * Hooks that provide scroll position on a given page
 */
export const useWindowScrollPosition = () => {
  const [scrollPosition, _setScrollPosition] = React.useState(0);

  // Helper for calculating scroll position by current DOM
  const handleCaptureScrollPosition = React.useCallback(() => {
    const {
      documentElement: { scrollTop, scrollHeight, clientHeight }
    } = document;
    const position = scrollTop / (scrollHeight - clientHeight);
    _setScrollPosition(position);
  }, [_setScrollPosition]);

  // On Component Mount Get Position
  React.useLayoutEffect(() => {
    window.addEventListener("scroll", handleCaptureScrollPosition);
    return () =>
      window.removeEventListener("scroll", handleCaptureScrollPosition);
  }, [handleCaptureScrollPosition]);

  return { scrollPosition };
};
