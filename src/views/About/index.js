import React from "react";
import {
  Flex,
  Heading,
  Image,
  Text,
  Box,
  Link,
  Avatar,
  Button
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const LICENSE_AND_CERTIFICATIONS_MAP = {
  GOOGLE_CLOUD_ENGINEER: {
    id: "21157667",
    name: "Associate Cloud Engineer",
    publishedBy: "Google Cloud",
    expirationsDate: {
      issued: "Jul 2020",
      expires: "Jul 2022"
    },
    link:
      "https://hire-old.hacktiv8.com/verify/fsjs/IrshadiBagasputro-20190816",
    img: "/avatar/google_cloud.jpeg"
  },
  HACKTIV_8: {
    id: "IrshadiBagasputro-20190816",
    name: "Hacktiv8 FSJS Immersive Program",
    publishedBy: "Hacktiv8 Infonesia",
    expirationsDate: {
      issued: "Aug 2019",
      expires: null
    },
    link: "https://www.credential.net/4434fa63-ef9c-4a4a-a0f4-85ca3b81dcf1",
    img: "/avatar/hacktiv8.jpeg"
  }
};

export const AboutView = () => {
  const Certifications = () =>
    Object.entries(LICENSE_AND_CERTIFICATIONS_MAP).map(([key, license]) => {
      return (
        <Flex w="100%" key={`${key}-${license.id}`} my="1em" align="center">
          <Avatar
            w={["2.5em", "3em", "4em"]}
            h={["2.5em", "3em", "4em"]}
            src={license.img}
            name={license.name}
            boxShadow="md"
          />
          <Box w="75%" pl={["1em", "2em", "2.5em"]}>
            <Text fontSize="small">{license.name}</Text>
            <Text
              fontSize="smaller"
              fontWeight="semibold"
              textTransform="uppercase"
            >
              {license.publishedBy}
            </Text>
            <Text fontSize="smaller">
              {license.expirationsDate.issued} ·{" "}
              {license.expirationsDate.expires ?? "No Expirations Date"}
            </Text>
            <Link
              as={Button}
              href={license.link}
              isExternal
              display="flex"
              justify="between"
              bg="gray.200"
              h="1.75em"
              my=".5em"
              rounded="full"
              rightIcon={
                <ExternalLinkIcon fontSize="small" mt="-2px" px="1px" />
              }
            >
              <Text fontSize="x-small">View Credential</Text>
            </Link>
          </Box>
        </Flex>
      );
    });

  return (
    <Flex my="2.5em" flexDir="column">
      <Heading>About Me</Heading>
      <Flex w="100%" py="2em">
        <Image
          alignContent="end"
          w="30%"
          h="100%"
          src="./avatar/irshadi.png"
          rounded="0.25em"
        />
        <Flex w="70%" flexDir="column" px="2em">
          <Heading>Irshadi Bagasputro</Heading>
          <Text
            color="gray.600"
            letterSpacing="wide"
            fontWeight="medium"
            textTransform="uppercase"
          >
            Software Engineer
          </Text>

          <Box pt="1.5em">
            <Text>
              Right now, I work as a software engineer at
              <Link
                href="https://delman.io"
                color="blue.300"
                isExternal
                px="4px"
              >
                work <ExternalLinkIcon fontSize="small" mt="-2px" />
              </Link>
              . My main focus is in Front End Development, anything from Web
              Application into Mobile Application. If you want to work together
              or have a question or two feel free to to email me.
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex w={["100%"]}>
        <Box w="60%" pr="2em">
          Graduate from Universitas Padjajaran majoring Library and Information
          Science, I start my career as UI/UX designer at JULO; an Indonesian
          Fintech Company. Somewhere along the way, I feel like I have shift in
          my passion, I start to learn the basic stuff about engineering and
          tech world with my fellow coworkers, until one day I decided to quit
          my job and pursue career in Software Engineering (with the help of
          bootcamp of course).
          <br />
          <br />
          After I finished my Bootcamp, I joined delman.io; an work there
          eversince. 
        </Box>

        <Flex
          w="40%"
          justify="center"
          bg="gray.100"
          rounded="0.25em"
          p="2em"
          flexDir="column"
        >
          <Heading fontSize="large">License and Certifications</Heading>
          <Box>
            <Certifications />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
