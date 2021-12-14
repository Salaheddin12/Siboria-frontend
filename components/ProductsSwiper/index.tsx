import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Flex, Icon, Box, chakra } from "@chakra-ui/react";
import ProductCard from "../commun/productCard";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import products from "../../products.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation]);

interface Product {
  imageURL?: string;
  title: string;
  price: number;
}

interface CustomSliderProps {
  numberOfSlides: number;
}

export default function SplitScreen() {
  return (
    <Box mb={32}>
      <Flex justifyContent={"flex-end"}>
        <chakra.div
          className="navigationPrevRef"
          bg="gray.100"
          rounded={"full"}
          display={"flex"}
          p={1}
          mx={1}
        >
          <Icon as={BsArrowLeft} h={5} w={5} alignSelf={"center"} />
        </chakra.div>

        <chakra.div
          className="navigationNextRef"
          bg="brand"
          rounded={"full"}
          display={"flex"}
          p={1}
          mx={1}
        >
          <Icon
            as={BsArrowRight}
            h={5}
            w={5}
            alignSelf={"center"}
            color={"white"}
          />
        </chakra.div>
      </Flex>
      <chakra.div display={{ base: "block", md: "none", lg: "none" }}>
        <CustomSwiper numberOfSlides={1} />
      </chakra.div>
      <chakra.div display={{ base: "none", md: "block", lg: "none" }}>
        <CustomSwiper numberOfSlides={2} />
      </chakra.div>
      <chakra.div display={{ base: "none", lg: "block" }}>
        <CustomSwiper numberOfSlides={3} />
      </chakra.div>
    </Box>
  );
}

const CustomSwiper = (props: CustomSliderProps) => {
  return (
    <Swiper
      slidesPerView={props.numberOfSlides}
      spaceBetween={30}
      slidesPerGroup={1}
      loop={true}
      pagination={false}
      navigation={{
        prevEl: ".navigationPrevRef",
        nextEl: ".navigationNextRef",
      }}
      className="mySwiper"
    >
      {products.data.map((Item, id) => {
        const { price, title } = Item.attributes;
        const product_data: Product = { price: parseInt(price), title };
        return (
          <SwiperSlide key={id}>
            <ProductCard product={product_data} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
