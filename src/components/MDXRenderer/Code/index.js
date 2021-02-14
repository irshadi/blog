import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Button, Text } from "@chakra-ui/react";
import { useClipboardCopy } from "../../../hooks/useClipboardCopy";
import { MdContentCopy } from "react-icons/md";

const CopyButton = ({ isCopied, ...props }) => {
  return (
    <Button
      positon="absolute"
      colorScheme="gray"
      size="md"
      variant="solid"
      {...props}
      float="right"
      // top="1em"
      // right="1em"
      color="gray.700"
    >
      <MdContentCopy />
      <Text px="0.5em">{isCopied ? "Copied" : "Copy"}</Text>
    </Button>
  );
};

export const CodeBlock = ({ codeString, language }) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const { copyToClipboard } = useClipboardCopy();

  const handleClickCopy = () => {
    if (isCopied) {
      return;
    }
    copyToClipboard(codeString);
    setIsCopied(!isCopied);
  };

  // Reset Button State
  React.useEffect(() => {
    if (!isCopied) {
      return;
    }

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, [isCopied, setIsCopied]);

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre
            className={className}
            style={{ ...style, borderRadius: ".25em", padding: "1.5em" }}
          >
            <CopyButton isCopied={isCopied} onClick={handleClickCopy} />
            {tokens.map((line, i) => {
              return (
                <div
                  {...getLineProps({ line, key: i })}
                  style={{ display: "flex", fontSize: "0.85em" }}
                >
                  <Text pr="1.5em" color="gray.600">
                    {i + 1}
                  </Text>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        );
      }}
    </Highlight>
  );
};
