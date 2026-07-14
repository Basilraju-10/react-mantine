import { Link } from "react-router-dom";
import {
  Card,
  Image,
  Badge,
  Text,
  Title,
  Button,
  Stack,
  Group,
  Divider,
} from "@mantine/core";

export default function ProductCard({ product }) {
  return (
    <Card
  className="product-card"
  shadow="xs"
  radius="lg"
  withBorder
  p="lg"
>
      {/* Stock Badge */}
      <Group justify="space-between" mb="sm">
        <Badge
          color="green"
          variant="light"
          radius="sm"
        >
          In Stock
        </Badge>

        <Text size="xs" c="dimmed">
          #{product.id}
        </Text>
      </Group>

      {/* Product Image */}
      <Card.Section p="md">
        <Image
          src={product.image}
          alt={product.title}
          h={220}
          fit="contain"
        />
      </Card.Section>

      <Stack gap={8} mt="md">

        <Text
          size="xs"
          c="dimmed"
          tt="uppercase"
        >
          {product.category}
        </Text>

        <Title
          order={5}
          lineClamp={2}
        >
          {product.title}
        </Title>

        <Divider />

        <Group justify="space-between">

          <Text
            size="xl"
            fw={700}
            c="green"
          >
            ₹ {product.price}
          </Text>

          <Link
            to={`/product/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              color="green"
              radius="md"
            >
              View
            </Button>
          </Link>

        </Group>

      </Stack>
    </Card>
  );
}