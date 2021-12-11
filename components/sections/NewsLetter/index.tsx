import Image from "next/image";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Icon,
  Button,
  Box,
} from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";

export default function CardWithIllustration() {
  return (
    <Flex minH={"50vh"} align={"center"} justify={"center"} py={12}>
      <Stack
        boxShadow={"2xl"}
        bg={"darkBlue"}
        rounded={"xl"}
        py={{ base: 4, md: 12, lg: 16 }}
        px={{ base: 4, md: 16, lg: 20 }}
        width={"100%"}
        direction={"row"}
        spacing={8}
        alignItems={"space-evenly"}
      >
        <Flex justify={"center"} direction={"column"}>
          <Stack align={"left"} mb={12}>
            <Heading fontSize={"3xl"} color={"white"} pb={4}>
              Subscribe our newsletter
            </Heading>
            <Text fontSize={"lg"} color={"white"} marginTop={0}>
              Reciev latest news, update, and many other things every week.
            </Text>
          </Stack>
          <Stack
            bg={"gray.100"}
            rounded={"lg"}
            direction={"row"}
            justify={"center"}
            align={"center"}
            w={"full"}
            px={2}
            height={"60px"}
          >
            <Input
              type={"text"}
              placeholder={"Enter Your email address"}
              color={"gray.800"}
              rounded={"full"}
              border={0}
              height={"100%"}
              _focus={{
                outline: "none",
              }}
            />
            <Button
              bg={"brand"}
              rounded={"lg"}
              color={"white"}
              _hover={{
                bg: "brand",
              }}
              _focus={{
                outline: "none",
              }}
            >
              <Icon as={FiSend} />
            </Button>
          </Stack>
        </Flex>
        <Box display={{ base: "none", md: "block" }}>
          <Image alt="pot" src="/images/pot.png" width={350} height={350} />
        </Box>
      </Stack>
    </Flex>
  );
}
