import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Grid,
  Image,
  Paper,
  Badge,
  Title,
  Text,
  Button,
  Stack,
  Group,
  Loader,
  Center,
  Breadcrumbs,
  Anchor,
} from "@mantine/core";

import Layout from "../components/Layout";
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
      <Layout>
        <Center h="70vh">
          <Loader color="green" size="lg" />
        </Center>
      </Layout>
    );
  }

  const items = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/" },
    { title: product.title, href: "#" },
  ].map((item, index) => (
    <Anchor
      key={index}
      component={Link}
      to={item.href}
      underline="never"
      c={index === 2 ? "green" : "dimmed"}
    >
      {item.title}
    </Anchor>
  ));

  return (
    <Layout>
      <Container size="lg">

        <Breadcrumbs mb="lg">
          {items}
        </Breadcrumbs>

        <Paper
          p="xl"
          radius="lg"
          shadow="xs"
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
                  w="fit-content"
                >
                  In Stock
                </Badge>

                <Title order={2}>
                  {product.title}
                </Title>

                <Text c="dimmed">
                  Category: {product.category}
                </Text>

                <Group>
                  <Text
                    size="xl"
                    fw={700}
                    c="green"
                  >
                    ₹ {product.price}
                  </Text>
                </Group>

                <Text>
                  {product.description}
                </Text>

                <Group mt="md">

                  <Button color="green">
                    Add to Cart
                  </Button>

                  <Button
                    variant="outline"
                    color="green"
                    component={Link}
                    to="/"
                  >
                    Back to Products
                  </Button>

                </Group>

              </Stack>

            </Grid.Col>

          </Grid>
        </Paper>

      </Container>
    </Layout>
  );
}