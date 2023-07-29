import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { H1, H2, H3, H4, H5, H6 } from "./Heading";
import { BlockQuote, Code, Keyboard, P } from "./Text";
import { List } from "./Lists";
import {
  Table,
  TableBody,
  TableCaption,
  TableData,
  TableFoot,
  TableHead,
  TableHeader,
  TableRow
} from "./Table";
import { Link } from "./Link";
import { CodeBlock } from "./Code";

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
  li: ({ children }) => {
    return <List>{children}</List>;
  },
  table: ({ children }) => {
    return <Table>{children}</Table>;
  },
  thead: ({ children }) => {
    return <TableHead>{children}</TableHead>;
  },
  tbody: ({ children }) => {
    return <TableBody>{children}</TableBody>;
  },
  tfoot: ({ children }) => {
    return <TableFoot>{children}</TableFoot>;
  },
  tr: ({ children }) => {
    return <TableRow>{children}</TableRow>;
  },
  th: ({ children }) => {
    return <TableHeader>{children}</TableHeader>;
  },
  td: ({ children }) => {
    return <TableData>{children}</TableData>;
  },
  caption: ({ children }) => {
    return <TableCaption>{children}</TableCaption>;
  },
  a: ({ children }) => {
    return <Link>{children}</Link>;
  },
  kbd: ({ children }) => {
    return <Keyboard>{children}</Keyboard>;
  },
  pre: ({ children: { props } }) => {
    const { mdxType, children, className } = props;
    if (mdxType === "code") {
      const codeString = children.trim();
      return (
        <CodeBlock
          codeString={codeString}
          language={className && className.replace("language-", "")}
          {...props}
        />
      );
    }
    return null;
  }
};

export const MDXRenderer = ({ source }) => {
  return <MDXRemote {...source} components={components} />;
};
