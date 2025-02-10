import React, { useEffect } from "react";
import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
const HomePage = () => {
  // Fetch products from your database and render them here
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  //console.log("Products fetched", products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          textStyle={"3xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          marginBottom={5}
        >
          Current Products 🚀
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={6}
          w="full"
          gap={4}
        >
          {/* Add product cards here */}
          {products.map((product) => (
            // <ProductCard product={product} key={product._id} />
            <ProductCard
              key={product._id}
              _id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            No products found 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
