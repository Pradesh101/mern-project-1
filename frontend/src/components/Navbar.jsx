import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  //useColorMode,
} from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import React from "react";
import { Link } from "react-router-dom";
import { VscDiffAdded } from "react-icons/vsc";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "3xl", sm: "lg" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <VscDiffAdded fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
