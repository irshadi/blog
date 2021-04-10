import React from "react";
import { Flex, Text, HStack, useColorModeValue } from "@chakra-ui/react";
import { PostLinkWrapper } from "../../../../components/PostComponent";

export const PostPaginations = ({ pageInfo, pageContext }) => {
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
    console.log("From Page", currentPage, "Go To", pageDestination);
    if (pageDestination > 1) {
      return `/page/${currentPage + 1}`;
    }

    if (pageDestination === 1) {
      return `/`;
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
          <IndicatorWrapper>
            <Text letterSpacing="wide" fontWeight="bold" opacity="100%">
              Prev
            </Text>
          </IndicatorWrapper>
        )}
        {pages.map(page => {
          return (
            <PostLinkWrapper to={() => generateLink(page)} replace>
              <IndicatorWrapper w="3em" page={page}>
                <Text
                  letterSpacing="wide"
                  fontWeight={currentPage === page ? "bold" : "semibold"}
                  opacity="100%"
                >
                  {page}
                </Text>
              </IndicatorWrapper>
            </PostLinkWrapper>
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
