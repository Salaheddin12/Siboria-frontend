// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

const colors = {
  darkText: "#132742",
  darkBlue: "#132742",
  blueText: "#263FA4",
  brand: "#FF7B29",
};

const components = {
  Link: {
    baseStyle: {
      fontFamily: "Inter",
      _hover: {
        textDecoration: "none",
      },
    },
    variants: {
      brand: {
        fontWeight: "bold",
        fontSize: "24px",
      },
    },
  },
};

const fonts = {
  link: "Inter",
  heading: "Inter",
  body: "Inter",
};

const theme = extendTheme({ colors, components, fonts });
export default theme;
