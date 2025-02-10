import {
  Box,
  Heading,
  HStack,
  Button,
  Image,
  Text,
  VStack,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useColorModeValue } from "./ui/color-mode";
import { useProductStore } from "../store/product";
import { toaster } from "../components/ui/toaster";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { useState } from "react";

const ProductCard = ({ _id, name, price, image }) => {
  const [updatedProduct, setUpdateProduct] = useState({
    name: name,
    price: price,
    image: image,
  });
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
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
  };

  const { updateProduct } = useProductStore();

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    if (!success) {
      toaster.create({
        title: "Error",
        description: "Error updating product",
        type: "error",
      });
    } else {
      toaster.create({
        title: "Success",
        description: "Product updated successfully",
        type: "success",
      });
    }
  };

  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image src={image} alt={name} width="full" height="48px" fit="contain" />
      <Box>
        <Heading as="h3" size="md" m={2}>
          {name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color={textColor} m={2}>
          ${price}
        </Text>
        <HStack margin={2}>
          {/* <Button colorPalette="blue">
            <MdEdit />
          </Button> */}
          <DialogRoot>
            <DialogTrigger asChild>
              <Button colorPalette="blue">
                <MdEdit />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Product</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <VStack spacing={4}>
                  <Input
                    placeholder="Product Name"
                    name="name"
                    value={updatedProduct.name}
                    onChange={(e) =>
                      setUpdateProduct({
                        ...updatedProduct,
                        name: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Price"
                    name="price"
                    value={updatedProduct.price}
                    onChange={(e) =>
                      setUpdateProduct({
                        ...updatedProduct,
                        price: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Image URL"
                    name="image"
                    value={updatedProduct.image}
                    onChange={(e) =>
                      setUpdateProduct({
                        ...updatedProduct,
                        image: e.target.value,
                      })
                    }
                  />
                </VStack>
              </DialogBody>
              <DialogFooter>
                <DialogActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <DialogActionTrigger asChild>
                  <Button
                    onClick={() => {
                      handleUpdateProduct(_id, updatedProduct);
                    }}
                  >
                    Update
                  </Button>
                </DialogActionTrigger>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
          <Button colorPalette="red" onClick={() => handleDeleteProduct(_id)}>
            <MdDelete />
          </Button>
        </HStack>
      </Box>
      <Box m={2}></Box>
    </Box>
  );
};

export default ProductCard;
