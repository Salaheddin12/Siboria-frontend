// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

const colors = {
  darkText: "#132742",
  darkBlue: "#132742",
  blueText: "#263FA4",
  brand: "#FF7B29",
};

const theme = extendTheme({ colors });
export default theme;
