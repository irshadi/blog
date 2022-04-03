import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link, Button, Text, useColorModeValue } from "@chakra-ui/react";

export const LinkWrapper = ({ children, ...props }) => {
  const color = useColorModeValue("gray.700", "gray.100");
  const hasChild = React.isValidElement(children);
  const { title, to } = props;

  if (!hasChild) {
    return (
      <Link
        as={GatsbyLink}
        to={to}
        replace
        _hover={{ border: "none" }}
        {...props}
      >
        <Button variant="link" p="inherit" w="100%">
          <Text
            textTransform="lowercase"
            fontWeight="extrabold"
            color={color}
            letterSpacing="tight"
          >
            {title}
          </Text>
        </Button>
      </Link>
    );
  }

  return (
    <Link
      as={GatsbyLink}
      to={to}
      replace
      _hover={{ border: "none" }}
      {...props}
    >
      {children}
    </Link>
  );
};
