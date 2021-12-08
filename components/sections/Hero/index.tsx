import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

export default function SplitScreen() {
  return (
    <Stack pt={32} direction={{ base: "column", md: "row" }} mb={32}>
      <Flex py={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"}>
              World’s Biggest
            </Text>
            <br />
            <Text color={"blueText"} as={"span"}>
              Anitque Collection
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded
            incommode.
          </Text>
          <Stack direction={"row"} spacing={4}>
            <Button
              rounded={"md"}
              bg={"brand"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Discover Now
            </Button>
            <Button rounded={"md"}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          height={503}
          width={424}
          src={"/images/hero_desktop.png"}
        />
      </Flex>
    </Stack>
  );
}
