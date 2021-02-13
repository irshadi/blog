import React from "react";
import theme from "prism-react-renderer/themes/nightOwl";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "./src/components/MDXRenderer/Code";
import { H1, H2, H3, H4, H5, H6 } from "./src/components/MDXRenderer/Heading";
import { BlockQuote, Code, P } from "./src/components/MDXRenderer/Text";

const components = {
  h1: ({ children }) => {
    return <H1>{children}</H1>;
  },
  h2: ({ children }) => {
    return <H2>{children}</H2>;
  },
  h3: ({ children }) => {
    return <H3>{children}</H3>;
  },
  h4: ({ children }) => {
    return <H4>{children}</H4>;
  },
  h5: ({ children }) => {
    return <H5>{children}</H5>;
  },
  h6: ({ children }) => {
    return <H6>{children}</H6>;
  },
  p: ({ children }) => {
    return <P>{children}</P>;
  },
  blockquote: ({ children }) => {
    return <BlockQuote>{children}</BlockQuote>;
  },
  "p.inlineCode": ({ children }) => {
    return <Code>{children}</Code>;
  },
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
