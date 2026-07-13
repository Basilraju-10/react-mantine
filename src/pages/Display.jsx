import { useEffect, useState } from "react";
import { Container, Grid, SimpleGrid } from "@mantine/core";

import { getProducts } from "../api/product";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
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

  return (
    <>
      <Navbar />

      <Container fluid mt="md">

        <Grid>

          {/* Sidebar */}
          <Grid.Col span={3}>
            <Sidebar />
          </Grid.Col>

          {/* Right Content */}
          <Grid.Col span={9}>

            <SearchBar
              totalProducts={products.length}
            />

            <SimpleGrid
              cols={{ base: 1, sm: 2, lg: 3 }}
              spacing="lg"
              mt="lg"
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </SimpleGrid>

          </Grid.Col>

        </Grid>

      </Container>
    </>
  );
}