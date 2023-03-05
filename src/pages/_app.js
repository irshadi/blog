import { ChakraProvider } from "@chakra-ui/react";

import "src/styles/main.css";
import "src/styles/theme-button.css";

const _App = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default _App;
