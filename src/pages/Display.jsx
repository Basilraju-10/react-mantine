import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Breadcrumbs,
  Anchor,
  Stack,
} from "@mantine/core";

import { getProducts } from "../api/product";

import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

export default function Display() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  const items = [
    { title: "Home", href: "#" },
    { title: "Products", href: "#" },
  ].map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      c={index === 1 ? "green" : "dimmed"}
      underline="never"
    >
      {item.title}
    </Anchor>
  ));

  return (
    <Layout>
      <Container fluid>

        {/* Breadcrumb */}
        <Breadcrumbs mb="md">
          {items}
        </Breadcrumbs>

        {/* Heading */}
        <Stack gap={4} mb="xl">

          <Title order={2}>
            Fake Store Products
          </Title>

          <Text c="dimmed">
            Browse our collection of high-quality products.
          </Text>

        </Stack>

        {/* Search */}
        <SearchBar totalProducts={products.length} />

        {/* Products */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}
          spacing="lg"
          verticalSpacing="lg"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </SimpleGrid>

      </Container>
    </Layout>
  );
}