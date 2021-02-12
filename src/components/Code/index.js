import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Button, ButtonGroup } from "@chakra-ui/core";
import { useClipboardCopy } from "../../hooks/useClipboardCopy";

const CopyButton = props => {
  return (
    <Button colorScheme="teal" variant="ghost" {...props}>
      Copy
    </Button>
  );
};

export const CodeBlock = ({ codeString, language }) => {
  const { copyToClipboard } = useClipboardCopy();
  const handleClickCopy = () => copyToClipboard(codeString);

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        console.log(style, "<STY");
        return (
          <pre className={className} style={{ ...style }}>
            <CopyButton onClick={handleClickCopy} />
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};
