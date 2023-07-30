import React from "react";
import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { NavigationBar } from "./NavigationBar";
import { isEmpty } from "src/utils/isEmpty";
import { useRouter } from "next/router";

export const PageWrapper = ({ Views, data = {} }) => {
  const { isFallback } = useRouter();
  const hasProps = !isEmpty(data);
  // Parse back the result from `getStaticProps`
  const props = { ...(hasProps && { data }) };

  if (isFallback) {
    return null;
  }

  return (
    <Flex
      height="100%"
      flexDir="column"
      px={["10vw", "12.5vw", "17.5vw"]}
      overflow="auto"
    >
      <NavigationBar height={["7.5em"]} zIndex={2} />
      <Flex h="auto" flexDir="column">
        <Views {...props} />
      </Flex>
      <Footer height={["7.5em"]} />
    </Flex>
  );
};
