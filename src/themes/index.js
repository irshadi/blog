import { theme } from "@chakra-ui/react";
import customIcons from "./icons";

const customTheme = {
  ...theme,

  colors: {
    ...theme.colors
  },
  breakpoints: {
    sm: "30em", // 480px
    md: "45em", // 720px
    lg: "48em", // 768px
    xl: "80em", // 1280px
    "2xl": "96em" // 1536px
  },
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "Avenir Next, sans-serif",
    mono: "Menlo, monospace"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem"
  },
  icons: {
    ...theme.icons,
    ...customIcons
  },
  styles: {
    ...theme.styles,
    global: props => {
      return {
        ...theme.styles.global,
        // Light mode styles
        "#mdx-table": {
          borderCollapse: "collapse",
          width: "100%",
          backgroundColor: props.colorMode === "light" ? "#ffffff" : "#1a202c",
          border:
            props.colorMode === "light" ? "1px solid #ccc" : "1px solid #444"
        },
        "#mdx-table th, #mdx-table td": {
          border:
            props.colorMode === "light" ? "1px solid #ccc" : "1px solid #444",
          padding: "8px"
        },

        "#mdx-table th": {
          backgroundColor: props.colorMode === "light" ? "#f6f8fb" : "#2d3748",
          padding: "8px"
        }
      };
    }
  }
};

export default customTheme;
