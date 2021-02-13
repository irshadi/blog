import React from "react";
import { Heading } from "@chakra-ui/core";

export const H1 = ({ children }) => {
  return (
    <Heading as="h1" size="2xl" py="0.5em">
      {children}
    </Heading>
  );
};

export const H2 = ({ children }) => {
  return (
    <Heading as="h2" size="xl" py="0.5em">
      {children}
    </Heading>
  );
};

export const H3 = ({ children }) => {
  return (
    <Heading as="h3" size="lg" py="0.5em">
      {children}
    </Heading>
  );
};

export const H4 = ({ children }) => {
  return (
    <Heading as="h4" size="md" py="0.5em">
      {children}
    </Heading>
  );
};

export const H5 = ({ children }) => {
  return (
    <Heading as="h5" size="sm" py="0.5em">
      {children}
    </Heading>
  );
};

export const H6 = ({ children }) => {
  return (
    <Heading as="h6" size="xs" py="0.5em">
      {children}
    </Heading>
  );
};
