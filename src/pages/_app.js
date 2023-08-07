import { ChakraProvider } from "@chakra-ui/react";
import theme from "src/themes";
import "src/styles/main.css";
import "src/styles/theme-button.css";

import "@fontsource-variable/cabin/wdth-italic.css";

const _App = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default _App;
