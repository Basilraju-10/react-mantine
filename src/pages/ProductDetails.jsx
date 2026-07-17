import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Grid,
  Paper,
  Image,
  Badge,
  Title,
  Text,
  Button,
  Stack,
  Group,
  Divider,
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
    loadProduct();1
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
    { title: "Catalog", href: "/" },
    { title: "Product", href: "#" },
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
      <Container fluid px="xl">

        <Breadcrumbs mb="lg">
          {items}
        </Breadcrumbs>

        <Paper
          radius="lg"
          shadow="xs"
          withBorder
          p="xl"
        >
          <Grid>

            {/* Left Side */}
            <Grid.Col span={{ base: 12, md: 5 }}>

              <Image
                src={product.image}
                h={400}
                fit="contain"
              />

            </Grid.Col>

            {/* Right Side */}
            <Grid.Col span={{ base: 12, md: 7 }}>

              <Stack>

                <Group>

                  <Badge color="green">
                    In Stock
                  </Badge>

                  <Badge
                    variant="outline"
                    color="blue"
                  >
                    AR
                  </Badge>

                </Group>

                <Title order={2}>
                  {product.title}
                </Title>

                <Text c="dimmed">
                  Category : {product.category}
                </Text>

                <Divider />

                <Text
                  size="32px"
                  fw={700}
                  c="green"
                >
                  ${product.price}
                </Text>

                <Text>
                  {product.description}
                </Text>

                <Divider />

                <Group>

                  <Button
                    color="green"
                    size="md"
                  >
                    Add To Cart
                  </Button>

                  <Button
                    component={Link}
                    to="/"
                    variant="outline"
                    color="green"
                  >
                    Back
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