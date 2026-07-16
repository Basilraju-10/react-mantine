import { useEffect, useState } from "react";
import {
  Container,
  Breadcrumbs,
  Anchor,
  Title,
  Text,
  Grid,
  Stack,
  Box,
} from "@mantine/core";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import ProductListCard from "../components/ProductListCard";
import { getProducts } from "../api/product";

export default function Display() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("grid");

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
      <Container size="xl" py="lg">

        <Breadcrumbs mb="sm">
          {items}
        </Breadcrumbs>

        <Stack gap={3} mb="xl">
          <Title order={1} size="42px">
            Parts Catalog
          </Title>

          <Text c="dimmed">
            Search thousands of available aircraft parts from our inventory.
          </Text>
        </Stack>

        <Grid gutter="xl">

          {/* Sidebar */}
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Box
              pos="sticky"
              top={90}
            >
              <Sidebar />
            </Box>
          </Grid.Col>

          {/* Content */}
          <Grid.Col span={{ base: 12, md: 9 }}>

            <SearchBar
              totalProducts={products.length}
              view={view}
              setView={setView}
            />

            {view === "grid" ? (

              <Grid mt="xl">
                {products.map((product) => (
                  <Grid.Col
                    key={product.id}
                    span={{
                      base: 12,
                      sm: 4,
                      xl: 4,
                    }}
                  >
                    <ProductCard product={product} />
                  </Grid.Col>
                ))}
              </Grid>

            ) : (

              <Stack mt="xl" gap="md">
                {products.map((product) => (
                  <ProductListCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </Stack>

            )}

          </Grid.Col>

        </Grid>

      </Container>
    </Layout>
  );
}