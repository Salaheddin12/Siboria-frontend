import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Products />
    </Box>
  );
};

export default Home;
