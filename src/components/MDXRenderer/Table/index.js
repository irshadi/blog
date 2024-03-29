import React from "react";
import {
  Table as T,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  useColorModeValue
} from "@chakra-ui/react";
import isNaN from "lodash/isNaN";

export const Table = ({ children }) => <T variant="simple">{children}</T>;

export const TableHead = ({ children }) => <Thead>{children}</Thead>;

export const TableBody = ({ children }) => <Tbody>{children}</Tbody>;

export const TableFoot = ({ children }) => <Tfoot>{children}</Tfoot>;

export const TableRow = ({ children }) => <Tr>{children}</Tr>;

export const TableHeader = ({ children }) => <Th>{children}</Th>;

export const TableData = ({ children }) => {
  const isNumber = !isNaN(+children);
  return (
    <Td isNumeric={isNumber} textAlign="center">
      {children}
    </Td>
  );
};

export const TableCaption = ({ children }) => {
  const color = useColorModeValue("#4A5568", "#E5E7EB");
  return (
    <caption
      style={{
        marginTop: "1rem",
        fontFamily: "Avenir next,sans-serif",
        textAlign: " center",
        fontWeight: "600",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        fontSize: "0.875rem",
        color,
        captionSide: "bottom"
      }}
    >
      {children}
    </caption>
  );
};
