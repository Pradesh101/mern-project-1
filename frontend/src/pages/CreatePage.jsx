import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useColorModeValue } from "../components/ui/color-mode";
import { useProductStore } from "../store/product.js";
import { toaster } from "../components/ui/toaster";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    // Add new product to the database
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
      });
    }
    setNewProduct({ name: "", price: "", image: "" }); // Clear form after successful creation
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder={"Product Name"}
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              type={"number"}
              placeholder={"Price"}
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder={"Image URL"}
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button onClick={handleAddProduct} w="full" colorPalette={"blue"}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
