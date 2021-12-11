import { Flex, Box, Icon, chakra, Tooltip } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import styled from "@emotion/styled";
import Image from "next/image";

declare interface Product {
  imageURL?: string;
  title: string;
  price: number;
}
declare interface ProductProps {
  product: Product;
}

const ProductImage = styled(Image)`
  border-radius: 16px;
  object-fit: cover;
`;

function ProductAddToCart(productProps: ProductProps) {
  const defaultUrl =
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80";

  const { imageURL = defaultUrl, title, price } = productProps.product;

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={"white"}
        maxW="sm"
        minW={265}
        minH={274}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <ProductImage
          src={imageURL}
          width={356}
          height={192}
          alt={`Picture of ${title}`}
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {title}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={"gray.800"}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                $
              </Box>
              {price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;
