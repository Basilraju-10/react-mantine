import { Link } from "react-router-dom";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Stack,
} from "@mantine/core";

export default function ProductCard({ product }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <Image
          src={product.image}
          alt={product.title}
          h={220}
          fit="contain"
        />
      </Card.Section>

      <Stack mt="md" gap="xs">

        <Badge
          color="green"
          variant="light"
        >
          In Stock
        </Badge>

        <Text
          size="sm"
          c="dimmed"
        >
          Product #{product.id}
        </Text>

        <Text
          fw={600}
          lineClamp={2}
        >
          {product.title}
        </Text>

        <Text
          size="sm"
          c="dimmed"
        >
          {product.category}
        </Text>

        <Text
          fw={700}
          size="xl"
          c="green"
        >
          ₹ {product.price}
        </Text>

        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            fullWidth
            color="green"
            mt="sm"
          >
            View Product
          </Button>
        </Link>

      </Stack>
    </Card>
  );
}