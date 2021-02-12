import React from "react";
import theme from "prism-react-renderer/themes/nightOwl";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "./src/components/Code";

const components = {
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <CodeBlock
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
        />
      );
    }
  }
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
