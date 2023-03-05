import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";

const _App = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default _App;
