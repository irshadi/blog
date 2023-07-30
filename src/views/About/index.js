import React from "react";
import {
  Flex,
  Heading,
  Image,
  Text,
  Box,
  Link,
  Avatar,
  Button,
  useColorModeValue,
  Icon
} from "@chakra-ui/react";
import { RxExternalLink } from "react-icons/rx";
import { TabTitle } from "src/components/TabTitle";

const LICENSE_AND_CERTIFICATIONS_MAP = {
  GOOGLE_CLOUD_ENGINEER: {
    id: "21157667",
    name: "Associate Cloud Engineer",
    publishedBy: "Google Cloud",
    expirationsDate: {
      issued: "Jul 2020",
      expires: "Jul 2023"
    },
    link: "https://www.credential.net/4434fa63-ef9c-4a4a-a0f4-85ca3b81dcf1",
    img: "/images/avatar/google_cloud.jpeg"
  },
  HACKTIV_8: {
    id: "IrshadiBagasputro-20190816",
    name: "Hacktiv8 FSJS Immersive Program",
    publishedBy: "Hacktiv8 Infonesia",
    expirationsDate: {
      issued: "Aug 2019",
      expires: null
    },
    link: "https://hire-old.hacktiv8.com/verify/fsjs/IrshadiBagasputro-20190816",

    img: "/images/avatar/hacktiv8.jpeg"
  }
};

export const AboutView = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const bgLink = useColorModeValue("gray.200", "gray.800");
  const color = useColorModeValue("gray.600", "gray.100");

  const Certifications = () =>
    Object.entries(LICENSE_AND_CERTIFICATIONS_MAP).map(([key, license]) => {
      return (
        <Flex
          w="100%"
          key={`${key}-${license.id}`}
          my={["1em"]}
          align={["start", "center"]}
        >
          <Avatar
            size={["xs", "m"]}
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
              bg={bgLink}
              h="1.75em"
              my=".5em"
              rounded="full"
              rightIcon={<RxExternalLink />}
            >
              <Text fontSize="x-small">View Credential</Text>
            </Link>
          </Box>
        </Flex>
      );
    });

  return (
    <Flex my="2.5em" flexDir="column" justify={["center", "start"]}>
      <TabTitle title="Irshadi Bagas - About Me" />
      <Heading w="100%" textAlign={["center", "start"]}>
        About Me
      </Heading>
      <Flex
        w="100%"
        py="2em"
        flexDir={["column", "row"]}
        justify={["center", "start"]}
      >
        <Image
          alignContent={["center", "end"]}
          w={["100%", "30%"]}
          h="100%"
          src="./images/avatar/irshadi.png"
          rounded="0.25em"
        />

        <Flex w={["100%", "70%"]} flexDir="column" px={[0, "2em"]} py={["2em"]}>
          <Heading textAlign={["center", "start"]}>Irshadi Bagasputro</Heading>
          <Text
            w={["100%"]}
            py={[".5em", 0]}
            textAlign={["center", "start"]}
            color={color}
            letterSpacing="wide"
            fontWeight="medium"
            textTransform="uppercase"
          >
            Software Engineer
          </Text>

          <Box pt="1.5em">
            <Text>
              Frontend Engineer with over 4 years of experience developing and
              maintaining user-centric web applications in a SaaS platform
              environment. I build responsive and scalable interfaces that
              optimize user experience. Experienced in working with
              cross-functional teams to understand user needs, identify
              requirements, and deliver solutions. Software engineer at
              <Link
                href="https://delman.io"
                color="blue.300"
                isExternal
                px="4px"
              >
                work <Icon as={RxExternalLink} />
              </Link>
              .
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex w={["100%"]} h="auto" flexDir={["column", "row"]}>
        <Box w={["100%", "60%"]} pr={[0, "2em"]}>
          Graduate from Universitas Padjajaran majoring Library and Information
          Science, I start my career as UI/UX designer at JULO; an Indonesian
          Fintech Company. Somewhere along the way, I feel like I have shift in
          my passion, I start to learn the basic stuff about engineering and
          tech world with my fellow coworkers, until one day I decided to quit
          my job and pursue career in Software Engineering (with the help of
          bootcamp of course).
          <br />
          <br />
          After I finished my Bootcamp at Hacktiv8, I joined delman.io. At my
          early years, I developed their core product focused on data cleaning
          and visualization, using react with next.js. I successfully
          transformed revamped designs into actual products, while optimizing
          code for client-side performance, resulting in an improved user
          experience. I also demonstrated my skills in testing the front-end
          code, using react-testing-libraries and cypress, to ensure the
          product's functionality and usability. Furthermore, I conducted
          research and implemented the latest technologies on the front-end
          codebase, which kept the product up-to-date and competitive in the
          market, for example; I dealt with web virtualized lists to create data
          tables.
          <br />
          <br />
          Later down the line, I played a key role in leading the development of
          Delman's product by working closely with the product manager and
          stakeholders to develop new features and improvements. I help the
          company by made effective hiring decisions while lead a team of 5
          engineers and mentored them. Additionally, I created a systematic
          workflow to enhance productivity across divisions and ensured
          efficient ticket distribution for feature development. I provided a
          well-defined abstraction and code modularity for the UI components and
          defined and improved our internal standards for maintainable,
          scalable, reusable, and testable code, maintaining and advocating for
          these standards through code review. I conducted extensive research on
          new technologies that could provide a competitive advantage and
          effectively leveraged those gained advantages into the product.
          Furthermore, I identified areas of improvement in the code base and
          developed appropriate solutions to address them, contributing to the
          overall success of the project.
        </Box>

        <Flex
          mt={["2em", 0]}
          w={["100%", "40%"]}
          h="fit-content"
          justify="center"
          bg={bg}
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
