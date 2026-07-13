import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Image,
  Paper,
  Title,
  Text,
  Badge,
  Button,
  Stack,
  Center,
  Loader,
} from "@mantine/core";

import Navbar from "../components/Navbar";
import { getProduct } from "../api/product";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  async function loadProduct() {
    try {
      const data = await getProduct(id);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!product) {
    return (
      <>
        <Navbar />

        <Center mt="xl">
          <Loader size="lg" />
        </Center>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Container size="lg" mt="xl">
        <Paper
          shadow="md"
          radius="md"
          p="xl"
          withBorder
        >
          <Grid>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <Image
                src={product.image}
                alt={product.title}
                fit="contain"
                h={350}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack>

                <Badge
                  color="green"
                  variant="light"
                >
                  In Stock
                </Badge>

                <Text c="dimmed">
                  Product #{product.id}
                </Text>

                <Title order={2}>
                  {product.title}
                </Title>

                <Text fw={500}>
                  {product.category}
                </Text>

                <Title
                  order={3}
                  c="green"
                >
                  ₹ {product.price}
                </Title>

                <Text>
                  {product.description}
                </Text>

                <Button
                  color="green"
                  w={200}
                >
                  Add To Cart
                </Button>

              </Stack>
            </Grid.Col>

          </Grid>
        </Paper>
      </Container>
    </>
  );
}