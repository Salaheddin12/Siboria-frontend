import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";
import NewsLetter from "../components/sections/NewsLetter";

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Products />
      <NewsLetter />
    </Box>
  );
};

export default Home;
