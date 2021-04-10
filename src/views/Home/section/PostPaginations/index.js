import React from "react";
import { Flex, Text, HStack, useColorModeValue } from "@chakra-ui/react";
import { usePostModeContext } from "../../../../contexts/postMode";

export const PostPaginations = () => {
  const color = useColorModeValue("gray.100", "gray.600");
  const {
    posts: {
      pageInfo: {
        hasNextPage,
        hasPreviousPage,
        itemCount,
        currentPage,
        pageCount,
        totalCount,
        perPage
      }
    }
  } = usePostModeContext();

  const pages = Array.from(new Array(pageCount), (_, idx) => idx + 1);

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
      {hasPreviousPage && (
        <IndicatorWrapper>
          <Text letterSpacing="wide" fontWeight="bold" opacity="100%">
            Next
          </Text>
        </IndicatorWrapper>
      )}
      <HStack w="50%" py=".75em" spacing={3}>
        {pages.map(page => {
          return (
            <IndicatorWrapper w="3em" page={page}>
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
          <IndicatorWrapper>
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
