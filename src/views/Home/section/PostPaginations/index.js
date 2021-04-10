import React from "react";
import { Flex, Text, HStack, useColorModeValue } from "@chakra-ui/react";
import { navigate } from "gatsby-link";

export const PostPaginations = ({ pageInfo }) => {
  const color = useColorModeValue("gray.100", "gray.600");
  const {
    hasNextPage,
    hasPreviousPage,
    itemCount,
    currentPage,
    pageCount,
    totalCount,
    perPage
  } = pageInfo;

  const pages = Array.from(new Array(pageCount), (_, idx) => idx + 1);

  const generateLink = pageDestination => {
    if (pageDestination > 1) {
      navigate(`/page/${String(currentPage + 1)}`);
      return;
    }

    if (pageDestination === 1) {
      navigate(`/`);
      return;
    }
  };

  const IndicatorWrapper = ({ children, ...props }) => (
    <Flex
      bg={color}
      w="5em"
      py=".75em"
      rounded=".25em"
      justify="center"
      alignItems="center"
      opacity={props.page === currentPage ? "100%" : "70%"}
      _hover={{
        opacity: "100%"
      }}
      {...props}
    >
      {children}
    </Flex>
  );

  return (
    <Flex w="100%" justify="space-between" alignItems="center">
      <HStack w="50%" py=".75em" spacing={3}>
        {hasPreviousPage && (
          <IndicatorWrapper
            cursor="pointer"
            onClick={() => generateLink(currentPage - 1)}
          >
            <Text letterSpacing="wide" fontWeight="bold" opacity="100%">
              Prev
            </Text>
          </IndicatorWrapper>
        )}
        {pages.map((page, id) => {
          return (
            <IndicatorWrapper
              key={id}
              w="3em"
              page={page}
              cursor="pointer"
              onClick={() => generateLink(page)}
            >
              <Text
                letterSpacing="wide"
                fontWeight={currentPage === page ? "bold" : "semibold"}
                opacity="100%"
              >
                {page}
              </Text>
            </IndicatorWrapper>
          );
        })}
        {hasNextPage && (
          <IndicatorWrapper
            cursor="pointer"
            onClick={() => generateLink(currentPage + 1)}
          >
            <Text letterSpacing="wide" fontWeight="bold" opacity="100%">
              Next
            </Text>
          </IndicatorWrapper>
        )}
      </HStack>
      <Flex w="50%" justify="flex-end">
        <Text color="gray" fontSize="smaller" fontWeight="bold">
          Displaying {itemCount}/{perPage} out of {totalCount}
        </Text>
      </Flex>
    </Flex>
  );
};
