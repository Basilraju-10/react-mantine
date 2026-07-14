import { Link } from "react-router-dom";
import "./ProductCard.css";

import {
  Card,
  Image,
  Badge,
  Text,
  Title,
  Button,
  Group,
  Stack,
  Divider,
} from "@mantine/core";

import {
  IconMapPin,
  IconEye,
} from "@tabler/icons-react";

export default function ProductCard({ product }) {
  return (
    <Card
      shadow="xs"
      radius="md"
      withBorder
      p="lg"
      h="100%"
      style={{
        cursor: "pointer",
        transition: "all .2s ease",
      }}
    >
      <Stack justify="space-between" h="100%">

        {/* Top */}
        <div>

          <Group justify="space-between">
            <Badge
              color="green"
              variant="light"
            >
              In Stock
            </Badge>

            <Badge
              color="blue"
              variant="outline"
            >
              AR
            </Badge>
          </Group>

          <Image
            src={product.image}
            alt={product.title}
            h={180}
            fit="contain"
            mt="md"
            mb="md"
          />

          <Text
            size="xs"
            c="dimmed"
          >
            PART #{product.id}
          </Text>

          <Title
            order={5}
            mt={6}
            lineClamp={2}
          >
            {product.title}
          </Title>

          <Text
            size="sm"
            c="dimmed"
            mt={6}
            lineClamp={1}
          >
            {product.category}
          </Text>

          <Group gap={5} mt="sm">
            <IconMapPin size={15} />

            <Text
              size="sm"
              c="dimmed"
            >
              USA
            </Text>
          </Group>

        </div>

        {/* Bottom */}

        <div>

          <Divider my="md" />

          <Group justify="space-between" align="flex-end">

            <div>

              <Text
                size="xs"
                c="dimmed"
              >
                Price
              </Text>

              <Title
                order={3}
                c="green"
              >
                ${product.price}
              </Title>

            </div>

            <Button
              component={Link}
              to={`/product/${product.id}`}
              leftSection={<IconEye size={18} />}
              color="green"
              radius="md"
            >
              View
            </Button>

          </Group>

        </div>

      </Stack>
    </Card>
  );
}