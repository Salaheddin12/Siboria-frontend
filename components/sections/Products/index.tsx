import { Box, Heading, Text } from "@chakra-ui/react";
import ProductsSwiper from "../../ProductsSwiper";

export default function Products() {
  return (
    <Box>
      <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
        Recently Added
      </Heading>
      <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
        Not thoughts all exercise blessing. Indulgence way everything joy
        alteration boisterous the attachment.
      </Text>
      <ProductsSwiper />
    </Box>
  );
}
