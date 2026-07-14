import { useEffect, useState } from "react";
import {
  Container,
  Breadcrumbs,
  Anchor,
  Title,
  Text,
  SimpleGrid,
  Stack,
} from "@mantine/core";

import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/product";

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
    { title: "Catalog", href: "#" },
  ].map((item, index) => (
    <Anchor
      key={index}
      href={item.href}
      underline="never"
      c={index === 1 ? "green" : "dimmed"}
      fw={500}
    >
      {item.title}
    </Anchor>
  ));

  return (
    <Layout>
      <Container
  size="xl"
  py="lg"
  pl="xl"
>
        {/* Breadcrumb */}
        <Breadcrumbs mb="sm">
          {items}
        </Breadcrumbs>

        {/* Heading */}
        <Stack gap={3} mb="xl">
          <Title
            order={1}
            fw={700}
            size="42px"
          >
            Parts Catalog
          </Title>

          <Text
            size="md"
            c="dimmed"
          >
            Search thousands of available aircraft parts from our inventory.
          </Text>
        </Stack>

        {/* Search */}
        <SearchBar totalProducts={products.length} />

        {/* Products */}
        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            lg: 3,
            xl: 4,
          }}
          spacing="xl"
          verticalSpacing="xl"
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