import React from "react";
import { defaultProps, themes, Highlight } from "prism-react-renderer";
import { Button, Text, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { useClipboardCopy } from "../../../hooks/useClipboardCopy";
import { MdContentCopy } from "react-icons/md";

const CopyButton = ({ isCopied, ...props }) => {
  const color = useColorModeValue("gray.700", "gray.200");
  const bgColor = useColorModeValue("gray.200", "gray.700");
  return (
    <Button
      positon="absolute"
      colorScheme="gray"
      size={["xs", "md"]}
      variant="solid"
      float="right"
      color={color}
      bg={bgColor}
      {...props}
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
      theme={themes.nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Box
            as={"pre"}
            className={className}
            rounded=".25em"
            my="1.5em"
            px="1.5em"
            py="1em"
            style={{ ...style }}
            overflowX="auto"
          >
            <CopyButton isCopied={isCopied} onClick={handleClickCopy} />
            {tokens.map((line, i) => {
              return (
                <Flex
                  key={i}
                  {...getLineProps({ line, key: i })}
                  fontSize={[".5em", ".85em"]}
                >
                  <Text pr="1.5em" color="gray.600">
                    {i + 1}
                  </Text>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </Flex>
              );
            })}
          </Box>
        );
      }}
    </Highlight>
  );
};
